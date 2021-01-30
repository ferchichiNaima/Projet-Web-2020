import { TestBed } from '@angular/core/testing';

import { FakeFormateur } from './FakeFormateur.service';

describe('FakeFormateur', () => {
  let service: FakeFormateur;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeFormateur);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});