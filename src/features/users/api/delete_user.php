<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

require "../../../shared/lib/utils.php";

$conn = get_db_connection();
$data = json_decode(file_get_contents("php://input"));

$user_id = $data->user_id;

$response = delete_user($user_id);

http_response_code($response["status"]);
echo json_encode($response["data"]);

function delete_user($user_id): array
{
  global $conn;

  try {
    //check if user exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_id = :user_id");
    $stmt->bindParam(":user_id", $user_id, PDO::PARAM_INT);

    if (!$stmt->execute()) {
      return [
        "status" => 400,
        "data" => ["message" => "Query failed"]
      ];
    }

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
      return [
        "status" => 404,
        "data" => ["message" => "User not found"]
      ];
    }

    $conn->beginTransaction();

    // $conn->prepare("DELETE FROM user_related_data WHERE user_id = :user_id")->execute(['user_id' => $user_id]);


    $delete_stmt = $conn->prepare("DELETE FROM users WHERE user_id = :user_id");
    $delete_stmt->bindParam(":user_id", $user_id, PDO::PARAM_INT);

    if (!$delete_stmt->execute()) {
      $conn->rollBack();
      return [
        "status" => 500,
        "data" => ["message" => "Failed to delete user"]
      ];
    }

    $conn->commit();

    return [
      "status" => 200,
      "data" => ["message" => "User successfully deleted"]
    ];

  } catch (mysqli_sql_exception $err) {
    $conn->rollBack();
    return [
      "status" => 500,
      "data" => [
        "message" => "Internal server error",
        "error" => $err->getMessage()
      ]
    ];
  } finally {
    $stmt = null;
    $delete_stmt = null;
    $conn = null;
  }
}
?>
