import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { AuthorizationCheck } from './Services/authorizationCheck';
import { AddComponent } from './User-management/add/add.component';
import { EditComponent } from './User-management/edit/edit.component';
import { ListComponent } from './User-management/list/list.component';

const routes: Routes = [
  {
    path: '' , component: LoginComponent, pathMatch: 'full'
  },

  { path: 'home', component: HomeComponent, canActivate: [AuthorizationCheck] },

  { path: 'login', component: LoginComponent },

  {
    path: 'add' , component: AddComponent,
    canActivate: [AuthorizationCheck]

  },
  {
    path: 'edit' , component: EditComponent,
    canActivate: [AuthorizationCheck]
  },
  {
    path: 'list' , component: ListComponent,
    canActivate: [AuthorizationCheck]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
