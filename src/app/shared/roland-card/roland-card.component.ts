import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roland-card',
  standalone: true,
  host: {
    '[class]': 'customClass'
  },
  imports: [],
  templateUrl: './roland-card.component.html',
  styleUrls: ['../cards.scss']
})
export class RolandCardComponent implements OnInit {

  @Input() customClass = '';

  constructor() { }

  ngOnInit() {
  }

}
