import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-multiple-drag',
    templateUrl: './examples-multiple-drag.component.html',
    styleUrls: ['./examples-multiple-drag.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesMultipleDragComponent extends Examples {
    data10a: Select2Data = JSON.parse(JSON.stringify(data1));
    data10: Select2Data = JSON.parse(JSON.stringify(data1));
    data10b: Select2Data = JSON.parse(JSON.stringify(data1));

    value10a = ['NY', 'NC', 'RI', 'WV', 'VT', 'VA', 'AR', 'IA'];
    value10 = ['NY', 'NC', 'RI', 'WV', 'VT', 'VA', 'AR', 'IA'];
    value10b = ['NY', 'NC', 'RI', 'WV', 'VT', 'VA', 'AR', 'IA'];

    exemple10a = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    multiple
    multipleDrag
/>`,
    );
}
