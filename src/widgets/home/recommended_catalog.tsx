import { useState, useEffect } from "react";
import CategoryLayout from "../../shared/components/category_layout";
import FoodPreviewProfile from "../../features/food/components/food_preview_profile";
import { fetch_recommended_food_list_test } from "../../features/food/api";
import { FoodInfo } from "../../features/food/lib/types";
import RenderList from "../../shared/components/render_list";

export default function RecommendedCatalog(): JSX.Element {
   const [food_list, set_food_list] = useState([]);

   useEffect(() => {
      // replace test function with actual fetch later on when stuff is done
      fetch_recommended_food_list_test()
         .then((data: any) => {
            set_food_list(Object.values(data));
         })
         .catch((err: any) => console.error(err));
   }, []);

   return (
      <section className="category category_recommended_catalog">
         <CategoryLayout inner_name="in_cont_recommended_catalog">
            <section className="recommended_catalog">
               <div className="recommended_catalog_grid flex flex-wrap">
                  <RenderList
                     data={food_list}
                     render_item={(food: FoodInfo) => (
                        <FoodPreviewProfile
                           key={food.id}
                           id={food.id}
                           name={food.name}
                           price={food.price}
                           short_desc={food.short_desc}
                           long_desc={food.long_desc}
                           image_paths={food.image_paths}
                        />
                     )}
                  />
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}
