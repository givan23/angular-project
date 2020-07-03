import {Component, OnInit} from '@angular/core';
import {FormService} from './services/form.service';
import {FormType} from './types/form/form.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  formDetail: FormType;

  constructor (private service: FormService) {}

  ngOnInit(): void {
    this.formDetail = this.service.getFormDetail();
  }

  onUserDetail(user) {
    this.service.addUser(user);
  };

}
