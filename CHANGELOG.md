# Changelog of ng-select2

## V7.1.4 (2020-09-18)

### Changes

- add `limitSelection` attribute to limit multiple selection. (By defaut `0` for no limit)

## V7.1.3 (2020-05-07)

### Breaking Changes

- review the naming of all CSS variables and add new
- no more predefined variables (it was impossible to overwrite them)

## V7.1.2 (2020-04-27)

### Changes

- add event `(focus)` and `(blur)`

### Corrections

- fix the focused status which is not removed in some cases or called for the wrong reason

## V7.1.1 (2020-04-24)

### Changes

- add event `(close)`

### Corrections

- fix dropdown position with hint

## V7.1.0 (2020-04-23)

### Breaking Changes

* `(update)` : return object `Select2UpdateValue` change for `Select2UpdateEvent` object. Please, see the readme.

### Changes

- add CSS variables for colors (see the readme)
- add new attributes : `listPosition`, `minCharForSearch`, `noStyle` 
- now, selection container use a flexbox layout (CSS symplification)
- update the SearchBox status when the list change

## V7.0.7 (2020-04-17)

### Changes

- add a new `displaySearchStatus` attribute
- edit `minCountForSearch` to make it dynamic and easier to use 

## V7.0.6 (2020-02-21)

### Corrections

- fix dropdown when is close

## V7.0.5 (2020-02-07)

### Corrections

- fix `resultMaxHeight` (`@Output` instead of `@Input`)

## V7.0.4 (2020-02-06)

### Changes

- with label and required is true, add a red `*` after the label 
- add new @input parameters :
    - `hideSelectedItems` : for `multiple`, remove selected values (by defaut : `false`)
    - `resultMaxHeight` : change the height size of results (by defaut : `200px`);

### Corrections

- fix value update
- fix CSS for the height of result when the panel is closed

## V7.0.3 (2019-11-08)

### Changes

- options label accept HTML content

## V7.0.2 (2019-08-09)

### Corrections

- fix scroll when opening the select to go to the selected option(s)
- fix arrowUp/arrowDown to be able to jump disabled options within the list

## V7.0.1 (2019-07-29)

### Corrections

- fix spam issue on `filteredData` in some cases
- refactoring the method to handle up/down arrows

## V7.0.0 (2018-12-05)

### Changes

- update to Angular 7
- add Label with `<select2-label>` tag

### Corrections

- ajust CSS
- change the key detection

## V6.0.3 (2018-10-29)

### Correction

- fix formcontrol value update

## V6.0.2 (2018-10-12)

### Correction

- fix error when using FormControls
- add new examples in the demo

## V6.0.1 (2018-07-16)

### Correction

- fix ExpressionChangedAfterItHasBeenCheckedError 

## V6.0.0 (2018-07-10)

### Breaking changes

- **not compatible anymore with Angular 5**
- upgrade to Angular 6 using Angular CLI
- change folders architecture to match the Angular CLI `ng new` and `ng generate library`
