import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latitud-card',
  standalone: true,
  imports: [],
  templateUrl: './latitud-card.component.html',
  styleUrls: ['./latitud-card.component.scss']
})
export class LatitudCardComponent implements OnInit {

  @Input() customClass = '';

  constructor() { }

  ngOnInit() {
  }

}
