import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'http://test.wikiregistries.com/php/get_user.php';  // URL to web api
  private usersUrl = 'http://test.wikiregistries.com/php/get_users.php';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }

  getUser(email: string): Promise<User> {
    const url = '${this.userUrl}/${id}';
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as User)
               .catch(this.handleError);
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }   

}
