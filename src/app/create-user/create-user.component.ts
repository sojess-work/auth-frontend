import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { CustomValidators } from '../validators/custom-sync-validators';
import { debounceTime, distinctUntilChanged, Observable } from "rxjs";
import { of } from "rxjs";
import { EmailExistsValidator } from '../validators/email-exists';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  error="";
  createUserForm : any;
  validationErrorMessages = {
    'firstName': {
      'required': 'First Name is required',
      'minLength':'First Name should be greater than 2 characters'
    },
    'lastName': {
      'required': 'Last Name is required',
      'minLength':'Last Name should be greater than 2 characters'
    },
    'email': {
      'required': 'Email is required',
      'alreadyExists' : 'User already exists'
    },
    'password': {
      'required': 'Password is required',
      'minLength':'Password should be greater than 8 characters'
    },
    'confirmPassword': {
      'required': 'Confirm password is required',
    }
  }
  constructor(private userService: UserService,
              private router : Router,
              private builder : FormBuilder,
              private emailExistsValidator: EmailExistsValidator) { }

  ngOnInit(): void {
    this.createUserForm = this.builder.group({
      firstName :new  FormControl('',
        [Validators.required, Validators.minLength(2)]),
  
      lastName: new FormControl('',
      [Validators.required, Validators.minLength(2)]),
  
      email : new FormControl('',
        [Validators.required ],this.emailExistsValidator.validate.bind(this.emailExistsValidator)),
  
      password : new FormControl('',
      [Validators.required, Validators.minLength(8)]),
  
      confirmPassword : new FormControl('',
      [Validators.required])
    });
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
      (response) => {
        this.router.navigate(['/emailsent']);
      },
      (err) => {
        console.log("error",err);
      }
    );
  }

//    asyncIfUserExists(control : AbstractControl):  Observable<ValidationErrors | null> {
//     if(!control.valueChanges || control.pristine){
//         return of(null);
//     }else{
//         this.userService.isUserExists(control.value).pipe(
//             distinctUntilChanged(),
//             debounceTime(600)).subscribe(
//                 (response: any) => {
//                     if(!response.hasErrors){
//                         console.log(response);
//                         if(response == true){
//                             return {emailExists:true}
//                         }else{
//                             return of(null);
//                         }
//                     }
//                     return of(null);
//                 })
//                 return of(null);
//         }
// }

}
