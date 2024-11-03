import PageLayout from "../../shared/components/page_layout";
import RegisterForm from "../../features/auth/components/register_form";
import CategoryLayout from "../../shared/components/category_layout";
import { Link } from "react-router-dom";

export default function PageRegister(): JSX.Element {
   return (
      <>
         <PageLayout>
            <CategoryLayout>
               <section className="flex flex-col h-full justify-center items-center">
                  <div className="w-full max-w-[300px] md:max-w-[300px] flex flex-col">
                     <div className="w-full flex justify-center">
                        <Link to={"/"}>
                           <img
                              className="w-auto h-[120px] object-cover"
                              src="/static/assets/icons/favicons/android-chrome-512x512.png"
                              alt="logo"
                           />
                        </Link>
                     </div>
                     <div className="flex flex-col w-full mb-[1rem] items-center">
                        <p className="text-fs-m">Register</p>
                        <p className="text-fs-s">register to us?</p>
                     </div>
                     <RegisterForm />
                     <div className="flex flex-row gap-2 w-full justify-center">
                        <p className="text-secondary-low-opacity">
                           Have an account?
                        </p>
                        <Link to={"/login"}>
                           <p className="hover:text-main hover:underline">
                              Login here
                           </p>
                        </Link>
                     </div>
                  </div>
               </section>
            </CategoryLayout>
         </PageLayout>
      </>
   );
}
