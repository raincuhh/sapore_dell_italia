import React, { useEffect, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use_auth } from "../../features/auth/lib/utils";
import { is_admin } from "../../features/users/lib/perms";
import { AuthContextProps } from "../lib/types";
import BrandLogo from "./logo";

gsap.registerPlugin(ScrollTrigger);

type NavButtonProps = {
   fn?: Function;
   text?: string;
   href?: string;
};

function NavButton({ fn, text, href }: NavButtonProps) {
   return (
      <div
         onClick={() => fn?.()}
         className="font-medium opacity-100 cursor-pointer text-secondary hover:text-main hover:underline transition-hover-base font-main"
      >
         {href ? (
            <>
               <Link to={href}>{text || ""}</Link>
            </>
         ) : (
            <>{text}</>
         )}
      </div>
   );
}

export default function Navbar() {
   const { is_authenticated, role, logout } = use_auth();

   return (
      <nav
         id="navbar"
         className="fixed top-0 left-0 w-full z-[1000] border-solid border-b-secondary-low-opacity border-b-[1px] bg-bg"
      >
         <div className="flex flex-row px-4 py-2 mx-auto max-w-max-width ">
            <div className="flex flex-row justify-between w-full font-medium font-main text-fs-m">
               <div className="flex flex-row items-center gap-4">
                  <BrandLogo to_link="/" className={"h-[36px]"} />
                  {!is_authenticated && (
                     <>
                        <NavButton text="Booking" href="/booking" />
                        <NavButton text="Login" href="/login" />
                     </>
                  )}
                  {is_authenticated && (
                     <>
                        <NavButton text="Booking" href="/booking" />
                        <NavButton text="Profile" href="/user" />
                        {is_admin(role) && (
                           <>
                              <NavButton text="Admin" href="/admin" />
                           </>
                        )}
                        <NavButton text="Logout" fn={logout} />
                     </>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
}
