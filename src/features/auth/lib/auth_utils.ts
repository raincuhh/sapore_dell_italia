import React, { createContext, useContext } from "react";
import { User, UserRoles } from "../../users/lib/types";

export const AuthContext = createContext<User | null>(null);

export const use_auth = (): User | null => {
   const context: User | null = useContext(AuthContext);
   if (context === undefined) {
      throw new Error("use_auth must be used within an AuthProvider");
   }
   return context;
};
