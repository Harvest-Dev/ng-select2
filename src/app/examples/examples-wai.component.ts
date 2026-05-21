import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Label } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data3 } from '../app.data';

@Component({
    selector: 'examples-wai',
    templateUrl: './examples-wai.component.html',
    styleUrls: ['./examples-wai.component.scss'],
    standalone: true,
    imports: [Select2, Select2Label, TranslocoModule, Highlight],
})
export class ExemplesWaiComponent extends Examples {
    data3 = data3;

    exempleWai = computed(() => {
        const examples = [
            new Json2html(
                {
                    tag: 'ng-select2',
                    attrs: {
                        ...this.overlayExempleJson(),
                        '[data]': 'data',
                        title: 'title',
                    },
                    body: [
                        {
                            tag: 'ng-select2-label',
                            body: 'Label',
                            inline: true,
                        },
                    ],
                },
                { webComponentSelfClosing: true, attrPosition: 'prettier' },
            ).toString(),
            '\n\n<div id="custom-label">External label</div>\n<div id="description">External description</div>\n' +
                new Json2html(
                    {
                        tag: 'ng-select2',
                        attrs: {
                            ...this.overlayExempleJson(),
                            ...this.styleModeExempleJson(),
                            '[data]': 'data',
                            title: 'title',
                            ariaLabelledby: 'custom-label',
                            ariaDescribedby: 'description',
                        },
                    },
                    { webComponentSelfClosing: true, attrPosition: 'prettier' },
                ).toString(),
            new Json2html(
                {
                    tag: 'ng-select2',
                    attrs: {
                        ...this.overlayExempleJson(),
                        '[data]': 'data',
                        ariaInvalid: null,
                    },
                    body: [
                        {
                            tag: 'ng-select2-label',
                            body: 'Invalid field',
                            inline: true,
                        },
                    ],
                },
                { webComponentSelfClosing: true, attrPosition: 'prettier' },
            ).toString(),
            new Json2html(
                {
                    tag: 'ng-select2',
                    attrs: {
                        ...this.overlayExempleJson(),
                        '[data]': 'data',
                        required: null,
                    },
                    body: [
                        {
                            tag: 'ng-select2-label',
                            body: 'Required field',
                            inline: true,
                        },
                    ],
                },
                { webComponentSelfClosing: true, attrPosition: 'prettier' },
            ).toString(),
            new Json2html(
                {
                    tag: 'ng-select2',
                    attrs: {
                        ...this.overlayExempleJson(),
                        '[data]': 'data',
                        readonly: null,
                        value: 'foo',
                    },
                    body: [
                        {
                            tag: 'ng-select2-label',
                            body: 'Readonly field',
                            inline: true,
                        },
                    ],
                },
                { webComponentSelfClosing: true, attrPosition: 'prettier' },
            ).toString(),
            new Json2html(
                {
                    tag: 'ng-select2',
                    attrs: {
                        ...this.overlayExempleJson(),
                        '[data]': 'data',
                        disabled: null,
                        value: 'foo',
                    },
                    body: [
                        {
                            tag: 'ng-select2-label',
                            body: 'Disabled field',
                            inline: true,
                        },
                    ],
                },
                { webComponentSelfClosing: true, attrPosition: 'prettier' },
            ).toString(),
            new Json2html(
                {
                    tag: 'ng-select2',
                    attrs: {
                        ...this.overlayExempleJson(),
                        ...this.styleModeExempleJson(),
                        '[data]': 'data',
                        resettable: null,
                        value: 'foo',
                        ariaResetButtonDescription: 'Clear the field',
                    },
                    body: [
                        {
                            tag: 'ng-select2-label',
                            body: 'Resettable field',
                            inline: true,
                        },
                    ],
                },
                { webComponentSelfClosing: true, attrPosition: 'prettier' },
            ).toString(),
        ];

        return examples.join('\n\n');
    });
}
