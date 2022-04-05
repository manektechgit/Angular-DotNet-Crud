import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getData(){

    return this.http.get('https://localhost:44336/api/User');  //https://localhost:44352/ webapi host url
  }

  postData(formData: any){
    return this.http.post('https://localhost:44336/api/User',formData);
  }

  //https://localhost:44305/api/User/4

  getDatabyId(id: string)
  {

    return this.http.get('https://localhost:44336/api/User/'+id);
  }


  putData(userId:string,formData: any){
    debugger
    return this.http.put('https://localhost:44336/api/User/'+userId,formData);
  }
  deleteData(id: string){
    debugger
    return this.http.delete('https://localhost:44336/api/User/'+id);
  }

}
