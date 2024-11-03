<?php
require_once "../../../shared/lib/utils.php";
require_once "../../../../vendor/autoload.php";

use Firebase\JWT\JWT;

$conn = get_db_connection();

function gen_jwt_token($user): string
{
  $secret_key = getenv("DB_JWT_SUPER_SECRET_KEY");
  $issued_at = time();
  $expiration_date = $issued_at + 3600;

  $payload = [
    "id" => $user["user_id"],
    "role" => $user["role"],
    "jwt_version" => $user["jwt_version"],
    "iat" => $issued_at,
    "exp" => $expiration_date,
  ];

  $jwt_token = JWT::encode($payload, $secret_key, "HS256");
  return $jwt_token;
}

function is_token_expired($decoded_jwt_token): bool
{
  return isset($decoded_jwt_token->exp) && $decoded_jwt_token->exp < time();
}

function increment_jwt_version($user_id): array
{
  global $conn;
  try {
    $stmt = $conn->prepare("UPDATE users SET jwt_version = jwt_version + 1 WHERE user_id = :id");
    $stmt->bindParam(":id", $user_id, PDO::PARAM_INT);

    if (!$stmt->execute()) {
      return ["status" => 400, "message" => "Query failed"];
    }

    return [
      "status" => 200,
      "data" => ["message" => sprintf("Updated jwt_version for %s", $user_id)]
    ];
  } catch (mysqli_sql_exception $err) {
    return [
      "status" => 400,
      "data" => ["message" => "Internal server error", "error" => $err->getMessage()]
    ];
  }
}
