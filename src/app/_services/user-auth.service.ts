import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem("roles",JSON.stringify(roles));
  }
  public getRoles(): [] {
    return JSON.parse(localStorage.getItem("roles") || '{}' );
  }

  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken",jwtToken);
  }
  public getToken(): string {
    return localStorage.getItem("jwToken") || "";
  }
  public clearStorage(){
    localStorage.clear();
  }
  public isLoggedIn(): boolean {
    return this.getRoles().length != 0 && this.getToken().length != 0;
  }
}
