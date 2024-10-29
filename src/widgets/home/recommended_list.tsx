import HomeCategoryLayout from "./home_category_layout";

export default function RecommendedList(): JSX.Element {
   return (
      <section className="category category_recommended_list">
         <HomeCategoryLayout inner="in_cont_recommended_list">
            <section className="recommended_list">
               <div className="recommended_list_grid flex flex-wrap"></div>
            </section>
         </HomeCategoryLayout>
      </section>
   );
}
