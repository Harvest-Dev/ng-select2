import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data, Select2Value } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data19, data31en, data31fr, data31ja } from '../app.data';

@Component({
    selector: 'examples-others',
    templateUrl: './examples-others.component.html',
    styleUrls: ['./examples-others.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule],
})
export class ExemplesOthersComponent extends Examples {
    data21: Select2Data = JSON.parse(JSON.stringify(data19));
    data31 = data31en;

    value21: Select2Value = '';
    value31 = '';
    value31m = [];
    value31b = '';

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
}
