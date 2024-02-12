/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiConnectionService } from './apiConnection.service';

describe('Service: ApiConnection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConnectionService]
    });
  });

  it('should ...', inject([ApiConnectionService], (service: ApiConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
