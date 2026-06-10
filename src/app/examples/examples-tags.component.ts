import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Hint, Select2Label } from 'ng-select2-component';

import { Examples } from './examples';

import { data2 } from '../app.data';

@Component({
    selector: 'examples-tags',
    templateUrl: './examples-tags.component.html',
    styleUrls: ['./examples-tags.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        Select2,
        Select2Label,
        Select2Hint,
        JsonPipe,
        TranslocoModule,
        Highlight,
    ],
})
export class ExemplesTagsComponent extends Examples {
    data15 = data2;
    data16 = data2;
    data16b = data2;

    value15 = '';
    value16 = '';
    value16b = '';

    exemple15 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                },
                body: [
                    {
                        tag: 'ng-select2-label',
                        body: 'Select a state',
                        inline: true,
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple16 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    required: null,
                },
                body: [
                    {
                        tag: 'ng-select2-label',
                        body: 'Select a state',
                        inline: true,
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple16b = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                },
                body: [
                    {
                        tag: 'ng-select2-hint',
                        body: 'Description in hint',
                        inline: true,
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
