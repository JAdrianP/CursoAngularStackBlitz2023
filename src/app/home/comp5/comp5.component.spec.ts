import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Comp5Component } from './comp5.component';
import { Comp5Module } from './comp5.module';

describe('Comp5Component', () => {
  let component: Comp5Component;
  let fixture: ComponentFixture<Comp5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Comp5Module],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
