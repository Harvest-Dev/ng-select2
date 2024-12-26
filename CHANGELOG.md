# Changelog of ng-select2

## V17.1.0 (2024-12-26)

- Add attribute `multipleDrag`: drag'n drop list of items in selection

## V17.0.0 (2024-12-23)

### Changes

- Rewrite the component to use all the advances of Angular:
    - Switch to stand-alone component mode
    - Use of signals for inputs & queries
    - Removed a lot of setTimeout
    - Improved the overlay with the CDK
    - Fix autocreate with single option
    - Add resettable with multiple mode
    - Fix inconsistencies in the code
    - Much stricter code rewriting
- Accessibility (from 15.4.0)
    - Added/modified accessibility attributes
    - New inputs for accessibility
        - `title`
        - `ariaLabelledBy`
        - `ariaDescribedBy`
        - `ariaInvalid`
        - `ariaResetButtonDescription`
    - Improved focus/blur
    - Fixed readonly
    - Added reset button to tab navigation
    - Keyboard interactions
        - Update
            - `Escape`: Improved focus after closing popup.
            - `Tab`: Navigates correctly when no searchbox.
        - New
            - `Home`: Opens popup. Goes to first option.
            - `End`: Opens popup. Goes to last option.
            - `PageUp`: Opens popup. Goes up 10 options.
            - `PageDown`: Opens popup. Goes down 10 options.
            - `Space`: Opens popup. Selects option when there is no search input.
            - `Alt`+`Down`, `Alt`+`Up`: Opens/closes popup.

### Demo

- New demo

---

## V16.0.0 (2024-11-27)

### Breaking Changes

- minimum required support has been upgraded to Angular `19.0`.

---

## V15.4.0 (on a branch) (2024-12-18)

### Changes

- Added/modified accessibility attributes
- New inputs for accessibility
    - `title`
    - `ariaLabelledBy`
    - `ariaDescribedBy`
    - `ariaInvalid`
    - `ariaResetButtonDescription`
- Improved focus/blur
- Fixed readonly
- Added reset button to tab navigation
- Keyboard interactions
    - Update
        - `Escape`: Improved focus after closing popup.
        - `Tab`: Navigates correctly when no searchbox.
    - New
        - `Home`: Opens popup. Goes to first option.
        - `End`: Opens popup. Goes to last option.
        - `PageUp`: Opens popup. Goes up 10 options.
        - `PageDown`: Opens popup. Goes down 10 options.
        - `Space`: Opens popup. Selects option when there is no search input.
        - `Alt`+`Down`, `Alt`+`Up`: Opens/closes popup.

### Demo

- Fixed bugs
- Added accessibility exemples

## V15.3.0 (2024-11-16)

### Changes

- Add properties:
    - `selectionOverride`: Change what is displayed in the selection area #79
    - `selectionNoWrap`: Force selection on one line #79
    - `showSelectAll`: Add an option to select all options c #80
    - `selectAllText`: Text when all options as not selected #80
    - `removeAllText`: Text when all options as selected #80
- Fix labels of selected options #81

## V15.2.1 (2024-08-22)

### Changes

- Delete a forgotten logger #75

## V15.2.0 (2024-08-03)

### Changes

- Add templates for selection (see readme or code generator) #74

## V15.1.0 (2024-08-02)

### Changes

- Add grid layout mode in dropdown #72
- Fix init value in multiple mode #73
- Fix reset value

## V15.0.1 (2024-07-24)

### Changes

- Fix reset with multiple #69
- Rewrite update event #69

## V15.0.0 (2024-05-31)

### Breaking Changes

- minimum required support has been upgraded to Angular `18.0`.

### Changes

- manage blur event (overlay, click on option)

---

## V14.0.1 (2024-03-04)

- add `borderless` style

## V14.0.0 (2024-01-07)

### Breaking Changes

- minimum required support has been upgraded to Angular `17.0`.

---

## V13.0.12 (on a branch) (2024-07-24)

- Fix reset with multiple #69
- Rewrite update event #69

## V13.0.11 (on a branch) (2024-06-14)

- manage blur event (overlay, click on option)

## V13.0.10 (on a branch) (2024-03-04)

- add `borderless` style

## V13.0.9 (2023-09-24)

- add `autoCreate` for single mode #56 (thanks @majora2007)
- add `autoCreateItem` event #56 (thanks @majora2007)

## V13.0.8 (2023-08-29)

- fix focus on blur

## V13.0.7 (2023-08-29)

