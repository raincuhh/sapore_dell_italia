import React, { useState, useCallback, useEffect } from "react";
import { Order } from "../../features/orders/lib/types";
import { get_user_orders as api_get_user_orders } from "../../features/orders/api";
import { GenericTable } from "../../shared/components/generic_table";
import { jwtDecode } from "jwt-decode";
import RenderList from "../../shared/components/render_list";
import { UserOrder } from "../../features/orders/lib/types";
import OrderProfile from "./order_profile";
import CategoryLayout from "../../shared/components/category_layout";

export default function OrderList() {
   const [orders, set_orders] = useState<UserOrder[]>([]);
   const [user_id, set_user_id] = useState<number | null>(null);

   const fetch_orders = useCallback(async (user_id: number) => {
      try {
         const response: any = await api_get_user_orders(user_id);
         const fetched_orders: UserOrder[] = response.data.orders;
         set_orders(fetched_orders);
      } catch (err) {
         console.error("Error:", err);
      }
   }, []);

   useEffect(() => {
      const token = localStorage.getItem("jwt_token");
      let user_id: number | null = null;

      if (!token) return;
      const decoded: any = jwtDecode(token);
      user_id = decoded.id;

      if (user_id) {
         set_user_id(user_id);
      }
   }, []);

   useEffect(() => {
      if (user_id !== null) {
         fetch_orders(user_id);
      }
   }, [user_id, fetch_orders]);

   return (
      <>
         <CategoryLayout>
            <div className="flex flex-col gap-2 mt-8">
               <header className="font-bold text-fs-l sm:text-fs-xl">
                  Your Orders
               </header>
               <RenderList
                  data={orders}
                  render_item={(order: UserOrder, i: number) => (
                     <OrderProfile key={i} order={order} />
                  )}
               />
            </div>
         </CategoryLayout>
      </>
   );
}
