import { PropsWithChildren, useState, useEffect } from "react";
import { UserRoles } from "../../../shared/lib/types";
import { AuthContext } from "../lib/utils";
import {
   login as api_login,
   validate_jwt_token as api_validate_jwt_token,
   increment_jwt_version as api_increment_jwt_version,
} from "../api";
import { role_str_to_role_enum } from "../../../shared/lib/utils";
import { jwtDecode } from "jwt-decode";

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({
   children,
}: AuthProviderProps): JSX.Element {
   const [jwt_token, set_jwt_token] = useState(
      localStorage.getItem("jwt_token")
   );
   const [is_authenticated, set_is_authenticated] = useState<boolean>(false);
   const [role, set_role] = useState<UserRoles>("user");
   const [loading, set_loading] = useState<boolean>(true);

   useEffect(() => {
      if (jwt_token) {
         handle_jwt_token(jwt_token);
      } else {
         set_loading(false);
      }
   }, [jwt_token]);

   const handle_jwt_token = async (jwt_token: string) => {
      set_loading(true);
      try {
         const response = await api_validate_jwt_token(jwt_token);

         let decoded_role: UserRoles = role_str_to_role_enum(
            response.data.decoded_token.role
         );
         set_role(decoded_role);
         set_is_authenticated(true);
      } catch (err) {
         console.error("Error: ", err);
         localStorage.removeItem("jwt_token");
         set_jwt_token(null);
         set_is_authenticated(false);
      } finally {
         set_loading(false);
      }
   };

   const login = async (username: string, password: string) => {
      try {
         const response: any = await api_login(username, password);
         localStorage.setItem("jwt_token", response.data.jwt_token);
         set_jwt_token(response.data.jwt_token);
         return response.data;
      } catch (err) {
         console.error("Error: ", err);
      }
   };

   const logout = async () => {
      set_is_authenticated(false);
      console.log("logging out");

      try {
         if (!jwt_token) return;

         const response = await api_validate_jwt_token(jwt_token);

         let decoded_id: number = response.data.decoded_token.id;
         if (!decoded_id) {
            throw new Error("failed to get decoded id");
         }
         console.log(decoded_id);
         await api_increment_jwt_version(decoded_id);
         localStorage.removeItem("jwt_token");
         // window.location.reload();
      } catch (err) {
         console.error("Error: ", err);
      }
   };

   return (
      <AuthContext.Provider
         value={{ jwt_token, is_authenticated, role, login, logout, loading }}
      >
         {children}
      </AuthContext.Provider>
   );
}
