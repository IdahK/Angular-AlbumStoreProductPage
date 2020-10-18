# Build An Album Store Product Page With Angular

This repo contains the code for the Pluralsight Project "Build An Album Store Product Page With Angular," located here: https://app.pluralsight.com/projects/build-an-album-store-product-page-with-angular/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

We've also created scripts that correspond to each part of the Pluralsight Project that you can access by running `npm run test:partN`, where `N` is any number 2-7.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## **App Structure**

In this app, a list of albums(products) , fetched from JSON(album.json), are displayed as hyperlinks.

Once an album is selected, the user is redirected to another page containing more details album such as Artist Name, Year of Release and a list of tracks under that album.

This data is collected by the Product service as JSON data and displayed in the respective component templates where the service is called.

#### Components

* Product-description - Component that displays album data such as Album name, Artist name and Year of Release.

* Product-list - displays a list of all albums as links

* Product-page - Displays the product-description and the product-tracklisting components

* Product-tracklisting - Component that fetches and displays album's tracks data

* App - Entry point from which the application is rendered.

#### Services
* Product Service - Makes a HTTP Request for JSON data and refactor the HTML Content in the Product Description template to display values from the response.

#### Interfaces
* Album Interface - Interface for Album data to define the structure/types of our fetched album data
* Product Interface - Interface for Product data to define the structure/types of our fetched products data

#### Endpoints/Routes
* /products - List products which are the albums (displays the product-list template)
* /product/:id - Display album data plus a list of tracks under that album
* / - Renders the /products route as default.
