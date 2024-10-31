type AuthFormInputProps = {
   cont_name: string;
   header_text: string;
   input_type: string;
   input_value: string;
   input_on_change_callback: (value: string) => void;
   input_name: string;
   input_placeholder: string;
};

export default function AuthFormInput({
   header_text,
   input_type,
   input_value,
   input_on_change_callback,
   input_name,
   input_placeholder,
}: AuthFormInputProps) {
   return (
      <div className={"flex flex-col gap-[0.2rem]"}>
         <header>
            <p className="text-fs-s">{header_text}</p>
         </header>
         <div className="form_input_cont">
            <input
               className="w-full focus:border-none focus:outline-none focus:bg-none text-s text-secondary placeholder:text-secondary-low-opacity"
               type={input_type}
               value={input_value}
               onChange={(e) => input_on_change_callback(e.target.value)}
               name={input_name}
               placeholder={input_placeholder}
               autoCorrect="off"
               autoCapitalize="off"
               aria-describedby="passworderror"
               required
            />
         </div>
      </div>
   );
}
