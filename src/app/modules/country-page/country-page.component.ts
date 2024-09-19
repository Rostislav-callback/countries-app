import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription, tap, take } from 'rxjs';

import { CountriesService } from '../home-page/services/countries.service';
import { Country, Holiday } from '../home-page/interfaces/countries.interface';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'country-page-app',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})

export class CountryPageComponent implements OnInit {
  countryId!: string;
  currentCountry!: Country;
  holidaysData!: Holiday[];
  currentTabIndex!: number;
  currentCountryData$!: Observable<Country[]>;
  routeParamsSubscription$!: Subscription;
  years: string[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];

  constructor(private route: ActivatedRoute, private countriesService: CountriesService) {
    this.routeParamsSubscription$ = this.route.params.subscribe(params => {
      this.countryId = params['id'];
    });
    this.currentCountryData$ = this.countriesService.getAllCountries().pipe(
      tap(countries => this.currentCountry = countries.filter(country => country.countryCode === this.countryId)[0]),
    )
  }

  ngOnInit(): void {
    this.initCurrentYear();
  }

  initCurrentYear(): void {
    const currentYear = new Date().getFullYear();
    const currentIndex = this.years.indexOf(currentYear.toString());

    this.currentTabIndex = currentIndex;

    this.getHolydaysData(currentYear);
  }

  getHolydaysData(year: number): void {
    this.countriesService.getHolidaysByYear(this.countryId, year).pipe(take(1)).subscribe(holydays => {
      this.holidaysData = holydays;
    });
  }

  change(event: MatTabChangeEvent) {
    this.getHolydaysData(+event.tab.textLabel);
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription$.unsubscribe();
  }
}