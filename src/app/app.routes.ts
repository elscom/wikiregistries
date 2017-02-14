/**
 * Created by ahsanayaz on 14/02/2017.
 */


import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login2.component';
import { AuthGuard } from './auth/auth.guard';
import { PrivateComponent } from './private/private.component';

var appRoutes:any = [
    {
        path: '',
        component: PrivateComponent,
        pathMatch: 'full',
        canActivate: [ AuthGuard ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const ROUTES: Routes = appRoutes;
