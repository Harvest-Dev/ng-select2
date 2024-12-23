import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExamplesService {
    overlay: boolean = false;
    styleMode: 'material' | 'noStyle' | 'borderless' | 'default' = 'default';

    readonly updateOverlay = new Subject<boolean>();
    readonly updateStyleMode = new Subject<'material' | 'noStyle' | 'borderless' | 'default'>();

    changeOverlay(overlay: boolean) {
        this.updateOverlay.next(overlay);
        this.overlay = overlay;
    }

    changeStyleMode(styleMode: string) {
        this.updateStyleMode.next(styleMode as 'material' | 'noStyle' | 'borderless' | 'default');
        this.styleMode = styleMode as 'material' | 'noStyle' | 'borderless' | 'default';
    }
}
