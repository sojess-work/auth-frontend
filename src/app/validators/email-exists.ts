import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, debounceTime, distinctUntilChanged, Observable } from "rxjs";
import { UserService } from "../_services/user.service";
import { map } from "rxjs";
import { of } from "rxjs";

@Injectable({ providedIn :'root'})
export class EmailExistsValidator implements AsyncValidator{

    constructor( private userService:UserService){}
    
    validate(control: AbstractControl):   Observable<ValidationErrors | null> {
        
        return this.userService.isUserExists(control.value).pipe(
            distinctUntilChanged(),
            debounceTime(600),
            map(response => (response ? {emailExists: true} : null )),
            catchError(() => of(null))
        );
    }
}