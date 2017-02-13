import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { AuthService } from '../auth/auth.service';
import { LocalStorageService} from 'angular-2-local-storage';
import {User} from '../user/user'

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';
  user: User;
  constructor(
        private router: Router,
        private authService: AuthService,
        private localStorageService: LocalStorageService
        ) {

   }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }
  login() {
      this.loading = true;
      this.authService.getUser(this.user.email, this.user.password);
  }
  onSubmit() {
    //this.user = this.prepareSaveLogin();
    //this.userService.updateUser(this.user).subscribe(/* error handling */);
    //this.ngOnChanges();
  }
}
