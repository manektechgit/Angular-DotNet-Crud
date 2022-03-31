import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthuserGuard } from './guards/authuser.guard';

import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddComponent } from './User-management/add/add.component';
import { EditComponent } from './User-management/edit/edit.component';
import { ListComponent } from './User-management/list/list.component';


const routes: Routes = [
  {
    path: '' , component: Login1Component, pathMatch: 'full'
  },
  {
    path: 'login' , component: Login1Component

  },
  {
    path: 'home' , component: HomeComponent,
  //  canActivate: [AuthGuardService],
  },

  {
    path: 'add' , component: AddComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: 'edit' , component: EditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'list' , component: ListComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'list'
    }
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
