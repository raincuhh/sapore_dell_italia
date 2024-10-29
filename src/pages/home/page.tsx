import Footer from "../../shared/components/footer";
import PageLayout from "../../shared/components/page_layout";
import Hero from "../../widgets/home/hero";
import ShortAbout from "../../widgets/home/short_about";
import RecommendedList from "../../widgets/home/recommended_list";

export default function Home(): JSX.Element {
   return (
      <PageLayout>
         <Hero />
         <ShortAbout />
         <RecommendedList />
         <Footer />
      </PageLayout>
   );
}
