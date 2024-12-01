import { AdminSubPages, UserRoles } from "../../shared/lib/types";
import { use_admin_page, use_auth } from "../../features/auth/lib/utils";
import AdminNavbar from "./admin_navbar";

import AdminDashboardSubPage from "./admin_dashboard";
import AdminUserListSubPage from "./admin_user_list";
import AdminFoodListSubPage from "./admin_food_list";
import AdminOrderListSubPage from "./admin_order_list";

const adminSubPageComponents = {
   // [AdminSubPages.dashboard]: AdminDashboardSubPage,
   [AdminSubPages.food_list]: AdminFoodListSubPage,
   [AdminSubPages.order_list]: AdminOrderListSubPage,
   [AdminSubPages.user_list]: AdminUserListSubPage,
};

export default function AdminMain() {
   const { sub_page } = use_admin_page();

   const SubPageComponent =
      adminSubPageComponents[sub_page] || AdminUserListSubPage;

   return (
      <>
         <div className="flex flex-col w-full h-full">
            <AdminNavbar />
            <SubPageComponent />
         </div>
      </>
   );
}
