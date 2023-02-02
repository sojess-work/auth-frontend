import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Console } from 'console';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  createUser(createUerForm:NgForm){
    console.log("inside create user");
    this.userService.createUser(createUerForm.value)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
