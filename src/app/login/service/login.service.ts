import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app.config';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../model/login.model'
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel): Observable<any> {
    return this.http.post(AppSettings.login, loginModel)
  }
}
