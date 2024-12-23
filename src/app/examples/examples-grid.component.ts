import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data2, data35, data35b } from '../app.data';

@Component({
    selector: 'examples-grid',
    templateUrl: './examples-grid.component.html',
    styleUrls: ['./examples-grid.component.scss'],
    imports: [Select2, JsonPipe, TranslocoModule],
})
export class ExemplesGridComponent extends Examples {
    data34 = data2;
    data34b = data1;
    data35 = data35;
    data35b = data35b;

    value34 = '';
    value34b = '';
    value35 = '';
    value35b = '';
}
