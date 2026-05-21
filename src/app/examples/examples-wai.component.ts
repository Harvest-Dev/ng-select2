import { Component, computed } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Label } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data3 } from '../app.data';

@Component({
    selector: 'examples-wai',
    templateUrl: './examples-wai.component.html',
    styleUrls: ['./examples-wai.component.scss'],
    standalone: true,
    imports: [Select2, Select2Label, TranslocoModule, Highlight],
})
export class ExemplesWaiComponent extends Examples {
    data3 = data3;

    exempleWai = computed(
        () =>
            `<ng-select2${this.overlayExemple()}
    [data]="data"
    title="title"
>
  <ng-select2-label>Label</ng-select2-label>
</ng-select2>

<div id="custom-label">External label</div>
<div id="description">External description</div>
<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    title="title"
    ariaLabelledby="custom-label"
    ariaDescribedby="description"
/>

<ng-select2${this.overlayExemple()}
    [data]="data"
    ariaInvalid
>
  <ng-select2-label>Invalid field</ng-select2-label>
</ng-select2>

<ng-select2${this.overlayExemple()}
    [data]="data"
    required
>
  <ng-select2-label>Required field</ng-select2-label>
</ng-select2>

<ng-select2${this.overlayExemple()}
    [data]="data"
    readonly
    value="foo"
>
  <ng-select2-label>Readonly field</ng-select2-label>
</ng-select2>

<ng-select2${this.overlayExemple()}
    [data]="data"
    disabled
    value="foo"
>
  <ng-select2-label>Disabled field</ng-select2-label>
</ng-select2>

<ng-select2${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    resettable
    value="foo"
    ariaResetButtonDescription="Clear the field"
>
  <ng-select2-label>Resettable field</ng-select2-label>
</ng-select2>`,
    );
}
