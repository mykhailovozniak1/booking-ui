import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'ngx-register-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  email: string;
  password: string;
  userName: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {
    this.form = fb.group({
      'email': [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(EMAIL_PATTERN)])
      ],
      'password': [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6)])
      ],
      'userName': [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ]
    });
  }

  get validEmail() {
    return this.form.get('email');
  }

  get validPassword() {
    return this.form.get('password');
  }

  get validUserName() {
    return this.form.get('userName');
  }

  public registerUser() {
    const userDetails = {
      email: this.email,
      password: this.password,
      username: this.userName
    };
    // TODO: Only for testing purposes password => 1234567890Test!
    this.userService.registerUser(userDetails).subscribe(
      (response) => {
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        alert('Error happened during register');
      }
    );
  }
}
