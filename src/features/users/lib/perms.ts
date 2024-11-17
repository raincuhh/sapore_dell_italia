import { User, UserRoles } from "../../../shared/lib/types";
import { AuthContextProps } from "../../../shared/lib/types";

// checking user object to see if admin
export function is_admin(user: User): boolean {
   return user?.role === UserRoles.admin;
}

// placeholder for checking if user is logged in
export function is_authenticated(user: User | null): boolean {
   return user !== null;
}
