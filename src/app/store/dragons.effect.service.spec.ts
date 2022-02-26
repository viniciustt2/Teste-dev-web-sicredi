import { TestBed } from '@angular/core/testing';

import { DragonsEffectService } from './dragons.effect.service';

describe('Dragons.EffectService', () => {
  let service: DragonsEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonsEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
