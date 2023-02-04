import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {
  validationErrorMessages = {
    'email': {
      'required': 'Email is required',
    },
    'password': {
      'required': 'Password is required',
      'userDisabled': 'User is disabled click here to',
      'invalidCred': 'Invalid Credentials'
    }
  }
  constructor(private userService: UserService,
              private userAuthService: UserAuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

    get email(){
      return this.loginForm.get('email');
    }

    get password(){
      return this.loginForm.get('password');
    }

  loginForm = new FormGroup({
    email: new FormControl('',
      Validators.required),
    password: new FormControl('',
      Validators.required)
  });

  login(){
    this.userService.login(this.loginForm.value).subscribe(
      (response:any) =>{
        if(response.message == 'Bad Credentials'){
          this.loginForm.get('password')?.setErrors({ invalidCred : true });
        }else if(response.message == 'User is disabled'){
            this.loginForm.get('password')?.setErrors({ userDisabled : true});
        }else{
          this.userAuthService.setToken(response.token);
        }
      },
      (error) => {
        this.router.navigate(['/']);
      }
    );}

    
    resendMail() {
      this.userService.resendVerificationEmail(this.loginForm.value).subscribe(
        (response:any) => {
            if(response.message.startsWith("Verification Email Sent Succesfully")){
              this.router.navigate(['/emailsent']);
            }else{
              //todo
            }
         },
        (error) => {
  
        });
    }
}
