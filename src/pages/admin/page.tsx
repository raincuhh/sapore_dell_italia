import PageLayout from "../../shared/components/page_layout";
import AdminSidebar from "../../widgets/admin/admin_sidebar";
import AdminDashboard from "../../widgets/admin/admin";
import AdminNavbar from "../../widgets/admin/admin_navbar";

import { AdminPageProvider } from "../../features/auth/components/admin_page_provider";

export default function PageAdmin(): JSX.Element {
   return (
      <>
         <PageLayout>
            <AdminPageProvider>
               <div className="flex h-full">
                  <AdminSidebar />
                  <div className="flex flex-col">
                     <AdminNavbar />
                     <AdminDashboard />
                  </div>
               </div>
            </AdminPageProvider>
         </PageLayout>
      </>
   );
}
