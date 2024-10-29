import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";
import AuthProvider from "../features/auth/components/auth_provider";

export default function App() {
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
         <AuthProvider is_logged_in={true}>
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
      default:
         return "shared/global.css";
   }
}
