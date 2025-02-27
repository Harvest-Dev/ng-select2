import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Select2, Select2ScrollEvent } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data26 } from '../app.data';

@Component({
    selector: 'examples-infinite-scroll',
    templateUrl: './examples-infinite-scroll.component.html',
    styleUrls: ['./examples-infinite-scroll.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule],
})
export class ExemplesInfiniteScrollComponent extends Examples {
    data26 = data26;

    value26 = '';

    scroll26(event: Select2ScrollEvent) {
        console.log('scroll26', event);
        if (event.way === 'down' && !event.search) {
            const l = this.data26.length;
            for (let i = 1 + l; i <= 50 + l; i++) {
                this.data26.push({ value: i, label: '>' + i });
            }
        }
    }
}
