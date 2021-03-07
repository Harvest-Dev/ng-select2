import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Select2Data, Select2Option, Select2UpdateEvent } from 'projects/ng-select2-component/src/lib/select2-utils';

import { data1, data13, data17, data18, data19, data2, data22, data23, data24, data3, data5, data6 } from './app.data';

@Component({
    selector: 'app-root',
    templateUrl: './app-examples.component.html',
    styleUrls: ['./app-examples.component.scss']
})
export class AppExamplesComponent {
    data1 = data1;
    data2 = data2;
    data3 = data3;
    data4: Select2Data = JSON.parse(JSON.stringify(data3));
    data5 = data5;
    data6 = data6;
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
    data18 = data18;
    data19 = data19;
    data20: Select2Data = JSON.parse(JSON.stringify(data19));
    data21: Select2Data = JSON.parse(JSON.stringify(data19));
    data22 = data22;
    data23 = data23;
    data24 = data24;
    data25: Select2Data = JSON.parse(JSON.stringify(data23));

    minCountForSearch = Infinity;

    ctrlForm: FormGroup;
    ctrlForm2: FormGroup;

    value1 = 'CA';
    value2 = 'CA';
    value3 = 'foo';
    value4 = 'bar';
    value5 = '0';
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
    value18 = '';
    value19 = '';
    value20 = '';
    value21 = 'foo6';
    value22 = '';
    value23 = '';
    value24 = '';
    value25 = '';

    limitSelection = 0;

    fg: FormGroup = new FormGroup({
        state: new FormControl()
    });

    constructor(private fb: FormBuilder) {
        this.ctrlForm = this.fb.group({
            test11: new FormControl(null, Validators.required)
        });

        this.ctrlForm2 = this.fb.group({
            test5: new FormControl(0, Validators.required)
        });

        this.fg.patchValue(this.formData());
    }

    update1(event: Select2UpdateEvent<string>) {
        this.value1 = event.value;
        console.log('update1', event);
    }
    change1(event: Event) {
        console.log('change1', event);
    }
    focus1(event: Event) {
        console.log('focus1', event);
    }
    blur1(event: Event) {
        console.log('blur1', event);
    }
    open1(event: Event) {
        console.log('open1', event);
    }
    close1(event: Event) {
        console.log('close1', event);
    }
    search1(event: Event) {
        console.log('search1', event);
    }

    update2(event: Select2UpdateEvent<string>) {
        this.value2 = event.value;
    }

    update3(event: Select2UpdateEvent<string>) {
        this.value3 = event.value;
    }

    update5(event: Select2UpdateEvent<string>) {
        this.value5 = event.value;
    }

    addItem() {
        const count = this.data6.length + 1;
        this.data6.push({ value: 'foo' + count, label: 'foo' + count });
    }
    removeItem() {
        this.data6.pop();
    }

    update6(event: Select2UpdateEvent<string>) {
        this.value6 = event.value;
    }

    update7(event: Select2UpdateEvent<string>) {
        this.value7 = event.value;
    }

    open8() {
        this.data8 = JSON.parse(JSON.stringify(data2));
    }

    close8() {
        alert('close');
    }

    update8(event: Select2UpdateEvent<string>) {
        this.value8 = event.value;
    }

    search8(text: string) {
        this.data8 = text
            ? (JSON.parse(JSON.stringify(data2)) as Select2Option[])
                .filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
            : JSON.parse(JSON.stringify(data2));
    }

    update9(event: Select2UpdateEvent<string[]>) {
        this.value9 = event.value;
        console.log('update9', event);
    }
    focus9(event: Event) {
        console.log('focus9', event);
    }
    blur9(event: Event) {
        console.log('blur9', event);
    }
    open9(event: Event) {
        console.log('open9', event);
    }
    close9(event: Event) {
        console.log('close9', event);
    }
    search9(event: Event) {
        console.log('search9', event);
    }

    update10(event: Select2UpdateEvent<string[]>) {
        this.value10 = event.value;
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

    update12(event: Select2UpdateEvent<string>) {
        this.value12 = event.value;
    }

    update13(event: Select2UpdateEvent<boolean>) {
        this.value13 = event.value;
    }

    update15(event: Select2UpdateEvent<string>) {
        this.value15 = event.value;
    }

    update16(event: Select2UpdateEvent<string>) {
        this.value16 = event.value;
    }

    update17(event: Select2UpdateEvent<string>) {
        this.value17 = event.value;
    }

    update18(event: Select2UpdateEvent<string>) {
        this.value18 = event.value;
    }

    update19(event: Select2UpdateEvent<string>) {
        this.value19 = event.value;
    }

    update20(event: Select2UpdateEvent<string>) {
        this.value20 = event.value;
    }

    update21(event: Select2UpdateEvent<string>) {
        this.value21 = event.value;
    }

    update22(event: Select2UpdateEvent<string>) {
        this.value22 = event.value;
    }

    update23(event: Select2UpdateEvent<string>) {
        this.value23 = event.value;
    }

    update24(event: Select2UpdateEvent<string>) {
        this.value24 = event.value;
    }

    update25(event: Select2UpdateEvent<string>) {
        this.value25 = event.value;
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
