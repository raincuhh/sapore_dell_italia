import PageLayout from "../../shared/components/page_layout";
import AdminSidebar from "../../widgets/admin/admin_sidebar";
import AdminMain from "../../widgets/admin/admin";
import AdminNavbar from "../../widgets/admin/admin_navbar";

import { AdminPageProvider } from "../../widgets/admin/admin_page_provider";

export default function PageAdmin(): JSX.Element {
   return (
      <>
         <PageLayout>
            <AdminPageProvider>
               <div className="flex h-full w-full flex-col-reverse sm:flex-row justify-between">
                  <AdminSidebar />
                  <AdminMain />
               </div>
            </AdminPageProvider>
         </PageLayout>
      </>
   );
}
