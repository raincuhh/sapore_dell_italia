import axios, { AxiosResponse } from "axios";
import { axios_instance } from "../../../shared/lib/axios_instance";

export async function fetch_recommended_food_list_test(): Promise<any> {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.get(
         "/src/features/food/api/fetch_recommended_food_list_test.php"
      );
      return response.data;
   } catch (err) {
      console.error(`Error fetching recommended food list: ${err}`);
      throw new Error("Failed fetching food list");
   }
}

type AddFoodProps = {
   name: string;
   price: string;
   desc?: string;
   image_path_base?: string;
   image_path_hover?: string;
   allergies: string;
};

export async function add_food(data: AddFoodProps): Promise<any> {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/food/api/add_food.php",
         data
      );
      return response.data;
   } catch (err) {
      console.error(`Error adding food: ${err}`);
      throw new Error("Failed to add food item.");
   }
}
