import React from "react";
import { useState, useEffect } from "react";
import HomeCategoryLayout from "./home_category_layout";
import FoodPreviewProfile from "../../features/food/components/food_preview_profile";
import { fetch_recommended_food_list_test } from "../../features/food/api";
import { FoodInfo } from "../../features/food/lib/types";

export default function RecommendedCatalog(): JSX.Element {
   const [food_list, set_food_list] = useState([]);

   useEffect(() => {
      // replace test function with actual fetch later on when i actually have stuff in datbase
      fetch_recommended_food_list_test()
         .then((data: any) => {
            set_food_list(Object.values(data));
         })
         .catch((err: any) => console.error(err));
   }, []);

   return (
      <section className="category category_recommended_catalog">
         <HomeCategoryLayout inner_name="in_cont_recommended_catalog">
            <section className="recommended_catalog">
               <div className="recommended_catalog_grid flex flex-wrap">
                  {food_list.map((data: FoodInfo) => (
                     <FoodPreviewProfile
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        price={data.price}
                        short_desc={data.short_desc}
                        long_desc={data.long_desc}
                        image_paths={data.image_paths}
                     ></FoodPreviewProfile>
                  ))}
               </div>
            </section>
         </HomeCategoryLayout>
      </section>
   );
}
