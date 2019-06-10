import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginModel } from './login.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'praxio-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  group: FormGroup
  loginModel: LoginModel = new LoginModel()
  sendForm: boolean = false

  @ViewChild("psw", {static: true}) psw: ElementRef;
  private isPsw: boolean = true

  constructor() { 
    this.group = this.loginModel.group()
  }

  ngOnInit() {
  }

  get email() { return this.group.get('email') }
  get password() { return this.group.get('password') }

  login() {
    this.sendForm = true
  }

  showHideEyes() {
    if (this.isPsw) this.psw.nativeElement.setAttribute('type', 'text')
    else this.psw.nativeElement.setAttribute('type', 'password')
    this.isPsw = !this.isPsw
  }
}
