import { use_admin_page } from "../../features/auth/lib/utils";
import { AdminSubPages } from "../../shared/lib/types";

export default function AdminNavbar() {
   const { sub_page } = use_admin_page();

   const header_title = (sub_page: AdminSubPages) => {
      switch (sub_page) {
         case AdminSubPages.dashboard:
            return "Dashboard";
         case AdminSubPages.food_list:
            return "Foods";
         case AdminSubPages.order_list:
            return "Orders";
         case AdminSubPages.user_list:
            return "Users";
      }
   };

   return (
      <>
         <nav className="h-min w-full border-b-[1px] border-solid border-secondary-low-opacity py-1 px-2 sm:py-2 sm:px-4">
            <div className="flex justify-between h-full items-center">
               <header className="text-fs-m">{header_title(sub_page)}</header>
            </div>
         </nav>
      </>
   );
}
