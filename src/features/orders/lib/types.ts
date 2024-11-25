export type Order = {
   order_id: number;
   main_food_id: number | null;
   side_food_id: number | null;
   user_id: number | null;
   year: string;
   day: string;
   first_name: string;
   last_name: string;
};