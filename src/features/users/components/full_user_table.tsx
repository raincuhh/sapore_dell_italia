import { useEffect, useState } from "react";
import { get_full_user_list as api_get_full_user_list } from "../api";

interface User {
   user_id: number;
   name: string;
   email: string;
   role: string;
}

export default function FullUserTable() {
   const [user_list, set_user_list] = useState<[]>([]);

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

   useEffect(() => {
      //console.log(user_list);
   }, [user_list]);

   return (
      <>
         <div className="w-full"></div>

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
