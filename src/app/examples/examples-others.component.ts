import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data, Select2Value } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data19, data22, data31en, data31fr, data31ja } from '../app.data';

@Component({
    selector: 'examples-others',
    templateUrl: './examples-others.component.html',
    styleUrls: ['./examples-others.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesOthersComponent extends Examples {
    data21: Select2Data = JSON.parse(JSON.stringify(data19));
    data31 = data31en;

    data41 = data31en;

    value21: Select2Value = '';
    value31 = '';
    value31m = [];
    value31b = '';

    value41m: Array<Select2Value> = ['english'];

    exemple21 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    listPosition="above"
/>`,
    );

    exemple41 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    multiple
/>`,
    );

    changeData31(event: string) {
        switch (event) {
            case 'english':
                this.data31 = data31en;
                break;
            case 'french':
                this.data31 = data31fr;
                break;
            case 'japanese':
                this.data31 = data31ja;
                break;
        }
    }

    changeDataAndValue41() {
        if (this.data41[0].value === 'english') {
            this.data41 = JSON.parse(JSON.stringify(data22));
            this.value41m = ['heliotrope'];
        } else {
            this.data41 = JSON.parse(JSON.stringify(data31en));
            this.value41m = ['english'];
        }
    }
}
