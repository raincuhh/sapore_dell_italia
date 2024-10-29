import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { UserRoles } from "../../features/users/lib/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type NavbarProps = { user_type: UserRoles; is_logged_in?: boolean };

export default function Navbar({ user_type, is_logged_in }: NavbarProps) {
   return (
      <nav id="navbar">
         <div className="nav_cont">
            <div className="nav_in_cont">
               <nav className="nav"></nav>
            </div>
         </div>
      </nav>
   );
}
