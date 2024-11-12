import FullUserTable from "../../features/users/components/full_user_table";
import AdminSubPageLayout from "./admin_sub_page_layout";

export default function AdminUserListSubPage() {
   return (
      <>
         <AdminSubPageLayout>
            <div className="flex flex-col">
               <FullUserTable />
            </div>
         </AdminSubPageLayout>
      </>
   );
}
