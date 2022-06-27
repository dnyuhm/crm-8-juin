import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: number, coef: number, tva?: number): number {
    if (tva) return val * coef * (tva / 100 + 1);
    return val * coef;
  }

  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('total called');
  // if (tva) return val * coef * (tva / 100 + 1);
  // return val * coef;
  // }
}
