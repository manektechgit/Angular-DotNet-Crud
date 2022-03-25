import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Login1Component } from '../login1/login1.component';


@Injectable({
  providedIn: 'root'
})
export class AuthuserGuard implements CanActivate {

  constructor(private loginSvc:Login1Component, private router:Router, private jwtHelper: JwtHelperService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      // if the user is logged in then return true else false
      const token = localStorage.getItem("JwtToken");
      if (token && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }
      this.router.navigate(["login"]);
      return false;

  }

}
