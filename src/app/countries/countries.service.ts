import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countriesUrl: string;

  constructor(private http: HttpClient) {
    this.countriesUrl = environment.apiUrl;
  }

  getEuro(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl + '/regionalbloc/eu');
  }
}
