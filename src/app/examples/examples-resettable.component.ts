import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-resettable',
    templateUrl: './examples-resettable.component.html',
    styleUrls: ['./examples-resettable.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesResettableComponent extends Examples {
    data30: Select2Data = JSON.parse(JSON.stringify(data1));
    data30a: Select2Data = JSON.parse(JSON.stringify(data1));
    data30b: Select2Data = JSON.parse(JSON.stringify(data1));

    value30 = '';
    value30a = '';
    value30b = '';

    exemple30 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    resettable
/>`,
    );

    exemple30a = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    resettable
    multiple
/>`,
    );

    exemple30b = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    resettable
    resetSelectedValue="CA"
/>`,
    );
}
