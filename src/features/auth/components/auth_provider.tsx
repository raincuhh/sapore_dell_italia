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
      }
   }, [jwt_token]);

   const login = async (username: string, password: string) => {
      try {
         const response = await api_login(username, password);
         console.log(response);
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
      <AuthContext.Provider value={{ is_authenticated, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
}
