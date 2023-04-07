import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Comp3Component } from './comp3.component';
import { Comp3Module } from './comp3.module';

describe('Comp3Component', () => {
  let component: Comp3Component;
  let fixture: ComponentFixture<Comp3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Comp3Module],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
