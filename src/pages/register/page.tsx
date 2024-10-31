import PageLayout from "../../shared/components/page_layout";
import RegisterForm from "../../features/auth/components/register_form";
import CategoryLayout from "../../shared/components/category_layout";
import { Link } from "react-router-dom";

export default function PageRegister(): JSX.Element {
   return (
      <>
         <PageLayout>
            <CategoryLayout>
               <section className="auth_form flex flex-col h-full justify-center items-center">
                  <div className="auth_form_container w-full md:max-w-[400px]">
                     <header className="flex w-full text-fs-m md:text-fs-l">
                        <p>Register</p>
                     </header>
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
