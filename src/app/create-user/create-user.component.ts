import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { CustomValidators } from '../validators/custom-sync-validators';
import { EmailExistsValidator } from '../validators/email-exists';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  error="";
  createUserForm : FormGroup;
  
  validationErrorMessages = {
    'firstName': {
      'required': 'First Name is required',
      'minlength':'First Name should be greater than 2 characters'
    },
    'lastName': {
      'required': 'Last Name is required',
      'minlength':'Last Name should be greater than 2 characters'
    },
    'email': {
      'required': 'Email is required',
      'alreadyExists' : 'User already exists',
      'invalid':'Please enter a valid email'
    },
    'password': {
      'required': 'Password is required',
      'minlength':'Password should be greater than 8 characters'
    },
    'confirmPassword': {
      'required': 'Confirm password is required',
      'notMatch' : 'Confirm password must match with password'
    }
  }
  constructor(private userService: UserService,
              private router : Router,
              private builder : FormBuilder,
              private emailExistsValidator: EmailExistsValidator) { 
                this.createUserForm = this.builder.group({
                  firstName :new  FormControl('',
                    [Validators.required, Validators.minLength(2)]),
              
                  lastName: new FormControl('',
                  [Validators.required, Validators.minLength(2)]),
              
                  email : new FormControl('',
                    [Validators.required,Validators.email ],this.emailExistsValidator.validate.bind(this.emailExistsValidator)),
              
                  password : new FormControl('',
                  [Validators.required, Validators.minLength(8)]),
              
                  confirmPassword : new FormControl('',
                  [Validators.required])
                }, { 
                  validators: CustomValidators.isConfirmPassSame('password','confirmPassword')
                })
              }

  ngOnInit(): void {
  }

    get firstName(){
      return this.createUserForm.get('firstName');
    }

    get lastName(){
      return this.createUserForm.get('lastName');
    }

    get password(){
      return this.createUserForm.get('password');
    }

    get confirmPassword(){
      return this.createUserForm.get('confirmPassword');
    }
    get email(){
      return this.createUserForm.get('email');
    }

  createUser(){
    console.log(this.createUserForm);
    this.userService.createUser(this.createUserForm.value)
    .subscribe(
      (response: any) => {
        
        if(response.message.startsWith("Verification Email Sent Succesfully")){
          this.router.navigate(['/emailsent']);
        }else{
          //Todo
        }
      },
      (err) => {
        console.log("error",err);
      }
    );
  }

}
