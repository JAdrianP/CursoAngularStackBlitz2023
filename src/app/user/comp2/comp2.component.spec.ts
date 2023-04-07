import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Comp2Component } from './comp2.component';
import { Comp2Module } from './comp2.module';

describe('Comp2Component', () => {
  let component: Comp2Component;
  let fixture: ComponentFixture<Comp2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Comp2Module],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
