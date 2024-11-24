import { useState, useEffect, useCallback } from "react";
import CategoryLayout from "../../shared/components/category_layout";
import FoodPreviewProfile from "../../features/food/components/food_preview_profile";
import { get_recommended_food_list as api_get_recommended_food_list } from "../../features/food/api";
import { Food } from "../../features/food/lib/types";
import RenderList from "../../shared/components/render_list";

export default function RecommendedCatalog(): JSX.Element {
   const [foods, set_foods] = useState<Food[]>([]);

   const fetch_foods = useCallback(async () => {
      try {
         const response: any = await api_get_recommended_food_list();
         const fetched_foods: Food[] = response.data.foods;
         set_foods(fetched_foods);
      } catch (err) {
         console.error("Error:", err);
      }
   }, []);

   useEffect(() => {
      fetch_foods().catch(console.error);
   }, [fetch_foods]);

   return (
      <section className="category category_recommended_catalog">
         <CategoryLayout inner_name="in_cont_recommended_catalog">
            <section className="recommended_catalog">
               <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
                  <RenderList
                     data={foods}
                     render_item={(food: Food, i: number) => (
                        <FoodPreviewProfile key={i} food={food} />
                     )}
                  />
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}
