import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


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
  inputConfPsw;
  buttonDetail;

  onSubmit () {
    console.warn(this.mapForm.value);
    console.warn(this.mapForm.status);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mapForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      surname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      mail: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPsw: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
    this.inputName = this.formDetail.inputDetail.inputName;
    this.inputSurname = this.formDetail.inputDetail.inputSurname;
    this.inputMail = this.formDetail.inputDetail.inputMail;
    this.inputPassword = this.formDetail.inputDetail.inputPassword;
    this.inputConfPsw = this.formDetail.inputDetail.inputConfPsw;
    this.buttonDetail = this.formDetail.buttonDetail;

  }

  get name() { return this.mapForm.get('name'); }
  get surname() { return this.mapForm.get('surname'); }
  get mail() { return this.mapForm.get('mail'); }
  get password() { return this.mapForm.get('password'); }
  get confirmPsw() { return this.mapForm.get('confirmPsw'); }
}
