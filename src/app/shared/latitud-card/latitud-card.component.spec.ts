/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LatitudCardComponent } from './latitud-card.component';

describe('LatitudCardComponent', () => {
  let component: LatitudCardComponent;
  let fixture: ComponentFixture<LatitudCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatitudCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatitudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
