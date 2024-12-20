import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import AuthProvider from "../features/auth/components/auth_provider";
import "../../public/static/styles/shared/global.css";
import "../../public/static/styles/shared/satoshi.css";

export default function App(): JSX.Element {
   return (
      <div className="app">
         <AuthProvider>
            <RouterProvider router={router} />
         </AuthProvider>
      </div>
   );
}
