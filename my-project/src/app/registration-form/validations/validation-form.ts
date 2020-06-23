import {AbstractControl} from '@angular/forms';

export const nameAndSurnameValidator = (control: AbstractControl):  any => {
  const val = control.value;
  const rex = new RegExp(/^(?=[a-zA-Z0-9._]{3,50}$)(?!.*[_.]{2})[^_.].*[^_.]$/);
  return val.length === 0 ? null : !rex.test(control.value) ? {'nameAndSurnameValidator': true} : null;
};

export const mailValidator = (control: AbstractControl):  any => {
  const val = control.value;
  const rex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/);
  return val.length === 0 ? null : !rex.test(control.value) ? {'mailValidator': true} : null;
};

export const pswValidator = (control: AbstractControl): any => {
  const val = control.value;
  const rex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/);
  return val.length === 0 ? null : !rex.test(val) ? {'pswValidator': true} : null;
};





