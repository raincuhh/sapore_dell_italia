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

if (!isset($input["order_id"])) {
  http_response_code(400);
  echo json_encode(["message" => "Missing required parameters"]);
  exit();
}

$response = delete_order($input["order_id"]);

http_response_code($response["status"]);
echo json_encode($response["data"]);

function delete_order(int $order_id): array
{
  global $conn;

  try {
    $stmt = $conn->prepare("DELETE FROM orders WHERE order_id = :order_id");

    $stmt->bindParam(":order_id", $order_id, PDO::PARAM_INT);

    if (!$stmt->execute()) {
      return [
        "status" => 400,
        "data" => ["message" => "Delete failed"]
      ];
    }

    return ["status" => 200, "data" => ["message" => "Order deleted successfully"]];
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
