import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { FoodInfo } from "../lib/types";

export default function FoodPreviewProfile(profile: FoodInfo) {
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
            id={`food_preview_profile_${profile.name}`}
         >
            <div className="w-full food_preview_profile_wrapper h-min">
               <Link
                  className="flex flex-col"
                  to={"/booking"}
                  rel="noopener noreferrer"
               >
                  <div className="relative flex flex-col food_preview_img_cont">
                     <img
                        ref={ref_hover_img}
                        className="absolute w-full opacity-0"
                        src={
                           profile.image_path_base
                              ? profile.image_path_base
                              : "../img/path"
                        }
                        alt="food preview hover image"
                     />
                     <img
                        className="w-full"
                        src={
                           profile.image_path_hover
                              ? profile.image_path_hover
                              : "../img/path"
                        }
                        alt="food preview base image"
                     />
                  </div>
                  <div className="flex flex-col">
                     <div className="flex justify-between font-medium mt-m-em-xxs font-secondary text-fs-m">
                        <div>{profile.name}</div>
                        <div>{profile.price}</div>
                     </div>
                     <div
                        ref={ref_lower_info_cont}
                        className="flex justify-between font-medium mt-m-em-xl text-secondary-low-opacity font-secondary text-fs-m"
                     >
                        <div>{profile.desc_short}</div>
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
