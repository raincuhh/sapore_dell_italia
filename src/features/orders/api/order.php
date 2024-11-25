<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header('Content-Type: application/json');

require "../../../shared/lib/utils.php";

$conn = get_db_connection();
$data = json_decode(file_get_contents("php://input"));

$main_food_id = $data->main_food_id;
$side_food_id = $data->side_food_id;
$user_id = $data->user_id ?? null;
$year = $data->year;
$day = $data->day;
$first_name = $data->first_name;
$last_name = $data->last_name;

$response = place_order($main_food_id, $side_food_id, $user_id, $year, $day, $first_name, $last_name);

http_response_code($response["status"]);
echo json_encode($response["data"]);

function place_order($main_food_id, $side_food_id, $user_id, $year, $day, $first_name, $last_name): array
{
  global $conn;

  try {
    $stmt = $conn->prepare(
      "INSERT INTO orders
        (main_food_id, side_food_id, user_id, year, day, first_name, last_name)
        VALUES
        (:main_food_id, :side_food_id, :user_id, :year, :day, :first_name, :last_name)"
    );

    $stmt->bindParam(":main_food_id", $main_food_id, PDO::PARAM_INT);
    $stmt->bindParam(":side_food_id", $side_food_id, PDO::PARAM_INT);
    $stmt->bindParam(":user_id", $user_id, PDO::PARAM_INT);
    $stmt->bindParam(":year", $year, PDO::PARAM_STR);
    $stmt->bindParam(":day", $day, PDO::PARAM_STR);
    $stmt->bindParam(":first_name", $first_name, PDO::PARAM_STR);
    $stmt->bindParam(":last_name", $last_name, PDO::PARAM_STR);

    if ($stmt->execute()) {
      return [
        "status" => 200,
        "data" => [
          "message" => "Order placed successfully",
        ]
      ];
    } else {
      return [
        "status" => 400,
        "data" => [
          "message" => "Failed to place order"
        ]
      ];
    }
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
