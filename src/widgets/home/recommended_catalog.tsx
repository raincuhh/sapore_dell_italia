import { useState, useEffect } from "react";
import CategoryLayout from "../../shared/components/category_layout";
import FoodPreviewProfile from "../../features/food/components/food_preview_profile";
import { fetch_recommended_food_list_test } from "../../features/food/api";
import { Food } from "../../features/food/lib/types";
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
               <div className="flex flex-wrap recommended_catalog_grid">
                  <RenderList
                     data={food_list}
                     render_item={(food: Food, i: number) => (
                        <FoodPreviewProfile
                           key={i}
                           food_id={food.food_id}
                           name={food.name}
                           price={food.price}
                           desc={food.desc}
                           type={food.type}
                           image_path_base={food.image_path_base}
                           image_path_hover={food.image_path_hover}
                           allergies={food.allergies}
                        />
                     )}
                  />
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}
