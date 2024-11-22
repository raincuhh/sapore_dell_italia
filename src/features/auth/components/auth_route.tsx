import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { use_auth } from "../lib/utils";
import { UserRoles } from "../../../shared/lib/types";

type AuthRouteProps = PropsWithChildren;

export default function AuthRoute({ children }: AuthRouteProps): JSX.Element {
   const { is_authenticated, role, loading } = use_auth();
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      if (!loading && is_authenticated) {
         const storedPath: string | null =
            localStorage?.getItem("redirect_path");

         const redirectPath: string =
            storedPath || (role === "admin" ? "/admin" : "/user");

         if (storedPath) {
            localStorage.removeItem("redirect_path");
         }

         navigate(redirectPath, { replace: true });
      }
   }, [is_authenticated, role, loading, navigate, location.state]);

   if (loading) {
      return (
         <>
            <div className="fixed flex items-center justify-center w-full h-full">
               loading...
            </div>
         </>
      );
   }

   return <>{children}</>;
}
