import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { Examples } from './examples';

import { data23, data24 } from '../app.data';

@Component({
    selector: 'examples-template',
    templateUrl: './examples-template.component.html',
    styleUrls: ['./examples-template.component.scss'],
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesTemplateComponent extends Examples {
    data23 = data23;
    data24 = data24;
    data25: Select2Data = JSON.parse(JSON.stringify(data23));

    value23 = '';
    value24 = '';
    value25 = '';

    exemple23 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    class: 'flower-list',
                    '[templates]': 'template',
                    '[templateSelection]': 'templateSelection',
                },
                body: [
                    {
                        tag: 'ng-template',
                        attrs: { '#template': null, 'let-data': 'data' },
                        body: [{ tag: 'strong', body: '{{ data?.color }}', inline: true }, ': {{ data?.name }}'],
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

    exemple24 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    class: 'flower-list',
                    '[templates]': '{ option: templateOption, group: templateGroup }',
                },
                body: [
                    {
                        tag: 'ng-template',
                        attrs: { '#templateOption': null, 'let-data': 'data' },
                        body: [{ tag: 'strong', body: '{{ data?.color }}', inline: true }, ': {{ data?.name }}'],
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#templateGroup': null, 'let-label': 'label' },
                        body: [{ tag: 'strong', body: '({{ label }})', inline: true }],
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple25 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    class: 'flower-list',
                    '[templates]': '{ template1: template1, template2: template2, template3: template3 }',
                },
                body: [
                    {
                        tag: 'ng-template',
                        attrs: { '#template1': null, 'let-data': 'data' },
                        body: [
                            {
                                tag: 'span',
                                attrs: { '[style.background]': 'data?.color' },
                                body: '{{ data?.name }}',
                                inline: true,
                            },
                        ],
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#template2': null, 'let-data': 'data' },
                        body: [{ tag: 'strong', body: '{{ data?.color }}', inline: true }, ': {{ data?.name }}'],
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#template3': null, 'let-data': 'data' },
                        body: '{{ data | json }}',
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
