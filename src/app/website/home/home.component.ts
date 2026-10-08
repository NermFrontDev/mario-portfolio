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

  @ViewChild('heroVideo')
  heroVideo?: ElementRef<HTMLVideoElement>;

  private observer?: IntersectionObserver;
  private animationFrame?: number;
  private videoCleanupFns: Array<() => void> = [];

  ngAfterViewInit(): void {
    this.initHeroVideo();

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

  private initHeroVideo(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const startPlayback = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay policy prevented immediate playback; interaction handler will trigger it
        });
      }
    };

    // Trigger immediate playback
    startPlayback();

    const onCanPlay = () => startPlayback();
    const onLoadedMetadata = () => startPlayback();
    const onEnded = () => {
      video.currentTime = 0;
      startPlayback();
    };
    const onVisibilityChange = () => {
      if (!document.hidden) {
        startPlayback();
      }
    };

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('ended', onEnded);
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Interaction fallback for restrictive mobile browsers / battery saving modes
    const interactionEvents = ['touchstart', 'touchend', 'click', 'scroll'];
    const onFirstInteraction = () => {
      startPlayback();
      interactionEvents.forEach((evt) => window.removeEventListener(evt, onFirstInteraction));
    };
    interactionEvents.forEach((evt) =>
      window.addEventListener(evt, onFirstInteraction, { passive: true, once: true })
    );

    this.videoCleanupFns.push(() => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('ended', onEnded);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      interactionEvents.forEach((evt) => window.removeEventListener(evt, onFirstInteraction));
    });
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

    this.videoCleanupFns.forEach((cleanup) => cleanup());
    this.videoCleanupFns = [];
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
