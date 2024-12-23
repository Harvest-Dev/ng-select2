import { Directive, inject } from '@angular/core';

import {
    Select2,
    Select2AutoCreateEvent,
    Select2SearchEvent,
    Select2UpdateEvent,
    Select2UpdateValue,
} from 'projects/ng-select2-component/src/public_api';

import { ExamplesService } from './examples.service';

@Directive()
export class Examples {
    protected examplesService = inject(ExamplesService);

    overlay = false;
    styleMode: 'material' | 'noStyle' | 'borderless' | 'default' = 'default';

    constructor() {
        this.overlay = this.examplesService.overlay ?? false;
        this.styleMode = this.examplesService.styleMode;
        this.examplesService.updateOverlay.subscribe(overlay => (this.overlay = overlay));
        this.examplesService.updateStyleMode.subscribe(styleMode => (this.styleMode = styleMode));
    }

    open(key: string, event: Select2) {
        console.log(key, event);
    }

    close(key: string, event: Select2) {
        console.log(key, event);
    }

    focus(key: string, event: Select2) {
        console.log(key, event);
    }

    blur(key: string, event: Select2) {
        console.log(key, event);
    }

    change(key: string, event: Event) {
        console.log(key, event);
    }

    search(key: string, event: Select2SearchEvent) {
        console.log(key, event);
    }

    update(key: string, event: Select2UpdateEvent<any>) {
        console.log('update', key, event.component.id(), event.value);
        (this as any)[key] = event.value;
    }

    autoCreateItem(key: string, event: Select2AutoCreateEvent<Select2UpdateValue>) {
        console.log('autoCreateItem', key, event.component.id(), event.value);
    }
}
