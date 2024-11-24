import { use_admin_page, use_auth } from "../../features/auth/lib/utils";
import { AdminSubPages } from "../../shared/lib/types";
import BrandLogo from "../../shared/components/logo";

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
         <nav className="sm:left-14 h-min w-full border-b-[1px] border-solid border-secondary-low-opacity py-2 px-2 sm:px-4 bg-bg-secondary fixed top-0 right-0">
            <div className="flex items-center gap-2 h-[36px]">
               <BrandLogo
                  to_link="/"
                  className="h-full"
                  root_css="block h-[36px] sm:hidden"
               />
               <div className="block sm:hidden h-full w-[1px] bg-secondary-low-opacity"></div>
               <header className="font-medium text-fs-m sm:text-fs-l">
                  {header_title(sub_page)}
               </header>
            </div>
         </nav>
      </>
   );
}
