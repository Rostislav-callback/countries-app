import { Pipe, PipeTransform } from '@angular/core';

import { Country } from '../interfaces/countries.interface';

@Pipe({
  name: 'searchCountry'
})
export class SearchPipe implements PipeTransform {
  transform(value: Country[] | null, searchValue: string): Country[] {
    if (searchValue) {
      return value!.filter(item => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }

    return value!;
  }
}