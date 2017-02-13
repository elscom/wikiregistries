import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../user/user';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'http://test.wikiregistries.com/php/validate_user.php';  // URL to web api

  constructor(private http: Http) { }
  getCurrentUser(): void {} // stub
  logout(): void {}; 
  getUser(email: string, password: string): Promise<User>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', email);
    params.set('password', password);
    const url = `${this.userUrl}/${email}`;
    return this.http.get(url, params)
    .toPromise()
    .then(response => response.json().data as User)
    .catch(this.handleError)
  }

  saveJwt(jwt) {
    if(jwt) {
      localStorage.setItem('id_token', jwt)
    }
  }
  private handleError(error: any): Promise<any> {
    console.error('There was an error: ' + error);
    return Promise.reject(error.message || error);
  }
}
