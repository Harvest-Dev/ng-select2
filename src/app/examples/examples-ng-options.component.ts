import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2GroupDirective, Select2HighlightPipe, Select2OptionDirective } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { Examples } from './examples';

@Component({
    selector: 'examples-ng-options',
    templateUrl: './examples-ng-options.component.html',
    styleUrls: ['./examples-ng-options.component.scss'],
    imports: [
        Select2,
        Select2OptionDirective,
        Select2GroupDirective,
        Select2HighlightPipe,
        JsonPipe,
        TranslocoModule,
        Highlight,
    ],
})
export class ExemplesNgOptionsComponent extends Examples {
    value41 = '';
    value42 = '';
    value43 = 'banana';
    value44 = '';
    value45 = '';
    value46 = '';
    value47 = '';
    value48 = '';

    disabledOption = false;

    dynamicOptions = signal([
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'cherry', label: 'Cherry' },
    ]);
    disabledDynamic = signal(false);

    addDynamicOption() {
        const count = this.dynamicOptions().length + 1;
        this.dynamicOptions.update(opts => [...opts, { value: `option-${count}`, label: `Option ${count}` }]);
    }

    exemple41 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[value]': 'value',
                    '(update)': "update('value', $event)",
                },
                body: [
                    { tag: 'ng-option', attrs: { value: 'apple' }, body: 'Apple', inline: true },
                    { tag: 'ng-option', attrs: { value: 'banana' }, body: 'Banana', inline: true },
                    { tag: 'ng-option', attrs: { value: 'cherry' }, body: 'Cherry', inline: true },
                    { tag: 'ng-option', attrs: { value: 'date' }, body: 'Date', inline: true },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple42 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[value]': 'value',
                    '(update)': "update('value', $event)",
                },
                body: [
                    {
                        tag: 'ng-group',
                        attrs: { label: 'Fruits' },
                        body: [
                            { tag: 'ng-option', attrs: { value: 'apple' }, body: 'Apple', inline: true },
                            { tag: 'ng-option', attrs: { value: 'banana' }, body: 'Banana', inline: true },
                        ],
                    },
                    {
                        tag: 'ng-group',
                        attrs: { label: 'Vegetables' },
                        body: [
                            { tag: 'ng-option', attrs: { value: 'carrot' }, body: 'Carrot', inline: true },
                            { tag: 'ng-option', attrs: { value: 'pea' }, body: 'Pea', inline: true },
                        ],
                    },
                    { tag: 'ng-option', attrs: { value: 'other' }, body: 'Other', inline: true },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple43 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[value]': 'value',
                    '(update)': "update('value', $event)",
                },
                body: [
                    { tag: 'ng-option', attrs: { value: 'apple' }, body: 'Apple', inline: true },
                    {
                        tag: 'ng-option',
                        attrs: { value: 'banana', '[disabled]': 'disabledOption' },
                        body: 'Banana',
                        inline: true,
                    },
                    { tag: 'ng-option', attrs: { value: 'cherry', disabled: null }, body: 'Cherry', inline: true },
                    { tag: 'ng-option', attrs: { value: 'date' }, body: 'Date', inline: true },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple44 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    class: 'badge-list',
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[value]': 'value',
                    '(update)': "update('value', $event)",
                    '[templates]': 'tplBadge',
                    '[templateSelection]': 'tplBadgeSelection',
                },
                body: [
                    {
                        tag: 'ng-template',
                        attrs: { '#tplBadge': null, 'let-data': 'data' },
                        body: [
                            {
                                tag: 'span',
                                attrs: { class: 'badge', '[style.background]': 'data?.color' },
                                body: '{{ data?.emoji }} {{ data?.name }}',
                                inline: true,
                            },
                        ],
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#tplBadgeSelection': null, 'let-data': 'data' },
                        body: [
                            {
                                tag: 'span',
                                attrs: { class: 'badge', '[style.background]': 'data?.color' },
                                body: '{{ data?.emoji }} {{ data?.name }}',
                                inline: true,
                            },
                        ],
                    },
                    {
                        tag: 'ng-option',
                        attrs: {
                            value: 'hibiscus',
                            label: 'Hibiscus',
                            '[data]': "{ color: '#e74c3c', emoji: '🌺', name: 'Hibiscus' }",
                        },
                        body: '',
                    },
                    {
                        tag: 'ng-option',
                        attrs: {
                            value: 'sunflower',
                            label: 'Sunflower',
                            '[data]': "{ color: '#f1c40f', emoji: '🌻', name: 'Sunflower' }",
                        },
                        body: '',
                    },
                    {
                        tag: 'ng-option',
                        attrs: {
                            value: 'lily',
                            label: 'Lily',
                            '[data]': "{ color: '#95a5a6', emoji: '🌸', name: 'Lily' }",
                        },
                        body: '',
                    },
                    {
                        tag: 'ng-option',
                        attrs: {
                            value: 'lavender',
                            label: 'Lavender',
                            '[data]': "{ color: '#9b59b6', emoji: '💜', name: 'Lavender' }",
                        },
                        body: '',
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple46 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[value]': 'value',
                    '(update)': "update('value', $event)",
                },
                body: [
                    {
                        tag: 'ng-option',
                        attrs: { value: 'one' },
                        body: '<strong>1.</strong> First item',
                        inline: true,
                    },
                    {
                        tag: 'ng-option',
                        attrs: { value: 'two' },
                        body: '<strong>2.</strong> Second item',
                        inline: true,
                    },
                    {
                        tag: 'ng-option',
                        attrs: { value: 'three' },
                        body: '<strong>3.</strong> Third item',
                        inline: true,
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple47 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[value]': 'value',
                    '(update)': "update('value', $event)",
                },
                body: [
                    {
                        annotation: 'for',
                        conditional: 'let opt of dynamicOptions(); track opt.value',
                        body: [
                            {
                                tag: 'ng-option',
                                attrs: {
                                    '[value]': 'opt.value',
                                    '[disabled]': 'opt.value === "banana" && disabledDynamic()',
                                },
                                body: '{{ opt.label }}',
                                inline: true,
                            },
                        ],
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple45 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    class: 'priority-list',
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[value]': 'value',
                    '[templates]': '{ option: tplPriority, group: tplPriorityGroup }',
                    '(update)': "update('value', $event)",
                },
                body: [
                    {
                        tag: 'ng-template',
                        attrs: { '#tplPriority': null, 'let-data': 'data' },
                        body: [
                            {
                                tag: 'span',
                                attrs: { '[class]': '"priority-item priority-" + data?.level' },
                                body: '{{ data?.icon }} {{ data?.name }}',
                                inline: true,
                            },
                        ],
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#tplPriorityGroup': null, 'let-label': 'label', 'let-data': 'data' },
                        body: [
                            {
                                tag: 'span',
                                attrs: { '[class]': '"group-header group-" + data?.type' },
                                body: '{{ data?.icon }} {{ label }}',
                                inline: true,
                            },
                        ],
                    },
                    {
                        tag: 'ng-group',
                        attrs: { label: 'Bugs', '[data]': "{ type: 'bug', icon: '🐛' }" },
                        body: [
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'critical',
                                    label: 'Critical',
                                    '[data]': "{ level: 'critical', icon: '🔴', name: 'Critical' }",
                                },
                                body: '',
                            },
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'high',
                                    label: 'High',
                                    '[data]': "{ level: 'high', icon: '🟠', name: 'High' }",
                                },
                                body: '',
                            },
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'medium',
                                    label: 'Medium',
                                    '[data]': "{ level: 'medium', icon: '🟡', name: 'Medium' }",
                                },
                                body: '',
                            },
                        ],
                    },
                    {
                        tag: 'ng-group',
                        attrs: { label: 'Tasks', '[data]': "{ type: 'task', icon: '✅' }" },
                        body: [
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'feature',
                                    label: 'Feature',
                                    '[data]': "{ level: 'feature', icon: '✨', name: 'Feature' }",
                                },
                                body: '',
                            },
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'improvement',
                                    label: 'Improvement',
                                    '[data]': "{ level: 'improvement', icon: '�', name: 'Improvement' }",
                                },
                                body: '',
                            },
                        ],
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple48 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[value]': 'value',
                    '[templates]': '{ option: tplHighlight, group: tplHighlightGroup }',
                    highlightText: null,
                    minCharForSearch: 0,
                    '(update)': "update('value', $event)",
                },
                body: [
                    {
                        tag: 'ng-template',
                        attrs: {
                            '#tplHighlight': null,
                            'let-data': 'data',
                            'let-searchText': 'searchText',
                            'let-highlightText': 'highlightText',
                        },
                        body: [
                            {
                                tag: 'span',
                                attrs: { class: 'highlight-option' },
                                body: [
                                    {
                                        tag: 'span',
                                        attrs: { class: 'highlight-icon' },
                                        body: '{{ data?.icon }}',
                                        inline: true,
                                    },
                                    {
                                        tag: 'span',
                                        attrs: {
                                            class: 'highlight-label',
                                            '[innerHTML]': 'data?.name | highlightText: searchText : !highlightText',
                                        },
                                        body: '',
                                    },
                                    {
                                        tag: 'small',
                                        attrs: { class: 'highlight-category' },
                                        body: '({{ data?.category }})',
                                        inline: true,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'ng-template',
                        attrs: {
                            '#tplHighlightGroup': null,
                            'let-label': 'label',
                            'let-data': 'data',
                            'let-searchText': 'searchText',
                            'let-highlightText': 'highlightText',
                        },
                        body: [
                            {
                                tag: 'span',
                                attrs: { class: 'highlight-group-header' },
                                body: [
                                    '{{ data?.icon }} ',
                                    {
                                        tag: 'span',
                                        attrs: {
                                            '[innerHTML]': 'label | highlightText: searchText : !highlightText',
                                        },
                                        body: '',
                                        inline: true,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'ng-group',
                        attrs: { label: 'Programming', '[data]': "{ icon: '💻' }" },
                        body: [
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'typescript',
                                    label: 'TypeScript',
                                    '[data]': "{ icon: '🔷', name: 'TypeScript', category: 'Language' }",
                                },
                                body: '',
                            },
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'rust',
                                    label: 'Rust',
                                    '[data]': "{ icon: '🦀', name: 'Rust', category: 'Language' }",
                                },
                                body: '',
                            },
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'python',
                                    label: 'Python',
                                    '[data]': "{ icon: '🐍', name: 'Python', category: 'Language' }",
                                },
                                body: '',
                            },
                        ],
                    },
                    {
                        tag: 'ng-group',
                        attrs: { label: 'Frameworks', '[data]': "{ icon: '🏗️' }" },
                        body: [
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'angular',
                                    label: 'Angular',
                                    '[data]': "{ icon: '🅰️', name: 'Angular', category: 'Frontend' }",
                                },
                                body: '',
                            },
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'nestjs',
                                    label: 'NestJS',
                                    '[data]': "{ icon: '🐱', name: 'NestJS', category: 'Backend' }",
                                },
                                body: '',
                            },
                            {
                                tag: 'ng-option',
                                attrs: {
                                    value: 'tauri',
                                    label: 'Tauri',
                                    '[data]': "{ icon: '🖥️', name: 'Tauri', category: 'Desktop' }",
                                },
                                body: '',
                            },
                        ],
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
