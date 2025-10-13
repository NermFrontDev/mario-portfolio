import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jamie-turner-card',
  standalone: true,
  host: {
    '[class]': 'customClass'
  },
  imports: [],
  templateUrl: './jamie-turner-card.component.html',
  styleUrls: ['../cards.scss']
})
export class JamieTurnerCardComponent implements OnInit {

  @Input() customClass = '';

  constructor() { }

  ngOnInit() {
  }

}
