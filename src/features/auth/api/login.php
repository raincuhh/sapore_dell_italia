<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

header("Access-Control-Allow-Origin: http://localhost:3000"); // Specify your frontend URL here
//header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit;
}

require "../../../shared/lib/utils.php";
require "jwt_utils.php";

$conn = get_sql_connection();
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

$stmt = $conn->prepare("SELECT * FROM users WHERE name = ?");

try {
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result();
  $user = $result->fetch_assoc();

  // checking if user exists
  if (!$user) {
    http_response_code(400);
    echo json_encode(["message" => "fetching user failed"]);
    return;
  }

  // verifying password
  if (!password_verify($password, $user["password"])) {
    http_response_code(400);
    echo json_encode(["message" => "login failed"]);
    return;
  }

  //increment_jwt_version($user["user_id"]);
  $jwt_token = gen_jwt_token($user);
  http_response_code(200);
  echo json_encode([
    "message" => "login successful",
    "jwt_token" => $jwt_token
  ]);
} catch (mysqli_sql_exception $err) {
  http_response_code(500);
  echo json_encode(["message" => "login failed", "error" => $err->getMessage()]);
}

$stmt->close();
$conn->close();
