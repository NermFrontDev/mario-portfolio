import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferrara-card',
  standalone: true,
  host: {
    '[class]': 'customClass'
  },
  imports: [
  ],
  templateUrl: './ferrara-card.component.html',
  styleUrls: ['../cards.scss']
})
export class FerraraCardComponent implements OnInit {

  @Input() customClass = '';

  constructor() { }

  ngOnInit() {
  }

}
