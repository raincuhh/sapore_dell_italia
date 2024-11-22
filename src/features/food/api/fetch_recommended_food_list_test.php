<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
header('Access-Control-Allow-Origin');

$test_food_list = [
  "food1" => [
    "food_id" => 1,
    "name" => "food1",
    "price" => "562£",
    "desc_short" => "lorem ipsum",
    "desc_long" => "lorem ipsum dolor sit amet, coneticur",
    "image_path_base" => "./static/assets/images/foods/placeholder_1.jpg",
    "image_path_hover" => "./static/assets/images/foods/placeholder_2.jpg",

  ],
  "food2" => [
    "food_id" => 2,
    "name" => "food2",
    "price" => "562£",
    "desc_short" => "lorem ipsum",
    "desc_long" => "lorem ipsum dolor sit amet, coneticur",
    "image_path_base" => "./static/assets/images/foods/placeholder_1.jpg",
    "image_path_hover" => "./static/assets/images/foods/placeholder_2.jpg",
  ],
  "food3" => [
    "food_id" => 3,
    "name" => "food3",
    "price" => "562£",
    "desc_short" => "lorem ipsum",
    "desc_long" => "lorem ipsum dolor sit amet, coneticur",
    "image_path_base" => "./static/assets/images/foods/placeholder_1.jpg",
    "image_path_hover" => "./static/assets/images/foods/placeholder_2.jpg",
  ],
  "food4" => [
    "food_id" => 4,
    "name" => "food4",
    "price" => "562£",
    "desc_short" => "lorem ipsum",
    "desc_long" => "lorem ipsum dolor sit amet, coneticur",
    "image_path_base" => "./static/assets/images/foods/placeholder_1.jpg",
    "image_path_hover" => "./static/assets/images/foods/placeholder_2.jpg",
  ],
  "food5" => [
    "food_id" => 5,
    "name" => "food5",
    "price" => "562£",
    "desc_short" => "lorem ipsum",
    "desc_long" => "lorem ipsum dolor sit amet, coneticur",
    "image_path_base" => "./static/assets/images/foods/placeholder_1.jpg",
    "image_path_hover" => "./static/assets/images/foods/placeholder_2.jpg",
  ],
  "food6" => [
    "food_id" => 6,
    "name" => "food6",
    "price" => "562£",
    "desc_short" => "lorem ipsum",
    "desc_long" => "lorem ipsum dolor sit amet, coneticur",
    "image_path_base" => "./static/assets/images/foods/placeholder_1.jpg",
    "image_path_hover" => "./static/assets/images/foods/placeholder_2.jpg",
  ],
];

echo json_encode($test_food_list);
