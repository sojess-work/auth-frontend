import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:8080/api/v1/auth";
  user :any; 
  requestHeaders = new HttpHeaders(
    { "No-Auth":"True"}
  );
  constructor(private httpclient:HttpClient,
    ) { }

  public login(loginData:any){
    this.user = loginData;
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
    return this.httpclient.post(this.PATH_OF_API+"/resendVerificationEmail",userData,{headers: this.requestHeaders});
  }
  public isUserExists(email: string){
    return this.httpclient.get(this.PATH_OF_API+"/checkUserExists?email="+email,{headers: this.requestHeaders});
  }
  public getUser() {
    const dUser = this.user;
    return dUser;
  }
}
