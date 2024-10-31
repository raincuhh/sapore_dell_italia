import Footer from "../../shared/components/footer";
import PageLayout from "../../shared/components/page_layout";
import Hero from "../../widgets/home/hero";
import ShortAbout from "../../widgets/home/short_about";
import RecommendedCatalog from "../../widgets/home/recommended_catalog";
import LongAbout from "../../widgets/home/long_about";
import Navbar from "../../shared/components/navbar";
import { use_auth } from "../../features/auth/lib/auth_utils";
import { is_authenticated } from "../../features/users/lib/perms";

export default function PageHome(): JSX.Element {
   const { user } = use_auth();

   return (
      <>
         <PageLayout>
            <Navbar
               user_type={user?.role}
               is_authenticated={is_authenticated(user)}
            />
            <Hero />
            <ShortAbout />
            <RecommendedCatalog />
            <LongAbout />
            <Footer />
         </PageLayout>
      </>
   );
}
