import CategoryLayout from "../../shared/components/category_layout";

export default function Hero(): JSX.Element {
   return (
      <section className="pointer-events-none select-none category category_hero">
         <CategoryLayout inner_name="in_cont_hero">
            <section className="hero">
               <div className="hero_container flex w-full justify-center place-content-center overflow-hidden items-center relative gap-m-em-xs h-[594px]">
                  <header className="hero_title flex-nowrap flex flex-col justify-end gap-m-em-s h-[32px]">
                     <p>/</p>
                     <p>We are</p>
                  </header>
                  <div className="hero_title_list">
                     <div className="hero_title_list_inner flex justify-end flex-col items-start h-[32px] gap-m-em-s">
                        <p className="h1">an italian restaurant.</p>
                        <p className="h1">an inviting escape.</p>
                        <p className="h1">passionate.</p>
                        <p className="h1">a taste of italy.</p>
                        <p className="h1">dedicated to quality.</p>
                        <p className="h1">crafted with care.</p>
                        <p className="h1">pure indulgence.</p>
                        <p className="h1">a culinary journey.</p>
                        <p className="h1">a taste of home.</p>
                        <p className="h1">
                           <span>il Sapore dell'Italia.</span>
                        </p>
                        <p className="h1">a place to gather.</p>
                        <p className="h1">art in every meal.</p>
                        <p className="h1">crafted for joy.</p>
                        <p className="h1">for food lovers.</p>
                        <p className="h1">authentic flavours.</p>
                        <p className="h1">always welcoming.</p>
                        <p className="h1">bringing italy to you.</p>
                        <p className="h1">traditional.</p>
                        <p className="h1">pure italian.</p>
                        <p className="h1">
                           <span>il Sapore dell'Italia.</span>
                        </p>
                        <p className="h1">your local gem.</p>
                        <p className="h1">simple and fresh.</p>
                        <p className="h1">a world of flavor.</p>
                        <p className="h1">an inviting atmosphere.</p>
                        <p className="h1">for every palate.</p>
                        <p className="h1">exquisite pairings.</p>
                        <p className="h1">flavorful experiences.</p>
                        <p className="h1">made for sharing.</p>
                        <p className="h1">celebrating every bite.</p>
                        <p className="h1">
                           <span>il Sapore dell'Italia.</span>
                        </p>
                     </div>
                  </div>
                  <div className="absolute w-full h-full pointer-events-none select-none hero_fading_panel">
                     <div className="pointer-events-none select-none top_fade"></div>
                     <div className="pointer-events-none select-none bottom_fade"></div>
                  </div>
                  <div className="hero_arrow_tip">
                     <i className="bx bx-down-arrow-alt"></i>
                  </div>
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}
