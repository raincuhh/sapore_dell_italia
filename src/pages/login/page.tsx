import PageLayout from "../../shared/components/page_layout";
import LoginForm from "../../features/auth/components/login_form";
import CategoryLayout from "../../shared/components/category_layout";
import { Link } from "react-router-dom";

export default function PageLogin(): JSX.Element {
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
                        <p className="text-fs-m">Login</p>
                        <p className="text-fs-s">here ye here ye ahh</p>
                     </div>
                     <LoginForm />
                     <div className="flex flex-row gap-2 w-full justify-center">
                        <p className="text-secondary-low-opacity">
                           Dont have an account?
                        </p>
                        <Link to={"/register"}>
                           <p className="hover:text-main hover:underline">
                              Register
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
