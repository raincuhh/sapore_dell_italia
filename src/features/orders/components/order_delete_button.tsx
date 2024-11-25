import React, { useState } from "react";
import { delete_order } from "../api";

type OrderDeleteButtonProps = {
   order_id: number;
   update_orders: () => void;
};

export default function OrderDeleteButton({
   order_id,
   update_orders,
}: OrderDeleteButtonProps): React.JSX.Element {
   const [loading, set_loading] = useState(false);

   const handleDelete = async () => {
      set_loading(true);

      try {
         const response = await delete_order(order_id);
         if (response.status === 200) {
            update_orders();
         } else {
            console.error("Response error: ", response.status);
         }
      } catch (error) {
         console.error("Error deleting order:", error);
         alert("An error occurred while deleting the order.");
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
