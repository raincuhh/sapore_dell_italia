import PageLayout from "../../shared/components/page_layout";
import RegisterForm from "../../features/auth/components/register_form";
import CategoryLayout from "../../shared/components/category_layout";
import { Link } from "react-router-dom";

export default function PageRegister() {
   return (
      <>
         <PageLayout>
            <CategoryLayout>
               <section className="auth_form flex flex-col h-full justify-center items-center">
                  <div className="auth_form_container md:max-w-[700px]">
                     <header className="flex w-full text-fs-m md:text-fs-l">
                        <p>Register</p>
                     </header>
                     <RegisterForm />

                     <div className="w-full flex flex-row gap-2">
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
