import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2 } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data2, data35, data35b } from '../app.data';

@Component({
    selector: 'examples-grid',
    templateUrl: './examples-grid.component.html',
    styleUrls: ['./examples-grid.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesGridComponent extends Examples {
    data34 = data2;
    data34b = data1;
    data35 = data35;
    data35b = data35b;

    value34 = '';
    value34b = '';
    value35 = '';
    value35b = '';

    exemple34 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    grid="4"
    (autoCreateItem)="autoCreateItem('value', $event)"
/>`,
    );

    exemple34b = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    grid="4"
    (autoCreateItem)="autoCreateItem('value', $event)"
/>`,
    );

    exemple35 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    grid="35px"
    (autoCreateItem)="autoCreateItem('value', $event)"
/>`,
    );

    exemple35b = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    multiple
    grid="35px"
    (autoCreateItem)="autoCreateItem('value', $event)"
/>`,
    );
}
