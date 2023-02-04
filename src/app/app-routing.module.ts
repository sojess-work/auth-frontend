import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MailsentComponent } from './mailsent/mailsent.component';
import { NewLoginComponent } from './new-login/new-login.component';

const routes: Routes = [
  {path:'',component: NewLoginComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'emailsent', component:MailsentComponent },
  {path:'confirmUser', component: ConfirmEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
