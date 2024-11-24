import React, { useState, useCallback, useEffect } from "react";
import CategoryLayout from "../../shared/components/category_layout";
import { get_full_food_list as api_get_full_food_list } from "../../features/food/api";
import { Food } from "../../features/food/lib/types";
import FoodBookingSelect from "../../features/food/components/food_booking_select";

export default function BookOrder() {
   const [side_foods, set_side_foods] = useState<Food[]>([]);
   const [main_foods, set_main_foods] = useState<Food[]>([]);
   const [selected_main, set_selected_main] = useState<Food | null>(null);
   const [selected_side, set_selected_side] = useState<Food | null>(null);
   const [error, set_error] = useState<string | null>(null);

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
         set_error("Error fetching foods");
      }
   }, []);

   useEffect(() => {
      fetch_foods().catch(console.error);
   }, [fetch_foods]);

   useEffect(() => {
      console.log(main_foods, side_foods);
   }, [main_foods, side_foods]);

   // const handle_select_main = (food: Food) => {
   //    set_selected_main(food);
   // };

   // const handle_select_side = (food: Food) => {
   //    set_selected_side(food);
   // };

   // const handle_deselect_main = (food: Food) => {
   //    if (selected_main === food) {
   //       set_selected_main(null);
   //    }
   // };

   // const handle_deselect_side = (food: Food) => {
   //    if (selected_side === food) {
   //       set_selected_side(null);
   //    }
   // };

   const handle_toggle_main = (food: Food) => {
      set_selected_main((prevSelected) =>
         prevSelected === food ? null : food
      );
   };

   const handle_toggle_side = (food: Food) => {
      set_selected_side((prevSelected) =>
         prevSelected === food ? null : food
      );
   };

   return (
      <section className="pointer-events-none select-none category category_book_order">
         <CategoryLayout inner_name="in_cont_book_order">
            <section id="book_order">
               <div className="flex flex-col gap-4">
                  <header>
                     <p className="font-main text-secondary text-fs-l sm:text-fs-xl">
                        Order now
                     </p>
                  </header>
                  <hr className="h-[1px] bg-secondary-low-opacity w-full" />
                  <div className="flex flex-col gap-4 font-main md:flex-row md:justify-between">
                     <div className="flex flex-col">
                        <header className="text-fs-l ">Main dishes</header>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                           {main_foods.map((food: Food, i: number) => (
                              <>
                                 <FoodBookingSelect
                                    key={i}
                                    food={food}
                                    i={i}
                                    selected={food === selected_main}
                                    onSelect={handle_toggle_main}
                                    // onDeselect={handle_deselect_main}
                                 />
                              </>
                           ))}
                        </div>
                     </div>
                     <div className="flex flex-col">
                        <header className="text-fs-l">Side dishes</header>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                           {side_foods.map((food: Food, i: number) => (
                              <>
                                 <FoodBookingSelect
                                    key={i}
                                    food={food}
                                    i={i}
                                    selected={food === selected_side}
                                    onSelect={handle_toggle_side}
                                    // onDeselect={handle_deselect_side}
                                 />
                              </>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}

// export function BookingPage() {
//    const [selectedMain, setSelectedMain] = useState<Food | null>(null);
//    const [selectedSide, setSelectedSide] = useState<Food | null>(null);
//    const [year, setYear] = useState<string>("vg1");
//    const [visitDate, setVisitDate] = useState<string>("");

//    const handleMainSelect = (food: Food) => {
//       setSelectedMain(food); // Set the new selected main food
//       setSelectedSide(null); // Reset the side selection when a new main is selected
//    };

//    const handleSideSelect = (food: Food) => {
//       setSelectedSide(food); // Set the selected side food
//    };

//    const handleSubmit = () => {
//       // Handle form submission
//       console.log("Form submitted", {
//          selectedMain,
//          selectedSide,
//          year,
//          visitDate,
//       });
//    };

//    return (
//       <div className="flex flex-col gap-8">
//          <div className="flex">
//             {/* Main Food Selection */}
//             <div className="flex flex-col gap-4">
//                <h2>Select Main Food</h2>
//                {foodList.map((food) => (
//                   <button
//                      key={food.id}
//                      className={`p-4 ${
//                         selectedMain?.id === food.id ? "bg-selected" : ""
//                      }`}
//                      onClick={() => handleMainSelect(food)}
//                   >
//                      {food.name}
//                   </button>
//                ))}
//             </div>

//             {/* Side Food Selection */}
//             <div className="flex flex-col gap-4">
//                <h2>Select Side Food</h2>
//                {foodList.map((food) => (
//                   <button
//                      key={food.id}
//                      className={`p-4 ${
//                         selectedSide?.id === food.id ? "bg-selected" : ""
//                      }`}
//                      onClick={() => handleSideSelect(food)}
//                   >
//                      {food.name}
//                   </button>
//                ))}
//             </div>
//          </div>

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
