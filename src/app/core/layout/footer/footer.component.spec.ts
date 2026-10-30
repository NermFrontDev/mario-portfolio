import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let currentUrl: string;

  beforeEach(() => {
    currentUrl = '/';
    TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [{
        provide: Router,
        useValue: {
          get url() {
            return currentUrl;
          }
        }
      }]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hides the first divider on project pages', () => {
    currentUrl = '/projects/ferrara';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('footer > .container:first-child > .footer-divider')).toBeNull();
  });

  it('shows the first divider outside project pages', () => {
    expect(fixture.nativeElement.querySelector('footer > .container:first-child > .footer-divider')).not.toBeNull();
  });
});
