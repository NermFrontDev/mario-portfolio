import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolandComponent } from './roland.component';

describe('RolandComponent', () => {
  let component: RolandComponent;
  let fixture: ComponentFixture<RolandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RolandComponent]
    });
    fixture = TestBed.createComponent(RolandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
