import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


export class CustomValidators { 
    constructor(){}

    static  ifUserExists(control: AbstractControl) : {[key : string] : boolean} | null {

        if(control.value === 'work.sojess@gmail.com'){
            return {'emailExists':true}
        } else {
            return null;
        }
    }

    
    
}
