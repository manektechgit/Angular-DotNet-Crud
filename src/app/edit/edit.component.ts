// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../services/user.service';
// import { User } from '../User/User';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {
//   User:User ;

//   data:any;
//   EmpForm = new FormGroup(
//     {
//       UserId: new FormControl(null),
//       UserName: new FormControl(),
//       UserEmail: new FormControl(),
//       UserPassword:new FormControl(),
//       UserDOB: new FormControl(),

//     }

//   );
//   title = 'EmployeeFrontEnd';

//   constructor(private user: UserService,    private router:Router,) {
//     this.User = new User()
//    }
//   //EmpForm: FormGroup;
//   submitted = false;
//   EventValue: any = "Save";

//   ngOnInit(): void {


//     this.EmpForm = new FormGroup({
//       UserId: new FormControl(null),
//       UserName: new FormControl("",[Validators.required]),
//       UserEmail: new FormControl("",[Validators.required]),
//       UserPassword:new FormControl("",[Validators.required]),
//       UserDOB: new FormControl("",[Validators.required]),
//     })

//   }




//   saveTodo() {
//     this.submitted = true;

//      if (this.EmpForm.invalid) {
//             return;
//      }
//      this.user.putData(this.EmpForm.value.empId,this.EmpForm.value).subscribe(res => {
//       this.data = res;
//       this.router.navigate(["list"]);
//       this.resetFrom();

//     })
//   }


//   resetFrom()
//   {

//     this.EmpForm.reset();
//     this.EventValue = "Save";
//     this.submitted = false;
//   }
// }
