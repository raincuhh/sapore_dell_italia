import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { get_user_profile as api_get_user_profile } from "../../features/users/api";
import CategoryLayout from "../../shared/components/category_layout";

type UserProfileData = {
   name: string;
   email: string;
   type?: string;
   user_id: number;
   created_at: string;
};

export default function UserProfile() {
   const [user_id, set_user_id] = useState<number | undefined>(undefined);
   const [profile, set_profile] = useState<UserProfileData | undefined>(
      undefined
   );

   useEffect(() => {
      const token = localStorage.getItem("jwt_token");
      let user_id: number | undefined = undefined;

      if (!token) return;
      const decoded: any = jwtDecode(token);
      user_id = decoded.id;

      if (user_id) {
         set_user_id(user_id);
      }
   }, []);

   useEffect(() => {
      const fetch_user_profile = async () => {
         if (!user_id) return;

         try {
            const response = await api_get_user_profile(user_id);
            console.log(response.data.user);
            set_profile(response.data.user);
         } catch (err) {
            console.error("Error fetching user profile:", err);
         }
      };

      fetch_user_profile();
   }, [user_id]);

   if (!profile) {
      return (
         <CategoryLayout>
            <div className="mt-16 font-bold text-secondary font-main text-fs-xl">
               Loading profile...
            </div>
         </CategoryLayout>
      );
   }

   return (
      <CategoryLayout>
         <div className="flex flex-col gap-8 mt-16">
            <div className="flex flex-col text-secondary font-main">
               <header className="font-bold text-fs-l sm:text-fs-xl">
                  Profile
               </header>
               <p className="font-medium text-secondary-low-opacity">
                  Holds general info about your account
               </p>
            </div>
            <hr className="h-[1px] border-solid border-secondary-low-opacity w-full" />
            <div className="flex flex-col gap-4">
               <ProfileBlock
                  title="ID"
                  props={profile.user_id.toString() || "unknown"}
               />
               <ProfileBlock title="type" props={profile.type ?? "unknown"} />
               <ProfileBlock
                  title="Username"
                  props={profile.name || "unknown"}
               />
               <ProfileBlock title="Email" props={profile.email || "unknown"} />
               <ProfileBlock
                  title="Created at"
                  props={(() => {
                     const [date, time] = profile.created_at.split(" ");
                     return `${date} ${time.split("+")[0]}`;
                  })()}
               />
            </div>
         </div>
      </CategoryLayout>
   );
}

type ProfileBlockProps = {
   title: string;
   props: string;
};

function ProfileBlock({ title, props }: ProfileBlockProps) {
   return (
      <>
         <div className="flex flex-col gap-2 text-fs-m md:text-fs-l md:flex-row">
            <span className="flex items-end text-fs-s md:text-fs-m text-secondary-low-opacity">
               {title}
            </span>{" "}
            <span>{props}</span>
         </div>
         <hr className="h-[1px] border-solid border-secondary-low-opacity w-full" />
      </>
   );
}
