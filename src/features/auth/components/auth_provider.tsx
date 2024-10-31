import React, { PropsWithChildren, useState, useEffect } from "react";
import { User, UserRoles } from "../../users/lib/types";
import { AuthContext } from "../lib/auth_utils";
import { login as api_login } from "../api";

type AuthProviderProps = PropsWithChildren; //& { is_authenticated: boolean };

export default function AuthProvider({
   children,
}: AuthProviderProps): JSX.Element {
   const [user, set_user] = useState<User | null>(null);
   const [is_authenticated, set_is_authenticated] = useState(false);

   useEffect(() => {
      console.log("awdawdadw");
   }, []);

   const login = async (username: string, password: string) => {
      try {
         const user_data = await api_login(username, password);
         set_user(user_data);
         set_is_authenticated(true);
         //make token maybe?
      } catch (err) {
         console.error("login failed: ", err);
      }
   };

   const logout = async () => {
      // TODO, invalidate active tokens when session/token implementation is done
      set_user(null);
      set_is_authenticated(false);
   };

   return (
      <AuthContext.Provider value={{ user, is_authenticated, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
}
