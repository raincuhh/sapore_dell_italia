import React from "react";
import Card from "./card";

type GenericTableProps<T> = {
   data: T[];
   columns: Array<keyof T>;
   actions?: (item: T) => JSX.Element;
};

export function GenericTable<T>({
   data,
   columns,
   actions,
}: GenericTableProps<T>) {
   return (
      <>
         <Card className="sm:max-w-full w-full overflow-scroll bg-bg-secondary max-w-[50rem]">
            <table>
               <thead className="border-b-[1px] border-r-[1px] border-solid border-secondary-low-opacity">
                  <tr>
                     {columns.map((col: keyof T) => (
                        <th
                           key={col as string}
                           className="px-2 border-solid border-secondary-low-opacity border-r-[1px] text-start"
                        >
                           {col as React.ReactNode}
                        </th>
                     ))}
                     {actions && (
                        <th
                        // className="p-2 border"
                        >
                           Actions
                        </th>
                     )}
                  </tr>
               </thead>
               <tbody>
                  {data.map((item: T, index: number) => (
                     <tr key={index}>
                        {columns.map((col) => (
                           <td
                              key={col as string}
                              // className="p-2 border"
                           >
                              {item[col] as React.ReactNode}
                           </td>
                        ))}
                        {actions && (
                           <td
                           // className="p-2 border"
                           >
                              {actions(item)}
                           </td>
                        )}
                     </tr>
                  ))}
               </tbody>
            </table>
         </Card>
      </>
   );
}
