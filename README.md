# :zap: Angular API Gouv.fr

* Angular app using an ngForm and RxJS operators and the [French Gouvernment API](https://geo.api.gouv.fr/) to search for addresses in France
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-api-gouvfr?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-api-gouvfr?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-api-gouvfr?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-api-gouvfr?style=plastic)

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
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* [API address search](https://geo.api.gouv.fr/adresse) uses the [geocoders geocodespec](https://github.com/geocoders/geocodejson-spec) standard geojson response format
* RxJS subscriptions objects used to represents the execution of observables

## :camera: Screenshots

![Example screenshot](./img/result.jpg)

## :signal_strength: Technologies

* [Angular v12](https://angular.io/)
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

* Status: In work. Updated may 2021
* To-Do: Fix errors

## :clap: Inspiration

* [geo.api.gouv.fr homepage](https://geo.api.gouv.fr/) "Interrogez les référentiels géographiques plus facilement."
* [Geocoders: geocodejson-spec: Github repo](https://github.com/geocoders/geocodejson-spec) DRAFT: attempt to have standard geojson responses from geocoders.

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
