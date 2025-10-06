import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerraraCardComponent } from 'src/app/shared/ferrara-card/ferrara-card.component';
import { LatitudCardComponent } from "src/app/shared/latitud-card/latitud-card.component";
import { JamieTurnerCardComponent } from "src/app/shared/jamie-turner-card/jamie-turner-card.component";
import { RolandCardComponent } from "src/app/shared/roland-card/roland-card.component";
/* import { AppRoutingModule } from "src/app/app-routing.module"; */
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FerraraCardComponent,
    LatitudCardComponent,
    JamieTurnerCardComponent,
    RolandCardComponent,
    /* AppRoutingModule, */
    RouterLink,
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  logos: string[] = [
    '/assets/images/work/_logo-slider-1.svg',
    '/assets/images/work/_logo-slider-2.svg',
    '/assets/images/work/_logo-slider-3.svg',
    '/assets/images/work/_logo-slider-4.svg',
    '/assets/images/work/_logo-slider-5.svg',
    '/assets/images/work/_logo-slider-6.svg',
    '/assets/images/work/_logo-slider-7.svg',
    '/assets/images/work/_logo-slider-8.svg',
    '/assets/images/work/_logo-slider-9.svg',
    '/assets/images/work/_logo-slider-10.svg',
    '/assets/images/work/_logo-slider-11.svg',
  ];

  get duplicatedLogos(): string[] {
    // Duplica los logos para lograr animación infinita suave
    return [...this.logos, ...this.logos];
  }
}
