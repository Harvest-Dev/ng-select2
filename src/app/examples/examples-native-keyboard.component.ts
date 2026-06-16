import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { Examples } from './examples';

import { data1, data2 } from '../app.data';

@Component({
    selector: 'examples-native-keyboard',
    templateUrl: './examples-native-keyboard.component.html',
    styleUrls: ['./examples-native-keyboard.component.scss'],
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesNativeKeyboardComponent extends Examples {
    data1 = data1;
    data2 = data2;

    value1 = 'CA';
    value2 = 'CA';

    exemple2 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    nativeKeyboard: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple1 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    nativeKeyboard: null,
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );
}
