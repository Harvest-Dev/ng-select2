import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2Hint, Select2Label } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data2 } from '../app.data';

@Component({
    selector: 'examples-tags',
    templateUrl: './examples-tags.component.html',
    styleUrls: ['./examples-tags.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, Select2, Select2Label, Select2Hint, JsonPipe, TranslocoModule],
})
export class ExemplesTagsComponent extends Examples {
    data15 = data2;
    data16 = data2;
    data16b = data2;

    value15 = '';
    value16 = '';
    value16b = '';
}
