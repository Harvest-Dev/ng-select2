import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data, Select2SelectionOverride } from 'projects/ng-select2-component/src/public_api';

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
    value36mf = ['NY', 'NC', 'RI', 'WV', 'VT', 'VA', 'AR', 'IA'];
    value10 = ['NY', 'NC', 'RI', 'WV', 'VT', 'VA', 'AR', 'IA'];

    data36 = data1;
    data36m = data1;
    data36mf = data1;
    data10: Select2Data = JSON.parse(JSON.stringify(data1));

    selectionOverride: Select2SelectionOverride = params => {
        return `Selection (${params.size}${
            (params.options?.length || 0) > 0 ? ': ' + params.options!.map(e => e.label).join(', ') : ''
        }) `;
    };

    selectionNoWrap = true;
    selectionNoWrap2 = true;
}