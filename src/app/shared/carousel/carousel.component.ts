import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

export interface CarouselSlide {
  image: string;
  alt: string;
}

@Component({
  standalone: true,
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() slides: CarouselSlide[] = [];

  @Input() description = '';

  @ViewChild('viewport')
  viewport!: ElementRef<HTMLElement>;

  @ViewChildren('slide')
  slideElements!: QueryList<ElementRef<HTMLImageElement>>;

  currentIndex = 0;

  goToSlide(index: number): void {
    const total = this.slides.length;
    if (!total) return;

    this.currentIndex = Math.max(0, Math.min(index, total - 1));

    const viewport = this.viewport.nativeElement;
    const slide = this.slideElements.get(this.currentIndex)?.nativeElement;

    if (!slide) return;

    const viewportRect = viewport.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();

    const position = viewport.scrollLeft + slideRect.left - viewportRect.left;

    viewport.scrollTo({
      left: position,
      behavior: 'smooth',
    });
  }

  nextSlide(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }
}
