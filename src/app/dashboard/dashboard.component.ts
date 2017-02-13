import { Component, OnInit } from '@angular/core';

import { User }        from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  //loggedinuser='';
  loggedinuser = localStorage.getItem("loggedinuser");
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => this.users = users);
  }


}
