import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {formDetail} from './DataRegistrationForm';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.less']
})
export class RegistrationFormComponent implements OnInit {

  inputDetail;
  buttonDetail;

  mapForm = this.fb.group({
    name: [''],
    surname: [''],
    mail: [''],
    password: [''],
    confirmPsw: [''],
  });

  onSubmit () {
    console.warn(this.mapForm.value);
  }

  constructor(private fb: FormBuilder) {

    this.inputDetail = formDetail.inputDetail;
    this.buttonDetail = formDetail.buttonDetail;

  }

  ngOnInit() {
  }

}
