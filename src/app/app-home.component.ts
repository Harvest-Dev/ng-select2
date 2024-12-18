import { Component } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2 } from 'projects/ng-select2-component/src/public_api';

import { data1 } from './app.data';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html',
    styleUrls: ['./app-home.component.scss'],
    imports: [Select2, TranslocoModule, Highlight],
})
export class AppHomeComponent {
    data = data1;

    ts = `import { Select2 } from 'ng-select2-component';

@Component({
    selector: 'app-root',
    templateUrl: './app-root.component.html',
    styleUrls: ['./app-root.component.scss'],
    imports: [Select2],
})
export class AppHomeComponent {
    data = : Select2Data = [
        { value: 'foo', label: 'foo' },
        { value: 'bar', label: 'bar' },
        { value: 'baz', label: 'baz' },
    ];
}
    `;
    html = `<select2 [data]="data"></select2>`;
}
