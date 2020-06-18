import { TestBed, async, inject } from '@angular/core/testing';

import { LoginPgGuardGuard } from './login-pg-guard.guard';

describe('LoginPgGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginPgGuardGuard]
    });
  });

  it('should ...', inject([LoginPgGuardGuard], (guard: LoginPgGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
