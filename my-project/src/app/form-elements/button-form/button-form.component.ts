import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.less']
})

export class ButtonFormComponent implements OnInit {
 buttonTitle = 'Sign me up!';
 skinBtn = ' blue-btn';
 skinBtnOff = 'blue-btn off-blue-btn';
 buttonToggle = true;
  constructor() { }

  ngOnInit() {
  }

}
