/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FerraraCardComponent } from './ferrara-card.component';

describe('FerraraCardComponent', () => {
  let component: FerraraCardComponent;
  let fixture: ComponentFixture<FerraraCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerraraCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerraraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
