import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User/User';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common'
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

  constructor(private user: UserService, private fb: FormBuilder,   private router:Router,public datepipe: DatePipe) {
    this.User = new User()
   }

  submitted = false;
  EventValue: any = "Save";


  ngOnInit(): void {
    var ddMMyyyy = this.datepipe.transform(new Date(),"dd-MM-yyyy");
    console.log(ddMMyyyy); //output - 14-02-2019

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
  myFunction(){
    this.User.userDOB=new Date();
    let latest_date =this.datepipe.transform(this.EmpForm.value.userDOB, 'MM-dd-yyy');
    console.log(this.User.userDOB, 'MM-dd-yyy');
   }





  saveTodo() {
    debugger;
    this.submitted = true;

     if (this.EmpForm.invalid) {
            return;
     }
   // this.user.postData(this.EmpForm.value).subscribe(res => {
       if(this.User.userEmail!=null)
       {
       this.user.postData(this.EmpForm.value).subscribe(res => {
        Swal.fire("Data Save Scuessfully", 'success')
        this.data = res;
        this.router.navigate(["list"]);
        this.resetFrom();
       })
      }

      else
      {
        Swal.fire("Please Insert your Valid EmilId", 'Info')
      }

  }


  resetFrom()
  {
    this.EmpForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }

}
