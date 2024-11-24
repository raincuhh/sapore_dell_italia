export type Food = {
   food_id: number;
   name: string;
   price: string;
   type: "main" | "side";
   desc?: string;
   img_path_base?: string;
   img_path_hover?: string;
   allergies: string;
};
