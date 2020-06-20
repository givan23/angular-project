import {Component, Input, OnInit} from '@angular/core';
import {Card} from './cards.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})

export class CardsComponent implements OnInit {
  @Input() card: Card;

  constructor() {
  };
  ngOnInit() {
  }
}


