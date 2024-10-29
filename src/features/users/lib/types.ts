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
