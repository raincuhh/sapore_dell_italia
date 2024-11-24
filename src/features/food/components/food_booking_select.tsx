import React, { forwardRef, useEffect } from "react";
import { Food } from "../lib/types";

type FoodBookingSelectProps = {
   food: Food;
   i: number;
   selected?: boolean;
   onSelect: (food: Food) => void;
};

const FoodBookingSelect = forwardRef<HTMLDivElement, FoodBookingSelectProps>(
   ({ food, i, selected, onSelect }: FoodBookingSelectProps, ref) => {
      // useEffect(() => {
      //    console.log(food);
      //    console.log(food.img_path_base);
      // }, [food]);

      return (
         <div key={i} ref={ref}>
            <div
               className={`${
                  selected ? "border-main hover:border-main-alt" : ""
               } border-solid border-[1px] pointer-events-auto select-all border-secondary-low-opacity hover:border-secondary transition-colors duration-100 ease-in-out`}
               onClick={() => onSelect(food)}
            >
               <div className="flex flex-col gap-2 p-2 cursor-pointer select-none">
                  <div className="relative w-full aspect-[16/9] max-h-[300px] h-[150px] md:h-full overflow-hidden">
                     <img
                        src={food.img_path_base}
                        alt="food hover image"
                        className="absolute inset-0 object-cover w-full h-full opacity-100 hover:opacity-100"
                     />
                     <img
                        src={food.img_path_hover}
                        alt="food base image"
                        className="absolute inset-0 object-cover w-full h-full select-none"
                     />
                  </div>
                  <div
                     className={`${
                        selected ? "!text-main !hover:text-main-alt" : ""
                     } text-secondary flex flex-col gap-4 justify-between max-h-[150px] h-150px text-fs-s sm:text-fs-m font-medium`}
                  >
                     <div className="flex justify-between">
                        <div className="flex flex-row">
                           {food.name}
                           {", ".concat(food.type)}
                        </div>
                        <div>{food.price}£</div>
                     </div>
                     <div
                        className={`flex justify-between text-secondary-low-opacity ${
                           selected ? "text-main-alt" : ""
                        }`}
                     >
                        <div>{food.desc}</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
);

FoodBookingSelect.displayName = "FoodBookingSelect";

export default FoodBookingSelect;
