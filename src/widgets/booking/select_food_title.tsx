import React from "react";
import CategoryLayout from "../../shared/components/category_layout";

export default function SelectFoodTitle() {
   return (
      <section className="pointer-events-none select-none category category_select_food_title">
         <CategoryLayout inner_name="in_cont_select_food_title">
            <section id="select_food_title">
               <div className="flex flex-col items-center gap-4 my-6 sm:my-10 md:my-20">
                  <header className="font-main text-main text-fs-xl sm:text-fs-2xl md:text-fs-4xl">
                     La Sapore Dell Italia
                  </header>
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}
