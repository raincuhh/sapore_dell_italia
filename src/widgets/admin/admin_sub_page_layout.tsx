import { PropsWithChildren } from "react";

type AdminSubPageLayoutProps = PropsWithChildren;

export default function AdminSubPageLayout({
   children,
}: AdminSubPageLayoutProps) {
   return (
      <>
         <div className="h-full">
            <div className="h-full px-6 py-4 overflow-scroll max-h-dvh pt-[52.9px]">
               {children}
            </div>
         </div>
      </>
   );
}
