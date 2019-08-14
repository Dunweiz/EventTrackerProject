import { TestBed } from '@angular/core/testing';

import { TravelTrackerService } from './travel-tracker.service';

describe('TravelTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelTrackerService = TestBed.get(TravelTrackerService);
    expect(service).toBeTruthy();
  });
});
