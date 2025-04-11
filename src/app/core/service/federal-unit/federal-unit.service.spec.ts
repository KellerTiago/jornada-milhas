import { TestBed } from '@angular/core/testing';

import { FederalUnitService } from './federal-unit.service';

describe('FederalUnitService', () => {
  let service: FederalUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FederalUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
