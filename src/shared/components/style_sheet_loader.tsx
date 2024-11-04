import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function StyleSheetLoader() {
   const location = useLocation();

   useEffect(() => {
      const sheet_path: string = get_style_sheet(location.pathname);
      import(`../../../public/static/styles/${sheet_path}`)
         .then(() => {
            console.log(`${sheet_path} loaded`);
         })
         .catch(() => console.error(`failed to load ${sheet_path}`));
   }, [location.pathname]);

   return null;
}

function get_style_sheet(pathname: string): string {
   switch (pathname) {
      case "/":
         return "home/style.css";
      case "/booking":
         return "booking/style.css";
      case "/register":
         return "shared/auth_page.css";
      case "/login":
         return "shared/auth_page.css";
      case "/admin/users":
         return "admin_user_list/style.css";
      default:
         return "shared/global.css";
   }
}
