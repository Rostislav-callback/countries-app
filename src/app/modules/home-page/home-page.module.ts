import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { CountriesService } from './services/countries.service';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  exports: [HomePageComponent],
  providers: [CountriesService],
})

export class HomePageModule { }
