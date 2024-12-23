import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1 } from '../app.data';

@Component({
    selector: 'examples-resettable',
    templateUrl: './examples-resettable.component.html',
    styleUrls: ['./examples-resettable.component.scss'],
    imports: [Select2, JsonPipe, TranslocoModule],
})
export class ExemplesResettableComponent extends Examples {
    data30: Select2Data = JSON.parse(JSON.stringify(data1));
    data30a: Select2Data = JSON.parse(JSON.stringify(data1));
    data30b: Select2Data = JSON.parse(JSON.stringify(data1));

    value30 = '';
    value30a = '';
    value30b = '';
}
