# Video Progress Tracker App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Tracking Watched Intervals

Watched intervals are tracked by listening to video player events such as `play`, `pause`, and `timeupdate`. When the user starts or resumes playback, the start time is recorded. When playback is paused or ends, the end time is recorded, and the interval is saved. This approach ensures that all segments the user watches are captured as intervals.

## Merging Intervals for Unique Progress

To calculate the unique progress, all watched intervals are merged to eliminate overlaps. The intervals are first sorted by their start times. Then, overlapping or adjacent intervals are combined into a single interval. The total unique watch time is calculated by summing the lengths of these merged intervals, ensuring that repeated or overlapping views are only counted once.

## Challenges and Solutions

One challenge was handling overlapping or closely adjacent intervals, which could lead to double-counting watch time. This was solved by implementing an interval merging algorithm that combines any overlapping or contiguous intervals before calculating the total. Another challenge was accurately capturing intervals during rapid play/pause actions, which was addressed by carefully managing event listeners and state to ensure all intervals are recorded correctly.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).