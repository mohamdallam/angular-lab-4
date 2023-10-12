import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    registerName: new FormControl('', [Validators.required]),

    registerEmail: new FormControl('', [Validators.required, Validators.email]),

    registerUserName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S*$/),
    ]),

    registerPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

  handleRegister() {
    console.log(this.registerForm);
  }
}
