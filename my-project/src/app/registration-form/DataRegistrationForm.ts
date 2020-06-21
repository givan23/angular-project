export const formDetail = {
  inputDetail: [
    {
      label: 'name',
      type: 'text',
      placeholder: 'ex. Tom',
      max: '50',
      inputError: true,
      valid: 'validation error'
    },
    {
      label: 'surname',
      type: 'text',
      placeholder: 'ex. Jonson',
      max: '50',
      inputError: false,
      valid: 'validation error'
    },
    {
      label: 'mail',
      type: 'mail',
      placeholder: 'ex. tom.jonson@gmail.com',
      max: '100',
      inputError: true,
      valid: 'validation error'
    },
    {
      label: 'password',
      type: 'password',
      placeholder: 'minimum 8 characters and at least capital letter',
      max: '16',
      inputError: false,
      valid: 'validation error'
    },
    {
      label: 'confirmPsw',
      type: 'password',
      placeholder: 'please confirm your password',
      max: '16',
      inputError: false,
      valid: 'validation error'
    },
  ],
  buttonDetail: {
    buttonTitle: 'Sign me up!',
    skinBtn: ' blue-btn',
    skinBtnOff: 'blue-btn off-blue-btn',
    buttonToggle: false
  }
// tslint:disable-next-line:eofline
};
