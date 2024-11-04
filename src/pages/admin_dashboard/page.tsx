import PageLayout from "../../shared/components/page_layout";
import AdminSidebar from "../../widgets/admin_dashboard/admin_sidebar";
import AdminDashboard from "../../widgets/admin_dashboard/admin_dashboard";

export default function PageAdminDashboard(): JSX.Element {
   return (
      <>
         <PageLayout>
            <div className="flex h-full">
               <AdminSidebar />
               <AdminDashboard />
            </div>
         </PageLayout>
      </>
   );
}
