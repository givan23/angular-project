import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.less']
})

export class ButtonFormComponent implements OnInit {
  @Input() details: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.details);
  }

}
