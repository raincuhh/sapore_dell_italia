import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { use_auth } from "../lib/auth_utils";
import { is_logged_in } from "../../users/lib/perms";

type AuthRouteProps = PropsWithChildren;

export default function AuthRoute({ children }: AuthRouteProps): JSX.Element {
   const user = use_auth();
   const navigate = useNavigate();

   useEffect(() => {
      if (is_logged_in(user)) {
         // check if admin role later on but for now just redirect to user dashboard
         navigate("/user", { replace: true });
      }
   });

   return <>{children}</>;
}
