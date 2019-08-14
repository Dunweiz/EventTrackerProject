import { Pipe, PipeTransform } from '@angular/core';
import { Travel } from '../models/travel';

@Pipe({
  name: 'travelTotal'
})
export class TravelTotalPipe implements PipeTransform {

  transform(travels: Travel[]): number {
    let total = 0;
    travels.forEach((val) => {
      if (val.distance) {
        total += val.distance;
      }
    });
    return total;
  }

}
