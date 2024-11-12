import { AxiosResponse } from "axios";
import { axios_instance } from "../../../shared/lib/axios_instance";

export async function get_full_user_list() {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.get(
         "/src/features/users/api/get_full_user_list.php"
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("fetching user list failed");
   }
}
