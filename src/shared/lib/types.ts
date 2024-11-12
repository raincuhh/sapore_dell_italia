export enum UserRoles {
   admin = "admin",
   user = "user",
}

export type User = {
   id: number;
   name: string;
   password: string;
   email: string;
   created_at: string;
   role: UserRoles;
};

export type AuthContextProps = {
   jwt_token: string | null;
   is_authenticated: boolean;
   role: UserRoles;
   login: (username: string, password: string) => Promise<void>;
   logout: () => void;
   loading: boolean;
};

export enum AdminDashboardSubPages {
   dashboard = "dashboard",
   user_list = "user_list",
   food_list = "food_list",
   order_list = "order_list",
}

export type AdminPageContextProps = {
   switch_page: (page: AdminDashboardSubPages) => void;
   sub_page: AdminDashboardSubPages;
};
