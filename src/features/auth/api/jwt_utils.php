<?php
require "../../../shared/lib/utils.php";
require_once "../../../../vendor/autoload.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$conn = get_sql_connection();

function gen_jwt_token($user): string
{
  $secret_key = getenv("DB_JWT_SUPER_SECRET_KEY");
  $payload = [
    "id" => $user["id"],
    "role" => $user["role"],
    "jwt_version" => $user["jwt_version"],
    "exp" => time() + 1800, // 30 min btw
  ];

  $jwt = JWT::encode($payload, $secret_key, "HS256");
  return $jwt;
}

function increment_jwt_version($user_id): void
{
  global $conn;
  try {
    $stmt = $conn->prepare("UPDATE users SET jwt_version = jwt_version + 1 WHERE id = ?");

    if ($stmt->execute([$user_id])) {
      echo json_encode(["message" => "increment success"]);
    } else {
      echo json_encode(["message" => "increment failed"]);
    }
  } catch (mysqli_sql_exception $err) {
    echo json_encode(["error" => $err->getMessage()]);
  }
}

function validate_jwt_token($jwt_token)
{
  global $conn;
  $secret_key = getenv("DB_JWT_SUPER_SECRET_KEY");
  try {
    $decoded = JWT::decode($jwt_token, new Key($secret_key, "HS256"));
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_id = ?");
    $stmt->execute([$decoded->id]);
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && $user["jwt_version"] == $jwt_token) {
      return $decoded;
    } else {
      http_response_code(401);
      echo json_encode(["error" => "token version is outdated or invalid"]);
    }

  } catch (mysqli_sql_exception $err) {
    echo json_encode(["error" => $err->getMessage()]);
  }
}
