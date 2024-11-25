<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(200);
  exit();
}

require "../../../shared/lib/utils.php";

$conn = get_db_connection();

$data = json_decode(file_get_contents("php://input"));
$user_id = $data->user_id;

$response = get_user_orders($user_id);
http_response_code($response["status"]);
echo json_encode($response["data"]);

function get_user_orders($user_id): array
{
  global $conn;

  try {
    $stmt = $conn->prepare("
            SELECT f.name AS main_food_name, s.name AS side_food_name, o.day
            FROM orders o
            LEFT JOIN foods f ON o.main_food_id = f.food_id
            LEFT JOIN foods s ON o.side_food_id = s.food_id
            WHERE o.user_id = :user_id
        ");

    $stmt->bindParam(":user_id", $user_id, PDO::PARAM_INT);

    if (!$stmt->execute()) {
      return [
        "status" => 400,
        "data" => ["message" => "Query failed"]
      ];
    }

    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (empty($orders)) {
      return ["status" => 400, "data" => ["message" => "No orders found for the specified user"]];
    }

    return ["status" => 200, "data" => ["orders" => $orders]];

  } catch (PDOException $err) {
    return [
      "status" => 500,
      "data" => [
        "message" => "Internal server error.",
        "error" => $err->getMessage()
      ]
    ];
  } finally {
    $stmt = null;
    $conn = null;
  }
}
