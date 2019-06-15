import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginFormGroup } from '../model/login-group.model';
import { FormGroup } from '@angular/forms';
import { LoginModel } from '../model/login.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'praxio-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  group: FormGroup
  loginFormGroup: LoginFormGroup = new LoginFormGroup()
  sendForm: boolean = false
  loginModel: LoginModel

  @ViewChild("psw", {static: true}) psw: ElementRef;
  private isPsw: boolean = true

  constructor(private loginService: LoginService) { 
    this.group = this.loginFormGroup.group()
  }

  ngOnInit() {
  }

  get email() { return this.group.get('email') }
  get password() { return this.group.get('password') }

  login() {
    this.sendForm = true

    if (this.group.valid) {
      this.loginModel = new LoginModel(this.email.value, this.password.value)

      this.loginService.login(this.loginModel).subscribe(
        resp => { console.log(resp) }
      )
    }

  }

  showHideEyes() {
    if (this.isPsw) this.psw.nativeElement.setAttribute('type', 'text')
    else this.psw.nativeElement.setAttribute('type', 'password')
    this.isPsw = !this.isPsw
  }
}
