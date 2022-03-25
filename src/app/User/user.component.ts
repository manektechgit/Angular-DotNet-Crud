// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../services/user.service';
// import { User } from './User';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {
//    User:User ;
//   // formGroup: FormGroup;
//   data:any;

//   // constructor(private formBuilder: FormBuilder,
//   //   private todoSvc:UserService,
//   //   private router:Router,) {
//   //     this.formGroup = this.formBuilder.group({
//   //       'userName': ['', ],
//   //       'userEmail': ['', ],
//   //       'UserPassword': ['',],
//   //       'UserDob':['',]
//   //     });
//      // this.User = new User();
//   //   }

//   //   ngOnInit(): void {

//   //   }
//   //   saveTodo(){
//   //     this.todoSvc.postData(this.formGroup.value).subscribe(res => {
//   //          this.data = res;






//     //     }
//     //   );
//     // }

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
//     this.getdata();

//     this.EmpForm = new FormGroup({
//       UserId: new FormControl(null),
//       UserName: new FormControl("",[Validators.required]),
//       UserEmail: new FormControl("",[Validators.required]),
//       UserPassword:new FormControl("",[Validators.required]),
//       UserDOB: new FormControl("",[Validators.required]),
//     })

//   }
//   getdata() {
//     this.user.getData().subscribe( res=> {
//       this.data = res;
//     })
//   }

//   deleteData(id: string) {
//     this.user.deleteData(id).subscribe(res => {
//       this.data = res;
//       this.getdata();
//     })
//   }

//   saveTodo() {
//     this.submitted = true;

//      if (this.EmpForm.invalid) {
//             return;
//      }
//     this.user.postData(this.EmpForm.value).subscribe(res => {
//       this.data = res;
//       this.router.navigate(["list"]);
//       this.resetFrom();

//     })
//   }
//   Update() {
//     this.submitted = true;

//     if (this.EmpForm.invalid) {
//      return;
//     }
//     this.user.putData(this.EmpForm.value.empId,this.EmpForm.value).subscribe(res => {
//       this.data = res;
//       this.resetFrom();
//     })
//   }

//   EditData(Data: { empId: any; empName: any; empContact: any; empEmail: any; empAddress: any; }) {
//     this.EmpForm.controls["empId"].setValue(Data.empId);
//     this.EmpForm.controls["empName"].setValue(Data.empName);
//     this.EmpForm.controls["empContact"].setValue(Data.empContact);
//     this.EmpForm.controls["empEmail"].setValue(Data.empEmail);
//     this.EmpForm.controls["empAddress"].setValue(Data.empAddress);
//     this.EventValue = "Update";
//   }

//   resetFrom()
//   {
//     this.getdata();
//     this.EmpForm.reset();
//     this.EventValue = "Save";
//     this.submitted = false;
//   }
//   }



