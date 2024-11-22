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
         <Card className="overflow-y-scroll bg-bg-secondary max-w-[56rem]">
            <table
            // className="table-auto"
            >
               <thead
               // className="border-b-[1px] border-r-[1px] border-solid border-secondary-low-opacity"
               >
                  <tr>
                     {columns.map((col) => (
                        <th
                           key={col as string}
                           // className="p-2 border"
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
                  {data.map((item, index) => (
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
