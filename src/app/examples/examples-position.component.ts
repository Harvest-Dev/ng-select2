import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { Examples } from './examples';

import { data2, data19 } from '../app.data';

@Component({
    selector: 'examples-position',
    templateUrl: './examples-position.component.html',
    styleUrls: ['./examples-position.component.scss'],
    standalone: true,
    imports: [Select2, TranslocoModule, Highlight, JsonPipe],
})
export class ExemplesPositionComponent extends Examples {
    data2 = data2;
    data19 = data19;

    value19 = '';
    value27 = '';
    value27in = '';
    value27out = '';

    exemple19 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    listPosition: 'above',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple27 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    overlay: null,
                    '[data]': 'data',
                    '[value]': 'value',
                    listPosition: 'auto',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple27in = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    listPosition: 'auto',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple27out = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    overlay: null,
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    listPosition: 'auto',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
