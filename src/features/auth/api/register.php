<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require "../../../shared/lib/utils.php";
$conn = get_db_connection();

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = password_hash($data->password, PASSWORD_BCRYPT);
$email = $data->email;

try {
  $stmt = $conn->prepare("INSERT INTO users (name, password, email) VALUES (:username, :password, :email)");
  $stmt->bindParam(":username", $username, PDO::PARAM_STR);
  $stmt->bindParam(":email", $email, PDO::PARAM_STR);
  $stmt->bindParam(":password", $password, PDO::PARAM_STR);

  if ($stmt->execute()) {
    http_response_code(200);
    echo json_encode(["message" => "registration successful", "user" => $username]);
  } else {
    http_response_code(400);
    echo json_encode(["message" => "registration failed"]);
  }
} catch (mysqli_sql_exception $err) {
  http_response_code(500);
  echo json_encode(["message" => "registration failed", "error" => $err->getMessage()]);
} finally {
  $stmt = null;
  $conn = null;
}
