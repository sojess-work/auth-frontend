import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MailsentComponent } from './mailsent/mailsent.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

@NgModule({
  declarations: [
    AppComponent,
    MailsentComponent,
    NewLoginComponent,
    CreateUserComponent,
    ConfirmEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
