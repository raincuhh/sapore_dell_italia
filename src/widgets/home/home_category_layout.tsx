import { PropsWithChildren } from "react";

type HomeCategoryLayoutProps = PropsWithChildren & { inner_name?: string };

export default function HomeCategoryLayout({
   children,
   inner_name,
}: HomeCategoryLayoutProps): JSX.Element {
   return (
      <div className="mx-auto max-w-max-width px-[1rem]">
         <div className="mx-[-0.2rem]">
            <div className={`${inner_name} px-[0.2rem]`}>{children}</div>
         </div>
      </div>
   );
}
