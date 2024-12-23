import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { TranslocoModule } from '@jsverse/transloco';



import { Select2, Select2SelectionOverride } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-selection-override',
    templateUrl: './examples-selection-override.component.html',
    styleUrls: ['./examples-selection-override.component.scss'],
    imports: [FormsModule, Select2, JsonPipe, TranslocoModule],
})
export class ExemplesSelectionOverrideComponent extends Examples {
    value36 = '';
    value36m = ['NY', 'NC', 'RI', 'WV', 'VT', 'VA', 'AR', 'IA'];

    data36 = data1;
    data36m = data1;

    selectionOverride: Select2SelectionOverride = params => {
        return `Selection (${params.size}${
            (params.options?.length || 0) > 0 ? ': ' + params.options!.map(e => e.label).join(', ') : ''
        }) `;
    };
}