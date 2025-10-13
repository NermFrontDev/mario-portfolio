import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latitud-card',
  standalone: true,
  host: {
    '[class]': 'customClass'
  },
  imports: [
  ],
  templateUrl: './latitud-card.component.html',
  styleUrls: ['../cards.scss']
})
export class LatitudCardComponent implements OnInit {

  @Input() customClass = '';

  constructor() { }

  ngOnInit() {
  }

}
