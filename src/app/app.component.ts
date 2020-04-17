import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { data1, data12 as data13, data15 as data17, data2, data3, data5 } from './app.data';

import { Select2Data, Select2Option } from 'projects/ng-select2-component/src/lib/select2-utils';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    data1 = data1;
    data2 = data2;
    data3 = data3;
    data4: Select2Data = JSON.parse(JSON.stringify(data3));
    data5 = data5;
    data6 = data5;
    data7: Select2Data = JSON.parse(JSON.stringify(data3));
    data8: Select2Option[] = [];
    data9: Select2Data = JSON.parse(JSON.stringify(data1));
    data10: Select2Data = JSON.parse(JSON.stringify(data1));
    data11: Select2Data = JSON.parse(JSON.stringify(data1));
    data12: Select2Data = JSON.parse(JSON.stringify(data1));
    data13 = data13;
    data15 = data2;
    data16 = data2;
    data17 = data17;

    minCountForSearch = Infinity;

    ctrlForm: FormGroup;

    value1 = 'CA';
    value2 = 'CA';
    value3 = 'foo';
    value4 = 'bar';
    value5 = 'foo3';
    value6 = 'foo3';
    value7 = '';
    value8 = '';
    value9: string[] = [];
    value10: string[] = [];
    value11 = 'CA';
    value12 = 'CA';
    value13 = true;
    value15 = '';
    value16 = '';
    value17 = '';

    fg: FormGroup = new FormGroup({
        state: new FormControl()
    });

    constructor(private fb: FormBuilder) {
        this.ctrlForm = this.fb.group({
            test11: new FormControl(null, Validators.required)
        });

        this.fg.patchValue(this.formData());
    }

    update1(value: string) {
        this.value1 = value;
    }

    update2(value: string) {
        this.value2 = value;
    }

    update3(value: string) {
        this.value3 = value;
    }

    update5(value: string) {
        this.value5 = value;
    }

    update6(value: string) {
        this.value6 = value;
    }

    update7(value: string) {
        this.value7 = value;
    }

    open8() {
        this.data8 = JSON.parse(JSON.stringify(data2));
    }

    update8(value: string) {
        this.value8 = value;
    }

    search8(text: string) {
        this.data8 = text
            ? (JSON.parse(JSON.stringify(data2)) as Select2Option[])
                .filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
            : JSON.parse(JSON.stringify(data2));
    }

    update9(value: string[]) {
        this.value9 = value;
    }

    update10(value: string[]) {
        this.value10 = value;
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

    update12(value: string) {
        this.value12 = value;
    }

    update13(value: boolean) {
        this.value13 = value;
    }

    update15(value: string) {
        this.value15 = value;
    }

    update16(value: string) {
        this.value16 = value;
    }

    update17(value: string) {
        this.value17 = value;
    }

    resetForm() {
        this.fg.reset(this.formData());
    }
    print() {
        console.log('FormControl', this.fg.value);
    }

    formData() {
        return {
            state: ['CA', 'NV']
        };
    }
}
