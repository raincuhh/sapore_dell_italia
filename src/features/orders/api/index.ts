import { AxiosResponse } from "axios";
import { axios_instance } from "../../../shared/lib/axios_instance";

export async function order(
   main_food_id: number | null,
   side_food_id: number | null,
   user_id: number | null,
   year: string,
   day: string,
   first_name: string,
   last_name: string
): Promise<AxiosResponse<any, any>> {
   try {
      // console.log("user idd: ", user_id);
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/orders/api/order.php",
         {
            main_food_id,
            side_food_id,
            user_id,
            year,
            day,
            first_name,
            last_name,
         }
      );
      return response;
   } catch (err) {
      console.error("Error: ", err);
      throw new Error("Order failed");
   }
}

export async function update_order(
   order_id_: number,
   field: string,
   value: any
): Promise<AxiosResponse<any, any>> {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/orders/api/update_order.php",
         {
            order_id: order_id_,
            field,
            value,
         }
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to update order");
   }
}

export async function delete_order(
   order_id_: number
): Promise<AxiosResponse<any, any>> {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/orders/api/delete_order.php",
         {
            order_id: order_id_,
         }
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to delete order");
   }
}

export async function get_full_order_list() {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.get(
         "/src/features/orders/api/get_full_order_list.php"
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to fetch order list");
   }
}

export async function get_user_orders(user_id: number) {
   try {
      const response: AxiosResponse<any, any> = await axios_instance.post(
         "/src/features/orders/api/get_user_orders.php",
         {
            user_id: user_id,
         }
      );
      return response;
   } catch (err) {
      console.error("Error:", err);
      throw new Error("Failed to fetch user orders");
   }
}
