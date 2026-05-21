import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2 } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data1, data2 } from '../app.data';

@Component({
    selector: 'examples-native-keyboard',
    templateUrl: './examples-native-keyboard.component.html',
    styleUrls: ['./examples-native-keyboard.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesNativeKeyboardComponent extends Examples {
    data1 = data1;
    data2 = data2;

    value1 = 'CA';
    value2 = 'CA';

    exemple2 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    nativeKeyboard
/>`,
    );

    exemple1 = computed(
        () =>
            `<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    nativeKeyboard
/>`,
    );
}
