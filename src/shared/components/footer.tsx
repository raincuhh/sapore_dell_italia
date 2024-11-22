import CategoryLayout from "./category_layout";
import SocialList from "./social_list";

export default function Footer(): JSX.Element {
   return (
      <section id="footer">
         <CategoryLayout>
            <div className="mb-m-em-m mt-m-em-xl">
               <p className="text-fs-xl sm:text-fs-xxl font-main text-main">
                  La Sapore Dell'Italia
               </p>
            </div>
            <footer>
               <header className="mb-m-em-m">
                  <p className="font-secondary text-fs-s">
                     Have any questions? Send any inquiries at{" "}
                     <span>
                        {" "}
                        <a
                           className="font-medium hover:text-main hover:underline transition-hover-base hover:cursor-pointer"
                           href="mailto:la.sapore.dell.italia.business@gmail.com"
                        >
                           questions@gmail.com
                        </a>
                     </span>
                  </p>
               </header>
               <hr className="w-full h-[1px] bg-secondary-low-opacity" />
               <div className="flex flex-col md:justify-between">
                  {/* <div className="mt-m-em-s mb-m-em-s">
                     <SocialList />
                  </div> */}
                  <div className="flex flex-col">
                     <div className="flex gap-[1rem] mt-m-em-s mb-m-em-l">
                        <div className="col">
                           <p className="font-medium cursor-pointer hover:text-main transition-hover-base font-secondary text-fs-s">
                              ©Sapore Dell'Italia 2024
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </CategoryLayout>
      </section>
   );
}
