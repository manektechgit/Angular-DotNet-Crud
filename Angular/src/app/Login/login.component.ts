import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../Services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  );
  //loginForm: FormGroup;
  submitClick = false;
  submitted = false;
  //returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

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

    this.submitClick = true;
    this.authenticationService.login(this.formData['username'].value, this.formData['password'].value)
      .pipe(first())
      .subscribe(
        data => {
          Swal.fire("Login Scuessfully");
          this.router.navigateByUrl("/home");
        },
        error => {
          this.error = error;
          this.submitClick = false;
        });
  }
}