- fix tab navigation (don't open dropdown with tab)

## V13.0.6 (2023-08-23)

- fix value when data changes with NgControl

## V13.0.5 (2023-08-23)

- update current value when data changes

## V13.0.4 (2023-08-22)

### Changes

- improve keyboard navigation
    - fixed arrow navigation when there is no search field
    - improve tab and input actions (fix when unfocus)
- add CSS variables:
    - `--select2-selection-line-height`
    - `--select2-selection-padding`
    - `--select2-selection-multiple-gap`
    - `--select2-selection-multiple-padding`
    - `--select2-option-padding`

## V13.0.2 (2023-08-15)

### Changes

- fix customSearchEnabled

## V13.0.1 (2023-07-31)

### Changes

- add `resetSelectedValue` parameter #42
- fix `autoCreate` with no search input #49

## V13.0.0 (2023-07-20)

### Breaking Changes

- minimum required support has been upgraded to Angular `16.1`.

### Changes

- rewrite `clickDetection`
- fix template with `multiple`
- refacto with `numberAttribute` & `booleanAttribute` (Angular `16.1`)

---

## V12.1.0 (2023-07-05)

### Changes

- improve `search` event (see `Select2ScrollEvent`)
- add data on `Select2ScrollEvent`

## V12.0.0 (2023-06-07)

### Breaking Changes

- minimum required support has been upgraded to Angular `16.0`.
- update ngx-infinite-scroll to `16.0.0`.

## V11.1.0 (2023-04-15)

### Breaking Changes

- By default the template is now used in the selection. To revert to previous behavior use `noLabelTemplate`.
- Code removal for IE11 and Edge

### Changes

- add `noLabelTemplate`: do not use the template in the selection, stay in text mode.
- add `autoCreate`: gives the possibility to add elements not present in the list. #48
- add CSS variables :
    - `--select2-single-height`
    - `--select2-multiple-height`

## V11.0.0 (2023-04-06)

### Breaking Changes

- minimum required support has been upgraded to Angular `15.0`.
- update ngx-infinite-scroll to `15.0.0`.

### Changes

- fix class `select2-container--focus`
- add item keyboard remove (multiple)

---

## V10.0.0 (2022-07-27)

### Breaking Changes

- minimum required support has been upgraded to Angular `14.0`.
- update ngx-infinite-scroll to `14.0.0`.

## V9.0.0 (2022-03-10)

### Breaking Changes

- minimum required support has been upgraded to Angular `13.2`.
- update ngx-infinite-scroll to `13.0.2`.

## V8.1.0 (2022-02-18)

### Breaking Changes

- CSS variable `--select2-font-style-color` renamed in `--select2-too-much-font-style`

### Changes

- add `maxResults` maximum results limit (`0` = no limit, by default : `0`).
- add `maxResultsMessage` parameter, message when maximum results (by default : `'Too many results…'`)
- add CSS variables:
    - `--select2-too-much-result-color`
    - `--select2-too-much-result-style`

### Corrections

- filtered data for group is now correct

## V8.0.6 (2022-01-04)

### Corrections

- Remove `×` for disabled & readonly
- Update data when new sets come in.

## V8.0.5 (2021-09-27)

### Corrections

- Fix when `overlay` is `true` on start

## V8.0.4 (2021-09-23)

### Changes

- with `overlay` active, the value `auto` for `listPosition` is possible

### Corrections

- Fix above position with overlay

## V8.0.3 (2021-07-02)

### Corrections

- add more controls for `resultContainer`

## V8.0.2 (2021-07-01)

### Corrections

- fix `open` event with overlay
- fix `ExpressionChangedAfterItHasBeenCheckedError`

## V8.0.1 (2021-07-01)

### Corrections

- fix overlay size on reopen after resize

## V8.0.0 (2021-06-30)

### Breaking Changes

- minimum required support has been upgraded to Angular `10.0`.
- remove parameters `material` and `noStyle`, use `styleMode`.

### Changes

- add `overlay` parameter with Angular CDK, to change the display method of the dropdown list to the root of the DOM. (See README).
- add `noResultMessage` parameter, to display a message if there is no result.
- add `styleMode` parameter, to choose an alternative predefined style of the component.

## V7.3.1 (2021-04-24)

### Corrections

- fix placeholder overflow (ellipsis)

## V7.3.0 (2021-04-23)

### Changes

- add `ngx-infinite-scroll` support (See README)
- add `(removedOption)` event, triggered when an option is removed from the list of selected options options list

### Corrections

- remove a forgotten logger

## V7.2.3 (2021-03-11)

### Corrections

- fix crash when switching between multiple and non-multiple

### Demo

- add html generator

## V7.2.2 (2021-03-05)

### Corrections

- hidden options are no longer selectable with keyboard

## V7.2.1 (2021-03-04)

### Changes

- add a possibility to hide an option
- add an argument `resettable` to display a reset button (in single mode)

## V7.2.0 (2020-12-09)

### Changes

- formating options & groups with template

### Corrections

- crash when data is empty

## V7.1.11 (2020-11-12)

### Corrections

- support for Angular versions up to 11

## V7.1.10 (2020-11-11)

### Corrections

- also call markForCheck() on the change detector when the filtered values are set
- support for Angular versions up to 10

## V7.1.9 (2020-11-02)

### Corrections

- Change event is stopped for input
- Fix CSS for outline
- Fix infinite valueChange sometimes because of asynchronous test

## V7.1.8 (2020-10-26)

### Changes

- change the return of these events:
    - `(open)`: `void` to `Select2`
    - `(close)`: `void` to `Select2`
    - `(focus)`: `void` to `Select2`
    - `(blur)`: `void` to `Select2`
    - `(search)`: `string` to `Select2SearchEvent`

### Corrections

- Fix multiple events for `(update)` when value changes

## V7.1.7 (2020-10-19)

### Corrections

- Fix case with 0 in value

## V7.1.6 (2020-10-13)

### Changes

- Added an `id` on the select options.
- Allow to give a specific id to an option via `Select2Option` config.

### Corrections

- Remove the `undefined` class wrongly added to options when `classes` is not defined on `Select2Option`.

## V7.1.5 (2020-10-06)

### Corrections

- fix update of list when value is `null`/`undefined`/`empty`

## V7.1.4 (2020-09-18)

### Changes

- add `limitSelection` attribute to limit multiple selection. (By default `0` for no limit)

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

- `(update)` : return object `Select2UpdateValue` change for `Select2UpdateEvent` object. Please, see the readme.

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
    - `hideSelectedItems` : for `multiple`, remove selected values (by default : `false`)
    - `resultMaxHeight` : change the height size of results (by default : `200px`);

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
