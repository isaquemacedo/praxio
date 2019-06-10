import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterModel } from './register.model';

@Component({
  selector: 'praxio-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  group: FormGroup
  registerModel: RegisterModel = new RegisterModel()
  sendForm: boolean = false

  @ViewChild("psw", {static: true}) psw: ElementRef;
  private isPsw: boolean = true

  constructor() { this.group = this.registerModel.group() }

  ngOnInit() {
  }

  get name() { return this.group.get('name') }
  get cpf() { return this.group.get('cpf') }
  get phone() { return this.group.get('phone') }
  get email() { return this.group.get('email') }
  get password() { return this.group.get('password') }
  get cep() { return this.group.get('cep') }
  get addres() { return this.group.get('addres') }
  get number() { return this.group.get('number') }
  get neighborhood() { return this.group.get('neighborhood') }

  register() {
    this.sendForm = true
  }

  showHideEyes() {
    if (this.isPsw) this.psw.nativeElement.setAttribute('type', 'text')
    else this.psw.nativeElement.setAttribute('type', 'password')
    this.isPsw = !this.isPsw
  }
}
