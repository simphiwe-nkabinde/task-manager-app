import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:3000/api/'

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<object[]> {
    let users = this.http.get<object[]>(this.baseUrl)
    console.log(users);
    return users;

  }
}
