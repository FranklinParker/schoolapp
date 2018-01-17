import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  roleAdmin = false;
  user: User;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.userChanged.subscribe((user: User) => {
      this.roleAdmin = user.userHasPermission('admin');
      this.user = user;
    });
  }


}
