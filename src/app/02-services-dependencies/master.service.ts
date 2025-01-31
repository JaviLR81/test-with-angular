import { Injectable } from '@angular/core';
import { ValueService } from '../01-services/value.service';

@Injectable()
export class MasterService {

  constructor(private valueService: ValueService) {}

  getValue() {
    return this.valueService.getValue();
  }
  
}
