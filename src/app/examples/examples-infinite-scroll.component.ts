import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2ScrollEvent } from 'ng-select2-component';

import { Examples } from './examples';

import { data26 } from '../app.data';

@Component({
    selector: 'examples-infinite-scroll',
    templateUrl: './examples-infinite-scroll.component.html',
    styleUrls: ['./examples-infinite-scroll.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule, Highlight],
})
export class ExemplesInfiniteScrollComponent extends Examples {
    data26 = data26;

    value26 = '';

    exemple26 = computed(() =>
        new Json2html(
            {
                tag: 'ng-select2',
                attrs: {
                    ...this.overlayExempleJson(),
                    ...this.styleModeExempleJson(),
                    '[data]': 'data',
                    '[value]': 'value',
                    infiniteScroll: null,
                    infiniteScrollDistance: '1.5',
                    infiniteScrollThrottle: '150',
                    '(scroll)': 'scroll($event)',
                },
            },
            { webComponentSelfClosing: true, attrPosition: 'prettier' },
        ).toString(),
    );

    exemple26ts = `scroll(event: Select2ScrollEvent) {
     if (event.way === 'down' && !event.search) {
        const l = this.data.length;
        for (let i = 1 + l; i <= 50 + l; i++) {
            this.data.push({ value: i, label: '>' + i });
        }
    }
}`;

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
