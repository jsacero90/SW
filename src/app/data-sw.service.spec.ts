import { TestBed } from '@angular/core/testing';

import { DataSWService } from './data-sw.service';

describe('DataSWService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSWService = TestBed.get(DataSWService);
    expect(service).toBeTruthy();
  });
});
