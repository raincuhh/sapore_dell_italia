<?php
require_once "../../../shared/lib/utils.php";
require_once "../../../../vendor/autoload.php";

use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$conn = get_db_connection();

function gen_jwt_token($user): string
{
  $secret_key = getenv("DB_JWT_SUPER_SECRET_KEY");
  $payload = [
    "id" => $user["user_id"],
    "role" => $user["role"],
    "jwt_version" => $user["jwt_version"],
    "exp" => time() + 7200, // 2 hours btw
  ];

  $jwt_token = JWT::encode($payload, $secret_key, "HS256");
  return $jwt_token;
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

function decode_and_validate_token($jwt_token)
{
  global $conn;
  $secret_key = getenv("DB_JWT_SUPER_SECRET_KEY");

  try {
    $decoded_jwt_token = JWT::decode($jwt_token, new Key($secret_key, "HS256"));

    // checking the payload to see if its expired (jwt->exp < time())
    if (is_token_expired($decoded_jwt_token)) {
      http_response_code(401);
      echo json_encode(["message" => "token has expired"]);
      return null;
    }

    // preparing to execute the query to get user
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_id = ?");
    $stmt->execute([$decoded_jwt_token->id]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // checking if user exists
    if (!$user) {
      http_response_code(400);
      echo json_encode(["message" => "fetching user failed"]);
    }

    // checking if usr exists and jwt versions match
    if ($user && $user["jwt_version"] == $jwt_token) {
      return $decoded_jwt_token; // valid
    } else {
      http_response_code(401);
      echo json_encode(["message" => "token version is outdated or invalid"]);
      return null;
    }

  } catch (ExpiredException $err) {
    http_response_code(401);
    echo json_encode(["message" => "token has expired", "error" => $err->getMessage()]);
  } catch (Exception $err) {
    http_response_code(401);
    echo json_encode(["message" => "invalid token"]);
  }
}

function is_token_expired($decoded_jwt_token): bool
{
  global $conn;
  $jwt_exp = $decoded_jwt_token->exp;

  if ($jwt_exp === null || $jwt_exp < time()) {
    return false;
  } else {
    return true;
  }
}
