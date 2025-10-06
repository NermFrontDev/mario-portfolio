import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LatitudCardComponent } from "src/app/shared/latitud-card/latitud-card.component";
import { RolandCardComponent } from "src/app/shared/roland-card/roland-card.component";

@Component({
  selector: 'app-ferrara',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    LatitudCardComponent,
    RolandCardComponent
],
  templateUrl: './ferrara.component.html',
  styleUrls: ['./ferrara.component.scss']
})
export class FerraraComponent {

}
