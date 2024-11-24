import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Food } from "../lib/types";

type FoodPreviewProfileProps = {
   food: Food;
};

export default function FoodPreviewProfile({ food }: FoodPreviewProfileProps) {
   const ref_food_preview_profile: React.RefObject<HTMLDivElement> =
      useRef<HTMLDivElement>(null);
   const ref_booking_arrow: React.RefObject<HTMLDivElement> =
      useRef<HTMLDivElement>(null);
   const ref_lower_info_cont: React.RefObject<HTMLDivElement> =
      useRef<HTMLDivElement>(null);
   const ref_hover_img: React.RefObject<HTMLImageElement> =
      useRef<HTMLImageElement>(null);

   useEffect(() => {
      animate_food_preview_img(ref_hover_img);
      animate_profile(
         ref_food_preview_profile,
         ref_booking_arrow,
         ref_lower_info_cont
      );
   }, []);

   return (
      <>
         <div
            ref={ref_food_preview_profile}
            className="flex-1 w-full food_preview_profile h-min"
            id={`food_preview_profile_${food.name}`}
         >
            <div className="w-full food_preview_profile_wrapper h-min">
               <Link
                  className="flex flex-col"
                  to={"/booking"}
                  rel="noopener noreferrer"
               >
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
                  <div className="flex flex-col gap-8">
                     <div className="flex justify-between mt-2 font-medium text-fs-m font-main">
                        <div className="flex gap-2">
                           {food.name} {food.type}
                        </div>
                        <div>{food.price}</div>
                     </div>
                     <div
                        ref={ref_lower_info_cont}
                        className="flex justify-between font-medium text-secondary-low-opacity text-fs-m font-main"
                     >
                        <div>{food.desc}</div>
                        <div className="flex items-center">
                           <p>booking</p>
                           <i
                              ref={ref_booking_arrow}
                              className="bx bx-right-arrow-alt"
                           ></i>
                        </div>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}

function animate_profile(
   ref_food_preview_profile: React.RefObject<HTMLDivElement>,
   ref_booking_arrow: React.RefObject<HTMLDivElement>,
   ref_lower_info_cont: React.RefObject<HTMLDivElement>
) {
   if (
      !ref_food_preview_profile.current ||
      !ref_booking_arrow.current ||
      !ref_lower_info_cont.current
   )
      return;

   ref_food_preview_profile.current.addEventListener("mouseover", () => {
      gsap.to(ref_booking_arrow.current, {
         rotate: "-45deg",
      });
      gsap.to(ref_lower_info_cont.current, {
         color: "rgba(240, 232, 227, 1)",
      });
   });

   ref_food_preview_profile.current.addEventListener("mouseleave", () => {
      gsap.to(ref_booking_arrow.current, {
         rotate: "0deg",
      });
      gsap.to(ref_lower_info_cont.current, {
         color: "rgba(240, 232, 227, 0.1)",
      });
   });
}

function animate_food_preview_img(
   ref_hover_img: React.RefObject<HTMLImageElement>
) {
   if (!ref_hover_img.current) return;

   ref_hover_img.current.addEventListener("mouseover", () => {
      gsap.to(ref_hover_img.current, {
         opacity: 1,
      });
   });

   ref_hover_img.current.addEventListener("mouseleave", () => {
      gsap.to(ref_hover_img.current, {
         opacity: 0,
      });
   });
}
