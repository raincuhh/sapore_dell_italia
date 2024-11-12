import React, { createContext, useContext } from "react";
import {
   User,
   UserRoles,
   AuthContextProps,
   AdminPageContextProps,
} from "../../../shared/lib/types";

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

export const AdminPageContext = createContext<
   AdminPageContextProps | undefined
>(undefined);

export const use_admin_page = (): AdminPageContextProps => {
   const context: AdminPageContextProps | undefined =
      useContext(AdminPageContext);
   if (context === undefined) {
      throw new Error("use_admin_page must be used within a AdminPageProvider");
   }
   return context;
};
