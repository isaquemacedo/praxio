import { Component, OnInit } from '@angular/core';
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
}
