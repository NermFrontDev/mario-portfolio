import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatitudCardComponent } from "src/app/shared/latitud-card/latitud-card.component";
import { RouterLink } from '@angular/router';
import { FerraraCardComponent } from "src/app/shared/ferrara-card/ferrara-card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    LatitudCardComponent,
    RouterLink,
    FerraraCardComponent
],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
