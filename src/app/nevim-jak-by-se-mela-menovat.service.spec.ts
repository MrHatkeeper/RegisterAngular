import { TestBed } from '@angular/core/testing';

import { NevimJakBySeMelaMenovatService } from './nevim-jak-by-se-mela-menovat.service';

describe('NevimJakBySeMelaMenovatService', () => {
  let service: NevimJakBySeMelaMenovatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NevimJakBySeMelaMenovatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
