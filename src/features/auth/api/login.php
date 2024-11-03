<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit;
}

require "../../../shared/lib/utils.php";
require "jwt_utils.php";

$conn = get_db_connection();
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

$response = login($username, $password);

http_response_code($response["status"]);
echo json_encode($response["data"]);

function login($username, $password): array
{
  global $conn;

  try {
    $stmt = $conn->prepare("SELECT * FROM users WHERE name = :username");
    $stmt->bindParam(":username", $username, PDO::PARAM_STR);

    if (!$stmt->execute()) {
      return ["status" => 400, "message" => "Query failed"];
    }

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // checking if user exists
    if (!$user) {
      return [
        "status" => 400,
        "data" => ["message" => "User not found"]
      ];
    }

    // verifying password
    if (!password_verify($password, $user["password"])) {
      return [
        "status" => 400,
        "data" => ["message" => "Password mismatch"]
      ];
    }

    $increment_response = increment_jwt_version($user["user_id"]);
    if ($increment_response["status"] === 400) {
      return [
        "status" => 400,
        "data" => [
          "message" => $increment_response["data"]["message"],
          "error" => $increment_response["data"]["error"]
        ]
      ];
    }

    // re fetching the jwt token cause it updates by the increment jwt version function
    $new_stmt = $conn->prepare("SELECT * FROM users WHERE user_id = :id");
    $new_stmt->bindParam(":id", $user["user_id"], PDO::PARAM_INT);

    if (!$new_stmt->execute()) {
      return ["status" => 400, "message" => "Query failed"];
    }
    $updated_user = $new_stmt->fetch(PDO::FETCH_ASSOC);

    if (!$updated_user) {
      return [
        "status" => 400,
        "data" => ["message" => "Failed to fetch updated user data", "userdataid" => $user["user_id"]]
      ];
    }

    $jwt_token = gen_jwt_token($updated_user);
    return [
      "status" => 200,
      "data" => [
        "message" => "Login successful",
        "jwt_token" => $jwt_token
      ]
    ];

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
