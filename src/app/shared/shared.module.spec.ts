import { TestBed } from '@angular/core/testing';

import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
  });

  it('initializes', () => {
    const module: SharedModule = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  });
});
