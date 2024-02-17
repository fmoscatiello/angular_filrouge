import { TestBed } from '@angular/core/testing';

import { SousthemeService } from './soustheme.service';

describe('SousthemeService', () => {
  let service: SousthemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousthemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
