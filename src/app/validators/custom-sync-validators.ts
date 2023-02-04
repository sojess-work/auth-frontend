import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


export class CustomValidators { 
    constructor(){}

    static isConfirmPassSame(controlPass : any, controlConfirmPass :any){
        return (formGroup : FormGroup) => {
            const passcontrol = formGroup.controls[controlPass];
            const confPassControl = formGroup.controls[controlConfirmPass];
            if(confPassControl.errors && !confPassControl.errors['notMatch']){
                return;
            }
            if(passcontrol.value !== confPassControl.value){
                confPassControl.setErrors({ notMatch: true });
                return;
            }else {
                return null;
            }
        }
    } 
}
