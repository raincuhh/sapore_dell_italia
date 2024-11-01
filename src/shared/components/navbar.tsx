import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { UserRoles } from "../../features/users/lib/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type NavbarProps = { user_type?: UserRoles; is_authenticated?: boolean };

export default function Navbar({ user_type, is_authenticated }: NavbarProps) {
   return (
      <nav id="navbar flex">
         <div className="nav_cont">
            <div className="nav_in_cont">
               <nav className="nav">
                  <header className="flex">awd</header>
               </nav>
            </div>
         </div>
      </nav>
   );
}
