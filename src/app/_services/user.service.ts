import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:8080";

  requestHeaders = new HttpHeaders(
    { "No-Auth":"True"}
  );
  constructor(private httpclient:HttpClient) { }

  public login(loginData:any){
    return this.httpclient.post(this.PATH_OF_API+"/api/v1/auth/authenticate",loginData,{ headers: this.requestHeaders});
  }

  public createUser(userData:any){
    return this.httpclient.post(this.PATH_OF_API+"/api/v1/auth/register",userData,{headers: this.requestHeaders});
  }
}
