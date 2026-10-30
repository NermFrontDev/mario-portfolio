import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-stash-tea',
  imports: [CommonModule, RouterLink],
  templateUrl: './stash-tea.component.html',
  styleUrls: ['./stash-tea.component.scss']
})
export class StashTeaComponent {

}
