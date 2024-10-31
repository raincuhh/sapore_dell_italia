import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";
import AuthProvider from "../features/auth/components/auth_provider";
import "./styles/shared/global.css";

export default function App(): JSX.Element {
   useEffect(() => {
      const sheet_path: string = get_style_sheet(location.pathname);
      import(`./styles/${sheet_path}`)
         .then(() => {
            console.log(`${sheet_path} loaded`);
         })
         .catch(() => console.error(`failed to load ${sheet_path}`));
   }, [location.pathname]);

   return (
      <div className="app">
         <AuthProvider is_logged_in={false}>
            <RouterProvider router={router} />
         </AuthProvider>
      </div>
   );
}

function get_style_sheet(pathname: string): string {
   switch (pathname) {
      case "/":
         return "home/home.css";
      case "/booking":
         return "booking/booking.css";
      case "/register":
         return "shared/auth_page.css";
      case "/login":
         return "shared/auth_page.css";
      default:
         return "shared/global.css";
   }
}
