<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(200);
  exit();
}

require "../../../shared/lib/utils.php";

$conn = get_db_connection();
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$price = $data->price;
$desc = $data->desc ?? "";
$type = $data->type;
$img_path_base = $data->img_path_base ?? "./static/assets/images/foods/placeholder_1.jpg";
$img_path_hover = $data->img_path_hover ?? "./static/assets/images/foods/placeholder_2.jpg";
$allergies = $data->allergies;

$response = add_food($name, $price, $desc, $type, $img_path_base, $img_path_hover, $allergies);
http_response_code($response["status"]);
echo json_encode($response["data"]);

function add_food($name, $price, $desc, $type, $img_path_base, $img_path_hover, $allergies): array
{
  global $conn;

  // validation
  if (empty($name) || empty($price) || empty($desc) || empty($type) || empty($img_path_base) || empty($img_path_hover) || empty($allergies)) {
    return [
      "status" => 400,
      "data" => ["error" => "Invalid input. Please provide all required fields."]
    ];
  }

  try {
    $stmt = $conn->prepare("INSERT INTO foods (name, price, \"desc\", type, img_path_base, img_path_hover, allergies) VALUES (:name, :price, :desc, :type, :img_path_base, :img_path_hover, :allergies)");
    $stmt->bindParam(":name", $name, PDO::PARAM_STR);
    $stmt->bindParam(":price", $price, PDO::PARAM_STR);
    $stmt->bindParam(":desc", $desc, PDO::PARAM_STR);
    $stmt->bindParam(":type", $type, PDO::PARAM_STR);
    $stmt->bindParam(":img_path_base", $img_path_base, PDO::PARAM_STR);
    $stmt->bindParam(":img_path_hover", $img_path_hover, PDO::PARAM_STR);
    $stmt->bindParam(":allergies", $allergies, PDO::PARAM_STR);

    if (!$stmt->execute()) {
      return [
        "status" => 400,
        "data" => ["message" => "Failed to add food."]
      ];
    }

    return [
      "status" => 200,
      "data" => ["message" => "Food added successfully."]
    ];
  } catch (mysqli_sql_exception $err) {
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
