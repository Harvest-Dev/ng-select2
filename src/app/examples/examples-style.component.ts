import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2 } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data17, data22 } from '../app.data';

@Component({
    selector: 'examples-style',
    templateUrl: './examples-style.component.html',
    styleUrls: ['./examples-style.component.scss'],
    standalone: true,
    imports: [TranslocoModule, Select2, JsonPipe, Highlight],
})
export class ExamplesStyleComponent extends Examples {
    data17 = data17;
    data22 = data22;

    value17 = '';
    value22 = '';

    exemple17 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple22 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    class: 'flower-list',
                    ...this.overlayExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    listPosition: 'auto',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
