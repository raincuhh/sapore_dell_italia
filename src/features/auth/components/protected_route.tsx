import React, { PropsWithChildren, useEffect } from "react";
import { use_auth } from "../lib/auth_utils";
import { useNavigate } from "react-router-dom";
import { User } from "../../users/lib/types";
import { is_logged_in } from "../../users/lib/perms";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({
   children,
}: ProtectedRouteProps): JSX.Element {
   const user: User | null = use_auth();
   const navigate = useNavigate();

   useEffect(() => {
      if (!is_logged_in(user)) {
         navigate("/login", { replace: true });
      }
   }, [user, navigate]);

   return <>{children}</>;
}
