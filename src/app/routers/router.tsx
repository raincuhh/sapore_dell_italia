import React from "react";
import {
   BrowserRouter as Router,
   Route,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import Home from "../../pages/home/page";
import Booking from "../../pages/booking/page";
import { ErrorBoundary } from "./error_route";

export const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
         <Route
            path="/booking"
            element={<Booking />}
            errorElement={<ErrorBoundary />}
         />
      </>
   )
);
