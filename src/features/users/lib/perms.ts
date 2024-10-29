import { User, UserRoles } from "./types";

// checking user object to see if admin
export function is_admin(user: User): boolean {
   return user?.role === UserRoles.admin;
}

// placeholder for checking if user is logged in
export function is_logged_in(user: User | null): boolean {
   return user !== null;
}
