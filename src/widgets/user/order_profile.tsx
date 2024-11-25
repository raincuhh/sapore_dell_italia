import React from "react";
import { UserOrder } from "../../features/orders/lib/types";

type OrderProfileProps = { order: UserOrder };

export default function OrderProfile({ order }: OrderProfileProps) {
   return (
      <>
         <div className="flex flex-col font-main text-fs-m">
            <div className="flex flex-col gap-6 p-2 sm:flex-row ">
               {order.day && (
                  <OrderBlock props={order.day} type="Day"></OrderBlock>
               )}
               {order.main_food_name && (
                  <OrderBlock
                     props={order.main_food_name}
                     type="Main Dish"
                  ></OrderBlock>
               )}
               {order.side_food_name && (
                  <OrderBlock
                     props={order.side_food_name}
                     type="Side Dish"
                  ></OrderBlock>
               )}
            </div>
            <hr className="h-[1px] border-solid border-secondary-low-opacity w-full" />
         </div>
      </>
   );
}

type OrderBlockProps = { type: string; props: string };

function OrderBlock({ type, props }: OrderBlockProps) {
   return (
      <div className="flex flex-col gap-2 text-fs-m md:text-fs-l md:flex-row">
         <span className="flex items-end text-fs-s md:text-fs-m text-secondary-low-opacity">
            {type}
         </span>{" "}
         <span>{props}</span>
      </div>
   );
}
