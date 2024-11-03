<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

require_once "../../../shared/lib/utils.php";
require "jwt_utils.php";

use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$conn = get_db_connection();

$jwt_token = $_GET['jwt_token'] ?? null;

if (!$jwt_token) {
  http_response_code(400);
  echo json_encode(["message" => "Token is required"]);
  exit;
}

$response = validate_token($jwt_token);
http_response_code($response["status"]);
echo json_encode($response["data"]);

function validate_token($jwt_token): array
{
  global $conn;
  $secret_key = getenv("DB_JWT_SUPER_SECRET_KEY");

  try {
    $decoded_jwt_token = JWT::decode($jwt_token, new Key($secret_key, "HS256"));

    // to check if the token is expired
    if (is_token_expired($decoded_jwt_token)) {
      return [
        "status" => 401,
        "data" => ["message" => "Token expired"]
      ];
    }

    // fetching user based on decoded jwt token user id
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_id = :id");
    $stmt->bindParam(":id", $decoded_jwt_token->id, PDO::PARAM_INT);

    if (!$stmt->execute()) {
      return ["status" => 400, "message" => "Query failed"];
    }

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // checking if user exists
    if (!$user) {
      return [
        "status" => 400,
        "data" => ["message" => "Fetching user failed"]
      ];
    }

    // checking if the decoded jwt version has the same version as the user jwt version
    if (!$user["jwt_version"] == $decoded_jwt_token->jwt_version) {
      return [
        "status" => 401,
        "data" => ["message" => "Token version is outdated or invalid"]
      ];
    } else {
      return [
        "status" => 200,
        "data" => ["message" => "Token valid", "decoded_token" => $decoded_jwt_token]
      ];
    }

  } catch (ExpiredException $err) {
    return [
      "status" => 401,
      "data" => [
        "message" => "Token has expired",
        "error" => $err->getMessage()
      ]
    ];
  } catch (Exception $err) {
    return [
      "status" => 401,
      "data" => ["message" => "Invalid token"]
    ];
  }
}
