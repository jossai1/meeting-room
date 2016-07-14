import { Pipe, PipeTransform } from '@angular/core';

import { Answer } from '../models/answer';

@Pipe({ name: 'uniquestuff' })

export class UniqueStuff implements PipeTransform {
  transform(dupl: string[]){
    return Array.from(new Set(dupl));
    //Array.from(new Set(dupl))
  }
}
