import { PropsWithChildren, useEffect, useState } from "react";
import { get_full_user_list as api_get_full_user_list } from "../api";
import RenderList from "../../../shared/components/render_list";
import Card from "../../../shared/components/card";
import UserTableRow from "./user_table_row";

import { User } from "../../../shared/lib/types";

export default function FullUserTable() {
   const [user_list, set_user_list] = useState<User[]>([]);

   const update_users = async () => {
      console.log("updating userssss");
      try {
         const response: any = await api_get_full_user_list();
         const users: User[] = response.data.users;

         const sorted_users = users.sort(
            (a: User, b: User) => a.user_id - b.user_id
         );

         set_user_list(sorted_users);
      } catch (err) {
         console.error("Error:", err);
      }
   };

   useEffect(() => {
      update_users();
   }, []);

   return (
      <>
         <div className="w-full h-full overflow-scroll">
            <Card className="rounded-md py-0 px-0 h-full w-[56rem]">
               <header>
                  <div className="grid grid-cols-7">
                     <UserTableHeaderCol text="id" />
                     <UserTableHeaderCol text="name" />
                     <UserTableHeaderCol text="email" />
                     <UserTableHeaderCol text="pass" />
                     <UserTableHeaderCol text="role" />
                     <UserTableHeaderCol text="jwt_vers" />
                     <UserTableHeaderCol text="actions" />
                  </div>
               </header>
               <RenderList
                  data={user_list}
                  render_item={(user: User) => (
                     <UserTableRow
                        key={user.user_id}
                        user={user}
                        update_users={update_users}
                     />
                  )}
               />
            </Card>
         </div>
      </>
   );
}

type UserTableHeaderColProps = { text: string };

function UserTableHeaderCol({ text }: UserTableHeaderColProps) {
   return (
      <>
         <div className="col-span-1 border-solid border-secondary-low-opacity border-r-[1px] border-b-[1px] px-2 overflow-hidden">
            <div className="overflow-x-scroll break-normal">{text}</div>
         </div>
      </>
   );
}
