import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}
  LOGIN_KEY = 'user-login';

  isLoggedIn() {
    return this.localStorageService.getItem(this.LOGIN_KEY);
  }

  getLoggedInUserDetails() {
    return JSON.parse(this.localStorageService.getItem(this.LOGIN_KEY));
  }

  loginUser(userDetails) {
    return this.localStorageService.setItem(this.LOGIN_KEY, JSON.stringify(userDetails));
  }

  logoutUser() {
    return this.localStorageService.removeItem(this.LOGIN_KEY);
  }
}
