import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-mailsent',
  templateUrl: './mailsent.component.html',
  styleUrls: ['./mailsent.component.css']
})
export class MailsentComponent implements OnInit {
  email=this.userService.getUser().email;
  constructor(private userService:UserService,
              ) { }
  ngOnInit(): void {
  }
  resendMail(){
    this.userService.resendVerificationEmail(this.userService.getUser().email).subscribe(
      (response) => {

      },
      (error) => {

      });
  }
 
}
