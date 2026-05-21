import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data3 } from '../app.data';

@Component({
    selector: 'examples-auto-create',
    templateUrl: './examples-auto-create.component.html',
    styleUrls: ['./examples-auto-create.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesAutoCreateComponent extends Examples {
    data29: Select2Data = JSON.parse(JSON.stringify(data3));
    data29b: Select2Data = JSON.parse(JSON.stringify(data1));
    data32: Select2Data = JSON.parse(JSON.stringify(data3));

    value29: string[] = [];
    value29b: string[] = [];
    value32 = '';

    exemple32 = computed(
        () =>
            `<select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    resettable
    autoCreate
    resetSelectedValue="CA"
    (autoCreateItem)="autoCreateItem('value', $event)"
/>`,
    );

    exemple29 = computed(
        () =>
            `<select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    multiple
    autoCreate
/>`,
    );

    exemple29b = computed(
        () =>
            `<select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    multiple
    autoCreate
/>`,
    );
}
