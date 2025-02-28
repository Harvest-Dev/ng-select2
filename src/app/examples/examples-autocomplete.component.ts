import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import {
    Select2,
    Select2Data,
    Select2SearchEvent,
    Select2UpdateValue,
} from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-autocomplete',
    templateUrl: './examples-autocomplete.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule],
})
export class ExemplesAutocompleteComponent extends Examples {
    data: Select2Data = JSON.parse(JSON.stringify(data1));

    value = '';

    onSearch(event: Select2SearchEvent<Select2UpdateValue>): void {
        event.filteredData(this.data);
    }
}
