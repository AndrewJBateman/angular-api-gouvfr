# :zap: Angular API Gouv.fr

* Angular app using an ngForm and RxJS operators and the [French Gouvernment API](https://geo.api.gouv.fr/) to search for addresses in France

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular API Gouv.fr](#zap-angular-api-gouvfr)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:flashlight: Testing](#flashlight-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* [API address search](https://geo.api.gouv.fr/adresse) uses the [geocoders geocodespec](https://github.com/geocoders/geocodejson-spec) standard geojson response format
* RxJS subscriptions objects used to represents the execution of observables

## :camera: Screenshots

![Example screenshot](./img/result.jpg)

## :signal_strength: Technologies

* [Angular v11](https://angular.io/)
* [Angular Formcontrol](https://angular.io/api/forms/FormControl) used to track the value and validation status of an individual form control
* [Angular Material Autocomplete](https://material.angular.io/components/autocomplete/api)
* [SCSS](https://sass-lang.com/guide) extended CSS syntax using SASS pre-compiler
* [RxJS Library v6](https://angular.io/guide/rx-library) used to handle async operations using observables.
* [RxJS debounce time](https://rxjs-dev.firebaseapp.com/api/operators/debounceTime) added to user search to emit a value with a delay after user has stopped typing

## :floppy_disk: Setup

* Install dependencies by running `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
* The app will automatically reload if you change any of the source files

## :flashlight: Testing

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## :computer: Code Examples

* extract from `` tba

```typescript

```

## :cool: Features

* auto address complete

## :clipboard: Status & To-Do List

* Status: In work
* To-Do: Fix errors

## :clap: Inspiration

* [](https://geo.api.gouv.fr/) "Interrogez les référentiels géographiques plus facilement."
* [Geocoders: geocodejson-spec: Github repo](https://github.com/geocoders/geocodejson-spec) DRAFT: attempt to have standard geojson responses from geocoders.

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
