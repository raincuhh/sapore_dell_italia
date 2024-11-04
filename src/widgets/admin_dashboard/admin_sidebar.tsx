import { Link } from "react-router-dom";
import RenderList from "../../shared/components/render_list";

export default function AdminSidebar() {
   return (
      <div className="w-[15rem] ">
         <div className="mb-m-em-m">
            <div className="px-m-em-l">
               <h4 className="text-fs-l font-playfair">Dashboard</h4>
            </div>
         </div>
         <div className="mt-0 w-full">
            <nav className="w-full">
               <ul className="flex flex-col w-full">
                  <NavSectionWithHeaders
                     header_title="users"
                     sections={[
                        {
                           id: 1,
                           name: "user_list",
                           to_link: "/admin/user_list",
                        },
                     ]}
                  />
                  <NavSectionWithHeaders
                     header_title="foods"
                     sections={[
                        {
                           id: 1,
                           name: "food_list",
                           to_link: "/admin/food_list",
                        },
                     ]}
                  />
               </ul>
            </nav>
         </div>
      </div>
   );
}

type NavSection = { id: number; name: string; to_link: string };

type NavSectionWithHeadersProps = {
   header_title: string;
   sections: NavSection[];
};

function NavSectionWithHeaders({
   header_title,
   sections,
}: NavSectionWithHeadersProps) {
   return (
      <div className="flex flex-col w-full">
         <div className="mb-m-em-m">
            <h4>{header_title}</h4>
         </div>
         <ul className="w-full">
            <RenderList
               data={sections}
               render_item={(e: NavSection) => (
                  <NavSection
                     key={e.id}
                     id={e.id}
                     name={e.name}
                     to_link={e.to_link}
                  />
               )}
            />
         </ul>
      </div>
   );
}

function NavSection({ name, to_link }: NavSection) {
   return (
      <div className="h-[55px] w-full">
         <Link to={to_link}>{name}</Link>
      </div>
   );
}
