// import { Pipe, PipeTransform } from '@angular/core';
//
// import { Answer } from '../models/answer';
//
// @Pipe({ name: 'uniquestuff' })
//
// export class UniqueStuff implements PipeTransform {
//   transform(dupl: string[]){
//     return Array.from(new Set(dupl));
//     //Array.from(new Set(dupl))
//   }
// }
// import { Pipe,PipeTransform } from '@angular/core';
//
// /*
//   # Description:
//
//   Repackages an array subset as a new array.
//
//   **Reasoning:**
//
//   Angular2's change checker freaks out when you ngFor an array that's a subset
//     of a larger data structure.
//
//   # Usage:
//   ``
//   <div *ng-for="#value of arrayOfObjects | derp"> </div>
//   ``
// */
// @Pipe({ name: 'derp' })
// export class DerpPipe {
//   transform (value, args) {
//     return Array.from(value);
//   }
// }
//# sourceMappingURL=unique.pipe.js.map