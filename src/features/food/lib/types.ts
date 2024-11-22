export type FoodInfo = {
   food_id: number;
   name: string;
   price: string;
   desc_short?: string;
   desc_long?: string;
   image_path_base?: string;
   image_path_hover?: string;
   allergies: string;
};

// food_id
// name
// price
// desc_short (optional)
// desc_long (optional)
// img_path_base (optional)
// img_path_hover (optional)
// allergies (its a varchar)
// created at (timestamp, dont worry about this one)
