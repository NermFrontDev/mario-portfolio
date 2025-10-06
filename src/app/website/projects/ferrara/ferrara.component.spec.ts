import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerraraComponent } from './ferrara.component';

describe('FerraraComponent', () => {
  let component: FerraraComponent;
  let fixture: ComponentFixture<FerraraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FerraraComponent]
    });
    fixture = TestBed.createComponent(FerraraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
