export type UserRoles = "admin" | "user";

export type User = {
   user_id: number;
   name: string;
   password: string;
   email: string;
   role: UserRoles;
   jwt_version: number;
   //created_at: string;
};

export type AuthContextProps = {
   jwt_token: string | null;
   is_authenticated: boolean;
   role: UserRoles;
   login: (username: string, password: string) => Promise<void>;
   logout: () => void;
   loading: boolean;
};

export enum AdminSubPages {
   dashboard = "dashboard",
   user_list = "user_list",
   food_list = "food_list",
   order_list = "order_list",
}

export type AdminPageContextProps = {
   switch_page: (page: AdminSubPages) => void;
   sub_page: AdminSubPages;
};
