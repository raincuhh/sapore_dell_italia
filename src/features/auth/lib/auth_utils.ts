import React, { createContext, useContext } from "react";
import { User, UserRoles } from "../../users/lib/types";

type AuthContextProps = {
   user: User | null;
   is_authenticated: boolean;
   login: (username: string, password: string) => Promise<any>;
   logout: () => void;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
   undefined
);

export const use_auth = (): AuthContextProps => {
   const context: AuthContextProps | undefined = useContext(AuthContext);
   if (context === undefined) {
      throw new Error("use_auth must be used within an AuthProvider");
   }
   return context;
};
