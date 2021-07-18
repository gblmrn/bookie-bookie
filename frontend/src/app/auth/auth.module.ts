import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routes';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutes
  ]
})
export class AuthModule { }
