import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login.routing';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';

@NgModule({
  declarations: [LoginComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ LoginService ]
})
export class LoginModule { }
