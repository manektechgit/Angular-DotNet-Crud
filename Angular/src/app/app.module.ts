import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthorizationCheckService } from './services/authorization-check.service';
import { httpInterceptor } from './services/Interceptor/httpInterceptor';
import { JwtModule } from "@auth0/angular-jwt";
import { Login1Component } from './login1/login1.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { AddComponent } from './User-management/add/add.component';
import { EditComponent } from './User-management/edit/edit.component';
import { ListComponent } from './User-management/list/list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PasswordPipe } from './User-management/utils/PasswordPipe';
import { FooterComponent } from './footer/footer.component';
import { Datepicker } from './User-management/utils/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule } from 'ng2-datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    Login1Component,
    HomeComponent,
    // UserComponent,
    // ListComponent,
    // EditComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    PasswordPipe,
    FooterComponent,
    Datepicker,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    DatepickerModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5000"],
        blacklistedRoutes: []
      }
    })

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
    AuthorizationCheckService, AuthenticationService,UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
