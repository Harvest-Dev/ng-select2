import { JsonPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data } from 'ng-select2-component';

import { Examples } from './examples';

import { data1, data3, data5, data6, data18, data28 } from '../app.data';

@Component({
    selector: 'examples-limits',
    templateUrl: './examples-limits.component.html',
    styleUrls: ['./examples-limits.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, Select2, TranslocoModule, JsonPipe, Highlight],
})
export class ExamplesLimitsComponent extends Examples {
    data5 = data5;
    data6 = data6;
    data7: Select2Data = JSON.parse(JSON.stringify(data3));
    data9: Select2Data = JSON.parse(JSON.stringify(data1));
    data18 = data18;
    data28 = data28;

    value5 = 0;
    value6 = 'foo3';
    value7 = '';
    value9: string[] = [];
    value18 = '';
    value28 = '';

    minCountForSearch = signal(Infinity);

    limitSelection = signal(0);
    limitCode = signal(0);
    statusCode = signal('default');

    ctrlForm2: UntypedFormGroup;

    exemple5 = computed(() =>
        new Json2html(
            {
                tag: 'form',
                attrs: { '[formGroup]': 'ctrlForm' },
                body: [
                    {
                        tag: 'ng-select2',
                        attrs: {
                            ...this.overlayExempleJson(),
                            ...this.styleModeExempleJson(),
                            '[data]': 'data',
                            formControlName: 'test',
                            '[minCountForSearch]': this.minCountForSearch(),
                        },
                    },
                ],
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple6 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    minCountForSearch: this.limitCode(),
                    displaySearchStatus: this.statusCode(),
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple9 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    multiple: null,
                    limitSelection: this.limitSelection(),
                    customSearchEnabled: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple28 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    listPosition: 'auto',
                    maxResults: '50',
                    maxResultsMessage: 'Too much results in this list.',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple18 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    minCharForSearch: '3',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    constructor(private fb: UntypedFormBuilder) {
        super();
        this.ctrlForm2 = this.fb.group({
            test5: new UntypedFormControl(0, Validators.required),
        });
    }

    addItem() {
        const count = this.data6.length + 1;
        this.data6.push({ value: 'foo' + count, label: 'foo' + count });
    }

    removeItem() {
        this.data6.pop();
    }
}
