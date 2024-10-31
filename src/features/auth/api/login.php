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

try {
  $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? ");
  $stmt->execute([$username]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($user && password_verify($password, $user["password"])) {
    echo json_encode(["message" => "login successful", "user" => $user]);
  } else {
    echo json_encode(["message" => "login failed"]);
  }
} catch (mysqli_sql_exception $err) {
  echo json_encode(["message" => "login failed", "error" => $err->getMessage()]);
}

$stmt->close();
$conn->close();
