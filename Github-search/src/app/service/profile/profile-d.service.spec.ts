import { TestBed } from '@angular/core/testing';

import { ProfileDService } from './profile-d.service';

describe('ProfileDService', () => {
  let service: ProfileDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
