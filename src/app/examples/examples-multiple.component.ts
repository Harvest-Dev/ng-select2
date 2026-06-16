import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-multiple',
    templateUrl: './examples-multiple.component.html',
    styleUrls: ['./examples-multiple.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesMultipleComponent extends Examples {
    data10a: Select2Data = JSON.parse(JSON.stringify(data1));
    data10: Select2Data = JSON.parse(JSON.stringify(data1));
    data10b: Select2Data = JSON.parse(JSON.stringify(data1));

    value10a = '';
    value10 = '';
    value10b = '';

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
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple10 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    multiple: null,
                    hideSelectedItems: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple10b = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    placeholder: 'select items',
                    '[data]': 'data',
                    '[value]': 'value',
                    multiple: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
