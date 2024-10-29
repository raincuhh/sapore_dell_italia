import Footer from "../../shared/components/footer";
import PageLayout from "../../shared/components/page_layout";
import Hero from "../../widgets/home/hero";
import ShortAbout from "../../widgets/home/short_about";
import RecommendedCatalog from "../../widgets/home/recommended_catalog";
import LongAbout from "../../widgets/home/long_about";

export default function PageHome(): JSX.Element {
   return (
      <>
         <PageLayout>
            <Hero />
            <ShortAbout />
            <RecommendedCatalog />
            <LongAbout />
            <Footer />
         </PageLayout>
      </>
   );
}
