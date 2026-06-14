import { Component } from '@angular/core';

import { Json2html } from '@ikilote/json2html';
import { TranslocoModule } from '@jsverse/transloco';

import { Select2 } from 'ng-select2-component';
import { Highlight } from 'ngx-highlightjs';

import { data1 } from './app.data';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html',
    styleUrls: ['./app-home.component.scss'],
    standalone: true,
    imports: [Select2, TranslocoModule, Highlight],
})
export class AppHomeComponent {
    data = data1;
    value: any = '';

    ts = `import { Select2 } from 'ng-select2-component';

@Component({
    selector: 'app-root',
    templateUrl: './app-root.component.html',
    styleUrls: ['./app-root.component.scss'],
    imports: [Select2],
})
export class AppRootComponent {
    data = : Select2Data = [
        { value: 'foo', label: 'foo' },
        { value: 'bar', label: 'bar' },
        { value: 'baz', label: 'baz' },
    ];
}
    `;

    html = new Json2html(
        {
            tag: 'ng-select2',
            attrs: { '[data]': 'data' },
        },
        { webComponentSelfClosing: true, attrPosition: 'prettier' },
    ).toString();

    tsNgOption = `import { Select2, Select2OptionDirective } from 'ng-select2-component';

@Component({
    selector: 'app-root',
    templateUrl: './app-root.component.html',
    styleUrls: ['./app-root.component.scss'],
    imports: [Select2, Select2OptionDirective],
})
export class AppRootComponent {
}
    `;

    htmlNgOption = new Json2html(
        {
            tag: 'ng-select2',
            body: [
                { tag: 'ng-option', attrs: { value: 'foo' }, body: 'Foo', inline: true },
                { tag: 'ng-option', attrs: { value: 'bar' }, body: 'Bar', inline: true },
                { tag: 'ng-option', attrs: { value: 'baz' }, body: 'Baz', inline: true },
            ],
        },
        { webComponentSelfClosing: true, attrPosition: 'prettier' },
    ).toString();
}
