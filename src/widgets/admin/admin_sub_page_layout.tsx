import { PropsWithChildren } from "react";

type AdminSubPageLayoutProps = PropsWithChildren;

export default function AdminSubPageLayout({
   children,
}: AdminSubPageLayoutProps) {
   return (
      <>
         <div className="h-full overflow-hidden">
            <div className="px-6 py-4 overflow-x-scroll">{children}</div>
         </div>
      </>
   );
}
