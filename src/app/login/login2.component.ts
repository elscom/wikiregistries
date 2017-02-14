import {Component, ElementRef} from '@angular/core';
import {AuthService} from '../auth/auth2.service';
import { Router } from '@angular/router';

import {User} from '../user/user';
 
@Component({
    selector: 'login-form',
    providers: [AuthService],
    templateUrl: './login2.component.html' 
    
})
 
export class LoginComponent {
 
    public user =   new User(0,'','','','',1,'', 1234,1,1,1,'',0,'',false);

    public errorMsg = '';

    public userParams = {
        email: "",
        password: ""
    };
    constructor(private _service:AuthService, private router: Router) {

    }
 
    login(data) {
        //console.log('Login Start')
        this._service.login(this.userParams).then((res:any)=>{
            console.log(res);
            this.router.navigate(['/']);
        },(err)=>{
            console.log(err);
        })
    }
}