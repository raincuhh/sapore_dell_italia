import PageLayout from "../../shared/components/page_layout";
import AdminSidebar from "../../widgets/admin/admin_sidebar";
import AdminMain from "../../widgets/admin/admin";
import AdminNavbar from "../../widgets/admin/admin_navbar";
import { use_auth } from "../../features/auth/lib/utils";
import { useEffect, useState } from "react";
import { is_admin } from "../../features/users/lib/perms";

import { AdminPageProvider } from "../../widgets/admin/admin_page_provider";

export default function PageAdmin(): JSX.Element {
   const { is_authenticated, role } = use_auth();
   const [admin, set_admin] = useState<boolean>(false);

   useEffect(() => {
      set_admin(is_admin(role));
   }, [role]);

   return (
      <>
         {!admin || (!is_authenticated && !admin) ? (
            <>
               <div className="flex items-center justify-center w-full h-dvh text-secondary bg-bg">
                  Unauthorized access...
               </div>
            </>
         ) : (
            <PageLayout>
               <AdminPageProvider>
                  <div className="flex flex-col-reverse justify-between w-full h-full sm:flex-row">
                     <AdminSidebar />
                     <AdminMain />
                  </div>
               </AdminPageProvider>
            </PageLayout>
         )}
      </>
   );
}
