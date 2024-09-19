import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { CountryPageComponent } from './country-page.component';
import { CountryPageRoutingModule } from './country-page-routing.module';


@NgModule({
  declarations: [
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountryPageRoutingModule,
    MatCardModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: []
})

export class CountryPageModule { }