import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Label } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data3 } from '../app.data';

@Component({
    selector: 'examples-wai',
    templateUrl: './examples-wai.component.html',
    styleUrls: ['./examples-wai.component.scss'],
    standalone: true,
    imports: [Select2, Select2Label, TranslocoModule],
})
export class ExemplesWaiComponent extends Examples {
    data3 = data3;
}
