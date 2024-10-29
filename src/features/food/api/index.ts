import axios from "axios";

const base_url: string = window.location.origin;

export async function get_recommended_food_list(): Promise<any> {
   console.log(base_url);
   try {
      // try to fix proxy stuff at a later date
      const response = await axios.get(
         "http://localhost/sapore_dell_italia/src/features/food/api/fetch_recommended_food_list_test.php"
      );
      //console.log(response.data);
      return response.data;
   } catch (err) {
      console.error(`Error fetching recommended food list: ${err}`);
   }
}
