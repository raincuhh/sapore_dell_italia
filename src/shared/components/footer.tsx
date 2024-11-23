import { PropsWithChildren } from "react";
import CategoryLayout from "./category_layout";
import SocialList from "./social_list";
import { Link } from "react-router-dom";

type FooterLinkProps = PropsWithChildren & {
   className?: string;
   href?: string;
};

function FooterLink({ children, className, href }: FooterLinkProps) {
   return (
      <Link
         to={href || ""}
         className={`transition-colors duration-100 hover:text-main ${className}`}
      >
         {children}
      </Link>
   );
}

export default function Footer(): JSX.Element {
   return (
      <section id="footer" className="pb-12 mt-16">
         <CategoryLayout>
            <footer className="flex flex-col">
               <div className="flex flex-col gap-4 xs:gap-[32px] sm:gap-[48px] md:gap-[64px] mb-4">
                  <hr className="h-[1px] w-full bg-secondary-low-opacity" />
                  <header className="flex flex-row items-center justify-between text-fs-m xs:text-fs-l sm:text-fs-xl lg:text-fs-3xl">
                     <p className="font-medium font-main">Any questions?</p>
                     <a
                        className="font-medium underline md:underline-offset-8 hover:text-main transition-hover-base hover:cursor-pointer"
                        href="mailto:la.sapore.dell.italia.business@gmail.com"
                     >
                        questions@gmail.com
                     </a>
                  </header>
                  <hr className="h-[1px] w-full bg-secondary-low-opacity" />
               </div>
               <div className="flex gap-8 sm:gap-16 mb-8 flex-row xs:mt-[32px] sm:mt-[48px] md:mt-[64px]">
                  <div className="flex flex-col gap-2 font-medium font-main text-fs-m sm:text-fs-l">
                     <header className="text-main">sitemap</header>
                     <div className="flex flex-col text-secondary">
                        <FooterLink href="/">home</FooterLink>
                        <FooterLink href="/user">profile</FooterLink>
                        <FooterLink href="/booking">booking</FooterLink>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2 font-medium font-main text-fs-m sm:text-fs-l">
                     <header className="text-main">socials</header>
                     <div className="flex flex-col text-secondary">
                        <FooterLink>facebook</FooterLink>
                        <FooterLink>instagram</FooterLink>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col justify-between gap-4 mt-16">
                  <hr className="h-[1px] w-full bg-secondary-low-opacity" />
                  <div className="flex items-center">
                     ©2024 Sapore Dell'Italia
                  </div>
               </div>
            </footer>
         </CategoryLayout>
      </section>
   );
}
