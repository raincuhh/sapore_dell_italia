<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
header('Access-Control-Allow-Origin');

require "../../../shared/lib/utils.php";
$conn = get_sql_connection();

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;
$email = $data->email;
$password_hashed = password_hash($password, PASSWORD_BCRYPT);

$stmt = $conn->prepare("INSERT INTO users (name, password, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password_hashed, $email);

if ($stmt->execute()) {
  echo json_encode(["message" => "Login successful", "user" => $user]);
} else {
  //replace error
  echo json_encode(["message" => "Login failed", "error" => "failed"]);
}

$stmt->close();
$conn->close();
