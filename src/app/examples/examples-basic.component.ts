import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data2, data3, data13 } from '../app.data';

@Component({
    selector: 'examples-basic',
    templateUrl: './examples-basic.component.html',
    styleUrls: ['./examples-basic.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule],
})
export class ExemplesBasicComponent extends Examples {
    data1 = data1;
    data2 = data2;
    data3 = data3;
    data4: Select2Data = JSON.parse(JSON.stringify(data3));
    data7: Select2Data = JSON.parse(JSON.stringify(data3));
    data13 = data13;

    value1 = 'CA';
    value2 = 'CA';
    value3 = 'foo';
    value4 = 'bar';
    value7 = '';
    value13 = true;
}
