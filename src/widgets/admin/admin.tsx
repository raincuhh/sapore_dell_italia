import { useState } from "react";

import { AdminDashboardSubPages } from "../../shared/lib/types";
import { use_admin_page } from "../../features/auth/lib/utils";

export type AdminDashboardProps = {};

export default function AdminDashboard({}: AdminDashboardProps) {
   const { sub_page } = use_admin_page();

   switch (sub_page) {
      case AdminDashboardSubPages.dashboard:
         return <>dashhboard</>;
      case AdminDashboardSubPages.food_list:
         return <>food_List</>;
      case AdminDashboardSubPages.order_list:
         return <>order_List</>;
      case AdminDashboardSubPages.user_list:
         return <>user_List</>;
      default:
         return <>dashboard?</>;
   }
}
