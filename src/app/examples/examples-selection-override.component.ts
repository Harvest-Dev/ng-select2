import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2SelectionOverride } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-selection-override',
    templateUrl: './examples-selection-override.component.html',
    styleUrls: ['./examples-selection-override.component.scss'],
    standalone: true,
    imports: [FormsModule, Select2, JsonPipe, TranslocoModule, Highlight],
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

    exemple36 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    selectionOverride: 'Test (%size%)',
                    resettable: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple36m = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    multiple: null,
                    selectionOverride: 'Test (%size%)',
                    resettable: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
