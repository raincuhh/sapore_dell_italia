import React from "react";
import { useState } from "react";
import HomeCategoryLayout from "./home_category_layout";
import FoodPreviewProfile from "../../features/food/ui/food_preview_profile";
import { fetch_recommended_food_list_test } from "../../features/food/api";

export default function RecommendedCatalog(): JSX.Element {
   type food_info = {
      id: number;
      name: string;
      price: string;
      short_desc: string;
      long_desc: string;
      image_paths: string[];
   };
   const [food_list, set_food_list] = useState([]);

   React.useEffect(() => {
      // replace test function with actual fetch later on when i actually have stuff in datbase
      fetch_recommended_food_list_test()
         .then((data: any) => {
            set_food_list(Object.values(data));
         })
         .catch((err: any) => console.error(err));
   }, []);

   return (
      <section className="category category_recommended_catalog">
         <HomeCategoryLayout innerName="in_cont_recommended_catalog">
            <section className="recommended_catalog">
               <div className="recommended_catalog_grid flex flex-wrap">
                  {food_list.map((data: food_info) => (
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
