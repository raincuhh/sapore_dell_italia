import { User, UserRoles } from "../../../shared/lib/types";
import { AuthContextProps } from "../../../shared/lib/types";

// checking user object to see if admin
export function is_admin(role: UserRoles): boolean {
   return role === "admin";
}
