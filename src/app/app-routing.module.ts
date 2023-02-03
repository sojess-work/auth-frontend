import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { MailsentComponent } from './mailsent/mailsent.component';
import { NewLoginComponent } from './new-login/new-login.component';

const routes: Routes = [
  {path:'',component: NewLoginComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'emailsent', component:MailsentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
