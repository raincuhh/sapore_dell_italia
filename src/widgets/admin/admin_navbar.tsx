import { use_admin_page } from "../../features/auth/lib/utils";

export default function AdminNavbar() {
   const { sub_page } = use_admin_page();

   return (
      <>
         <div className="w-full">
            <nav className="h-[64px] w-full border-b-[1px] border-solid border-secondary-low-opacity py-2 px-4">
               <div className="flex justify-between h-full items-center">
                  test
               </div>
            </nav>
         </div>
      </>
   );
}
