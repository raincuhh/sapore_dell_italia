import React, { useState, useEffect, useCallback } from "react";
import { use_form } from "../../../shared/hooks/use_form";
import { DynamicForm } from "../../../shared/components/dynamic_form";
import { GenericTable } from "../../../shared/components/generic_table";
import { use_inline_edit } from "../../../shared/hooks/use_inline_edit";
import { Order } from "../lib/types";
import {
   update_order as api_update_order,
   get_full_order_list as api_get_full_food_list,
   order as api_order,
} from "../api";
import OrderDeleteButton from "./order_delete_button";

export default function OrderTable() {
   const [orders, set_orders] = useState<Order[]>([]);
   const [error, set_error] = useState<string | null>(null);

   const { form_data, handle_change, reset_form } = use_form<Order>({
      order_id: 0,
      main_food_id: null,
      side_food_id: null,
      user_id: null,
      year: "",
      day: "",
      first_name: "",
      last_name: "",
   });

   const fetch_orders = useCallback(async () => {
      try {
         const response: any = await api_get_full_food_list();
         const fetched_orders: Order[] = response.data.orders;
         const sorted_orders = fetched_orders.sort(
            (a: Order, b: Order) => (a.user_id ?? 0) - (b.user_id ?? 0)
         );
         set_orders(sorted_orders);
         set_data(sorted_orders);
      } catch (err) {
         console.error("Error:", err);
         set_error("Error fetching orders");
      }
   }, []);

   const handle_add_order = async () => {
      try {
         await api_order(
            form_data.main_food_id,
            form_data.side_food_id,
            form_data.user_id,
            form_data.year,
            form_data.day,
            form_data.first_name,
            form_data.last_name
         );
         await fetch_orders();
         reset_form();
      } catch (err) {
         console.error("Error adding order:", err);
      }
   };

   const { set_data, handle_edit_field } = use_inline_edit<Order>({
      initial_data: [],
      api_update: async (order: Order, field: keyof Order, value: any) => {
         await api_update_order(order.order_id, field, value);
      },
   });

   useEffect(() => {
      fetch_orders().catch(console.error);
   }, [fetch_orders]);

   return (
      <>
         <div className="flex flex-col overflow-hidden pt-[52.9px] sm:pt-0">
            <header className="pt-8 font-bold font-main text-fs-l">
               Add Order
            </header>
            <DynamicForm
               data={form_data}
               fields={[
                  "main_food_id",
                  "side_food_id",
                  "user_id",
                  "year",
                  "day",
                  "first_name",
                  "last_name",
               ]}
               onChange={handle_change}
               onSubmit={handle_add_order}
               submitLabel="Add Order"
            />
            <header className="pt-8 font-bold font-main text-fs-l">
               Order List
            </header>
            <GenericTable
               data={orders}
               columns={[
                  "main_food_id",
                  "side_food_id",
                  "user_id",
                  "year",
                  "day",
                  "first_name",
                  "last_name",
               ]}
               editable_columns={[
                  "main_food_id",
                  "side_food_id",
                  "year",
                  "day",
                  "first_name",
                  "last_name",
               ]}
               on_edit_field={handle_edit_field}
               actions={(order: Order) => (
                  <OrderDeleteButton
                     order_id={order.order_id ?? 0}
                     update_orders={fetch_orders}
                  />
               )}
            />
         </div>
      </>
   );
}
