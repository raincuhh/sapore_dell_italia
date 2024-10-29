<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$test_food_list = [
  "food1" => [
    "name" => "food1",
    "price" => "562£",
    "short_desc" => "lorem ipsum",
    "long_desc" => "lorem ipsum dolor sit amet, coneticur",
    "image_paths" => [
      "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
      "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
    ],
  ],
  "food2" => [
    "name" => "food2",
    "price" => "763£",
    "short_desc" => "lorem ipsum",
    "long_desc" => "lorem ipsum dolor sit amet, coneticur",
    "image_paths" => [
      "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
      "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
    ],
  ],
  "food3" => [
    "name" => "food3",
    "price" => "1065£",
    "short_desc" => "lorem ipsum",
    "long_desc" => "lorem ipsum dolor sit amet, coneticur",
    "image_paths" => [
      "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
      "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
    ],
  ],
  "food4" => [
    "name" => "food4",
    "price" => "1654£",
    "short_desc" => "lorem ipsum",
    "long_desc" => "lorem ipsum dolor sit amet, coneticur",
    "image_paths" => [
      "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
      "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
    ],
  ],
  "food5" => [
    "name" => "food5",
    "price" => "426£",
    "short_desc" => "lorem ipsum",
    "long_desc" => "lorem ipsum dolor sit amet, coneticur",
    "image_paths" => [
      "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
      "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
    ],
  ],
  "food6" => [
    "name" => "food6",
    "price" => "656£",
    "short_desc" => "lorem ipsum",
    "long_desc" => "lorem ipsum dolor sit amet, coneticur",
    "image_paths" => [
      "../../public/shared/static/assets/images/foods/placeholder_1.jpg",
      "../../public/shared/static/assets/images/foods/placeholder_2.jpg",
    ],
  ],
];

echo json_encode($test_food_list);
