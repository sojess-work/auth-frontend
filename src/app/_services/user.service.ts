import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://35.237.177.182/api/v1/auth";
  user :any; 
  requestHeaders = new HttpHeaders(
    { "No-Auth":"True"}
  );
  constructor(private httpclient:HttpClient,
    ) { }

  public login(loginData:any){
    return this.httpclient.post(this.PATH_OF_API+"/authenticate",loginData,{ headers: this.requestHeaders});
  }

  public createUser(userData:any){
    this.user = userData;
    return this.httpclient.post(this.PATH_OF_API+"/register",userData,{headers: this.requestHeaders});
  }
  public confirmUser(token:string){
    
    var url = this.PATH_OF_API + "/confirmUser?token=" + token;
    return this.httpclient.get(url,{headers: this.requestHeaders});
  }
  public resendVerificationEmail(userData:any){
    return this.httpclient.post(this.PATH_OF_API+"/api/v1/auth/resendVerificationEmail",userData,{headers: this.requestHeaders});
  }
  public isUserExists(email: string){
    console.log(email);
  }
  public getUser() {
    return this.user;
  }
}
