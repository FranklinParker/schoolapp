import {UserRole} from "./user-role";

export class User {
  email: string;
  firstName: string;
  lastName: string;
  userRole: UserRole;

  constructor(email?: string,
              firstName?: string,
              lastName?: string,
              userRole?: UserRole) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userRole = userRole;

  }

  userHasPermission(searchPermission:string) :boolean{
    const permission = this.userRole.permissions.find(permission=> permission ===searchPermission);
    console.log('permission result', permission);
    return (permission != null && permission!='undefined');

  }
}
