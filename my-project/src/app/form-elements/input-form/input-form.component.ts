import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.less']
})
export class InputFormComponent implements OnInit {
  // tslint:disable-next-line:typedef-whitespace
  name= 'name';
  @Input() details : any;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

}
