import { TestBed } from '@angular/core/testing';

import { FakeParticipant } from './FakeParticipant.service';

describe('FakeParticipant', () => {
  let service: FakeParticipant;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeParticipant);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
