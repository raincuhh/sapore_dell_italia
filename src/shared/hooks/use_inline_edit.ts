import { useState } from "react";

type UpdateCallback<T> = (item: T, field: keyof T, value: any) => Promise<void>;

type UseInlineEditProps<T> = {
   initial_data: T[];
   api_update: UpdateCallback<T>;
};

export function use_inline_edit<T>({
   initial_data,
   api_update,
}: UseInlineEditProps<T>) {
   const [data, set_data] = useState<T[]>(initial_data);

   const handle_edit_field = async (item: T, field: keyof T, value: any) => {
      try {
         const updated_data = data.map((entry) =>
            entry === item ? { ...entry, [field]: value } : entry
         );

         set_data(updated_data);

         await api_update(item, field, value);
      } catch (err) {
         console.error("Error: ", err);
      }
   };

   return { data, set_data, handle_edit_field };
}
