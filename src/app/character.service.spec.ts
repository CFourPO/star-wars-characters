import { TestBed, inject } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { HttpModule } from "@angular/http";

describe('CharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CharacterService]
    });
  });

  it('should be created', inject([CharacterService], (service: CharacterService) => {
    expect(service).toBeTruthy();
  }));
});
