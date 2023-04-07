import { TestBed } from '@angular/core/testing';

import { HomeModule } from './home.module';

describe('HomeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeModule],
    });
  });

  it('initializes', () => {
    const module: HomeModule = TestBed.inject(HomeModule);
    expect(module).toBeTruthy();
  });
});
