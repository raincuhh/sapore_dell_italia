import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormInput from "./auth_form_input";
import { register } from "../api";

export default function RegisterForm(): JSX.Element {
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
         console.error("Error: ", err);
      }
   };

   const handle_response = async (response: any) => {
      console.log(response);
      if (response.data.message === "Registration successful") {
         navigate("/login");
      } else {
         console.error("Error: ", response.data.error);
      }
   };

   return (
      <form
         name="auth_form"
         className="flex flex-col w-full"
         onSubmit={handle_form_submit}
      >
         <div className="flex flex-col w-full gap-[2px]">
            <AuthFormInput
               input_type="text"
               input_value={username}
               input_on_change_callback={set_username}
               input_name="auth_form_username"
               input_placeholder="username"
            />
            <AuthFormInput
               input_type="email"
               input_value={email}
               input_on_change_callback={set_email}
               input_name="auth_form_email"
               input_placeholder="email"
            />
            <AuthFormInput
               input_type="password"
               input_value={password}
               input_on_change_callback={set_password}
               input_name="auth_form_password"
               input_placeholder="password"
            />
         </div>
         <button className="w-full h-[50px] flex  text-secondary hover:text-secondary-alt transition-hover-base bg-main rounded-sm hover:bg-main-alt mt-[1rem] mb-[0.5rem] justify-center items-center ">
            <div className="flex justify-center items-center gap-[0.2rem]">
               <p className="font-bold">Register</p>
               <i className="bx bx-link-external font-bold"></i>
            </div>
         </button>
      </form>
   );
}
