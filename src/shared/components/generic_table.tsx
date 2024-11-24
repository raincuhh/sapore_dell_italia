import React from "react";
import Card from "./card";

type GenericTableProps<T> = {
   data: T[];
   columns: Array<keyof T>;
   editable_columns?: Array<keyof T>;
   on_edit_field?: (item: T, field: keyof T, newValue: any) => void;
   actions?: (item: T) => JSX.Element;
};

export function GenericTable<T>({
   data,
   columns,
   actions,
   editable_columns,
   on_edit_field,
}: GenericTableProps<T>) {
   return (
      <>
         <Card className="w-min">
            <div className="overflow-scroll max-w-[308px] sm:max-w-lg md:max-w-full max-h-[40rem] w-full">
               <table className="bg-bg-secondary">
                  <thead className="border-b-[1px] border-r-[1px] border-solid border-secondary-low-opacity">
                     <tr>
                        {columns.map((col: keyof T) => (
                           <th
                              key={col as string}
                              className="sm:px-4 sm:py-2 border-solid border-secondary-low-opacity border-r-[1px] text-start bg-bg-secondary-alt"
                           >
                              {col as React.ReactNode}
                           </th>
                        ))}
                        {actions && (
                           <th className="px-2 border bg-bg-secondary-alt">
                              Actions
                           </th>
                        )}
                     </tr>
                  </thead>
                  <tbody>
                     {data.map((item: T, index: number) => (
                        <tr
                           key={index}
                           className="border-solid border-b-[1px] border-secondary-low-opacity"
                        >
                           {columns.map((col: keyof T) => (
                              <td
                                 key={col as string}
                                 className=" border-solid border-r-[1px] border-secondary-low-opacity transition-colors duration-100 "
                              >
                                 {editable_columns?.includes(col) ? (
                                    <>
                                       <input
                                          type="text"
                                          autoCorrect="false"
                                          defaultValue={item[col] as any}
                                          // onBlur={(e) => {
                                          //    on_edit_field?.(
                                          //       item,
                                          //       col,
                                          //       e.target.value
                                          //    );
                                          // }}
                                          onKeyDown={(e) => {
                                             if (e.key === "Enter") {
                                                on_edit_field?.(
                                                   item,
                                                   col,
                                                   (
                                                      e.target as HTMLInputElement
                                                   ).value
                                                );
                                             }
                                          }}
                                          required
                                          className="overflow-y-scroll max-w-[5rem] md:max-w-[7rem] sm:py-2 sm:pl-4 w-min cursor-text focus:outline-none focus:bg-bg-secondary-alt hover:bg-bg-secondary-alt"
                                       />
                                    </>
                                 ) : (
                                    <>
                                       <div className="sm:px-4 sm:py-2">
                                          {item[col] as React.ReactNode}
                                       </div>
                                    </>
                                 )}
                              </td>
                           ))}
                           {actions && <td>{actions(item)}</td>}
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </Card>
      </>
   );
}
