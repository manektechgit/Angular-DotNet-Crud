import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class httpInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header to request

    //Get Token data from local storage

  let tokenInfo = localStorage.getItem('TokenInfo');

    if (tokenInfo && tokenInfo) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenInfo}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      });
    }

    return newRequest.handle(request);
  }

  setData(data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('TokenInfo', jsonData)
 }
 getData() {
  return localStorage.getItem('TokenInfo')
}
}
