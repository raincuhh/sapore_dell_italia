<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header('Content-Type: application/json');

require "../../../shared/lib/utils.php";

$conn = get_db_connection();
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = password_hash($data->password, PASSWORD_BCRYPT);
$email = $data->email;

$response = register($username, $password, $email);
http_response_code($response["status"]);
echo json_encode($response["data"]);

function register($username, $password, $email): array
{
  global $conn;

  try {
    $stmt = $conn->prepare("INSERT INTO users (name, password, email) VALUES (:username, :password, :email)");
    $stmt->bindParam(":username", $username, PDO::PARAM_STR);
    $stmt->bindParam(":email", $email, PDO::PARAM_STR);
    $stmt->bindParam(":password", $password, PDO::PARAM_STR);

    // checking if statement was executed
    if (!$stmt->execute()) {
      // failed
      return [
        "status" => 400,
        "data" => [
          "message" => "Registration failed"
        ]
      ];
    } else {
      // sucess
      return [
        "status" => 200,
        "data" => [
          "message" => "Registration successful",
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
