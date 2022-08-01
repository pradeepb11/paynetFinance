import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

import {AuthService} from '../../../../service/auth.service';
import {NotificationService} from '../../../../service/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
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
    private authService: AuthService,
    private notifiactionService: NotificationService

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

    const {email, password} = this.loginForm.value;
    // console.log(email, password)
    this.authService.loginUser(email, password)
    .subscribe(
      (res) =>{
        // console.log(res)
         
      if(res.Status === 'error'){
        this.notifiactionService.showError('', 'Username & Password Do not Match');
        this.loginForm.reset();
      }else if (res.Status === 'Success') {
        this.notifiactionService.showSuccess('', 'Login Successfully');
        this.router.navigate(['/dashboard'], {relativeTo: this.route})
      } 
      },
      (error:any)=>{
        this.notifiactionService.showError('', error.error.detail.Details);
        this.loginForm.reset();
        window.console.clear();
        // console.log(err.error.detail.Details)
      }
    )


  }

}
