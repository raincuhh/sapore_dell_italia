<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit();
}

require_once "../../../shared/lib/utils.php";

try {
  $conn = get_db_connection();
  $response = get_full_food_list();
  http_response_code($response["status"]);
  echo json_encode($response["data"]);
} catch (Exception $e) {
  header("Access-Control-Allow-Origin: http://localhost:3000");
  echo json_encode([
    "message" => "An error occurred",
    "error" => $e->getMessage()
  ]);
}

function get_full_food_list(): array
{
  global $conn;

  try {
    $stmt = $conn->prepare("SELECT * FROM foods");

    if (!$stmt->execute()) {
      return [
        "status" => 400,
        "data" => ["message" => "Query failed"]
      ];
    }

    $foods = $stmt->fetchAll();

    if (empty($foods)) {
      return ["status" => 400, "data" => ["message" => "Failed to get foods"]];
    }

    return ["status" => 200, "data" => ["foods" => $foods]];

  } catch (mysqli_sql_exception $err) {
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
