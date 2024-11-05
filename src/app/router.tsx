import React from "react";
import {
   BrowserRouter as Router,
   Route,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "../features/auth/components/protected_route";
import PublicRoute from "../features/auth/components/public_route";
import AuthRoute from "../features/auth/components/auth_route";
import PageHome from "../pages/home/page";
import PageBooking from "../pages/booking/page";
import PageError from "../pages/error/page";
import PageRegister from "../pages/register/page";
import PageLogin from "../pages/login/page";
import PageUser from "../pages/user/page";
import PageAdminDashboard from "../pages/admin_dashboard/page";
import PageAdminUserList from "../pages/admin_user_list/page";
import StyleSheetLoader from "../shared/components/style_sheet_loader";

const routes = createRoutesFromElements(
   <>
      <Route
         path="/"
         element={
            <PublicRoute>
               <PageHome />
               <StyleSheetLoader />
            </PublicRoute>
         }
         errorElement={<PageError />}
      />

      <Route
         path="/login"
         element={
            <AuthRoute>
               <PageLogin />
               <StyleSheetLoader />
            </AuthRoute>
         }
         errorElement={<PageError />}
      />
      <Route
         path="/register"
         element={
            <AuthRoute>
               <PageRegister />
               <StyleSheetLoader />
            </AuthRoute>
         }
         errorElement={<PageError />}
      />

      <Route
         path="/user"
         element={
            <ProtectedRoute>
               <PageUser />
               <StyleSheetLoader />
            </ProtectedRoute>
         }
         errorElement={<PageError />}
      />
      <Route
         path="/booking"
         element={
            <ProtectedRoute>
               <PageBooking />
               <StyleSheetLoader />
            </ProtectedRoute>
         }
         errorElement={<PageError />}
      />
      <Route
         path="/admin/dashboard"
         element={
            <ProtectedRoute>
               <PageAdminDashboard />
               <StyleSheetLoader />
            </ProtectedRoute>
         }
      />
      <Route
         path="/admin/dashboard/users"
         element={
            <ProtectedRoute>
               <PageAdminUserList />
               <StyleSheetLoader />
            </ProtectedRoute>
         }
      />
   </>
);

export const router = createBrowserRouter(routes);
