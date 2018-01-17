import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  /***
   * login
   *
   * @param {NgForm} form
   */

  login(form: NgForm) {
    console.log('form', form.value);
    this.userService.setLogin(form.value.userName, form.value.password)
      .subscribe(result => console.log('login: ', result));

  }

}
