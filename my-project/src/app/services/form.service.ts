
export class FormService {
  detail = {
      inputDetail:  {
        skinInput: 'input-blue',
        skinInputError: 'input-error',

        inputName:  {
          label: 'name',
          type: 'text',
          placeholder: 'ex. Tom',
          required: 'Name is required',
          validationText: 'Name must have minimum 3 characters. Maximum 50 characters. No special characters.',

        },
        inputSurname: {
          label: 'surname',
          type: 'text',
          placeholder: 'ex. Jonson',
          required: 'Surname is required',
          validationText: 'Surname must have minimum 3 characters. Maximum 50 characters. No special characters.',

        },
        inputMail: {
          label: 'mail',
          type: 'mail',
          placeholder: 'ex. tom.jonson@gmail.com',
          required: 'Mail is required',
          validationText: 'Mail non valida.',

        },
        inputPassword: {
          label: 'password',
          type: 'password',
          placeholder: 'ex. Jonson2020',
          required: 'Password is required',
          validationText: 'Minimum 8 characters. At least 1 upper. At least 1 number. No special character.',

        },
      },
      buttonDetail: {
      buttonTitle: 'Sign me up!',
        skinBtn: 'blue-btn',
        skinBtnOff: 'blue-btn off-blue-btn',
    }
  };
  getFormDetail() {
    return this.detail;
  }
  addUser(userData) {
    console.log(userData);
  }

}

