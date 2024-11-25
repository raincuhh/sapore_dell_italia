<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

require_once "../../../shared/lib/utils.php";

$conn = get_db_connection();

$data = json_decode(file_get_contents("php://input"));
$user_id = $data->user_id ?? null;

if (!$user_id) {
  http_response_code(400);
  echo json_encode(["message" => "User ID is required"]);
  exit();
}

$response = get_user_profile($user_id);

http_response_code($response["status"]);
echo json_encode($response["data"]);

function get_user_profile(int $user_id): array
{
  global $conn;

  try {
    $sql = "SELECT user_id, name, email, created_at FROM users WHERE user_id = :user_id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":user_id", $user_id, PDO::PARAM_INT);

    if (!$stmt->execute()) {
      return [
        "status" => 400,
        "data" => ["message" => "Query failed"]
      ];
    }

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
      return [
        "status" => 404,
        "data" => ["message" => "User not found"]
      ];
    }

    return [
      "status" => 200,
      "data" => ["user" => $user]
    ];
  } catch (PDOException $err) {
    return [
      "status" => 500,
      "data" => [
        "message" => "Internal server error",
        "error" => $err->getMessage()
      ]
    ];
  } finally {
    $stmt = null;
    $conn = null;
  }
}
