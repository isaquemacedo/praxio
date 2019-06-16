import { Component, OnInit } from '@angular/core';
import { RecoverFormGroup } from '../model/recover-group.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'praxio-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  group: FormGroup
  loginFormGroup: RecoverFormGroup = new RecoverFormGroup()
  sendForm: boolean = false

  constructor() { 
    this.group = this.loginFormGroup.group()
  }

  get email() { return this.group.get('email') }

  ngOnInit() {
  }

  recover() {
    this.sendForm = true
  }
}
