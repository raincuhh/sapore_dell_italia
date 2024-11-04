import { PropsWithChildren, useState, useEffect } from "react";
import { UserRoles } from "../../users/lib/types";
import { AuthContext } from "../lib/utils";
import {
   login as api_login,
   validate_jwt_token as api_validate_jwt_token,
} from "../api";
import { role_str_to_role_enum } from "../../../shared/lib/utils";

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({
   children,
}: AuthProviderProps): JSX.Element {
   const [jwt_token, set_jwt_token] = useState(
      localStorage.getItem("jwt_token")
   );
   const [is_authenticated, set_is_authenticated] = useState(false);
   const [role, set_role] = useState(UserRoles.user);
   const [loading, set_loading] = useState(true);

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
         const response = await api_login(username, password);
         localStorage.setItem("jwt_token", response.data.jwt_token);
         set_jwt_token(response.data.jwt_token);
         return response.data;
      } catch (err) {
         console.error("Error: ", err);
      }
   };

   const logout = async () => {
      set_is_authenticated(false);
   };

   return (
      <AuthContext.Provider
         value={{ jwt_token, is_authenticated, role, login, logout, loading }}
      >
         {children}
      </AuthContext.Provider>
   );
}
