import React, { PropsWithChildren, useEffect } from "react";
import { use_auth } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { User } from "../../users/lib/types";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({
   children,
}: ProtectedRouteProps): JSX.Element {
   const { is_authenticated } = use_auth();
   const navigate = useNavigate();

   useEffect(() => {
      /*
      if (!is_authenticated) {
         navigate("/login", { replace: true });
      }
         */
   }, [is_authenticated, navigate]);

   return <>{children}</>;
}
