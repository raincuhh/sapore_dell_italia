import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthFormInput from "./auth_form_input";
import { register } from "../api";

export default function RegisterForm() {
   const [username, set_username] = useState("");
   const [password, set_password] = useState("");
   const [email, set_email] = useState("");
   const navigate = useNavigate();

   const handle_form_submit = async (e: React.FormEvent) => {
      try {
         e.preventDefault();
         const response: any = await register(username, password, email);
         handle_response(response);
      } catch (err) {
         console.error("Error registering: ", err);
      }
   };

   const handle_response = async (response: any) => {
      console.log(response);
      if (response.message === "registration successful") {
         navigate("/user");
      } else {
         console.error(
            "Registration Failed: ",
            response.data || "An error occurred"
         );
      }
   };

   return (
      <form
         name="auth_form"
         className="flex flex-col w-full"
         onSubmit={handle_form_submit}
      >
         <hr className="h-[1px] bg-secondary-low-opacity mb-m-em-l mt-m-em-m" />
         <AuthFormInput
            cont_name="form_username"
            header_text="username"
            input_type="text"
            input_value={username}
            input_on_change_callback={set_username}
            input_name="auth_form_username"
            input_placeholder="enter your username"
         />
         <hr className="h-[1px] bg-secondary-low-opacity my-m-em-l" />
         <AuthFormInput
            input_type="email"
            cont_name="form_email"
            header_text="email"
            input_value={email}
            input_on_change_callback={set_email}
            input_name="auth_form_email"
            input_placeholder="enter your mail"
         />
         <hr className="h-[1px] bg-secondary-low-opacity my-m-em-l" />
         <AuthFormInput
            cont_name="form_password"
            header_text="password"
            input_type="password"
            input_value={password}
            input_on_change_callback={set_password}
            input_name="auth_form_password"
            input_placeholder="enter your password"
         />
         <hr className="h-[1px] bg-secondary-low-opacity my-m-em-l " />
         <div className="form_submit w-full h-full justify-center items-center mb-m-em-s">
            <button className="text-secondary  transition-hover-base w-full h-[48px] bg-main rounded-[6px] hover:bg-main-alt relative">
               <p className="absolute w-full h-full translate-y-[-25%] ">
                  Register
               </p>
            </button>
         </div>
      </form>
   );
}