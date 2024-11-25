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

// Validate input
if (!isset($input["order_id"], $input["field"], $input["value"])) {
  http_response_code(400);
  echo json_encode(["message" => "Missing required parameters"]);
  exit();
}

$response = update_order($input["order_id"], $input["field"], $input["value"]);

http_response_code($response["status"]);
echo json_encode($response["data"]);

function update_order(int $order_id, string $field, $value): array
{
  global $conn;

  // Allowed fields for updating orders
  $allowed_fields = [
    "main_food_id",
    "side_food_id",
    "user_id",
    "year",
    "day",
    "first_name",
    "last_name"
  ];

  if (!in_array($field, $allowed_fields)) {
    return [
      "status" => 400,
      "data" => ["message" => "Invalid field specified"]
    ];
  }

  try {
    $sql = "UPDATE orders SET \"$field\" = :value WHERE order_id = :order_id";
    $stmt = $conn->prepare($sql);

    $param_type = is_int($value) ? PDO::PARAM_INT : PDO::PARAM_STR;
    $stmt->bindParam(":value", $value, $param_type);
    $stmt->bindParam(":order_id", $order_id, PDO::PARAM_INT);

    if (!$stmt->execute()) {
      return [
        "status" => 400,
        "data" => ["message" => "Update failed"]
      ];
    }

    return ["status" => 200, "data" => ["message" => "Order updated successfully"]];
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
