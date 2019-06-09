import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login.routing';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

@NgModule({
  declarations: [LoginComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
