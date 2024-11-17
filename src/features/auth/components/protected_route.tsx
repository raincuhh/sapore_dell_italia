import React, { PropsWithChildren, useEffect } from "react";
import { use_auth } from "../lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { UserRoles } from "../../../shared/lib/types";
import { role_str_to_role_enum } from "../../../shared/lib/utils";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({
   children,
}: ProtectedRouteProps): JSX.Element {
   const { is_authenticated, loading, role } = use_auth();
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
      const url = location.pathname;

      if (url.includes("/admin")) {
      }
   }, [is_authenticated, navigate, loading, location.pathname]);

   return <>{children}</>;
}
