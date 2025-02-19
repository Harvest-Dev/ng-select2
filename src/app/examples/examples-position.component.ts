import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data2, data19 } from '../app.data';

@Component({
    selector: 'examples-position',
    templateUrl: './examples-position.component.html',
    styleUrls: ['./examples-position.component.scss'],
    standalone: true,
    imports: [Select2, TranslocoModule],
})
export class ExemplesPositionComponent extends Examples {
    data2 = data2;
    data19 = data19;

    value19 = '';
    value2 = '';
}
