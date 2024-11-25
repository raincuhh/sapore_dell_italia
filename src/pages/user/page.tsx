import CategoryLayout from "../../shared/components/category_layout";
import Navbar from "../../shared/components/navbar";
import PageLayout from "../../shared/components/page_layout";
import OrderList from "../../widgets/user/order_list";
import UserProfile from "../../widgets/user/profile";
import Footer from "../../shared/components/footer";

export default function PageUser(): JSX.Element {
   return (
      <PageLayout>
         <Navbar />
         <div className="pt-[52.9px]"></div>
         <CategoryLayout>
            <UserProfile />
            <OrderList />
         </CategoryLayout>
         <Footer />
      </PageLayout>
   );
}
