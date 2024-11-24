import axios, { AxiosResponse } from "axios";
import { axios_instance } from "../../../shared/lib/axios_instance";
import { Food } from "../lib/types";

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

export async function add_food(
   name: string,
   price: string,
   desc: string,
   type: string,
   image_path_base: string,
   image_path_hover: string,
   allergies: string
): Promise<any> {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/food/api/add_food.php",
         {
            name,
            price,
            desc,
            type,
            image_path_base,
            image_path_hover,
            allergies,
         }
      );
      return response.data;
   } catch (err) {
      console.error(`Error adding food: ${err}`);
      throw new Error("Failed to add food item.");
   }
}

export async function get_full_food_list() {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.get(
         "/src/features/food/api/get_full_food_list.php"
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to fetch food list");
   }
}

export async function update_food(
   food_id_: number,
   field: string,
   value: any
): Promise<AxiosResponse<any, any>> {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/food/api/update_food.php",
         {
            food_id: food_id_,
            field,
            value,
         }
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to update food");
   }
}

export async function delete_food(food_id_: number) {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/food/api/delete_food.php",
         {
            food_id: food_id_,
         }
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to delete food");
   }
}
