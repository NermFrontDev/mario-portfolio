import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from "src/app/shared/testimonials/testimonials.component";
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TestimonialsComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  ngOnInit(): void {
    AOS.init({
      /* offset: 120, */ // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'center-center',
    })
  }

  @ViewChild('awardTitle')
  awardTitle!: ElementRef<HTMLHeadingElement>;

  private observer?: IntersectionObserver;
  private animationFrame?: number;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          this.animatePercentage();

          // Para que la animación ocurra solo una vez
          this.observer?.disconnect();
        }
      },
      {
        threshold: 0.5
      }
    );

    this.observer.observe(this.awardTitle.nativeElement);
  }

  private animatePercentage(): void {
    const element = this.awardTitle.nativeElement;
    const target = 45;
    const duration = 2400;
    const start = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - start) / duration,
        1
      );

      const value = Math.floor(progress * target);

      element.textContent = `${value}%`;

      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      } else {
        element.textContent = `${target}%`;
      }
    };

    this.animationFrame = requestAnimationFrame(animate);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

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
