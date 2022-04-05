import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { ErrorInterceptor } from './Interceptor/errorInterceptor';
import { httpInterceptor } from './Interceptor/httpInterceptor';
import { LoginComponent } from './Login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthenticationService } from './Services/authentication.service';
import { AuthorizationCheck } from './Services/authorizationCheck';
import { UserService } from './Services/user.service'
import { AddComponent } from './User-management/add/add.component';
import { EditComponent } from './User-management/edit/edit.component';
import { ListComponent } from './User-management/list/list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatepickerModule } from 'ng2-datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
HomeComponent,
NavMenuComponent,
AddComponent,
EditComponent,
ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    Ng2SmartTableModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,
    DatepickerModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      // { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthorizationCheck] },
      // { path: 'login', component: LoginComponent }
    ])

  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },

    AuthorizationCheck, AuthenticationService,UserService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
