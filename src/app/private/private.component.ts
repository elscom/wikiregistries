import {Component} from '@angular/core';
import {AuthenticationService} from '../auth/auth2.service'
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './private.component.html'
})
 
export class PrivateComponent {
 
    constructor(
        private _service:AuthenticationService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}