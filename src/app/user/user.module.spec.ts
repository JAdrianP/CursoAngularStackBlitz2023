import { TestBed } from '@angular/core/testing';

import { UserModule } from './user.module';

describe('UserModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserModule],
    });
  });

  it('initializes', () => {
    const module: UserModule = TestBed.inject(UserModule);
    expect(module).toBeTruthy();
  });
});
