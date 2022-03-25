import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User/User';
import Swal from 'sweetalert2';
;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  maxDate = new Date();
  User:User ;
  data:any;

  EmpForm = new FormGroup(
    {
      UserId: new FormControl(null),
      UserName: new FormControl(),
      UserEmail: new FormControl(),
      UserPassword:new FormControl(),
      UserDOB: new FormControl(),

    }

  );

  constructor(private user: UserService, private fb: FormBuilder,   private router:Router,) {
    this.User = new User()
   }

  submitted = false;
  EventValue: any = "Save";


  ngOnInit(): void {
    this.EmpForm = this.fb.group({
      date: null,
      range: null
    });

    this.EmpForm = this.fb.group({
        UserId: (null),
      UserName: ["",[Validators.required]],
      UserEmail: ["",[Validators.required,Validators.email]],
      UserPassword:["",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      date: ["",[Validators.required]],
    });
    // this.EmpForm = new FormGroup({
    //   UserId: new FormControl(null),
    //   UserName: new FormControl("",[Validators.required]),
    //   UserEmail: new FormControl("",[Validators.required]),
    //   UserPassword:new FormControl("",[Validators.required]),
    //   UserDOB: new FormControl("",[Validators.required]),
    // })

  }

  saveTodo() {
    this.submitted = true;

     if (this.EmpForm.invalid) {
            return;
     }

   //  if(confirm("Are you sure to saeve")) {
    this.user.postData(this.EmpForm.value).subscribe(res => {
      Swal.fire("Data Save Scuessfully", 'success')
      this.data = res;
      this.router.navigate(["list"]);
      this.resetFrom();
    })

  }


  resetFrom()
  {
    this.EmpForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }

}
