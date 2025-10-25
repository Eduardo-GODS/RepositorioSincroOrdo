import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

// Importe do novo local
import { authGuard } from './core/guards/auth-guard';
describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
