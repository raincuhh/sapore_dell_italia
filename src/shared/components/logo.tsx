import { Link } from "react-router-dom";

type BrandLogoProps = {
   to_link?: string;
   className?: string;
   root_css?: string;
};

export default function BrandLogo({
   to_link,
   className,
   root_css,
}: BrandLogoProps) {
   return (
      <>
         <Link to={to_link || ""} className={root_css}>
            <img
               className={`${className}`}
               src="/static/assets/icons/favicons/android-chrome-512x512.png"
               alt="brand_logo"
            />
         </Link>
      </>
   );
}
