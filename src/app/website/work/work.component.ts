import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

}
