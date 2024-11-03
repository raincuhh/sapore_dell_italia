import React, { PropsWithChildren, useEffect } from "react";
import { use_auth } from "../lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({
   children,
}: ProtectedRouteProps): JSX.Element {
   const { is_authenticated, loading } = use_auth();
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      // redirect to /login path if user isnt authenticated, otherwise dont do anythng
      if (!is_authenticated) {
         localStorage.setItem("redirect_path", location.pathname);
         navigate("/login", {
            replace: true,
            state: { from: location.pathname },
         });
      }
   }, [is_authenticated, navigate, loading, location.pathname]);

   return <>{children}</>;
}
