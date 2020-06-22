import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {formDetail} from '../model/moc/form-moc';
import {InputModel} from '../model/ts/input-model';
import {ButtonModel} from '../model/ts/button-model';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.less']
})
export class RegistrationFormComponent implements OnInit {
  mapForm;
  inputName: InputModel;
  inputSurname: InputModel;
  inputMail: InputModel;
  inputPassword: InputModel;
  inputConfPsw: InputModel;
  buttonDetail: ButtonModel;

  onSubmit () {
    console.warn(this.mapForm.value);
    console.warn(this.mapForm.status);
  }

  constructor(private fb: FormBuilder) {
    this.inputName = formDetail.inputDetail.inputName;
    this.inputSurname = formDetail.inputDetail.inputSurname;
    this.inputMail = formDetail.inputDetail.inputMail;
    this.inputPassword = formDetail.inputDetail.inputPassword;
    this.inputConfPsw = formDetail.inputDetail.inputConfPsw;
    this.buttonDetail = formDetail.buttonDetail;

  }

  ngOnInit(): void {
    this.mapForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      surname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      mail: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPsw: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  get name() { return this.mapForm.get('name'); }
  get surname() { return this.mapForm.get('surname'); }
  get mail() { return this.mapForm.get('mail'); }
  get password() { return this.mapForm.get('password'); }
  get confirmPsw() { return this.mapForm.get('confirmPsw'); }
}
