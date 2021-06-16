import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];
  searchText = '';

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  findCountries() {
    this.countriesService.search(this.searchText).subscribe(countries => this.countries = countries);
  }

  private getCountries() {
    this.countriesService.getEuro().subscribe(countries => this.countries = countries);
  }

}
