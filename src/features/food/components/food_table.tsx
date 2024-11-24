import React, { useState, useEffect, useCallback } from "react";
import { use_form } from "../../../shared/hooks/use_form";
import { DynamicForm } from "../../../shared/components/dynamic_form";
import { GenericTable } from "../../../shared/components/generic_table";
import { add_food } from "../api";
// import {
//    update_food as api_update_food,
//    get_full_food_list as api_get_full_food_list,
// } from "../api";
// import FoodDeleteButton from "./food_delete_button";
import { use_inline_edit } from "../../../shared/hooks/use_inline_edit";

type Food = {
   food_id: number;
   name: string;
   price: string;
   desc?: string;
   image_path_base?: string;
   image_path_hover?: string;
   allergies: string;
};

export default function FoodTable() {
   const [foods, set_foods] = useState<Food[]>([]);
   const [error, set_error] = useState<string | null>(null);
   const { form_data, handle_change, reset_form } = use_form<Food>({
      food_id: 0,
      name: "",
      price: "",
      desc: "",
      image_path_base: "",
      image_path_hover: "",
      allergies: "",
   });

   const fetch_foods = useCallback(async () => {
      try {
         //const response: any = await api_get_full_food_list();
         //  const fetched_foods: Food[] = response.data.foods;
         //  const sorted_foods = fetched_foods.sort(
         //     (a: Food, b: Food) => a.food_id - b.food_id
         //  );
         //  set_foods(sorted_foods);
         //  set_data(sorted_foods);
      } catch (err) {
         console.error("Error:", err);
         set_error("Error fetching foods");
      }
   }, []);

   const handle_add_food = async () => {
      try {
         await add_food(form_data);
         await fetch_foods();
         reset_form();
      } catch (err) {
         console.error("Error adding food:", err);
      }
   };

   const { set_data, handle_edit_field } = use_inline_edit<Food>({
      initial_data: [],
      api_update: async (food: Food, field: keyof Food, value: any) => {
         //  await api_update_food(food.food_id, field, value);
      },
   });

   useEffect(() => {
      fetch_foods().catch(console.error);
   }, [fetch_foods]);

   return (
      <>
         <div className="flex flex-col overflow-hidden pt-[52.9px] sm:pt-0">
            <header className="pt-8 font-bold font-main text-fs-l">
               Add Food
            </header>
            <DynamicForm
               data={form_data}
               fields={[
                  "name",
                  "price",
                  "desc",
                  "image_path_base",
                  "image_path_hover",
                  "allergies",
               ]}
               onChange={handle_change}
               onSubmit={handle_add_food}
               submitLabel="Add Food"
            />
            <header className="pt-8 font-bold font-main text-fs-l">
               Food List
            </header>
            <GenericTable
               data={foods}
               columns={[
                  "food_id",
                  "name",
                  "price",
                  "desc",
                  "image_path_base",
                  "image_path_hover",
                  "allergies",
               ]}
               editable_columns={[
                  "name",
                  "price",
                  "desc",
                  "image_path_base",
                  "image_path_hover",
                  "allergies",
               ]}
               on_edit_field={handle_edit_field}
               //  actions={(food: Food) => (
               //     <FoodDeleteButton
               //        food_id={food.food_id}
               //        update_foods={fetch_foods}
               //     />
               //  )}
            />
         </div>
      </>
   );
}
