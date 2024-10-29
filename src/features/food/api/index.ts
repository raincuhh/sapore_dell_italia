import axios, { AxiosResponse } from "axios";

const base_url: string = window.location.origin;

export async function fetch_recommended_food_list_test(): Promise<any> {
   try {
      // try to fix proxy localhost stuff at a later date
      const response: AxiosResponse<any, any> = await axios.get(
         "http://localhost/sapore_dell_italia/src/features/food/api/fetch_recommended_food_list_test.php"
      );
      return response.data;
   } catch (err: unknown) {
      console.error(`Error fetching recommended food list: ${err}`);
   }
}
