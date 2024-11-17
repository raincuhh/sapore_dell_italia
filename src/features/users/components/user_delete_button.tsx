import React from "react";
import { delete_user } from "../api";
import { useState } from "react";

type UserDeleteButtonProps = {
   user_id: number;
   update_users: () => void;
};

export default function UserDeleteButton({
   user_id,
   update_users,
}: UserDeleteButtonProps): React.JSX.Element {
   const [loading, set_loading] = useState(false);

   const handleDelete = async () => {
      set_loading(true);

      try {
         const response = await delete_user(user_id);
         if (response.status === 200) {
            update_users();
         } else {
            console.error("response error: ", response.status);
         }
      } catch (error) {
         console.error("Error deleting user:", error);
         alert("An error occurred while deleting the user.");
      } finally {
         set_loading(false);
      }
   };

   return (
      <>
         <div className="flex justify-center items-center w-full h-full">
            <button
               onClick={handleDelete}
               className="bg-red-600 text-secondary w-full my-2 rounded-sm"
               disabled={loading}
            >
               {loading ? (
                  <span>Deleting...</span>
               ) : (
                  <i className="bx bx-trash"></i>
               )}
            </button>
         </div>
      </>
   );
}
