export class UserRole {
  role:string;
  permissions: string[];
  constructor(role:string, permissions: string[]){
    this.role = role;
    this.permissions = permissions;
  }
}
