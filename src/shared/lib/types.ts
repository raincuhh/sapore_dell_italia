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
