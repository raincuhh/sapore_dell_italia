import { PropsWithChildren, useState, useEffect } from "react";
import { User } from "../../users/lib/types";
import { AuthContext } from "../lib/utils";
import { login as api_login } from "../api";

type AuthProviderProps = PropsWithChildren;

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
         const response = await api_login(username, password);
         set_user(response);
         set_is_authenticated(true);
         //make token maybe?
         console.log("userdata: ", user, "authenticated: ", is_authenticated);
         return response;
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
