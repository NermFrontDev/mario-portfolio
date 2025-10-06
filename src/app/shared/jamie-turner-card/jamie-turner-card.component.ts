import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jamie-turner-card',
  standalone: true,
  imports: [],
  templateUrl: './jamie-turner-card.component.html',
  styleUrls: ['./jamie-turner-card.component.scss']
})
export class JamieTurnerCardComponent implements OnInit {

  @Input() customClass = '';

  constructor() { }

  ngOnInit() {
  }

}
