import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidator } from 'src/app/validators/email.validator';

export class RegisterGroupModel {
    form: FormGroup

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            cpf: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, EmailValidator.emailValidator.bind(this)]),
            password: new FormControl('', Validators.required),
            cep: new FormControl('', Validators.required),
            addres: new FormControl('', Validators.required),
            number: new FormControl('', Validators.required),
            neighborhood: new FormControl('', Validators.required)
        })
    }

    group(): FormGroup {
        return this.form;
    }
}