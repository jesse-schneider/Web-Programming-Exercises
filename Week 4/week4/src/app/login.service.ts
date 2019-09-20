import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  postAPIData(data) {
    return this.http.post('http://localhost:3000/api/auth', data, httpOptions)
  }

}

var httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


