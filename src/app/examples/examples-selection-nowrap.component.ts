import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data, Select2SelectionOverride } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-selection-nowrap',
    templateUrl: './examples-selection-nowrap.component.html',
    styleUrls: ['./examples-selection-nowrap.component.scss'],
    imports: [FormsModule, Select2, JsonPipe, TranslocoModule],
})
export class ExemplesSelectionNowrapComponent extends Examples {
    value36mf = ['NY', 'NC', 'RI', 'WV', 'VT', 'VA', 'AR', 'IA'];
    value10 = ['NY', 'NC', 'RI', 'WV', 'VT', 'VA', 'AR', 'IA'];

    data36mf = data1;
    data10: Select2Data = JSON.parse(JSON.stringify(data1));

    selectionNoWrap = true;
    selectionNoWrap2 = true;

    selectionOverride: Select2SelectionOverride = params => {
        return `Selection (${params.size}${
            (params.options?.length || 0) > 0 ? ': ' + params.options!.map(e => e.label).join(', ') : ''
        }) `;
    };
}
