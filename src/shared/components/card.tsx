import React, { PropsWithChildren } from "react";

type CardProps = PropsWithChildren & { className?: string };

export default function Card({ children, className }: CardProps): JSX.Element {
   return (
      <>
         <div
            className={`${className} border-solid border-secondary-low-opacity border-[1px] rounded-t-sm`}
         >
            <div className="py-2 px-4">{children}</div>
         </div>
      </>
   );
}
