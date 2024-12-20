import BrandLogo from "../../shared/components/logo";
import { use_admin_page } from "../../features/auth/lib/utils";
import { AdminSubPages } from "../../shared/lib/types";

type AdminSidebarProps = {};

export default function AdminSidebar({}: AdminSidebarProps) {
   const { switch_page, sub_page } = use_admin_page();

   return (
      <div
         id="admin_sidebar"
         className="sm:w-[3.5rem] h-[3.5rem] sm:h-full flex flex-row sm:flex-col"
      >
         <nav className="py-2 h-full sm:border-r-[1px] border-t-[1px] sm:border-t-0 w-full border-solid border-secondary-low-opacity bg-bg-secondary">
            <ul className="w-full flex flex-row sm:flex-col items-center justify-center px-[0.5rem] gap-[0.5rem]">
               <BrandLogo
                  to_link="/"
                  className={"w-[40px]"}
                  root_css="hidden sm:block"
               />
               {/* <NavButton
                  icon_css={`bx bx-home-alt-2 ${
                     sub_page === AdminSubPages.dashboard && "!text-secondary"
                  }`}
                  container_css={`${
                     sub_page === AdminSubPages.dashboard &&
                     "!bg-secondary-low-opacity"
                  }`}
                  callback_switch_page={switch_page}
                  page={AdminSubPages.dashboard}
               /> */}
               <div className="w-[1px] sm:h-[1px] sm:w-full bg-secondary-low-opacity"></div>
               <NavButton
                  icon_css={`bx bx-user ${
                     sub_page === AdminSubPages.user_list && "!text-secondary"
                  }`}
                  container_css={`${
                     sub_page === AdminSubPages.user_list &&
                     "!bg-secondary-low-opacity"
                  }`}
                  callback_switch_page={switch_page}
                  page={AdminSubPages.user_list}
               />
               <NavButton
                  icon_css={`bx bx-food-menu ${
                     sub_page === AdminSubPages.food_list && "!text-secondary"
                  }`}
                  container_css={`${
                     sub_page === AdminSubPages.food_list &&
                     "!bg-secondary-low-opacity"
                  }`}
                  callback_switch_page={switch_page}
                  page={AdminSubPages.food_list}
               />
               <NavButton
                  icon_css={`bx bx-bell ${
                     sub_page === AdminSubPages.order_list && "!text-secondary"
                  }`}
                  container_css={`${
                     sub_page === AdminSubPages.order_list &&
                     "!bg-secondary-low-opacity"
                  }`}
                  callback_switch_page={switch_page}
                  page={AdminSubPages.order_list}
               />
            </ul>
         </nav>
      </div>
   );
}

type NavButtonProps = {
   icon_css: string;
   container_css: string;
   callback_switch_page: Function;
   page: AdminSubPages;
};

function NavButton({
   icon_css,
   container_css,
   callback_switch_page,
   page,
}: NavButtonProps) {
   return (
      <div
         onClick={() => {
            callback_switch_page(page);
            console.log(page);
         }}
         className={`admin_sidebar_nav_button flex w-[2.5rem] h-[2.5rem] rounded-[3px] items-center justify-center  hover:bg-secondary-low-opacity ${container_css}`}
      >
         <i className={`${icon_css} text-secondary-low-opacity  text-fs-m`}></i>
      </div>
   );
}
