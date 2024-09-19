import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country, Holiday } from '../interfaces/countries.interface';


@Injectable({
    providedIn: 'root'
})

export class CountriesService {

  constructor(private http: HttpClient) {}
  
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://date.nager.at/api/v3/AvailableCountries');
  }

  getNextPublicHolidays(countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`);
  }

  getHolidaysByYear(countryCode: string, year: number): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`);
  }
}