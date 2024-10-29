import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export interface food_preview_profile_params {
   id: number | undefined;
   name: string | undefined;
   price: string | undefined;
   short_desc: string | undefined;
   long_desc: string | undefined;
   image_paths: Array<string> | undefined;
}

export class food_profile {
   id: number | undefined;
   name: string | undefined;
   price: string | undefined;
   short_desc: string | undefined;
   long_desc: string | undefined;
   image_paths: Array<string> | undefined;
   constructor(f: food_preview_profile_params) {
      this.id = f.id;
      this.name = f.name;
      this.price = f.price;
      this.short_desc = f.short_desc;
      this.long_desc = f.long_desc;
      this.image_paths = f.image_paths;
   }
}

export default function FoodPreviewProfile(profile: food_profile) {
   return (
      <>
         <div
            className="food_preview_profile flex-1 w-full h-min"
            id={profile.name}
         >
            <Link
               className=""
               to={`/booking?foodId=${profile.id}`}
               target="_blank"
               rel="noopener noreferrer"
            >
               <div className="food_preview_img_cont">
                  <img
                     className="food_profile_img"
                     src={
                        profile.image_paths && profile.image_paths.length > 0
                           ? profile.image_paths[0]
                           : "../img/path"
                     }
                     alt="food preview hover image"
                  />
                  <img
                     src={
                        profile.image_paths && profile.image_paths.length > 1
                           ? profile.image_paths[1]
                           : "../img/path"
                     }
                     alt="food preview base image"
                  />
               </div>
               <div className="food_preview_info_cont"></div>
            </Link>
         </div>
      </>
   );
}

function validate_food_profile_params(profile: food_profile) {
   return (
      profile.name != undefined &&
      profile.image_paths != undefined &&
      profile.long_desc != undefined &&
      profile.short_desc != undefined &&
      profile.price != undefined
   );
}
