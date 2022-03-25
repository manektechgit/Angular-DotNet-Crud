import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  );
  submitClick = false;
  submitted = false;
  returnUrl: any;
  error = '';
  data:any;
  errorMessage: any;
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService: AuthenticationService,private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
    });
    // reset login status
 this.authenticationService.logout();

 // get return url from route parameters or default to '/'
 //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
 }

 // convenience getter for easy access to form fields
 get formData() { return this.loginForm.controls; }

 onLogin() {
 this.submitted = true;
 // stop here if form is invalid
 if (this.loginForm.invalid) {
  return;
  }
debugger;
  this.submitClick = true;

  //this.authenticationService.login(this.formData['userName'].value, this.formData['password'].value)
  // this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
  // .pipe(first())
  // .subscribe(
  // data => {
  // this.router.navigate([this.returnUrl]);
  // },
  // error => {
  // this.error = error;
  // this.submitClick = false;
  // });
  // }

  let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  headers = headers.set('Host', '<hostname>');

  this.http.post<any>('http://localhost:44321/api/Auth/authentication',(this.loginForm.value.username, this.loginForm.value.password),{ headers: headers }).subscribe({
    next: data => {
      console.log(data);
    },
    error: error => {
        this.errorMessage = error.message;
        console.error('There was an error! ', error);
    }
  // this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
  // response => {
  //   this.data = response;
  //   console.log("Token")
  // },
  // // data => {
  // // this.router.navigate([this.returnUrl]);
  // // },
  // error => {
  // this.error = error;
  // this.submitClick = false;
  // });
  }
  )}

}
