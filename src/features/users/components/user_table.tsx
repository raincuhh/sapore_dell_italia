import React, { useState, useEffect, useCallback } from "react";
import { User, UserRoles } from "../../../shared/lib/types";
import { use_form } from "../../../shared/hooks/use_form";
import { DynamicForm } from "../../../shared/components/dynamic_form";
import { GenericTable } from "../../../shared/components/generic_table";
import { get_full_user_list as api_get_full_user_list } from "../api";
import { register as api_register } from "../../auth/api";
import { update_user as api_update_user } from "../api";
import UserDeleteButton from "./user_delete_button";
import { use_inline_edit } from "../../../shared/hooks/use_inline_edit";

export default function UserTable() {
   const [users, set_users] = useState<User[]>([]);
   const [error, set_error] = useState<string | null>(null);
   const { form_data, handle_change, reset_form } = use_form<User>({
      user_id: 0,
      name: "",
      email: "",
      password: "",
      role: "user",
      jwt_version: 0,
   });

   const fetch_users = useCallback(async () => {
      try {
         const response: any = await api_get_full_user_list();
         const fetched_users: User[] = response.data.users;
         const sorted_users = fetched_users.sort(
            (a: User, b: User) => a.user_id - b.user_id
         );
         set_users(sorted_users);
         set_data(sorted_users);
      } catch (err) {
         console.error("Error:", err);
         set_error("Error fetching users");
      }
   }, []);

   const handle_add_user = async () => {
      try {
         const { name: username, password, email, role } = form_data;
         await api_register(username, password, email, role as UserRoles);
         await fetch_users();

         reset_form();
      } catch (err) {
         console.error("Error:", err);
      }
   };

   const { set_data, handle_edit_field } = use_inline_edit<User>({
      initial_data: [],
      api_update: async (user: User, field: keyof User, value: any) => {
         await api_update_user(user.user_id, field, value);
      },
   });

   useEffect(() => {
      fetch_users().catch(console.error);
   }, [fetch_users]);

   return (
      <>
         <div className="flex flex-col overflow-hidden pt-[52.9px] sm:pt-0">
            <header className="pt-8 font-bold font-main text-fs-l">
               Create user
            </header>
            <DynamicForm
               data={form_data}
               fields={["name", "email", "password", "role"]}
               onChange={handle_change}
               onSubmit={handle_add_user}
               submitLabel="Add User"
            />
            <header className="pt-8 mb-2 font-bold font-main text-fs-l">
               User list
            </header>
            <GenericTable
               data={users}
               columns={["user_id", "name", "password", "email", "role"]}
               editable_columns={["name", "password", "email", "role"]}
               on_edit_field={handle_edit_field}
               actions={(user: User) => (
                  <UserDeleteButton
                     user_id={user.user_id}
                     update_users={fetch_users}
                  />
               )}
            />
         </div>
      </>
   );
}
