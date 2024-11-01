import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { use_auth } from "../lib/utils";
import { is_authenticated } from "../../users/lib/perms";

type AuthRouteProps = PropsWithChildren;

export default function AuthRoute({ children }: AuthRouteProps): JSX.Element {
   //const { user } = use_auth();
   const navigate = useNavigate();

   useEffect(() => {
      /*
      if (is_authenticated(user)) {
         // check if admin role later on but for now just redirect to user dashboard
         navigate("/user", { replace: true });
      }
      */
   });

   return <>{children}</>;
}
