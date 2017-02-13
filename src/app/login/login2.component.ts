import {Component, ElementRef} from '@angular/core';
import {AuthenticationService} from '../auth/auth2.service';

import {User} from '../user/user';
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './login2.component.html' 
    
})
 
export class LoginComponent {
 
    public user =   new User(0,'','','','',1,'', 1234,1,1,1,'',0,'',false);

    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {}
 
    login(data ) {
        if(!this._service.login(data)){
            this.errorMsg = 'Failed to login';
        }
    }
}