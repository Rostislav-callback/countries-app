import { ChangeDetectionStrategy, Component } from '@angular/core';

import { filter, from, map, Observable, switchMap, take, tap } from 'rxjs';

import { CountriesService } from './services/countries.service';
import { Country, Holiday, RandomCountriesData } from './interfaces/countries.interface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'home-page-app',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomePageComponent {
  randomCountries: any[] = [];
  searchInput: FormControl = new FormControl('');

  nextHolidays$!: Observable<Holiday[]>;
  allCountries$!: Observable<Country[]>;

  constructor(private countriesService: CountriesService) {
    this.allCountries$ = this.countriesService.getAllCountries().pipe(
      tap(countries => this.getRandomCountries(countries)),
    );
    this.nextHolidays$ = this.countriesService.getAllCountries().pipe(
      switchMap(country => this.countriesService.getNextPublicHolidays(this.randomCountries[0].countryCode)),
      tap(result => {
        let index = 0;

        this.updateRandomCountryData(result[index].name, result[index].date, index);
      }),
      switchMap(country => this.countriesService.getNextPublicHolidays(this.randomCountries[1].countryCode)),
      tap(result => {
        let index = 1;

        this.updateRandomCountryData(result[0].name, result[0].date, index);
      }),
      switchMap(country => this.countriesService.getNextPublicHolidays(this.randomCountries[2].countryCode)),
      tap(result => {
        let index = 2;

        this.updateRandomCountryData(result[0].name, result[0].date, index);
      })
    )
  }

  private updateRandomCountryData(holidayName: string, holidayDate: string, index: number): void {
    this.randomCountries = [...this.randomCountries].map((item, i) => {
      if(i === index) {
        return {
          ...item,
          haliday: holidayName,
          date: holidayDate
        } as RandomCountriesData;
      }

      return item;
    })
  }


  private getRandomCountries(countries: Country[]): void {
    const result = [];

    for(let i = 0; i < 3; i++) {
      const random = countries[Math.floor(Math.random()*countries.length)];

      result.push(random);
    }
    
    this.randomCountries = [...result];
  }
}