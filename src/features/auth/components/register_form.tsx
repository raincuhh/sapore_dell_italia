import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryLayout from "../../../shared/components/category_layout";
import { register } from "../api";

export default function RegisterForm() {
   const [username, set_username] = useState("");
   const [password, set_password] = useState("");
   const [email, set_email] = useState("");

   const handle_form_submit = async (e: any) => {
      try {
         e.preventDefault();
         handle_response(register(username, password, email));
      } catch (err) {
         console.error("Error registering: ", err);
      }
   };

   const handle_response = async (response: any) => {
      try {
         console.log(response);
      } catch (err) {
         console.error("Error registering: ", err);
      }
   };

   return (
      <section className="category category_register_form">
         <CategoryLayout>
            <section className="register_form flex flex-col">
               <div className="register_form_containr">
                  <header className="register_form_header flex w-full justify-center text-fs-m md:text-fs-xl">
                     <p>Register to Sapore Dell Italia</p>
                  </header>
                  <div className="register_form_main">
                     <form
                        name="register_form flex flex-col"
                        onSubmit={handle_form_submit}
                     >
                        <div className="register_form_username flex flex-col">
                           <header className="">username</header>
                           <div className="form_input_cont">
                              <input
                                 type="text"
                                 value={username}
                                 onChange={(e) => {
                                    set_username(e.target.value);
                                    //console.log(e.target.value);
                                 }}
                                 name="register_form_username"
                                 placeholder="username"
                                 autoCorrect="off"
                                 autoCapitalize="off"
                                 aria-describedby="passworderror"
                                 required
                              />
                           </div>
                        </div>
                        <div className="register_form_email">
                           <header>email</header>
                           <div className="form_input_cont">
                              <input
                                 type="text"
                                 value={email}
                                 onChange={(e) => {
                                    set_email(e.target.value);
                                 }}
                                 name="register_form_email"
                                 placeholder="email"
                                 autoCorrect="off"
                                 autoCapitalize="off"
                                 aria-describedby="passworderror"
                                 required
                              />
                           </div>
                        </div>
                        <div className="register_form_password">
                           <header>password</header>
                           <div className="form_input_cont">
                              <input
                                 type="text"
                                 value={password}
                                 onChange={(e) => {
                                    set_password(e.target.value);
                                 }}
                                 name="register_form_password"
                                 placeholder="password"
                                 autoCorrect="off"
                                 autoCapitalize="off"
                                 aria-describedby="passworderror"
                                 required
                              />
                           </div>
                        </div>
                        <div className="register_form_submit">
                           <button className="register_form_submit_button">
                              <p>
                                 <span>Register</span>
                              </p>
                           </button>
                        </div>
                     </form>
                  </div>
                  <div className="register_form_login">
                     <div className="flex flex-row">
                        <p>Have an account?</p>
                        <Link to={"/login"}>Login here</Link>
                     </div>
                  </div>
               </div>
            </section>
         </CategoryLayout>
      </section>
   );
}
