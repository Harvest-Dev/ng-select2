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

import { data1 } from '../app.data';

@Component({
    selector: 'examples-form-control',
    templateUrl: './examples-form-control.component.html',
    styleUrls: ['./examples-form-control.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule],
})
export class ExemplesFormControlComponent extends Examples {
    data9: Select2Data = JSON.parse(JSON.stringify(data1));
    data11: Select2Data = JSON.parse(JSON.stringify(data1));
    data32: Select2Data = JSON.parse(JSON.stringify(data1));

    value11 = '';

    ctrlForm: UntypedFormGroup;
    ctrlForm3: UntypedFormGroup;

    fg: UntypedFormGroup = new UntypedFormGroup({
        state: new UntypedFormControl(),
    });

    constructor(private fb: UntypedFormBuilder) {
        super();
        this.ctrlForm = this.fb.group({
            test11: new UntypedFormControl(null, Validators.required),
        });
        this.ctrlForm3 = this.fb.group({
            test33: new UntypedFormControl(null),
        });

        this.fg.patchValue(this.formData());
    }

    reset() {
        this.ctrlForm3.reset();
    }

    reset11() {
        const test11 = this.ctrlForm.get('test11');
        if (test11) {
            test11.reset();
        }
    }

    change11() {
        const test11 = this.ctrlForm.get('test11');
        if (test11) {
            test11.setValue('UT');
        }
    }

    resetForm() {
        this.fg.reset(this.formData());
    }

    print() {
        console.log('FormControl', this.fg.value);
    }

    formData() {
        return {
            state: ['CA', 'NV'],
        };
    }
}
