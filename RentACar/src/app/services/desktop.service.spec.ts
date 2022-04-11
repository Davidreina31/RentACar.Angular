/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesktopService } from './desktop.service';

describe('Service: Desktop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesktopService]
    });
  });

  it('should ...', inject([DesktopService], (service: DesktopService) => {
    expect(service).toBeTruthy();
  }));
});
