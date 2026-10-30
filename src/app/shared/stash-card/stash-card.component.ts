import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-stash-card',
  /* host: {
    '[class]': 'customClass'
  }, */
  imports: [CommonModule, RouterLink],
  templateUrl: './stash-card.component.html',
  styleUrls: ['./stash-card.component.scss']
})
export class StashCardComponent {

  @Input() customClass = '';
}
