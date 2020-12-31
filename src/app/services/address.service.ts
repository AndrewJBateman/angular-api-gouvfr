import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GeocodeJSON } from '../interfaces/geocode-json';

@Injectable()
export class AddressService {
  public static readonly BASE_URL: string = 'https://api-adresse.data.gouv.fr';

  constructor(private httpClient: HttpClient) {}

  // search geo.api.gouv.fr using q search parameter, default limit = 5
  search(value: any): Observable<any> {
    if (typeof value === 'string' && value.length >= 4) {
      const params = new HttpParams().set('q', value);
      console.log('search params: ', params);
      return this.httpClient.get<GeocodeJSON>(
        AddressService.BASE_URL + '/search',
        { params }
      );
    } else {
      return of([]);
    }
  }
}
