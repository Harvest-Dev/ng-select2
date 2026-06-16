import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { Examples } from './examples';

import { data1, data2 } from '../app.data';

@Component({
    selector: 'examples-checkbox',
    templateUrl: './examples-checkbox.component.html',
    styleUrls: ['./examples-checkbox.component.scss'],
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesCheckboxComponent extends Examples {
    // Multiple with checkbox
    dataCheckbox1 = data1;
    valueCheckbox1 = ['AK', 'NY'];

    exemple38a = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    showOptionCheckbox: null,
                    multiple: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    // Multiple with checkbox + showSelectAll
    dataCheckbox2 = data2;
    valueCheckbox2: string[] = ['AK'];

    exemple38b = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    showOptionCheckbox: null,
                    multiple: null,
                    showSelectAll: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    // Single with checkbox
    dataCheckbox3 = data2;
    valueCheckbox3: string = 'AK';

    exemple38c = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    showOptionCheckbox: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
