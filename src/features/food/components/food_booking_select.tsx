import React, { forwardRef } from "react";
import { Food } from "../lib/types";

type FoodBookingSelectProps = {
   food: Food;
   i: number;
   selected?: boolean;
   onSelect: (food: Food) => void;
   //  onDeselect: (food: Food) => void;
};

const FoodBookingSelect = forwardRef<HTMLDivElement, FoodBookingSelectProps>(
   ({ food, i, selected, onSelect }: FoodBookingSelectProps, ref) => {
      // const handle_right_click = (e: React.MouseEvent) => {
      //    e.preventDefault();
      //    onDeselect(food);
      // };

      return (
         <div key={i} className="h-min" ref={ref}>
            <div
               className={`${
                  selected ? "border-main hover:border-main-alt" : ""
               } border-solid border-[1px] pointer-events-auto select-all border-secondary-low-opacity hover:border-secondary transition-colors duration-100 ease-in-out`}
               onClick={() => onSelect(food)}
               //  onContextMenu={handle_right_click}
            >
               <div className="flex-col p-2 select-none">
                  {/* <div className="p-2">{food.name}</div>
                  {selected && <>selected</>} */}
                  <div className="relative">
                     <img
                        className="absolute w-full opacity-0"
                        alt="food hover image"
                     />
                     <img className="w-full" alt="food base image" />
                  </div>
               </div>
            </div>
         </div>
      );
   }
);

FoodBookingSelect.displayName = "FoodBookingSelect";

export default FoodBookingSelect;
