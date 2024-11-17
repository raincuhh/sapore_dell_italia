import React from "react";
import { User } from "../../../shared/lib/types";
import { UserCol } from "./user_col";
import RenderList from "../../../shared/components/render_list";
import UserDeleteButton from "./user_delete_button";

type UserTableRowProps = { user: User; update_users: () => void };

export default function UserTableRow({
   user,
   update_users,
}: UserTableRowProps) {
   const fields: (keyof User)[] = [
      "user_id",
      "name",
      "email",
      "password",
      "role",
      "jwt_version",
   ];

   return (
      <div className="grid grid-cols-7 h-min">
         <RenderList
            data={fields}
            render_item={(field, i) => (
               <UserCol key={i} user={user} field={field} />
            )}
         />
         <div className="col-span-1 border-solid border-secondary-low-opacity border-b-[1px] px-2 overflow-hidden">
            <UserDeleteButton
               user_id={user.user_id}
               update_users={update_users}
            />
         </div>
      </div>
   );
}
