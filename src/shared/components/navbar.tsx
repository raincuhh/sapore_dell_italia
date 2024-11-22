import React, { useEffect, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use_auth } from "../../features/auth/lib/utils";
import { is_admin } from "../../features/users/lib/perms";
import { AuthContextProps } from "../lib/types";

gsap.registerPlugin(ScrollTrigger);

function NavButton({ logout, text }: { logout: () => void; text?: string }) {
   return (
      <div
         onClick={() => logout()}
         className="font-medium cursor-pointer text-secondary hover:text-main hover:underline transition-hover-base font-secondary text-fs-s"
      >
         {text}
      </div>
   );
}

export default function Navbar() {
   const { is_authenticated, role, loading, logout } = use_auth();

   return (
      <nav id="navbar" className="fixed top-0 left-0 w-full z-[1000]">
         <div className="flex flex-row px-4 py-2 sm:px-8 md:px-16 sm:py-4">
            <div className="flex flex-row justify-between w-full font-medium font-secondary text-fs-s">
               <div className="flex flex-row gap-4">
                  {!is_authenticated && (
                     <>
                        <Link to="/login">Login</Link>
                     </>
                  )}
                  {is_authenticated && (
                     <>
                        {is_admin(role) && <></>}
                        <NavButton text="Logout" logout={logout}></NavButton>
                     </>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
}
