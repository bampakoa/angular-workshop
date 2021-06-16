import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CountryListComponent]
})
export class CountriesModule { }
