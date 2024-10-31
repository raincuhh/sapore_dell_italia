import PageLayout from "../../shared/components/page_layout";
import LoginForm from "../../features/auth/components/login_form";
import CategoryLayout from "../../shared/components/category_layout";
import { Link } from "react-router-dom";

export default function PageLogin(): JSX.Element {
   return (
      <>
         <PageLayout>
            <CategoryLayout>
               <section className="auth_form flex flex-col h-full justify-center items-center">
                  <div className="auth_form_container w-full md:max-w-[400px]">
                     <header className="flex w-full text-fs-m md:text-fs-l">
                        <p>Login</p>
                     </header>
                     <LoginForm />
                     <div className="flex flex-row gap-2 w-full justify-center">
                        <p className="text-secondary-low-opacity">
                           Dont have an account?
                        </p>
                        <Link to={"/register"}>
                           <p className="hover:text-main hover:underline">
                              Register here
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
