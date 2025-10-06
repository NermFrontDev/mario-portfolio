import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamieTurnerComponent } from './jamie-turner.component';

describe('JamieTurnerComponent', () => {
  let component: JamieTurnerComponent;
  let fixture: ComponentFixture<JamieTurnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JamieTurnerComponent]
    });
    fixture = TestBed.createComponent(JamieTurnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
