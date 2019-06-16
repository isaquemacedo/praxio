import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidator } from 'src/app/validators/email.validator';

export class RecoverFormGroup {
    form: FormGroup

    constructor() {
        this.form = new FormGroup(
            {
                email: new FormControl('', [Validators.required, EmailValidator.emailValidator.bind(this)])
            }
        )
    }

    group(): FormGroup {
        return this.form;
    }
}