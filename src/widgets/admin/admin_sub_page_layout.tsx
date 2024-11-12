import { PropsWithChildren } from "react";

type AdminSubPageLayoutProps = PropsWithChildren;

export default function AdminSubPageLayout({
   children,
}: AdminSubPageLayoutProps) {
   return (
      <>
         <div className="sm:py-2 sm:px-4 py-1 px-2 h-full">{children}</div>
      </>
   );
}
