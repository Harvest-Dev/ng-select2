import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data2 } from '../app.data';

@Component({
    selector: 'examples-native-keyboard',
    templateUrl: './examples-native-keyboard.component.html',
    styleUrls: ['./examples-native-keyboard.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule],
})
export class ExemplesNativeKeyboardComponent extends Examples {
    data1 = data1;
    data2 = data2;

    value1 = 'CA';
    value2 = 'CA';
}
