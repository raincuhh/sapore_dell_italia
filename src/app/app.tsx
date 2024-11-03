import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import AuthProvider from "../features/auth/components/auth_provider";
import StyleSheetLoader from "../shared/components/style_sheet_loader";
import "../../public/static/styles/shared/global.css";

export default function App(): JSX.Element {
   return (
      <div className="app">
         <AuthProvider>
            <RouterProvider router={router} />
         </AuthProvider>
      </div>
   );
}
