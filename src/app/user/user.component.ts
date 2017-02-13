import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {User} from './user';
import{UserService} from './user.service'

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(   private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser( params['email']))
      .subscribe(user => this.user = user);
  }

}
