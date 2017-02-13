import {Component, ElementRef} from '@angular/core';
import {AuthService} from '../auth/auth2.service';

import {User} from '../user/user';
 
@Component({
    selector: 'login-form',
    providers: [AuthService],
    templateUrl: './login2.component.html' 
    
})
 
export class LoginComponent {
 
    public user =   new User(0,'','','','',1,'', 1234,1,1,1,'',0,'',false);

    public errorMsg = '';
 
    constructor(
        private _service:AuthService) {}
 
    login(data ) {
        //console.log('Login Start')
        if(!this._service.login(data)){
            this.errorMsg = 'Failed to login';
        }
    }
}