import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-landfrost',
  imports: [RouterLink, CommonModule],
  templateUrl: './landfrost.component.html',
  styleUrls: ['./landfrost.component.scss']
})
export class LandfrostComponent {

}
