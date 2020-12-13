import { ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms'

export class passwordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value != '1234') {
                resolve({ notValidOldPassword: true });
            }
            else {
                resolve(null);
            }
        });
    }

    static PasswordShouldMatch(control: AbstractControl) {
        let password1 = control.get('passwordField');
        let password2 = control.get('passwordFieldVerification');

        if (password1.value != password2.value) {
            return { passwordshouldMatch: true }
        }
        else {
            return null
        }
    }
}