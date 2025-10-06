import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerraraCardComponent } from "src/app/shared/ferrara-card/ferrara-card.component";
import { JamieTurnerCardComponent } from "src/app/shared/jamie-turner-card/jamie-turner-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roland',
  standalone: true,
  imports: [
    CommonModule,
    FerraraCardComponent,
    JamieTurnerCardComponent,
    RouterLink
  ],
  templateUrl: './roland.component.html',
  styleUrls: ['./roland.component.scss']
})
export class RolandComponent {

}
