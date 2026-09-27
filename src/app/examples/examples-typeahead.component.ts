import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data, Select2SearchEvent, Select2UpdateValue } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { Examples } from './examples';

import { data1, data2 } from '../app.data';

@Component({
    selector: 'examples-typeahead',
    templateUrl: './examples-typeahead.component.html',
    styleUrls: ['./examples-typeahead.component.scss'],
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesTypeaheadComponent extends Examples {
    data1: Select2Data = data1;
    data2: Select2Data = data2;

    /** Full dataset used by the simulated server-side search */
    private allStates: Select2Data = data2;

    /** Filtered data shown for the custom search example */
    dataSearch: Select2Data = [];

    // Free-text values (the typed text or the label of a picked suggestion)
    value1 = 'California';
    value2 = '';
    value3 = '';

    exemple1 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    typeahead: null,
                    placeholder: 'Search a state…',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple2 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'dataSearch',
                    '[value]': 'value',
                    typeahead: null,
                    customSearchEnabled: null,
                    minCharForSearch: '2',
                    placeholder: 'Type at least 2 characters…',
                    '(search)': 'serverSearch($event)',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    /** TS snippet shown alongside the server-side search example */
    exemple2Ts = `dataSearch: Select2Data = [];

// Called on every keystroke through the (search) event.
// Replace the local filter with an HTTP call in a real app.
serverSearch(event: Select2SearchEvent<Select2UpdateValue>) {
    const term = (event.search ?? '').toLowerCase();

    // this.http.get('/api/states?q=' + term).subscribe(result => {
    //     this.dataSearch = result;
    //     event.filteredData(result);
    // });

    const result = this.allStates.filter(s =>
        s.label.toLowerCase().includes(term),
    );
    this.dataSearch = result;
    event.filteredData(result); // feed the results back to the dropdown
}`;

    exemple3 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    typeahead: null,
                    resettable: null,
                    placeholder: 'Search a state…',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    /**
     * Simulates a server-side search: on each keystroke, filter the full dataset
     * by label and push the result back through the search event callback.
     * A real app would call an HTTP endpoint here instead.
     */
    serverSearch(event: Select2SearchEvent<Select2UpdateValue>) {
        const term = (event.search ?? '').toLowerCase();
        const filtered = this.filterByLabel(this.allStates, term);
        this.dataSearch = filtered;
        event.filteredData(filtered);
    }

    private filterByLabel(data: Select2Data, term: string): Select2Data {
        if (!term) {
            return [];
        }
        return data
            .map(item => {
                if ('options' in item && Array.isArray(item.options)) {
                    const options = item.options.filter(o => o.label.toLowerCase().includes(term));
                    return options.length ? { ...item, options } : null;
                }
                return item.label.toLowerCase().includes(term) ? item : null;
            })
            .filter((item): item is NonNullable<typeof item> => item !== null);
    }
}
