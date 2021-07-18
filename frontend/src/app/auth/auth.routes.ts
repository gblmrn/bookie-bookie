import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        redirectTo: 'login',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutes { }
