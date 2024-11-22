import PageLayout from "../../shared/components/page_layout";
import RegisterForm from "../../features/auth/components/register_form";
import CategoryLayout from "../../shared/components/category_layout";
import { Link } from "react-router-dom";

export default function PageRegister(): JSX.Element {
   return (
      <>
         <PageLayout>
            <CategoryLayout>
               <section className="flex flex-col items-center justify-center h-full">
                  <div className="w-full max-w-[300px] md:max-w-[300px] flex flex-col">
                     <div className="flex justify-center w-full">
                        <Link to={"/"}>
                           <img
                              className="w-auto h-[120px] object-cover"
                              src="/static/assets/icons/favicons/android-chrome-512x512.png"
                              alt="logo"
                           />
                        </Link>
                     </div>
                     <div className="flex flex-col w-full mb-[1rem] items-center">
                        <p className="text-fs-l">Register</p>
                        <p className="text-fs-m">create an account</p>
                     </div>
                     <RegisterForm />
                     <div className="flex flex-row justify-center w-full gap-2">
                        <p className="text-secondary-low-opacity">
                           Have an account?
                        </p>
                        <Link to={"/login"}>
                           <p className="hover:text-main hover:underline">
                              Login
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
