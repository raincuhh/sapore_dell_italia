import { PropsWithChildren } from "react";
import { User } from "../../../shared/lib/types";

type UserColProps = { user: User; field: keyof User };

export function UserCol({ user, field }: UserColProps) {
   return (
      <>
         <div className="col-span-1 border-solid border-secondary-low-opacity border-r-[1px] border-b-[1px] px-2 overflow-hidden">
            <div className="overflow-x-scroll break-normal">
               {user?.[field]}
            </div>
         </div>
      </>
   );
}
