import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryPageComponent } from './country-page.component';
import { CountryPageRoutingModule } from './country-page-routing.module';


@NgModule({
  declarations: [
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountryPageRoutingModule
  ],
  providers: [],
  bootstrap: []
})

export class CountryPageModule { }