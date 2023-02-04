import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
  emailConfirmed: boolean = false;
  urlExpired: boolean = false;
  invalidUrl: boolean = false;
  internalServerError: boolean = false;
   queryParams : any ={};
  constructor(private route : ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.queryParams.token = this.route.snapshot.queryParamMap.get('token');
    this.confirmEmail();
  }
  confirmEmail(){
    this.userService.confirmEmail(this.queryParams.token ).subscribe(
      (response:any) =>{
          if(response.message == 'User Confirmed'){
            this.emailConfirmed = true;
          }else if (response.message == 'Url Expired'){
              this.urlExpired = false;
          }else if(response.message == 'Invalid Url'){
              this.invalidUrl =true;
          }
      },
      (error) => {
        this.internalServerError= true;
      })
  }

  resendMail() {
    this.userService.resendEmail(this.queryParams.token).subscribe(
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
