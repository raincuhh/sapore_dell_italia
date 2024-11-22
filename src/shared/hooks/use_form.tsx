import { useState } from "react";

export function use_form<T>(initialState: T) {
   const [form_data, set_form_data] = useState(initialState);

   const handle_change = (key: keyof T, value: any) => {
      set_form_data((prev) => ({ ...prev, [key]: value }));
   };

   const reset_form = () => set_form_data(initialState);

   return { form_data, handle_change, reset_form };
}
