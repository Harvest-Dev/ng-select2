import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-multiple',
    templateUrl: './examples-multiple.component.html',
    styleUrls: ['./examples-multiple.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesMultipleComponent extends Examples {
    data10a: Select2Data = JSON.parse(JSON.stringify(data1));
    data10: Select2Data = JSON.parse(JSON.stringify(data1));
    data10b: Select2Data = JSON.parse(JSON.stringify(data1));

    value10a = '';
    value10 = '';
    value10b = '';

    exemple10a = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    multiple
/>`,
    );

    exemple10 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    multiple
    hideSelectedItems
/>`,
    );

    exemple10b = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    placeholder="select items"
    [data]="data"
    [value]="value"
    multiple
/>`,
    );
}
