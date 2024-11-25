import OrderTable from "../../features/orders/components/order_table";
import AdminSubPageLayout from "./admin_sub_page_layout";

export default function AdminOrderListSubPage() {
   return (
      <>
         <AdminSubPageLayout>
            <OrderTable />
         </AdminSubPageLayout>
      </>
   );
}
