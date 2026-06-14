import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-select-all',
    templateUrl: './examples-select-all.component.html',
    styleUrls: ['./examples-select-all.component.scss'],
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesSelectAllComponent extends Examples {
    data37 = data1;
    value37 = ['AK', 'NY', 'NC', 'RI'];

    exemple37 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    showSelectAll: null,
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    multiple: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
