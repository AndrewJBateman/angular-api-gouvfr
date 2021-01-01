import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddressService } from './services/address.service';
import {
  debounceTime,
  finalize,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { FeatureGeocodeJSON } from './interfaces/geocode-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-api-gouvfr';

  formControl = new FormControl();
  options: [];
  isLoading = false;

  // after change in form input, show loading spinner, search run addressService
  // Set loading spinner to false once complete and subscribe to response
  constructor(private addressService: AddressService) {
    this.formControl.valueChanges
      .pipe(
        debounceTime(300),
        startWith(''),
        tap(() => (this.isLoading = true)),
        switchMap((value) =>
          this.addressService
            .search(value)
            .pipe(finalize(() => (this.isLoading = false)))
        )
      )
      .subscribe((response) => {
        console.log('response', response);
        this.options = response.features; // array of objects, each with geometry & property arrays
      });
  }

  displayFctn(option?: FeatureGeocodeJSON): string | undefined {
    return option ? option.properties.label : undefined;
  }
}
