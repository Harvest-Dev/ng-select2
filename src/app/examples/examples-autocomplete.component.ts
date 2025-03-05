import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import {
    Select2,
    Select2AutocompleteEvent,
    Select2Group,
    Select2SearchEvent,
    Select2UpdateValue,
} from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data36 } from '../app.data';

@Component({
    selector: 'examples-autocomplete',
    templateUrl: './examples-autocomplete.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule],
})
export class ExemplesAutocompleteComponent extends Examples {
    value = '';

    value2 = '';

    onSearch(event: Select2SearchEvent<Select2UpdateValue>): void {
        console.log('ExemplesAutocompleteComponent event', event);
        // setTimeout(() => {
        const search = event.search.toLocaleLowerCase();
        const data = JSON.parse(JSON.stringify(data36));

        const dataTosend = search.length
            ? (data as Select2Group[])
                  .map(group => {
                      if (group.options?.length) {
                          group.options = group.options.filter(
                              option =>
                                  (option.value as string)?.toLocaleLowerCase().includes(search) ||
                                  (option.label as string)?.toLocaleLowerCase().includes(search),
                          );
                      }
                      return group;
                  })
                  .filter(group => group.options.length)
            : data;
        console.log('ExemplesAutocompleteComponent dataTosend', dataTosend);
        event.filteredData(dataTosend);
        // }, 1000);
    }

    onTriggeredValue(event: Select2AutocompleteEvent) {
        console.log('ExemplesAutocompleteComponent onTriggeredValue', event);
    }
}
