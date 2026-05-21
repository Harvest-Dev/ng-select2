import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data, Select2HighlightPipe } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data23, data36 } from '../app.data';

@Component({
    selector: 'examples-highlight',
    templateUrl: './examples-highlight.component.html',
    styleUrls: ['./examples-highlight.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule, Select2HighlightPipe, Highlight],
})
export class ExemplesHighlightComponent extends Examples {
    data14 = data1;
    data26: Select2Data = JSON.parse(JSON.stringify(data23));
    data36 = data36;

    value14 = 'CA';
    value26 = '';
    value36 = '';

    exemple14 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    highlightText: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple26 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    class: 'flower-list',
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    highlightText: null,
                    '[templates]': 'template',
                    '[templateSelection]': 'templateSelection',
                },
                body: [
                    {
                        tag: 'ng-template',
                        attrs: {
                            '#template': null,
                            'let-data': 'data',
                            'let-searchText': 'searchText',
                            'let-highlightText': 'highlightText',
                        },
                        body: [
                            { tag: 'strong', body: '{{ data?.color }}', inline: true },
                            ': ',
                            {
                                tag: 'span',
                                attrs: { '[innerHTML]': 'data?.name | highlightText: searchText : !highlightText' },
                                inline: true,
                            },
                        ],
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#templateSelection': null, 'let-data': 'data' },
                        body: [{ tag: 'strong', body: '{{ data?.color }}', inline: true }, ' ({{ data?.name }})'],
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple36 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    highlightText: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
