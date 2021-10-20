import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  public loginUser(userDetails) {
    return this.httpClient.post(`${environment.apiEndpoint}/users/signin`, userDetails);
  }

  public registerUser(userDetails) {
    return this.httpClient.post(`${environment.apiEndpoint}/users/signup`, userDetails);
  }
}
