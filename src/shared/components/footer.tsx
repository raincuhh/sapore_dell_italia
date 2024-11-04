import CategoryLayout from "./category_layout";
import SocialList from "./social_list";

export default function Footer(): JSX.Element {
   return (
      <section id="footer">
         <CategoryLayout>
            <div className="mb-m-em-m mt-m-em-xl">
               <p className="text-fs-xl font-libre italic text-main">
                  La Sapore Dell'Italia
               </p>
            </div>
            <footer>
               <header className="mb-m-em-m">
                  <p className="font-libre">
                     Have any questions? Send any inquiries at{" "}
                     <span>
                        {" "}
                        <a
                           className="hover:text-main hover:underline hover:cursor-pointer"
                           href="mailto:la.sapore.dell.italia.business@gmail.com"
                        >
                           questions@gmail.com
                        </a>
                     </span>
                  </p>
               </header>
               <hr className="w-full h-[1px] bg-secondary-low-opacity" />
               <div className="flex flex-col md:flex-row-reverse md:justify-between">
                  <div className="mt-m-em-s mb-m-em-s">
                     <SocialList />
                  </div>
                  <div className="flex flex-col">
                     <div className="flex gap-[1rem] mt-m-em-s mb-m-em-l">
                        <div className="col">
                           <p className="hover:text-main transition-hover-base cursor-pointer font-libre">
                              ©Sapore Dell'Italia 2024
                           </p>
                        </div>
                        <div className="col">
                           <p className="hover:text-main transition-hover-base underline cursor-pointer font-libre">
                              privacy policy
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
