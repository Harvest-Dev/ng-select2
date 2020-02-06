import { Component } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

import { Select2Option, Select2Data } from 'projects/ng-select2-component/src/lib/select2-utils';

import { data1, data2, data3, data5, data12, data15 as data16 } from './app.data';

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
    data6: Select2Data = JSON.parse(JSON.stringify(data3));
    data7: Select2Option[] = [];
    data9: Select2Data = JSON.parse(JSON.stringify(data1));
    data10: Select2Data = JSON.parse(JSON.stringify(data1));
    data11: Select2Data = JSON.parse(JSON.stringify(data1));
    data12 = data12;
    data14 = data2;
    data15 = data2;
    data16 = data16;

    minCountForSearch = Infinity;

    ctrlForm: FormGroup;

    value1 = 'CA';
    value2 = 'CA';
    value3 = 'foo';
    value4 = 'bar';
    value5 = 'foo3';
    value6 = '';
    value7 = '';
    value9: string[] = [];
    value10 = 'CA';
    value11 = 'CA';
    value12 = true;
    value14 = '';
    value15 = '';
    value16 = '';

    fg: FormGroup = new FormGroup({
        state: new FormControl()
    });

    constructor(private fb: FormBuilder) {
        this.ctrlForm = this.fb.group({
            test10: new FormControl(null, Validators.required)
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

    open7() {
        this.data7 = JSON.parse(JSON.stringify(data2));
    }

    update7(value: string) {
        this.value7 = value;
    }

    search7(text: string) {
        this.data7 = text
            ? (JSON.parse(JSON.stringify(data2)) as Select2Option[])
                .filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
            : JSON.parse(JSON.stringify(data2));
    }

    update9(value: string[]) {
        this.value9 = value;
    }

    reset9() {
        this.value9 = ['CA'];
    }

    reset10() {
        const test10 = this.ctrlForm.get('test10');
        if (test10) {
            test10.reset();
        }
    }

    change10() {
        const test10 = this.ctrlForm.get('test10');
        if (test10) {
            test10.setValue('UT');
        }
    }

    update11(value: string) {
        this.value11 = value;
    }

    update12(value: boolean) {
        this.value12 = value;
    }

    update14(value: string) {
        this.value14 = value;
    }

    update15(value: string) {
        this.value15 = value;
    }

    update16(value: string) {
        this.value16 = value;
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
