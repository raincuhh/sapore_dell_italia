import CategoryLayout from "./category_layout";
import SocialList from "./socials";

export default function Footer(): JSX.Element {
   return (
      <section id="footer">
         <CategoryLayout>
            <header className="mb-m-em-m">
               <p className="text-fs-xl font-libre">La Sapore Dell'Italia</p>
            </header>
            <footer>
               <header className="mb-m-em-m">
                  <p>
                     Have any questions? Send any inquiries at{" "}
                     <span>
                        {" "}
                        <a href="mailto:la.sapore.dell.italia.business@gmail.com">
                           questions@gmail.com
                        </a>
                     </span>
                  </p>
               </header>
               <hr className="w-full h-[1px] bg-secondary-low-opacity" />
               <div className="flex flex-col">
                  <div className="mt-m-em-xl mb-m-em-l">
                     <SocialList />
                  </div>
                  <div className="flex flex-col">
                     <div className="w-[75px] h-[75px]">
                        <img
                           className="w-full h-full"
                           src="./static/assets/icons/favicons/android-chrome-512x512.png"
                           alt="logo"
                        />
                     </div>
                     <div className="copyright flex gap-[1rem] mt-[0.5rem] mb-[2rem]">
                        <div className="col">
                           <p>©Sapore Dell'Italia 2024</p>
                        </div>
                        <div className="col">
                           <p>privacy policy</p>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </CategoryLayout>
      </section>
   );
}
