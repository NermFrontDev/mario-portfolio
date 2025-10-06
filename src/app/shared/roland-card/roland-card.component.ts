import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roland-card',
  standalone: true,
  imports: [],
  templateUrl: './roland-card.component.html',
  styleUrls: ['./roland-card.component.scss']
})
export class RolandCardComponent implements OnInit {

  @Input() customClass = '';

  constructor() { }

  ngOnInit() {
  }

}
