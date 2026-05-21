import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Hint, Select2Label } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data2 } from '../app.data';

@Component({
    selector: 'examples-tags',
    templateUrl: './examples-tags.component.html',
    styleUrls: ['./examples-tags.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        Select2,
        Select2Label,
        Select2Hint,
        JsonPipe,
        TranslocoModule,
        Highlight,
    ],
})
export class ExemplesTagsComponent extends Examples {
    data15 = data2;
    data16 = data2;
    data16b = data2;

    value15 = '';
    value16 = '';
    value16b = '';

    exemple15 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
>
  <ng-select2-label>Select a state</ng-select2-label>
</ng-select2>`,
    );

    exemple16 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    required
>
  <ng-select2-label>Select a state</ng-select2-label>
</ng-select2>`,
    );

    exemple16b = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
>
  <ng-select2-hint>Description in hint</ng-select2-hint>
</ng-select2>`,
    );
}
