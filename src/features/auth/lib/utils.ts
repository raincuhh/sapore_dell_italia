import React, { createContext, useContext } from "react";
import { User, UserRoles, AuthContextProps } from "../../../shared/lib/types";

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
