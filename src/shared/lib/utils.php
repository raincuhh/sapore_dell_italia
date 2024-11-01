<?php

function load_env($file): void
{
  if (file_exists($file)) {
    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
      putenv(trim($line));
    }
  } else {
    error_log("Error: .env file not found at " . $file);
    echo "Error: .env file not found at " . $file;
  }
}

function get_sql_connection()
{
  load_env(__DIR__ . "/../../../.env");
  $dsn = "pgsql:host=" . getenv("DB_HOST") . ";dbname=" . getenv("DB_NAME");
  $username = getenv("DB_USER");
  $password = getenv("DB_PASS");

  try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
  } catch (PDOException $e) {
    echo "Error: Could not connect to the database. " . $e->getMessage();
    return false;
  }

  // old sql connection way, im using postgresql now though so cant
  /*
  $sql_connection = mysqli_connect(
    getenv("DB_HOST"),
    getenv("DB_USER"),
    getenv("DB_PASS"),
    getenv("DB_NAME")
  );

  if ($sql_connection->connect_error) {
    echo "Error: Something went wrong: " . $sql_connection->connect_error;
    return false;
  }
  return $sql_connection;
  */
}

function get_ip(): array|bool|string
{
  $ip = "";
  if (getenv("HTTP_CLIENT_IP"))
    $ip = getenv("HTTP_CLIENT_IP");
  else if (getenv("HTTP_X_FORWARDED_FOR"))
    $ip = getenv("HTTP_X_FORWARDED_FOR");
  else if (getenv("REMOTE_ADDR"))
    $ip = getenv("REMOTE_ADDR");
  else
    $ip = "UNKNOWN";
  return $ip;

}
