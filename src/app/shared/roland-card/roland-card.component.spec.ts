/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RolandCardComponent } from './roland-card.component';

describe('RolandCardComponent', () => {
  let component: RolandCardComponent;
  let fixture: ComponentFixture<RolandCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolandCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
