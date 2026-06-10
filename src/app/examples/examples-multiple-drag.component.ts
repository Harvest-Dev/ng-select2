import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data } from 'ng-select2-component';

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

    exemple10a = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    multiple: null,
                    multipleDrag: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
