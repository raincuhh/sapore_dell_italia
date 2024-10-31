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

function get_sql_connection(): bool|mysqli
{
  load_env(__DIR__ . "/../../../.env");

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
}
