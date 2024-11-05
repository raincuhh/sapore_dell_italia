import { Link } from "react-router-dom";

type BrandLogoProps = { to_link: string; width_css: string };

export default function BrandLogo({ to_link, width_css }: BrandLogoProps) {
   return (
      <>
         <Link to={to_link}>
            <img
               className={`h-auto ${width_css}`}
               src="/static/assets/icons/favicons/android-chrome-512x512.png"
               alt="brand_logo"
            />
         </Link>
      </>
   );
}
