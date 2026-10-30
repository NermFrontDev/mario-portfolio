import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent, CarouselSlide } from 'src/app/shared/carousel/carousel.component';
import { StashCardComponent } from 'src/app/shared/stash-card/stash-card.component';
import { LandfrostCardComponent } from 'src/app/shared/landfrost-card/landfrost-card.component';

@Component({
  standalone: true,
  selector: 'app-jelly-belly',
  imports: [
    CommonModule,
    CarouselComponent,
    StashCardComponent,
    RouterLink,
    LandfrostCardComponent
],
  templateUrl: './jelly-belly.component.html',
  styleUrls: ['./jelly-belly.component.scss'],
})
export class JellyBellyComponent {

  @ViewChildren(CarouselComponent)
  carousels!: QueryList<CarouselComponent>;

  @ViewChild('storyVideo')
  storyVideo?: ElementRef<HTMLVideoElement>;

  private videoCleanupFns: Array<() => void> = [];

  ngAfterViewInit(): void {
    this.initStoryVideo();
  }

  private initStoryVideo(): void {
    const video = this.storyVideo?.nativeElement;
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

  goToSlide(carouselIndex: number, slideIndex: number): void {
    const carousel = this.carousels.get(carouselIndex);
    carousel?.goToSlide(slideIndex);
  }

  nextSlide(carouselIndex: number): void {
    const carousel = this.carousels.get(carouselIndex);
    carousel?.nextSlide();
  }

  prevSlide(carouselIndex: number): void {
    const carousel = this.carousels.get(carouselIndex);
    carousel?.prevSlide();
  }

  private readonly imagePath = 'assets/images/projects/jelly-belly';

  firstSlides: CarouselSlide[] = Array.from({ length: 6 }, (_, i) => ({
    image: `${this.imagePath}/carousel-1/img-${i + 1}.webp`,
    alt: `Jelly Belly creative concept ${i + 1}`,
  }));

  secondSlides: CarouselSlide[] = Array.from({ length: 6 }, (_, i) => ({
    image: `${this.imagePath}/carousel-2/img-${i + 1}.webp`,
    alt: `Jelly Belly design exploration ${i + 1}`,
  }));

  thirdSlides: CarouselSlide[] = Array.from({ length: 4 }, (_, i) => ({
    image: `${this.imagePath}/carousel-3/img-${i + 1}.webp`,
    alt: `Jelly Belly design exploration ${i + 1}`,
  }));
}
