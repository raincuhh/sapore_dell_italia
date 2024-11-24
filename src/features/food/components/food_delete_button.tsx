import React, { useState } from "react";
import { delete_food } from "../api";

type FoodDeleteButtonProps = {
   food_id: number;
   update_foods: () => void;
};

export default function FoodDeleteButton({
   food_id,
   update_foods,
}: FoodDeleteButtonProps): React.JSX.Element {
   const [loading, set_loading] = useState(false);

   const handleDelete = async () => {
      set_loading(true);

      try {
         const response = await delete_food(food_id);
         if (response.status === 200) {
            update_foods();
         } else {
            console.error("response error: ", response.status);
         }
      } catch (error) {
         console.error("Error deleting food:", error);
         alert("An error occurred while deleting the food.");
      } finally {
         set_loading(false);
      }
   };

   return (
      <button
         onClick={handleDelete}
         className="w-full bg-red-600 rounded-sm hover:bg-red-500 text-secondary"
         disabled={loading}
      >
         {loading ? "Deleting..." : <i className="bx bx-trash"></i>}
      </button>
   );
}
