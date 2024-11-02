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

function get_db_connection(): bool|PDO
{
  load_env(__DIR__ . "/../../../.env");
  echo extension_loaded('pgsql') ? 'yes' : 'no';
  echo "> ";

  $db_host = getenv("DB_HOST");
  $db_port = getenv("DB_PORT");
  $db_name = getenv("DB_NAME");
  $db_user = getenv("DB_USER");
  $db_pass = getenv("DB_PASS");

  try {
    $dns = sprintf("pgsql:host=%s;port=%d;dbname=%s;user=%s;password=%s", $db_host, $db_port, $db_name, $db_user, $db_pass);
    $pdo = new \PDO($dns);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $pdo;
  } catch (PDOException $e) {
    echo "Error: Could not connect to the database. " . $e->getMessage();

    return false;
  }
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
