import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatitudComponent } from './latitud.component';

describe('LatitudComponent', () => {
  let component: LatitudComponent;
  let fixture: ComponentFixture<LatitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LatitudComponent]
    });
    fixture = TestBed.createComponent(LatitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
