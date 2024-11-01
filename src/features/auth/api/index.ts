import axios, { AxiosResponse } from "axios";
import { axios_instance } from "../../../shared/lib/axios_instance";

export async function register(
   username: string,
   password: string,
   email: string
) {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/auth/api/register.php",
         {
            username,
            password,
            email,
         }
      );
      return response.data;
   } catch (err) {
      console.error(err);
      throw new Error("Registration failed");
   }
}

export async function login(username: string, password: string) {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/auth/api/login.php",
         {
            username,
            password,
         }
      );
      return response.data;
   } catch (err) {
      console.error(err);
      throw new Error("Registration failed");
   }
}
