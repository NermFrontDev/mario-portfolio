import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferrara-card',
  standalone: true,
  imports: [

  ],
  templateUrl: './ferrara-card.component.html',
  styleUrls: ['./ferrara-card.component.scss']
})
export class FerraraCardComponent implements OnInit {

  @Input() customClass = '';

  constructor() { }

  ngOnInit() {
  }

}
