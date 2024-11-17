import { PropsWithChildren } from "react";

type AdminSubPageLayoutProps = PropsWithChildren;

export default function AdminSubPageLayout({
   children,
}: AdminSubPageLayoutProps) {
   return (
      <>
         <div className="sm:py-4 sm:px-8 py-2 px-4 h-full">{children}</div>
      </>
   );
}
