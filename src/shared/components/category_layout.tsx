import { PropsWithChildren } from "react";

type CategoryLayoutProps = PropsWithChildren & { inner_name?: string };

export default function CategoryLayout({
   children,
   inner_name,
}: CategoryLayoutProps): JSX.Element {
   return (
      <div className="mx-auto max-w-max-width px-[1rem] h-full">
         <div className="mx-[-0.2rem] h-full">
            <div className={`${inner_name || ""} px-[0.2rem] h-full`}>
               {children}
            </div>
         </div>
      </div>
   );
}
