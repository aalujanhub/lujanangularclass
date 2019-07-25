import { TestBed } from '@angular/core/testing';

import { ServiciomensajeService } from './serviciomensaje.service';

describe('ServiciomensajeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciomensajeService = TestBed.get(ServiciomensajeService);
    expect(service).toBeTruthy();
  });
});
