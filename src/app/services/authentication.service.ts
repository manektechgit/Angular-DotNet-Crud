import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;

  constructor(private http: HttpClient) { }


  login(username: string, password: string) {
    debugger
    console.log("nama");
    debugger;
   // return this.http.post<any>('/api/Auth/authentication', { username, password })
       return this.http.post <any>('https://localhost:44321/api/Auth/authentication', {username , password})

       .pipe(map(user => {
    // login successful if there's a jwt token in the response
    if (user && user.token) {

    localStorage.setItem('TokenInfo', JSON.stringify(user));
    }

    return user;
    }));
    }
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('TokenInfo');
      }
}
