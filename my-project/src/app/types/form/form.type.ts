import {ButtonType} from './button.type';
import {InputType} from './input.type';

export interface FormType {
  inputDetail: {
    skinInput: string;
    skinInputError: string;
    inputName: InputType;
    inputSurname: InputType;
    inputMail: InputType;
    inputPassword: InputType;
  };
  buttonDetail: ButtonType;
}
