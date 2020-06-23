import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {mailValidator, nameAndSurnameValidator, pswValidator} from './validations/validation-form';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.less']
})
export class RegistrationFormComponent implements OnInit {

  @Input() formDetail;
  mapForm;
  inputName;
  inputSurname;
  inputMail;
  inputPassword;
  buttonDetail;

  onSubmit () {
    console.warn(this.mapForm.value);
    console.warn(this.mapForm.status);
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mapForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, nameAndSurnameValidator])],
      surname: ['', Validators.compose([Validators.required, nameAndSurnameValidator])],
      mail: ['', Validators.compose( [Validators.required, mailValidator ])],
      password: ['', Validators.compose([Validators.required, pswValidator])],
    });

    this.inputName = this.formDetail.inputDetail.inputName;
    this.inputSurname = this.formDetail.inputDetail.inputSurname;
    this.inputMail = this.formDetail.inputDetail.inputMail;
    this.inputPassword = this.formDetail.inputDetail.inputPassword;
    this.buttonDetail = this.formDetail.buttonDetail;

  }

  get name() { return this.mapForm.get('name'); }
  get surname() { return this.mapForm.get('surname'); }
  get mail() { return this.mapForm.get('mail'); }
  get password() { return this.mapForm.get('password'); }
}
