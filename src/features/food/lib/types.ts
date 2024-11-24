export type Food = {
   food_id: number;
   name: string;
   price: string;
   type: "main" | "side";
   desc?: string;
   image_path_base?: string;
   image_path_hover?: string;
   allergies: string;
};
