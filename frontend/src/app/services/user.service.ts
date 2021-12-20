import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl: string = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get(baseUrl)
  }
}
