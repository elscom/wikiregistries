import {Component} from '@angular/core';
import {AuthService} from '../auth/auth2.service'
 
@Component({
    selector: 'private-component',
    templateUrl: './private.component.html'
})
 
export class PrivateComponent {
    userData: any;
    constructor(private _service:AuthService){}
 
    ngOnInit(){
        // this._service.checkCredentials();
        this.userData = this._service.getUser();
    }
 
    logout() {
        this._service.logout();
    }
}