import { Link, NavLink } from "react-router-dom";
import BrandLogo from "../../shared/components/logo";
import Navbar from "../../shared/components/navbar";

export default function AdminSidebar() {
   return (
      <div id="admin_sidebar" className="w-[3.5rem] h-full flex flex-col">
         <nav className="py-2 h-full">
            <ul className="w-full flex flex-col items-center px-[0.5rem] gap-[0.5rem]">
               <BrandLogo to_link="#" width_css={"w-[40px]"} />
               <NavButton icon_css="bx bx-home-alt-2 text-fs-m" to_link="/" />
               <div className="h-[1px] w-full bg-secondary-low-opacity"></div>
               <NavButton
                  icon_css="bx bx-user text-fs-m"
                  to_link="/admin/dashboard/users"
               />
               <NavButton
                  icon_css="bx bx-food-menu text-fs-m"
                  to_link="/admin/dashboard/foods"
               />
            </ul>
         </nav>
      </div>
   );
}

type NavButtonProps = { icon_css: string; to_link: string };

function NavButton({ icon_css, to_link }: NavButtonProps) {
   return (
      <NavLink
         to={to_link}
         className={({ isActive }) =>
            `admin_sidebar_nav_button flex w-[2.5rem] h-[2.5rem] rounded-[3px] items-center justify-center ${
               isActive ? "bg-secondary" : "hover:bg-secondary-low-opacity"
            }`
         }
      >
         <i className={`${icon_css} text-secondary-low-opacity`}></i>
      </NavLink>
   );
}
