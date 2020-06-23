import {AbstractControl} from '@angular/forms';

export const mailValidator = (control: AbstractControl):  any => {
  const rex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/);
  return !rex.test(control.value) ? {'mailValidator': true} : null;
};

export const pswValidator = (control: AbstractControl): any => {
  const rex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/);
  return !rex.test(control.value) ? {'pswValidator': true} : null;
};





