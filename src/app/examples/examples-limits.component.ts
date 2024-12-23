import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data3, data5, data6, data18, data28 } from '../app.data';

@Component({
    selector: 'examples-limits',
    templateUrl: './examples-limits.component.html',
    styleUrls: ['./examples-limits.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, Select2, TranslocoModule, JsonPipe],
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

    minCountForSearch = Infinity;

    limitSelection = 0;

    ctrlForm2: UntypedFormGroup;

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
