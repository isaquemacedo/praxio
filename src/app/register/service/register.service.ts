import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/app.config';
import { RegisterModel } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  send(register: RegisterModel): Observable<any> {
    return this.http.post(AppSettings.register, JSON.stringify(register))
  }
}
