import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../model/user";
import {UserRole} from "../model/user-role";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";

@Injectable()
export class UserService {
  user: User;
  testMode = true;
  serverUrl = environment.serverUrl +'api/';

  userChanged = new EventEmitter();

  constructor(private http: HttpClient) {

  }

  /**
   *
   */
  setUser() {
    if (this.testMode) {
      const userRole = new UserRole('admin', ['admin']);
      this.user = new User('fparker@gmail.com', 'Franklin', 'parker', userRole);
      this.userChanged.emit(this.user);
    }
  }

  /**
   * login
   *
   * @param {string} email
   * @param {string} password
   * @returns {Observable<any>}
   */
  setLogin(email: string, password: string): Observable<any> {
    this.setUser();
    const url = this.serverUrl + 'user/login';
    console.log('login url:' +url)
     return this.http.post(url, {email: email, password: password})
      .map((response: Response) => response);


  }



/**
   * returns does this user have permission to use the requested resource area
   *
   * @param {string} permission
   * @returns {boolean}
   */
  userHasPermission(permission: string): boolean {
    if (!this.user) {
      return false;
    }
    console.log('userService.userHasPersmission')
    return this.user.userHasPermission(permission);

  }

}
