<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require "../../../shared/lib/utils.php";
$conn = get_sql_connection();

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = password_hash($data->password, PASSWORD_BCRYPT);
$email = $data->email;

$stmt = $conn->prepare("INSERT INTO users (name, password, email) VALUES (?, ?, ?)");

try {
  $stmt->bind_param("sss", $username, $password, $email);

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
}

$stmt->close();
$conn->close();
