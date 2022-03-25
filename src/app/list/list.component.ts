// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../services/user.service';
// import { User } from '../User/User';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent implements OnInit {
//   userId = "0";
//   Todos: User[] | null = null;
//   data:any;
//   constructor(private todoSvc:UserService,
//     private activeRoute:ActivatedRoute,
//     private router:Router) {
//   }

//  ngOnInit() {

//   this.todoSvc.getData().subscribe(res => {
//     this.Todos =(<any>res).$values;
//     console.log(this.Todos)});

//   this.userId = this.activeRoute.snapshot.queryParamMap.get('id') || "0"



//   }

//   deleteTodo(id: string) {
//     this.todoSvc.deleteData(id).subscribe(res => {
//       this.data = res;
//       this.router.navigate(["list"]);
//     })
//   }
// }
