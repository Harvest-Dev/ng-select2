import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Data } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data23, data24 } from '../app.data';

@Component({
    selector: 'examples-template',
    templateUrl: './examples-template.component.html',
    styleUrls: ['./examples-template.component.scss'],
    imports: [Select2, JsonPipe, TranslocoModule],
})
export class ExemplesTemplateComponent extends Examples {
    data23 = data23;
    data24 = data24;
    data25: Select2Data = JSON.parse(JSON.stringify(data23));

    value23 = '';
    value24 = '';
    value25 = '';
}
