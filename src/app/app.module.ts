import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { LoginComponent } from './login/login2.component';
import { AuthComponent } from './auth/auth.component';
import { PrivateComponent } from './private/private.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ROUTES } from './app.routes'
import { UserService }          from './user/user.service';
import { AuthService } from './auth/auth2.service';
import { AuthGuard } from './auth/auth.guard';
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  bootstrap: [AppComponent],
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
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    RouterModule.forRoot(ROUTES)

  ],
  providers: [AuthService, UserService, AuthGuard ]
})

export class AppModule { }
