import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { User } from '../user/user';
import 'rxjs/add/operator/map'

 
//var users = [
//  new User(1,'admin','smith','0419727633','admin@admin.com',1,'adm9', 1234,1,1,1,'2017-02-10',1,'2017-02-10',false),
//  new User(2,'test','doe','0733795294','stephenk@elstar.com.au',1,'test9', 1234,1,1,1,'2017-02-10',1,'2017-02-10',false),
//  
//];
 
@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'http://test.wikiregistries.com/php/get_user.php';  // URL to web api
  private vdata;
  constructor(
    private _router: Router,
    private http: Http){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
 
  login(data){
    console.log('Auth Start')
    //var x = this.getUser(user.email);
    //var authenticatedUser = users.find(u => u.email === user.email);
    //var email = data.credentials.email;
    //var password = data.credentials.password;
    var email = data.email;
    var password = data.password;
    var creds = "email=" + email + "&password=" + password; 
    //var creds: string; 
    //creds = "email="+user.email;
    // HTTP calls in Angular 2 by default return observables
    this.http.post(this.userUrl, creds, { headers: this.headers })
    .map(res => res.json())
    .subscribe(
      data => this.saveData(data),
      err => this.handleError(err),
      () => console.log('Auth Complete')
    );
        
    //  .then(cuser => cuser.email = user.email);
//    if (authenticatedUser && authenticatedUser.password === user.password){
    if (this.vdata.email && this.vdata.password === password){
      localStorage.setItem("user", this.vdata.email);
      localStorage.setItem("loggedinuser", this.vdata.firstname + ' '+ this.vdata.surname);
      this._router.navigate(['dashboard']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }    
  } 
  private saveData(data){
    this.vdata = data;
  }
  private handleError(error: any): Promise<any> {
    console.error('There was an error: ' + error);
    return Promise.reject(error.message || error);
  }
}
