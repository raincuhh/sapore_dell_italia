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
      throw new Error("Failed to fetch user list");
   }
}

export async function delete_user(user_id_: number) {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/users/api/delete_user.php",
         {
            user_id: user_id_,
         }
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to delete user");
   }
}

export async function update_user(
   user_id_: number,
   field: string,
   value: any
): Promise<AxiosResponse<any, any>> {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/users/api/update_user.php",
         {
            user_id: user_id_,
            field,
            value,
         }
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to update user");
   }
}
