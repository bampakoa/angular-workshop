import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries/countries.service';
import { Country } from '../countries/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries() {
    this.countriesService.getEuro().subscribe(countries => this.countries = countries);
  }

}
