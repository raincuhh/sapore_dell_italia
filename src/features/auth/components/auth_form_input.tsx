type AuthFormInputProps = {
   input_type: string;
   input_value: string;
   input_on_change_callback: (value: string) => void;
   input_name: string;
   input_placeholder: string;
};

export default function AuthFormInput({
   input_type,
   input_value,
   input_on_change_callback,
   input_name,
   input_placeholder,
}: AuthFormInputProps) {
   return (
      <input
         className="w-full h-[55px] rounded-sm bg-secondary-low-opacity text-secondary text-s focus:border-none focus:outline-none focus:bg-none px-4"
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
   );
}
