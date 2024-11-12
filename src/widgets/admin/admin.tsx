import { AdminSubPages } from "../../shared/lib/types";
import { use_admin_page } from "../../features/auth/lib/utils";

import AdminDashboardSubPage from "./admin_dashboard";
import AdminUserListSubPage from "./admin_user_list";
import AdminFoodListSubPage from "./admin_food_list";
import AdminOrderListSubPage from "./admin_order_list";

type AdminMain = {};

export default function AdminMain({}: AdminMain) {
   const { sub_page } = use_admin_page();

   // fuck modularity we ball
   switch (sub_page) {
      case AdminSubPages.dashboard:
         return (
            <>
               <AdminDashboardSubPage />
            </>
         );
      case AdminSubPages.food_list:
         return (
            <>
               <AdminFoodListSubPage />
            </>
         );
      case AdminSubPages.order_list:
         return (
            <>
               <AdminOrderListSubPage />
            </>
         );
      case AdminSubPages.user_list:
         return (
            <>
               <AdminUserListSubPage />
            </>
         );
      default:
         return (
            <>
               <AdminDashboardSubPage />
            </>
         );
   }
}
