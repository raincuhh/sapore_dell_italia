import { uppercaseify } from "../lib/utils";
import Card from "./card";

type DynamicFormProps<T> = {
   data: T;
   onChange: (key: keyof T, value: any) => void;
   fields: Array<keyof T>;
   onSubmit: () => void;
   submitLabel: string;
};

export function DynamicForm<T>({
   data,
   onChange,
   fields,
   onSubmit,
   submitLabel,
}: DynamicFormProps<T>): JSX.Element {
   return (
      <Card className="sm:max-w-full w-full overflow-y-scroll bg-bg-secondary max-w-[56rem]">
         <form
            onSubmit={(e) => {
               e.preventDefault();
               onSubmit();
            }}
            // className="flex flex-col gap-4"
         >
            {fields.map((field: keyof T) => (
               <div key={field as string}>
                  <label>
                     <div
                     // className="font-medium text-fs-m font-main"
                     >
                        {uppercaseify(field as string)}
                     </div>
                     <input
                        type="text"
                        value={data[field] as any}
                        onChange={(e) => onChange(field, e.target.value)}
                        // className="w-full px-4 py-2 border-[1px] border-solid border-secondary-low-opacity bg-bg-secondary focus:outline-none rounded-sm"
                     />
                  </label>
               </div>
            ))}
            <button
               type="submit"
               // className="w-full h-[50px] flex  text-secondary hover:text-secondary-alt transition-hover-base bg-main rounded-sm hover:bg-main-alt justify-center items-center"
            >
               {submitLabel}
            </button>
         </form>
      </Card>
   );
}
