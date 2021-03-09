[![npm version](https://badge.fury.io/js/ng-select2-component.svg)](https://badge.fury.io/js/ng-select2-component) [![Downloads](https://img.shields.io/npm/dm/ng-select2-component.svg)](https://www.npmjs.com/package/ng-select2-component) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Harvest-Dev/ng-select2/master/LICENSE.md)

# Select2

This Angular CLI module it's a fork of [select2-component](https://github.com/plantain-00/select2-component) without Vue & React. For  Vue or React, please use the original component.

## Installation

```
npm i ng-select2-component --save
```

## Requirements

- Angular 7.0.0 and more

## Demo

[See a demo](https://harvest-dev.github.io/ng-select2/dist/ng-select2/).

## Features

+ select one
+ options or groups
+ scroll
+ local search
+ select by keyboard
+ disabled option
+ disabled component
+ hide search box
+ placeholder
+ multiple selection
+ material style
+ form binding
+ templating

## Usage

### example

```ts
import { Select2Module } from "ng-select2-component";

@NgModule({
    imports: [BrowserModule, FormsModule, Select2Module],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```html
<select2 [data]="data"
    [value]="value"
    (update)="update($event)">
</select2>
```
### properties and events of the component

name                  | type                                     | status   | default     | description
--------------------- | ---------------------------------------- | -------- | ----------- | ---------------------------------------------------------------
`data`                | [`Select2Data`](#select2-data-structure) | required |             | the data of the select2
`value`               | [`Select2Value`](#select2-data-structure)|          |             | initial value
`minCharForSearch`    | `number`                                 |          | `0`         | start the search when the number of characters is reached (`0` = unlimited)
`minCountForSearch`   | `number`                                 |          | `6`         | hide search box if `options.length < minCountForSearch` 
`displaySearchStatus` | `'default'` or `'hidden'` or `'always'`  |          | `'default'` | display the search box (`default` : is based on `minCountForSearch`)
`placeholder`         | `string`                                 |          |             | the placeholder string if nothing selected
`customSearchEnabled` | `boolean`                                |          | `false`     | will trigger `search` event, and disable inside filter
`multiple`            | `boolean`                                |          | `false`     | select multiple options
`resettable`          | `boolean`                                |          | `false`     | add a button to reset value (not with `multiple`)
`limitSelection`      | `number`                                 |          | `0`         | to limit multiple selection  (`0` = unlimited)
`hideSelectedItems`   | `boolean`                                |          | `false`     | for `multiple`, remove selected values
`resultMaxHeight`     | `string`                                 |          |             | change the height size of results
`listPosition`        | `'below'` or `'above'`                   |          | `'below'`   | the position for the dropdown list
`material`            | `boolean`                                |          | `false`     | enable material style
`nostyle`             | `boolean`                                |          | `false`     | remove border and background color
`templates`           | `TemplateRef` or<br> `{option?: TemplateRef, group?: TemplateRef}` or<br> `{templateId1: TemplateRef, ...}` | | | use templates for formatting content (see [Templating](#templating))
`editPattern`         | `(str: string) => string`                |          |             | use it for change the pattern of the filter search
`ngModel`<br>`id`<br>`required`<br>`disabled`<br>`readonly`<br>`tabIndex` | |  |          | just like a `select` control | 
`(update)`            | `(event: `[`Select2UpdateEvent`](#select2-data-structure)`) => void` | event | |  triggered when user select an option
`(open)`              | `(event: Select2) => void`               | event    |             | triggered when user open the options
`(close)`             | `(event: Select2) => void`               | event    |             | triggered when user close the options
`(focus)`             | `(event: Select2) => void`               | event    |             | triggered when user enters the component
`(blur)`              | `(event: Select2) => void`               | event    |             | triggered when user leaves the component
`(search)`            | `(event: `[`Select2SearchEvent`](#select2-data-structure)`) => void` | event | |  triggered when search text changed

### select2 data structure

```ts
type Select2Data = (Select2Group | Select2Option)[];

export interface Select2Group {
    /** label of group */
    label: string;
    /** options list */
    options: Select2Option[];
    /** add classes  */
    classes?: string;
    /** template id  */
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
    /** template id  */
    templateId?: string;
    /** template data  */
    data?: any;
    /** hide this option */
    hide?: boolean;
}

type Select2Value = string | number | boolean;

type Select2UpdateValue = Select2Value | Select2Value[];

export interface Select2UpdateEvent<U extends Select2UpdateValue = Select2Value> {
    component: Select2;
    value: U;
    options: Select2Option[];
}

export interface Select2SearchEvent<U extends Select2UpdateValue = Select2Value> {
    component: Select2;
    value: U;
    search: string;
}
```

### Templating

#### Unique template

```html
<select2 [data]="data"
         [templates]="template">
    <ng-template #template let-data="data"><strong>{{data?.color}}</strong>: {{data?.name}}</ng-template>
</select2>
```

```ts 
const data: Select2Data = [
    {
        value: 'heliotrope', 
        label: 'Heliotrope', 
        data: { color: 'white', name: 'Heliotrope' }
    },
    {
        value: 'hibiscus', 
        label: 'Hibiscus', 
        data: { color: 'red', name: 'Hibiscus' }
    }
]
```

#### Template group & option 

```html
<select2 [data]="data"
         [templates]="{option : option, group: group}">
    <ng-template #option let-data="data">{{data?.name}}</ng-template>
    <ng-template #group let-label="label">Group: {{label}}</ng-template>
</select2>
```

No difference in data structure.
The template is defined by its type, option or group, automatically.

#### Template by templateId

```html
<select2 [data]="data"
         [templates]="{template1 : template1, template2: template2}">
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
        templateId: 'template1'
    },
    {
        value: 'hibiscus', 
        label: 'Hibiscus', 
        data: { color: 'red', name: 'Hibiscus'},
        templateId: 'template2' 
    }
]
```
## CSS variables (doesn't work on IE11)

It's possible to change different colors (and more) with CSS variables without having to modify them with `::ng-deep` or other CSS rules :

```css
:root {
    /* label */
    --select2-label-text-color: #000;
    --select2-required-color: red;

    /* selection */
    --select2-selection-border-radius: 4px;
    --select2-selection-background: #fff;
    --select2-selection-disabled-background: #eee;
    --select2-selection-border-color: #aaa;
    --select2-selection-focus-border-color: #000;
    --select2-selection-text-color: #444;

    /* selection: choice item (multiple) */
    --select2-selection-choice-background: #e4e4e4;
    --select2-selection-choice-text-color: #000;
    --select2-selection-choice-border-color: #aaa;
    --select2-selection-choice-close-color: #999;
    --select2-selection-choice-hover-close-color: #333;

     /* placeholder */
    --select2-placeholder-color: #999;

    /* reset */
    --select2-reset-color: #999;

    /* arrow */
    --select2-arrow-color: #888;

    /* dropdown panel */
    --select2-dropdown-background: #fff;
    --select2-dropdown-border-color: #aaa;

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

    /* hint */
    --select2-hint-text-color: #888;

    /* for Material ------------------------------------------*/
    --select2-material-underline: #ddd;
    --select2-material-underline-active: #5a419e;
    --select2-material-underline-disabled: linear-gradient(to right, rgba(0, 0, 0, 0.26) 0, rgba(0, 0, 0, 0.26) 33%, transparent 0);
    --select2-material-underline-invalid: red;
    --select2-material-placeholder-color: rgba(0, 0, 0, 0.38);
    --select2-material-selection-background: #ddd;
    --select2-material-option-selected-background: rgba(0, 0, 0, 0.04);
    --select2-material-option-highlighted-text-color: #000;
    --select2-material-option-selected-text-color: #ff5722;
}
```

For IE11, see [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill).

## Publishing the library

```
npm run build:lib
cd dist/ng-select2-component
npm publish
```

## Update Demo

```
npm run build:demo
```

## License

Like Angular, this module is released under the permissive MIT license. Your contributions are always welcome.
