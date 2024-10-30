import React, { useState } from "react";
import CategoryLayout from "../../../shared/components/category_layout";

export default function LoginForm() {
   const [username, set_username] = useState("");
   const [password, set_password] = useState("");
   const [email, set_email] = useState("");

   const handle_form_submit = async (e: any) => {
      try {
      } catch (err) {
         console.error("Error registering: ", err);
      }
   };

   return (
      <section className="category category_login_form">
         <CategoryLayout>
            <section className="login_form flex flex-col">
               <header className="login_form_header flex w-full justify-center">
                  <p>Log in to Sapore Dell Italia</p>
               </header>
               <div className="login_form_main">
                  <form
                     onSubmit={handle_form_submit}
                     action="login"
                     method="post"
                  ></form>
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}
