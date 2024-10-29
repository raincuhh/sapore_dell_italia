import React from "react";
import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./routers/router";

export default function App() {
   React.useEffect(() => {
      const sheet_path: string = get_style_sheet();
      import(`./styles/${sheet_path}`)
         .then(() => console.log(`${sheet_path} loaded`))
         .catch(() => console.error(`failed to load ${sheet_path}`));
   }, [location.pathname]);

   return (
      <div className="app">
         <RouterProvider router={router} />
      </div>
   );
}

function get_style_sheet(): string {
   switch (location.pathname) {
      case "/":
         return "home/home.css";
      case "/booking":
         return "booking/booking.css";
      default:
         return "global.css";
   }
}
