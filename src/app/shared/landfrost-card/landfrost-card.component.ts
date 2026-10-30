import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-landfrost-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './landfrost-card.component.html',
  styleUrls: ['./landfrost-card.component.scss']
})
export class LandfrostCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
