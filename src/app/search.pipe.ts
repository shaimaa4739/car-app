import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './models/car';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Car[],searchTerm: string ): Car[] {
    if (!value || !searchTerm) {
      return value;
    }
    const lowerCaseTerm = searchTerm.toLowerCase();
    return value.filter((item)=>item.car.includes(lowerCaseTerm));
  }

}
