import {InputModel} from './input-model';
import {ButtonModel} from './button-model';

export class FormModel {
  inputDetail: {
    inputName: InputModel;
    inputSurname: InputModel;
    inputMail: InputModel;
    inputPassword: InputModel;
  };
  buttonDetail: ButtonModel;
}
