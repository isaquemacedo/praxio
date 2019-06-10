import { ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

export class EmailValidator {
    public static emailValidator(email: FormControl): {[key: string]: any} {
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email.value != '' && !regexEmail.test(email.value))
            return { emailInvalid: true }
        return null
    }
}