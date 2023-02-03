import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  error="";

  validationErrorMessages = {
    'firstName': {
      'required': 'First Name required',
      'minLength':'First Name should be greater than 2 characters'
    },
    'email': {
      'required': 'Email required',
      'alreadyExists' : 'User already exists'
    }
  }
  constructor(private userService: UserService,
              private router : Router) { }

  ngOnInit(): void {
  }

  createUserForm = new FormGroup({
    firstName :new  FormControl('',
      [Validators.required]),

    lastName: new FormControl(),

    email : new FormControl('',
      [Validators.required, this.validateUserExists ]),

    password : new FormControl(),

    confirmPassword : new FormControl()
  });

    get email(){
      return this.createUserForm.get('email');
    }

  createUser(){
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
   validateUserExists():ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
    console.log("isnide validation")
      return true ? {alreadyExists :true}: null ;
    }
  }

}
