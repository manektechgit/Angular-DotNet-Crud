import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // const credentials={
  //         username:string,
  //          password:string
  //        }


  // let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  // headers = headers.set('Host', '<hostname>');

  login({ username, password }: { username: string; password: string; }) {
    if (username == "admin" && password == "admin") {
      localStorage.setItem('currentUser', "loggedin");
     // return true;
    }
  }




  loginuser(credentials: any){
    //return this.http.post('https://localhost:44305/api/User',formData);
    return this.http.post('https://localhost:44305/api/Auth1/login',credentials)
  }





  logout() {
    localStorage.removeItem('currentUser');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

}
