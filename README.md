# SamplePyplotWebgl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

This is a sample project to illustrate this bug i found with plotly.js and Angular.
The plotted lines are invisible when drawn with WebGL (scattergl) with Angular in prod mode.
Related issues:

- https://github.com/plotly/plotly.js/issues/3411
- https://github.com/plotly/angular-plotly.js/issues/31 

To reproduce, first install with `npm install`. Then you can test with a local dev server:

- in prod mode (bug): `ng serve --prod`
- in debug mode (no bug): `ng serve`

Then open your page at `http://localhost:4200/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
