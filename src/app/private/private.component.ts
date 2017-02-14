import {Component} from '@angular/core';
import {AuthService} from '../auth/auth2.service'
 
@Component({
    selector: 'private-component',
    templateUrl: './private.component.html'
})
 
export class PrivateComponent {
 
    constructor(
        private _service:AuthService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}