import { Component } from '@angular/core';
import {formDetail} from './model/moc/form-moc';
import {FormModel} from './model/ts/form/form-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  formDetail: FormModel;
  constructor () {
    this.formDetail = formDetail;
  }
}
