[![npm version](https://badge.fury.io/js/ng-select2-component.svg)](https://badge.fury.io/js/ng-select2-component) [![Downloads](https://img.shields.io/npm/dm/ng-select2-component.svg)](https://www.npmjs.com/package/ng-select2-component) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Harvest-Dev/ng-select2/master/LICENSE.md)

# Select2

This Angular CLI module it's a fork of [select2-component](https://github.com/plantain-00/select2-component) without Vue & React. For Vue or React, please use the original component.

## Installation

```
npm i ng-select2-component --save
```

## Requirements

- peerDependencies:

    - `angular` 18.1.0 and more
    - `angular/cdk` 18.1.0 and more

- dependencies (include):

    - `ngx-infinite-scroll` 19.0.0 and more

### Notes

| Version   | For **Angular** | Notes             |
| --------- | --------------- | ----------------- |
| `17.2.0`  | 18.1 and more   | Ivy / Stand-alone |
| `17.1.0`  | 19              | Ivy / Stand-alone |
| `16.0.0`  | 19              | Ivy / Module      |
| `15.4.0`  | 18              | Ivy               |
| `14.0.1`  | 17              | Ivy               |
| `13.0.12` | 16.1            | Ivy               |
| `12.1.0`  | 16              | Ivy               |
| `11.1.0`  | 15              | Ivy               |
| `10.0.0`  | 14              | Ivy               |
| `9.0.0`   | 13              | Ivy               |
| `8.1.0`   | 10, 11 and 12   | View Engine       |
| `7.3.1`   | 7, 8 and 9      | View Engine       |

## Demo

[See a demo and code generator](https://harvest-dev.github.io/ng-select2/dist/ng-select2/browser).

## Features

- select one
- options or groups (list or grid)
- scroll
- local search
- select by keyboard
- disabled option
- disabled component
- hide search box
- placeholder
- multiple selection
- add items not found in multiple
- material style
- form binding
- templating
- drag'n drop
- WAI (accessibility)
- etc.

## Usage

### example

```ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Select2, Select2Hint, Select2Label } from 'ng-select2-component';

@Component({
    selector: 'my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, Select2, Select2Hint, Select2Label],
})
class MyComponent {}
```

```html
<select2 [data]="data" [value]="value" (update)="update($event)"> </select2>
```

### properties and events of the component

| name                                                                      | type                                                                                                 | default              | description                                                                                                             | required                        |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `data` (required)                                                         | [`Select2Data`](#select2-data-structure)                                                             |                      | the data of the select2                                                                                                 |                                 |
| `value`                                                                   | [`Select2Value`](#select2-data-structure)                                                            |                      | initial value                                                                                                           |                                 |
| `minCharForSearch`                                                        | `number`                                                                                             | `0`                  | start the search when the number of characters is reached (`0` = unlimited)                                             |                                 |
| `minCountForSearch`                                                       | `number`                                                                                             | `6`                  | hide search box if `options.length < minCountForSearch`                                                                 |                                 |
| `displaySearchStatus`                                                     | `'default'`<br>`'hidden'`<br>`'always'`                                                              | `'default'`          | display the search box (`default` : is based on `minCountForSearch`)                                                    |                                 |
| `placeholder`                                                             | `string`                                                                                             |                      | the placeholder string if nothing selected                                                                              |                                 |
| `noResultMessage`                                                         | `string`                                                                                             |                      | the message string if no results when using the search field                                                            |                                 |
| `customSearchEnabled`                                                     | `boolean`                                                                                            | `false`              | will trigger `search` event, and disable inside filter                                                                  |                                 |
| `multiple`                                                                | `boolean`                                                                                            | `false`              | select multiple options                                                                                                 |                                 |
| `multipleDrag`                                                            | `boolean`                                                                                            | `false`              | drag'n drop list of items in selection                                                                                  | with `multiple`                 |
| `resettable`                                                              | `boolean`                                                                                            | `false`              | add a button to reset value                                                                                             |                                 |
| `resetSelectedValue`                                                      | `any`                                                                                                | `undefined`          | selected option when × is clicked                                                                                       |                                 |
| `autoCreate`                                                              | `boolean`                                                                                            | `false`              | gives the possibility to add elements not present in the list.                                                          |                                 |
| `limitSelection`                                                          | `number`                                                                                             | `0`                  | to limit multiple selection (`0` = unlimited)                                                                           |                                 |
| `hideSelectedItems`                                                       | `boolean`                                                                                            | `false`              | remove selected values                                                                                                  | with `multiple`                 |
| `resultMaxHeight`                                                         | `string`                                                                                             | `'200px'`            | change the height size of results                                                                                       |                                 |
| `maxResults`                                                              | `number`                                                                                             | `0`                  | maximum results limit (`0` = unlimited)                                                                                 |                                 |
| `maxResultsMessage`                                                       | `string`                                                                                             | `'Too much result…'` | message when maximum result                                                                                             |                                 |
| `grid`                                                                    | `number` or `string`                                                                                 |                      | option by line in grid layout (empty or `0` = no grid layout)<br>`number`: item by line<br>`string`: minimal item width |                                 |
| `listPosition`                                                            | `'below'`<br>`'above'`<br>`'auto'` ¹                                                                 | `'below'`            | the position for the dropdown list                                                                                      | ¹ `'auto'`: only with `overlay` |
| `infiniteScroll`                                                          | `boolean`                                                                                            | `false`              | active infiniteScroll on dropdown list                                                                                  | with `ngx-infinite-scroll`      |
| `infiniteScrollDistance`                                                  | `number`                                                                                             | `1.5`                | infiniteScroll distance                                                                                                 | with `ngx-infinite-scroll`      |
| `infiniteScrollThrottle`                                                  | `number`                                                                                             | `150`                | infiniteScroll throttle                                                                                                 |                                 |
| `overlay`                                                                 | `boolean`                                                                                            | `false`              | active an overlay mode for dropdown list (with angular cdk). (See [Overlay](#overlay))                                  |                                 |
| `styleMode`                                                               | `'default'`<br>`'material'`<br>`'noStyle'`<br>`'borderless'`                                         | `'default'`          | change style for material style or remove border and background color                                                   |                                 |
| `templates`                                                               | [`Select2Template`](#select2-data-structure)<br>(see ”possible object” in [Templating](#templating)) |                      | use templates for formatting content (see [Templating](#templating))                                                    |                                 |
| `templateSelection`                                                       | `TemplateRef`                                                                                        |                      | use templates for formatting content (see [Templating](#templating))                                                    |                                 |
| `noLabelTemplate`                                                         | `boolean`                                                                                            | `false`              | do not use the template in the selection, stay in text mode                                                             |                                 |
| `selectionOverride`                                                       | [`Select2SelectionOverride`](#select2-data-structure)                                                |                      | Replace selection by a text<br>`string`: `%size%` = total selected options<br>`function`: juste show the string         |                                 |
| `selectionNoWrap`                                                         | `boolean`                                                                                            | `false`              | Force selection on one line                                                                                             |                                 |
| `showSelectAll`                                                           | `boolean`                                                                                            | `false`              | Add an option to select all options                                                                                     | with `multiple`                 |
| `selectAllText`                                                           | `string`                                                                                             | `'Select all'`       | Text when all options as not selected                                                                                   | with `multiple`                 |
| `removeAllText`                                                           | `string`                                                                                             | `'Remove all'`       | Text when all options as selected                                                                                       | with `multiple`                 |
| `editPattern`                                                             | `(str: string) => string`                                                                            |                      | use it for change the pattern of the filter search                                                                      |                                 |
| `nativeKeyboard`                                                          | `boolean`                                                                                            | `false`              | Use the keyboard navigation like native HTML select component                                                           | not with `multiple`             |
| `ngModel`<br>`id`<br>`required`<br>`disabled`<br>`readonly`<br>`tabIndex` |                                                                                                      |                      | just like a `select` control                                                                                            |                                 |
| `(update)`                                                                | `(event: `[`Select2UpdateEvent`](#select2-data-structure)`) => void`                                 |                      | triggered when user select an option                                                                                    |                                 |
| `(open)`                                                                  | `(event: Select2) => void`                                                                           |                      | triggered when user open the options                                                                                    |                                 |
| `(close)`                                                                 | `(event: Select2) => void`                                                                           |                      | triggered when user close the options                                                                                   |                                 |
| `(focus)`                                                                 | `(event: Select2) => void`                                                                           |                      | triggered when user enters the component                                                                                |                                 |
| `(blur)`                                                                  | `(event: Select2) => void`                                                                           |                      | triggered when user leaves the component                                                                                |                                 |
| `(search)`                                                                | `(event: `[`Select2SearchEvent`](#select2-data-structure)`) => void`                                 |                      | triggered when search text changed                                                                                      | with `customSearchEnabled`      |
| `(scroll)`                                                                | `(event: `[`Select2ScrollEvent`](#select2-data-structure)`) => void`                                 |                      | triggered when infiniteScroll is on `up` or `down` position                                                             | with `ngx-infinite-scroll`      |
| `(removeOption)`                                                          | `(event: `[`Select2RemoveEvent`](#select2-data-structure)`) => void`                                 |                      | triggered when an option is removed from the list of selected options options list                                      | with `multiple`                 |
| `(autoCreateItem)`                                                        | `(event: `[`Select2AutoCreateEvent`](#select2-data-structure)`) => void`                             |                      | triggered when a new item has been added                                                                                | with `autoCreate`               |

### select2 data structure

```ts
export interface Select2Group {
    /** label of group */
    label: string;
    /** options list */
    options: Select2Option[];
    /** add classes  */
    classes?: string;
    /** template id dropdown & selection if no templateSelectionId */
    templateId?: string;
    /** template data  */
    data?: any;
}

export interface Select2Option {
    /** value  */
    value: Select2Value;
    /** label of option */
    label: string;
    /** no selectable is disabled */
    disabled?: boolean;
    /** for identification */
    id?: string;
    /** add classes  */
    classes?: string;
    /** template id dropdown & selection if no templateSelectionId */
    templateId?: string;
    /** template id for selection */
    templateSelectionId?: string;
    /** template data  */
    data?: any;
    /** hide this option */
    hide?: boolean;
}

export type Select2Value = string | number | boolean | object | null | undefined;

export type Select2UpdateValue = Select2Value | Select2Value[] | undefined | null;

export type Select2Data = (Select2Group | Select2Option)[];

export interface Select2UpdateEvent<U extends Select2UpdateValue = Select2Value> {
    /** component */
    readonly component: Select2;
    /** current selected value */
    readonly value: U | null;
    /** selected option */
    readonly options: Select2Option[] | null;
}

export interface Select2AutoCreateEvent<U extends Select2UpdateValue = Select2Value> {
    /** component */
    readonly component: Select2;
    /** current selected value */
    readonly value: U;
    /** selected option */
    readonly options: Select2Option[] | null;
}

export interface Select2SearchEvent<U extends Select2UpdateValue = Select2Value> {
    /** component */
    readonly component: Select2;
    /** current selected value */
    readonly value: U | null;
    /** search text */
    readonly search: string;
    /** current data source */
    readonly data: Select2Data;
    /** method to call to update the data */
    readonly filteredData: (data: Select2Data) => void;
}

export interface Select2RemoveEvent<U extends Select2UpdateValue = Select2Value> {
    /** component */
    readonly component: Select2;
    /** current selected value */
    readonly value: U;
    /** remove */
    readonly removedOption: Select2Option;
}

export interface Select2ScrollEvent {
    /** component */
    readonly component: Select2;
    /** scroll way */
    readonly way: 'up' | 'down';
    /** search text */
    readonly search: string;
    /** current data */
    readonly data: Select2Data;
}

export type Select2SelectionOverride = string | ((params: { size: number; options: Select2Option[] | null }) => string);

export type Select2Template = TemplateRef<any> | { [key: string]: TemplateRef<any> } | undefined;
```

### Templating

#### Unique template

```html
<select2 [data]="data" [templates]="template">
    <ng-template #template let-data="data"><strong>{{data?.color}}</strong>: {{data?.name}}</ng-template>
</select2>
```

```ts
const data: Select2Data = [
    {
        value: 'heliotrope',
        label: 'Heliotrope',
        data: { color: 'white', name: 'Heliotrope' },
    },
    {
        value: 'hibiscus',
        label: 'Hibiscus',
        data: { color: 'red', name: 'Hibiscus' },
    },
];
```

#### Template group & option

```html
<select2 [data]="data" [templates]="{option : option, group: group}">
    <ng-template #option let-data="data">{{data?.name}}</ng-template>
    <ng-template #group let-label="label">Group: {{label}}</ng-template>
</select2>
```

No difference in data structure.
The template is defined by its type, option or group, automatically.

#### Template by templateId

```html
<select2 [data]="data" [templates]="{template1 : template1, template2: template2}">
    <ng-template #template1 let-data="data">{{data?.name}}</ng-template>
    <ng-template #template2 let-label="label" let-data="data">{{label}} : {{data?.color}}</ng-template>
</select2>
```

```ts
const data: Select2Data = [
    {
        value: 'heliotrope',
        label: 'Heliotrope',
        data: { color: 'white', name: 'Heliotrope' },
        templateId: 'template1',
    },
    {
        value: 'hibiscus',
        label: 'Hibiscus',
        data: { color: 'red', name: 'Hibiscus' },
        templateId: 'template2',
    },
];
```

#### Template for change the selection

```html
<select2 [data]="data" [templateSelection]="templateSelection">
    <ng-template #templateSelection let-data="data"><strong>{{ data?.color }}</strong> ({{ data?.name }})</ng-template>
</select2>
```

#### Possible object

- `TemplateRef`
- `{template: TemplateRef}`
- `{option?: TemplateRef, group?: TemplateRef}`
- `{templateId1: TemplateRef, ...}`

In addition to the rendering templates of options and groups, in addition to going through the `templateSelection` attribute, it is possible to define that of the selection :

- `{templateSelection: TemplateRef}`
- `{optionSelection: TemplateRef}`

#### Priority order

For group or option:

- `'id'` (from item data `templateId`)
- `'group'` or `'option'`
- `'template'`
- `TemplateRef` (from html attribute `templates`)
- Default render

For the selection:

- `'id'` (from item data `templateSelectionId`)
- `'optionSelection'`
- `'templateSelection'`
- `TemplateRef` (from html attribute `templateSelection`)
- `'id'` (from item data `templateId`)
- `'option'`
- `'template'`
- `TemplateRef` (from html attribute `templates`)
- Default render

### Overlay

If the overlay mode is used / activated, add to the project root in CSS (with `ViewEncapsulation.None`)

```css
@import '~@angular/cdk/overlay-prebuilt.css';
```

## CSS variables

It's possible to change different colors (and more) with CSS variables without having to modify them with `::ng-deep` or other CSS rules :

```css
:root {
    /* size */
    --select2-single-height: 28px;
    --select2-multiple-height: 28px;

    /* label */
    --select2-label-text-color: #000;
    --select2-required-color: red;

    /* selection */
    --select2-selection-border-radius: 4px;
    --select2-selection-background: #fff;
    --select2-selection-disabled-background: #eee;
    --select2-selection-border-color: #aaa;
    --select2-selection-focus-border-color: #000;
    --select2-selection-text-color: #111;
    --select2-selection-line-height: 28px;
    --select2-selection-padding: 0 0 0 8px;

    /* selection (multiple) */
    --select2-selection-multiple-gap: 2px 5px;
    --select2-selection-multiple-padding: 2px 5px;

    /* selection: choice item (multiple) */
    --select2-selection-choice-background: #e4e4e4;
    --select2-selection-choice-text-color: #000;
    --select2-selection-choice-border-color: #aaa;
    --select2-selection-choice-close-color: #999;
    --select2-selection-choice-hover-close-color: #333;

    /* placeholder */
    --select2-placeholder-color: #999;
    --select2-placeholder-overflow: ellipsis;

    /* no result message */
    --select2-no-result-color: #888;
    --select2-no-result-font-style: italic;

    /* no result message */
    --select2-too-much-result-color: #888;
    --select2-too-much-result-style: italic;

    /* reset */
    --select2-reset-color: #999;

    /* arrow */
    --select2-arrow-color: #888;

    /* dropdown panel */
    --select2-dropdown-background: #fff;
    --select2-dropdown-border-color: #aaa;
    --select2-dropdown-above-border-bottom: none;
    --select2-dropdown-above-border-bottom-left-radius: 0;
    --select2-dropdown-above-border-bottom-right-radius: 0;
    --select2-dropdown-below-border-top: none;
    --select2-dropdown-below-border-top-left-radius: 0;
    --select2-dropdown-below-border-top-right-radius: 0;

    /* overlay */
    --select2-overlay-backdrop: transparent;

    /* search field */
    --select2-search-border-color: #aaa;
    --select2-search-background: #fff;
    --select2-search-border-radius: 0px;

    /* dropdown option */
    --select2-option-text-color: #000;
    --select2-option-disabled-text-color: #999;
    --select2-option-disabled-background: transparent;
    --select2-option-selected-text-color: #000;
    --select2-option-selected-background: #ddd;
    --select2-option-highlighted-text-color: #fff;
    --select2-option-highlighted-background: #5897fb;
    --select2-option-group-text-color: gray;
    --select2-option-group-background: transparent;
    --select2-option-padding: 6px;

    /* hint */
    --select2-hint-text-color: #888;

    /* for Material ------------------------------------------*/
    --select2-material-underline: #ddd;
    --select2-material-underline-active: #5a419e;
    --select2-material-underline-disabled: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.26) 0,
        rgba(0, 0, 0, 0.26) 33%,
        transparent 0
    );
    --select2-material-underline-invalid: red;
    --select2-material-placeholder-color: rgba(0, 0, 0, 0.38);
    --select2-material-selection-background: #ddd;
    --select2-material-option-selected-background: rgba(0, 0, 0, 0.04);
    --select2-material-option-highlighted-text-color: #000;
    --select2-material-option-selected-text-color: #ff5722;
}
```

## Publishing the library

```
npm run build:lib
npm run publish:lib
```

## Update Demo

```
npm run build:demo
```

## License

Like Angular, this module is released under the permissive MIT license. Your contributions are always welcome.
