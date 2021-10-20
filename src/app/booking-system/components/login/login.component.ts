import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'ngx-login-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  email: string;
  password: string;

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
      ]
    });
  }

  get validEmail() {
    return this.form.get('email');
  }

  get validPassword() {
    return this.form.get('password');
  }

  public loginUser() {
    const userDetails = {
      email: this.email,
      password: this.password
    };

    this.userService.loginUser(userDetails).subscribe(
      (response) => {
        this.authService.loginUser(response);
        this.router.navigate(['/pages/layout/places-to-go']);
        // TODO: Only for testing purpose
        const userInput = {
          email: 'test@gmail.com',
          password: '1234567890Test!'
        };
      },
      (error) => {
        alert('Error happened');
      }
    );
  }
}
