import { PropsWithChildren, useState } from "react";
import { AdminPageContext } from "../../features/auth/lib/utils";
import { AdminSubPages } from "../../shared/lib/types";

type AdminPageProviderProps = PropsWithChildren & {};

export function AdminPageProvider({ children }: AdminPageProviderProps) {
   const [sub_page, set_sub_page] = useState(AdminSubPages.dashboard);

   const switch_page = (page: AdminSubPages) => {
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
