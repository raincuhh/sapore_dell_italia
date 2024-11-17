import { useEffect, useState } from "react";
import { get_full_user_list as api_get_full_user_list } from "../api";
import RenderList from "../../../shared/components/render_list";
import Card from "../../../shared/components/card";

import { User } from "../../../shared/lib/types";

export default function FullUserTable() {
   const [user_list, set_user_list] = useState<User[]>([]);

   const set_users = async () => {
      try {
         const response: any = await api_get_full_user_list();
         const users: any = response.data.users;
         set_user_list(users);
      } catch (err) {
         console.error("Error:", err);
      }
   };

   useEffect(() => {
      set_users();
   }, []);

   return (
      <>
         <div className="w-full h-full">
            <Card>test</Card>
         </div>

         {/* <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
               </tr>
            </thead>
            <tbody>
               {user_list.map((user: User, index) => (
                  <tr key={index}>
                     <td>{user.user_id}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.role}</td>
                  </tr>
               ))}
            </tbody>
         </table> */}
      </>
   );
}
