import { Directive, inject } from '@angular/core';

import { Json2htmlAttr } from '@ikilote/json2html';

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
        this.updateOverlay();
        this.updateStyleMode();
        this.examplesService.updateOverlay.subscribe(overlay => this.updateOverlay(overlay));
        this.examplesService.updateStyleMode.subscribe(styleMode => this.updateStyleMode(styleMode));
    }

    updateOverlay(overlay?: boolean) {
        this.overlay = overlay ?? this.examplesService.overlay ?? false;
    }

    updateStyleMode(styleMode?: 'material' | 'noStyle' | 'borderless' | 'default') {
        this.styleMode = styleMode ?? this.examplesService.styleMode;
    }

    overlayExempleJson(): Json2htmlAttr {
        return this.overlay ? { overlay: null } : {};
    }

    styleModeExempleJson(): Json2htmlAttr {
        return this.styleMode !== 'default' ? { styleMode: this.styleMode } : {};
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
