import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { use_auth } from "../lib/auth_utils";

type PublicRouteProps = PropsWithChildren;

export default function PublicRoute({
   children,
}: PublicRouteProps): JSX.Element {
   const user = use_auth();
   const navigate = useNavigate();
   return <>{children}</>;
}
