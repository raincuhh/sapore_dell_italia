import PageLayout from "../../shared/components/page_layout";
import Footer from "../../shared/components/footer";
import Navbar from "../../shared/components/navbar";
import BookOrder from "../../widgets/booking/book_order";
import CategoryLayout from "../../shared/components/category_layout";
import SelectFoodTitle from "../../widgets/booking/select_food_title";

export default function PageBooking(): JSX.Element {
   return (
      <>
         <PageLayout>
            <Navbar />
            <div className="pt-[53px]"></div>
            <SelectFoodTitle />
            <BookOrder />
            <Footer />
         </PageLayout>
      </>
   );
}
