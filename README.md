[![npm version](https://badge.fury.io/js/ng-select2-component.svg)](https://badge.fury.io/js/ng-select2-component) [![Downloads](https://img.shields.io/npm/dm/ng-select2-component.svg)](https://www.npmjs.com/package/ng-select2-component) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Harvest-Dev/ng-select2/master/LICENSE.md)

# Select2

This Angular CLI module it's a fork of [select2-component](https://github.com/plantain-00/select2-component) without Vue & React. For  Vue or React, please use the original component.

## Installation

```
npm i ng-select2-component --save
```

## Requirements

- Angular 6.0.0 and more

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

name | type | description
--- | --- | ---
data | [Select2Data](#select2-data-structure) | the data of the select2
value | [Select2Value](#select2-data-structure)? | initial value
disabled | boolean? | whether the component is disabled
minCountForSearch | number? = 6 | hide search box if `options.length < minCountForSearch`
placeholder | string? | the placeholder string if nothing selected
customSearchEnabled | boolean? | will trigger `search` event, and disable inside filter
multiple | boolean? | select multiple options
material | `""` or `true` | enable material style
editPattern | (str: string) => string | use it for change the pattern of the filter search
ngModel/id/required/disabled/readonly/tabIndex | just like a `select` control | 
update | (value: [Select2UpdateValue](#select2-data-structure)) => void | triggered when user select an option
open | () => void | triggered when user open the options
search | (text: string) => void | triggered when search text changed

### select2 data structure

```ts
type Select2Data = (Select2Group | Select2Option)[];

interface Select2Group = {
    label: string;
    options: Select2Option[];
    classes?: string;
};

interface Select2Option = {
    value: Select2Value;
    label: string;
    disabled?: boolean;
    component?: string | Function; // the component
    classes?: string;
};

type Select2Value = string | number | boolean;

type Select2UpdateValue = Select2Value | Select2Value[];
```

## Publishing the library

```
ng build ng-select2-component --prod
cd dist/ng-select2-component
npm publish
```

## License

Like Angular, this module is released under the permissive MIT license. Your contributions are always welcome.
