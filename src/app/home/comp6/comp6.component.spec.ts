import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Comp6Component } from './comp6.component';
import { Comp6Module } from './comp6.module';

describe('Comp6Component', () => {
  let component: Comp6Component;
  let fixture: ComponentFixture<Comp6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Comp6Module],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
