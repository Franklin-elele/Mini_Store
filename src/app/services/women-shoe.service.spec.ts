import { TestBed } from '@angular/core/testing';

import { WomenShoeService } from './women-shoe.service';

describe('WomenShoeService', () => {
  let service: WomenShoeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenShoeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
