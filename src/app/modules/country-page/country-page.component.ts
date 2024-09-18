import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'country-page-app',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})

export class CountryPageComponent {
  countryId!: string;
  routeParamsSubscription$!: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeParamsSubscription$ = this.route.params.subscribe(params => {
      this.countryId = params['id'];
      console.log(this.countryId)
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription$.unsubscribe();
  }
}