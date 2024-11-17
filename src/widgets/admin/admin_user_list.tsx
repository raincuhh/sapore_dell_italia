import EditUserTable from "../../features/users/components/edit_user_table";
import FullUserTable from "../../features/users/components/full_user_table";
import AdminSubPageLayout from "./admin_sub_page_layout";

export default function AdminUserListSubPage(): JSX.Element {
   return (
      <>
         <AdminSubPageLayout>
            <div className="flex flex-col h-full">
               <EditUserTable />
               <FullUserTable />
            </div>
         </AdminSubPageLayout>
      </>
   );
}
