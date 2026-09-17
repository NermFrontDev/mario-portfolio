import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  highlight: string;
  text: string;
}

@Component({
  standalone: true,
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy {

  testimonials: Testimonial[] = [

    {
      id: 1,
      name: 'Arantza Ávila',
      position: 'Project Manager',
      image: 'assets/images/testimonials/testimonial-1.png',
      highlight:
        'Mario is super hands-on, always willing to help,',
      text:
        " really talented, and above all, very kind with a great attitude. I learned a lot from him and truly enjoyed working with him. He's a great teammate!"
    },

    {
      id: 2,
      name: 'Charles Caguioa',
      position: 'Creative Operations',
      image: 'assets/images/testimonials/testimonial-2.png',
      highlight:
        'Mario exemplifies design excellence,',
      text:
        ' balancing creativity, speed, and precision. In just a year, we delivered over 25 projects on schedule and reduced turnaround times from weeks to days. If you’re looking for someone who designs, leads, and uplifts with care, Mario is your man.'
    },

    {
      id: 3,
      name: 'Erick Barahona',
      position: 'Sr .NET Developer.',
      image: 'assets/images/testimonials/testimonial-3.png',
      highlight:
        'Mario is an incredible UX/UI Designer;',
      text:
        ' it‘s always a pleasure working with him. Hes very responsible and dedicated to his work, with very high quality standards.'
    }
  ];


  currentIndex = 0;

  animationDirection: 'up' | 'down' = 'down';

  private autoPlayInterval: any;
  private readonly AUTO_PLAY_TIME = 4000;


  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  /**
   * Testimonio activo
   */
  get activeTestimonial(): Testimonial {

    return this.testimonials[this.currentIndex];

  }


  /**
   * Cambiar al siguiente
   */
  next(): void {

    this.animationDirection = 'down';

    this.currentIndex =
      (this.currentIndex + 1) %
      this.testimonials.length;

    this.restartAutoPlay();

  }


  /**
   * Cambiar al anterior
   */
  previous(): void {

    this.animationDirection = 'up';

    this.currentIndex =
      this.currentIndex === 0
        ? this.testimonials.length - 1
        : this.currentIndex - 1;

    this.restartAutoPlay();

  }


  /**
   * Determina la posición del testimonio
   *
   * -1 = arriba
   *  0 = activo
   *  1 = abajo
   */
  getPosition(index: number): number {

    const total = this.testimonials.length;

    let position =
      index - this.currentIndex;


    /*
     * Loop circular.
     */
    if (position > total / 2) {

      position -= total;

    }


    if (position < -total / 2) {

      position += total;

    }


    return position;

  }


  /**
   * Autoplay
   */
  private startAutoPlay(): void {

    this.stopAutoPlay();

    this.autoPlayInterval = setInterval(() => {

      this.animationDirection = 'down';

      this.currentIndex =
        (this.currentIndex + 1) %
        this.testimonials.length;

    }, this.AUTO_PLAY_TIME);

  }


  /**
   * Reinicia el autoplay después
   * de una interacción manual.
   */
  private restartAutoPlay(): void {

    this.startAutoPlay();

  }


  /**
   * Limpia el intervalo.
   */
  private stopAutoPlay(): void {

    if (this.autoPlayInterval) {

      clearInterval(this.autoPlayInterval);

      this.autoPlayInterval = null;

    }

  }

}
