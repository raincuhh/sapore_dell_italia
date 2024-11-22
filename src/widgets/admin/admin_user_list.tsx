import UserTable from "../../features/users/components/user_table";
import AdminSubPageLayout from "./admin_sub_page_layout";

export default function AdminUserListSubPage(): JSX.Element {
   return (
      <>
         <AdminSubPageLayout>
            <UserTable />
         </AdminSubPageLayout>
      </>
   );
}
