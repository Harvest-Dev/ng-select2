import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data17, data22 } from '../app.data';

@Component({
    selector: 'examples-style',
    templateUrl: './examples-style.component.html',
    styleUrls: ['./examples-style.component.scss'],
    imports: [TranslocoModule, Select2, JsonPipe],
})
export class ExamplesStyleComponent extends Examples {
    data17 = data17;
    data22 = data22;

    value17 = '';
    value22 = '';
}
