import { useRouteError, Navigate, Link } from "react-router-dom";

export default function PageError(): JSX.Element {
   const error: unknown = useRouteError();
   console.error(error);

   let error_message: string = handle_route_error(error);

   return (
      <div className="error_panel">
         <header>
            Oops. Seems like the url you typed is not defined, to return to home
         </header>
         <div className="error_message">error: {error_message}</div>
         <Link to={"/"}>go to home</Link>
      </div>
   );
}

function handle_route_error(error: unknown): string {
   if (error instanceof Error) {
      return error.message;
   } else if (typeof error === "string") {
      return error;
   } else {
      return "an unknown error occured.";
   }
}
