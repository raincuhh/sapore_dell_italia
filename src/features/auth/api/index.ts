import { AxiosResponse } from "axios";
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
      return response;
   } catch (err) {
      console.error("Error: ", err);
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
      return response;
   } catch (err) {
      console.error("Error: ", err);
      throw new Error("Login failed");
   }
}

export async function validate_jwt_token(jwt_token: string) {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.get(
         "/src/features/auth/api/validate_jwt_token.php",
         { params: { jwt_token } }
      );
      return response;
   } catch (err) {
      console.error("Error: ", err);
      throw new Error("Validation failed");
   }
}
