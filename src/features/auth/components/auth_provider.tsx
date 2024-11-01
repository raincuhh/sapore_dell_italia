import { PropsWithChildren, useState, useEffect } from "react";
import { User, UserRoles } from "../../users/lib/types";
import { AuthContext } from "../lib/utils";
import { login as api_login } from "../api";
import { jwtDecode } from "jwt-decode";

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({
   children,
}: AuthProviderProps): JSX.Element {
   const [jwt_token, set_jwt_token_] = useState(
      localStorage.getItem("jwt_token")
   );
   const [is_authenticated, set_is_authenticated] = useState(false);
   const [role, set_role] = useState(UserRoles.user);

   useEffect(() => {
      if (jwt_token) {
         const decoded = jwtDecode(jwt_token);
         console.log(decoded);
      }
   }, [jwt_token]);

   const init_jwt_token_decoding = (jwt_token_str: string) => {
      try {
         let decoded = jwtDecode(jwt_token_str);
      } catch (err) {
         console.error("login failed: ", err);
      }
   };

   const login = async (username: string, password: string) => {
      try {
         const response = await api_login(username, password);
         console.log(response);
         //console.log(jwtDecode(response.jwt_token));

         //set_is_authenticated(true);
         return response;
      } catch (err) {
         console.error("login failed: ", err);
      }
   };

   const logout = async () => {
      set_is_authenticated(false);
   };

   return (
      <AuthContext.Provider
         value={{ jwt_token, is_authenticated, login, logout }}
      >
         {children}
      </AuthContext.Provider>
   );
}
