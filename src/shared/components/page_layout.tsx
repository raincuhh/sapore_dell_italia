import { PropsWithChildren } from "react";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
   return (
      <div className="page ">
         <div className="flex flex-col font-medium text-[1rem] overflow-x-hidden bg-bg ">
            <main className="text-secondary min-h-[100dvh] h-[100dvh] ">
               {children}
            </main>
         </div>
      </div>
   );
}
