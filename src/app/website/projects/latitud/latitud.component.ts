import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerraraCardComponent } from "src/app/shared/ferrara-card/ferrara-card.component";
import { JamieTurnerCardComponent } from "src/app/shared/jamie-turner-card/jamie-turner-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latitud',
  standalone: true,
  imports: [
    CommonModule,
    FerraraCardComponent,
    JamieTurnerCardComponent,
    RouterLink
  ],
  templateUrl: './latitud.component.html',
  styleUrls: ['./latitud.component.scss']
})
export class LatitudComponent {

}
