import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from '../country-list/country-list.component';



@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CountryListComponent]
})
export class CountriesModule { }
