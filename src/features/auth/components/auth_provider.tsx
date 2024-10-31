import React, { PropsWithChildren, useState } from "react";
import { User, UserRoles } from "../../users/lib/types";
import { AuthContext } from "../lib/auth_utils";

type AuthProviderProps = PropsWithChildren & { is_logged_in?: boolean };

export default function AuthProvider({
   children,
   is_logged_in,
}: AuthProviderProps): JSX.Element {
   // replace the true ternary statement part when i have an actual way of getting user creds
   const [user] = useState<User | null>(
      is_logged_in
         ? {
              id: 1,
              name: "john doe",
              password: "password",
              email: "johndoe@gmail.com",
              created_at: new Date().toISOString(),
              role: UserRoles.user,
           }
         : null
   );

   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
