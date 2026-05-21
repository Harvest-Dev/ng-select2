import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data2, data3, data13 } from '../app.data';

@Component({
    selector: 'examples-basic',
    templateUrl: './examples-basic.component.html',
    styleUrls: ['./examples-basic.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesBasicComponent extends Examples {
    data1 = data1;
    data2 = data2;
    data3 = data3;
    data4: Select2Data = JSON.parse(JSON.stringify(data3));
    data7: Select2Data = JSON.parse(JSON.stringify(data3));
    data13 = data13;
    data14 = data1;

    value1 = 'CA';
    value2 = 'CA';
    value3 = 'foo';
    value4 = 'bar';
    value7 = '';
    value13 = true;
    value14 = 'CA';

    exemple1 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    resettable
    customSearchEnabled
/>`,
    );

    exemple2 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
/>`,
    );

    exemple3 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
/>`,
    );

    exemple4 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}
    [data]="data"
    [value]="value"
    disabled
/>`,
    );

    exemple7 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    placeholder="select an item"
/>`,
    );

    exemple13 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
/>`,
    );

    exemple14 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    highlightText
/>`,
    );
}
