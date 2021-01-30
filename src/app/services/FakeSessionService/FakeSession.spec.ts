import { TestBed } from '@angular/core/testing';

import { FakeSession } from './FakeSession.service';

describe('FakeSession', () => {
  let service: FakeSession;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSession);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});