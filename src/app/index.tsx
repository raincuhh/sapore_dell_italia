import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/shared/global.css";

const root: ReactDOM.Root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

function render_site(strict: boolean = true) {
   if (strict) {
      root.render(
         <React.StrictMode>
            <App />
         </React.StrictMode>
      );
   } else {
      root.render(<App />);
   }
}

render_site(false);
