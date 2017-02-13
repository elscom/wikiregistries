import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { LoginComponent } from './login/login2.component';
import { AuthComponent } from './auth/auth.component';
import {PrivateComponent} from './private/private.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserService }          from './user/user.service';
import { AuthService } from './auth/auth.service';
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    UserComponent,
    DashboardComponent,
    PrivateComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
  path: 'dashboard',
  //component: DashboardComponent,
  component:  PrivateComponent,
  pathMatch: 'full'
},
  {
    path: 'login',
    component: LoginComponent
  }
]),
  LocalStorageModule.withConfig({
    prefix: 'my-app',
    storageType: 'localStorage'
   })

  ],
  providers: [UserService, AuthService, UserService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
