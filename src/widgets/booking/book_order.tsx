import React, { useState, useCallback, useEffect } from "react";
import CategoryLayout from "../../shared/components/category_layout";
import { get_full_food_list as api_get_full_food_list } from "../../features/food/api";
import { Food } from "../../features/food/lib/types";
import FoodBookingSelect from "../../features/food/components/food_booking_select";
import { uppercaseify } from "../../shared/lib/utils";

export type BookingDays = "monday" | "tuesday"; //to friday

export default function BookOrder() {
   const [side_foods, set_side_foods] = useState<Food[]>([]);
   const [main_foods, set_main_foods] = useState<Food[]>([]);
   const [selected_main, set_selected_main] = useState<Food | null>(null);
   const [selected_side, set_selected_side] = useState<Food | null>(null);
   const [year, set_year] = useState<string>("vg1");
   const [visit_day, set_visit_day] = useState<string>("monday");
   const [first_name, set_first_name] = useState<string>("");
   const [last_name, set_last_name] = useState<string>("");

   const fetch_foods = useCallback(async () => {
      try {
         const response: any = await api_get_full_food_list();
         const fetched_foods: Food[] = response.data.foods;
         const sorted_foods = fetched_foods.sort(
            (a: Food, b: Food) => a.food_id - b.food_id
         );

         const sides = sorted_foods.filter((food) => food.type === "side");
         const mains = sorted_foods.filter((food) => food.type === "main");

         set_side_foods(sides);
         set_main_foods(mains);
      } catch (err) {
         console.error("Error:", err);
      }
   }, []);

   useEffect(() => {
      fetch_foods().catch(console.error);
   }, [fetch_foods]);

   useEffect(() => {
      console.log(main_foods, side_foods);
   }, [main_foods, side_foods]);

   const handle_toggle_main = (food: Food) => {
      set_selected_main((prevSelected) =>
         prevSelected === food ? null : food
      );
      set_selected_side(null);
   };

   const handle_toggle_side = (food: Food) => {
      set_selected_side((prevSelected) =>
         prevSelected === food ? null : food
      );
   };

   const handle_submit = async () => {
      if (!selected_main || (!selected_main && !selected_side)) return;
      console.log("form submitted: ", {
         selected_main,
         selected_side,
         year,
         visit_day,
         first_name,
         last_name,
      });

      set_selected_main(null);
      set_selected_side(null);
      set_year("vg1");
      set_visit_day("monday");
      set_first_name("");
      set_last_name("");
   };

   return (
      <section className="pointer-events-none select-none category category_book_order">
         <CategoryLayout inner_name="in_cont_book_order">
            <section id="book_order">
               <div className="flex flex-col items-center justify-center gap-4">
                  <header>
                     <p className="font-main text-secondary text-fs-l sm:text-fs-xl">
                        Order
                     </p>
                  </header>
                  <div className="flex flex-col gap-4 font-main md:flex-row md:justify-between">
                     <div className="flex flex-col">
                        <header
                           className={`text-fs-l ${
                              selected_main ? "text-main" : ""
                           } transition-colors duration-100 ease-in-out`}
                        >
                           Main dishes
                        </header>
                        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 ">
                           {main_foods.map((food: Food, i: number) => (
                              <FoodBookingSelect
                                 key={i}
                                 food={food}
                                 i={i}
                                 selected={food === selected_main}
                                 onSelect={handle_toggle_main}
                              />
                           ))}
                        </div>
                     </div>
                     <hr className="h-[1px] bg-secondary-low-opacity w-full md:hidden my-8" />
                     <div className="flex flex-col">
                        <header
                           className={`text-fs-l ${
                              selected_side ? "text-main" : ""
                           } transition-colors duration-100 ease-in-out`}
                        >
                           Side dishes
                        </header>
                        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                           {side_foods.map((food: Food, i: number) => (
                              <FoodBookingSelect
                                 key={i}
                                 food={food}
                                 i={i}
                                 selected={food === selected_side}
                                 onSelect={handle_toggle_side}
                                 // onDeselect={handle_deselect_side}
                              />
                           ))}
                        </div>
                     </div>
                  </div>
                  <header className="mt-8 text-fs-l sm:text-fs-xl">
                     Info{" "}
                  </header>
                  <div className="flex flex-col items-center justify-center w-full max-w-md gap-4 font-main text-fs-m">
                     <form
                        className="flex flex-col w-full gap-4 font-medium pointer-events-auto select-all"
                        name="info-form"
                        id="info-form"
                        onSubmit={(e) => {
                           e.preventDefault();
                           handle_submit();
                        }}
                     >
                        <label htmlFor="year" className="select-none">
                           <div className="font-medium text-fs-m font-main">
                              Year
                           </div>
                           <select
                              id="year"
                              value={year}
                              onChange={(e) => set_year(e.target.value)}
                              required
                              className="w-full px-4 py-2 rounded-sm bg-bg-secondary focus:outline-none border-[1px] border-solid border-secondary-low-opacity"
                           >
                              <option value="vg1">Vg1</option>
                              <option value="vg2">Vg2</option>
                              <option value="vg3">Vg3</option>
                              <option value="ansatt">Staff</option>
                           </select>
                        </label>
                        <label htmlFor="visit-day" className="select-none">
                           <div className="font-medium text-fs-m font-main">
                              Visiting
                           </div>
                           <select
                              id="visit-day"
                              value={visit_day}
                              onChange={(e) => set_visit_day(e.target.value)}
                              required
                              className="w-full px-4 py-2 rounded-sm bg-bg-secondary focus:outline-none border-[1px] border-solid border-secondary-low-opacity"
                           >
                              <option value="monday">Monday</option>
                              <option value="tuesday">Tuesday</option>
                              <option value="wednesday">Wednesday</option>
                              <option value="thursday">Thursday</option>
                              <option value="friday">Friday</option>
                           </select>
                        </label>
                        <label htmlFor="first-name" className="select-none">
                           <div className="font-medium text-fs-m font-main">
                              First name
                           </div>
                           <input
                              id="first-name"
                              type="text"
                              placeholder="First name"
                              onChange={(e) => set_first_name(e.target.value)}
                              required
                              value={first_name}
                              className="w-full px-4 py-2 border-[1px] border-solid border-secondary-low-opacity bg-bg-secondary focus:outline-none rounded-sm placeholder:text-secondary-low-opacity"
                           />
                        </label>
                        <label htmlFor="last-name" className="select-none">
                           <div className="font-medium text-fs-m font-main">
                              Last name
                           </div>
                           <input
                              id="last-name"
                              type="text"
                              placeholder="name"
                              onChange={(e) => set_last_name(e.target.value)}
                              required
                              value={last_name}
                              className="w-full px-4 py-2 border-[1px] border-solid border-secondary-low-opacity bg-bg-secondary focus:outline-none rounded-sm placeholder:text-secondary-low-opacity"
                           />
                        </label>
                        <button
                           type="submit"
                           className="w-full h-[50px] flex text-secondary mt-8 hover:text-secondary-alt transition-hover-base bg-main rounded-sm hover:bg-main-alt justify-center items-center font-main text-fs-m"
                        >
                           Order Now
                        </button>
                     </form>
                  </div>
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}

//          {/* Form for Year, Date, etc. */}
//          <form
//             onSubmit={(e) => {
//                e.preventDefault();
//                handleSubmit();
//             }}
//             className="flex flex-col gap-4"
//          >
//             <div>
//                <label htmlFor="year">Year</label>
//                <select
//                   id="year"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                   className="p-2"
//                >
//                   <option value="vg1">VG1</option>
//                   <option value="vg2">VG2</option>
//                   <option value="vg3">VG3</option>
//                   <option value="ansatt">Ansatt</option>
//                </select>
//             </div>

//             <div>
//                <label htmlFor="visitDate">Visit Date</label>
//                <input
//                   type="date"
//                   id="visitDate"
//                   value={visitDate}
//                   onChange={(e) => setVisitDate(e.target.value)}
//                   className="p-2"
//                />
//             </div>

//             <button
//                type="submit"
//                className="p-4 text-white rounded-sm bg-primary"
//             >
//                Submit Booking
//             </button>
//          </form>
//       </div>
//    );
// }
