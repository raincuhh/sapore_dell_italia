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

$conn = get_db_connection();

$input = json_decode(file_get_contents("php://input"), true);

if (!isset($input["user_id"], $input["field"], $input["value"])) {
  http_response_code(400);
  echo json_encode(["message" => "Missing required parameters"]);
  exit();
}

$response = update_user($input["user_id"], $input["field"], $input["value"]);

http_response_code($response["status"]);
echo json_encode($response["data"]);

function update_user(int $user_id, string $field, $value): array
{
  global $conn;

  // for stoppe sql injection
  $allowed_fields = ["name", "email", "password", "role"];

  if (!in_array($field, $allowed_fields)) {
    return [
      "status" => 400,
      "data" => ["message" => "Invalid field specified"]
    ];
  }

  try {
    $sql = "UPDATE users SET \"$field\" = :value WHERE user_id = :user_id";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(":value", $value, PDO::PARAM_STR); // Assuming all fields are strings
    $stmt->bindParam(":user_id", $user_id, PDO::PARAM_INT);

    if (!$stmt->execute()) {
      return [
        "status" => 400,
        "data" => ["message" => "Update failed"]
      ];
    }

    return ["status" => 200, "data" => ["message" => "User updated successfully"]];
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
