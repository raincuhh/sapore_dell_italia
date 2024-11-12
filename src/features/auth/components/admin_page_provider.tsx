import { PropsWithChildren, useState } from "react";
import { AdminPageContext } from "../lib/utils";
import { AdminDashboardSubPages } from "../../../shared/lib/types";

type AdminPageProviderProps = PropsWithChildren & {};

export function AdminPageProvider({ children }: AdminPageProviderProps) {
   const [sub_page, set_sub_page] = useState(AdminDashboardSubPages.dashboard);

   const switch_page = (page: AdminDashboardSubPages) => {
      set_sub_page(page);
   };

   return (
      <>
         <AdminPageContext.Provider value={{ switch_page, sub_page }}>
            {children}
         </AdminPageContext.Provider>
      </>
   );
}
