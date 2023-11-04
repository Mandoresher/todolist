import { TestBed } from '@angular/core/testing';

import { IdCreatorService } from './id-creator.service';

describe('IdCreatorService', () => {
  let service: IdCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
