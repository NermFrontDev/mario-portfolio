import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerraraCardComponent } from "src/app/shared/ferrara-card/ferrara-card.component";
import { RouterLink } from '@angular/router';
import { LatitudCardComponent } from "src/app/shared/latitud-card/latitud-card.component";


@Component({
  selector: 'app-jamie-turner',
  standalone: true,
  imports: [
    CommonModule,
    FerraraCardComponent,
    RouterLink,
    LatitudCardComponent
],
  templateUrl: './jamie-turner.component.html',
  styleUrls: ['./jamie-turner.component.scss']
})
export class JamieTurnerComponent {

}
