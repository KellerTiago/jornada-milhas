import { TestBed } from '@angular/core/testing';

import { TestimonialCardService } from './testimonial-card.service';

describe('TestimonialCardService', () => {
  let service: TestimonialCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
