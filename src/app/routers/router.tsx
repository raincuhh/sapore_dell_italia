import React from "react";
import {
   BrowserRouter as Router,
   Route,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "../../features/auth/components/protected_route";
import PublicRoute from "../../features/auth/components/public_route";
import AuthRoute from "../../features/auth/components/auth_route";
import PageHome from "../../pages/home/page";
import PageBooking from "../../pages/booking/page";
import PageError from "../../pages/error/page";
import PageRegister from "../../pages/register/page";
import PageLogin from "../../pages/login/page";
import PageUser from "../../pages/user/page";
import PageAdminDashboard from "../../pages/admin_dashboard/page";
import Navbar from "../../shared/components/navbar";

const routes = createRoutesFromElements(
   <>
      <Route
         path="/"
         element={
            <PublicRoute>
               <PageHome />
            </PublicRoute>
         }
         errorElement={<PageError />}
      />

      <Route
         path="/login"
         element={
            <AuthRoute>
               <PageLogin />
            </AuthRoute>
         }
         errorElement={<PageError />}
      />
      <Route
         path="/register"
         element={
            <AuthRoute>
               <PageRegister />
            </AuthRoute>
         }
         errorElement={<PageError />}
      />

      <Route
         path="/user"
         element={
            <ProtectedRoute>
               <PageUser />
            </ProtectedRoute>
         }
         errorElement={<PageError />}
      />
      <Route
         path="/admin/dashboard"
         element={
            <ProtectedRoute>
               <PageAdminDashboard />
            </ProtectedRoute>
         }
      />
      <Route
         path="/booking"
         element={
            <ProtectedRoute>
               <PageBooking />
            </ProtectedRoute>
         }
         errorElement={<PageError />}
      />
   </>
);

export const router = createBrowserRouter(routes);
