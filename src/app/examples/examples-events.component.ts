import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@jsverse/transloco';

import {
    Select2,
    Select2AutoCreateEvent,
    Select2SearchEvent,
    Select2UpdateEvent,
    Select2UpdateValue,
} from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data8 } from '../app.data';

@Component({
    selector: 'examples-events',
    templateUrl: './examples-events.component.html',
    styleUrls: ['./examples-events.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, Select2, JsonPipe, TranslocoModule],
})
export class ExemplesEventsComponent extends Examples {
    data8 = data8;

    value8 = '';

    event: { key: string; type: string; event?: any }[] = [];

    override open(key: string, event: Select2) {
        super.open(key, event);
        this.event.push({ key, type: 'Select2', event: '[object: Select2]' });
        this.data8 = data8;
    }

    override close(key: string, event: Select2) {
        super.close(key, event);
        this.event.push({ key, type: 'Select2', event: '[object: Select2]' });
    }

    override focus(key: string, event: Select2) {
        super.focus(key, event);
        this.event.push({ key, type: 'Select2', event: '[object: Select2]' });
    }

    override blur(key: string, event: Select2) {
        super.blur(key, event);
        this.event.push({ key, type: 'Select2', event: '[object: Select2]' });
    }

    override search(key: string, event: Select2SearchEvent) {
        super.search(key, event);
        this.event.push({
            key,
            type: 'Select2SearchEvent',
            event: {
                component: '[object: Select2]',
                value: event.value,
                search: event.search,
                data: event.data,
                filteredData: null,
            },
        });
    }

    autoCreate(key: string, event: Select2AutoCreateEvent<Select2UpdateValue>) {
        this.event.push({
            key,
            type: 'Select2AutoCreateEvent<Select2UpdateValue>',
            event: {
                component: '[object: Select2]',
                value: event.value,
                options: event.options,
            },
        });
    }

    override update(key: string, event: Select2UpdateEvent<any>) {
        super.update(key, event);
        this.event.push({
            key,
            type: 'Select2UpdateEvent<any>',
            event: {
                component: '[object: Select2]',
                value: event.value,
                options: event.options,
            },
        });
        this.value8 = event.value;
    }
}
