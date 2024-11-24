import FoodTable from "../../features/food/components/food_table";
import AdminSubPageLayout from "./admin_sub_page_layout";

export default function AdminFoodListSubPage() {
   return (
      <>
         <AdminSubPageLayout>
            <FoodTable />
         </AdminSubPageLayout>
      </>
   );
}
