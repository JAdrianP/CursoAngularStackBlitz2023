import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Comp1Component } from './comp1.component';
import { Comp1Module } from './comp1.module';

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Comp1Module],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
