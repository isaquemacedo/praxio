import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterGroupModel } from '../model/register-group.model';
import { RegisterService } from '../service/register.service';
import { RegisterModel } from '../model/register.model';

@Component({
  selector: 'praxio-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  group: FormGroup
  registerGroupModel: RegisterGroupModel = new RegisterGroupModel()
  sendForm: boolean = false
  registerModel: RegisterModel

  @ViewChild("psw", {static: true}) psw: ElementRef;
  private isPsw: boolean = true

  constructor(private registerService: RegisterService) { this.group = this.registerGroupModel.group() }

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

    if (this.group.valid) {
      this.registerModel = new RegisterModel(this.name.value, this.cpf.value, this.phone.value, this.email.value, 
        this.password.value, this.cep.value, this.addres.value, this.number.value, this.neighborhood.value)

      this.registerService.send(this.registerModel).subscribe(
        resp => {
          console.log(resp)
        }
      )
    }
  }

  showHideEyes() {
    if (this.isPsw) this.psw.nativeElement.setAttribute('type', 'text')
    else this.psw.nativeElement.setAttribute('type', 'password')
    this.isPsw = !this.isPsw
  }
}
