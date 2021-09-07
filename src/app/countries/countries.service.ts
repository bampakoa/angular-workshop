import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  getEuro(): Observable<Country[]> {
    return this.http.get<Country[]>(environment.apiUrl + '/regionalbloc/eu');
  }

  search(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.apiUrl}/name/${term}`);
  }
}
