import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show_button: Boolean = false;
  show_eye: Boolean = false;

   // login form 
   loginForm: FormGroup;
  
   // form submit
   submitted = false;
   isLoggedIn = false;
   returnUrl: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.setLoginValidation();

  }

  get f() { return this.loginForm.controls; }
    // validation form
    setLoginValidation() {
      this.loginForm = this.fb.group({
        // email: new FormControl('', [Validators.required, Validators.email]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)] ),
      })
    }

  showPassword(){
    // console.log('Working')
   this.show_button = !this.show_button;
   this.show_eye = !this.show_eye;
  }

  onLoginSubmit(){
    console.log(this.loginForm.value)
 localStorage.setItem('loggedInUserFin', 'true');
  if (localStorage.getItem('loggedInUserFin')) {
    this.router.navigate(['./dashboard']);
  }
  }

}
