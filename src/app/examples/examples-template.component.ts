import { JsonPipe } from '@angular/common';
import { Component, computed } from '@angular/core';

import { TranslocoModule } from '@jsverse/transloco';

import { Highlight } from 'ngx-highlightjs';
import { Select2, Select2Data, Select2HighlightPipe } from 'projects/ng-select2-component/src/public_api';

import { Examples } from './examples';

import { data23, data24 } from '../app.data';

@Component({
    selector: 'examples-template',
    templateUrl: './examples-template.component.html',
    styleUrls: ['./examples-template.component.scss'],
    standalone: true,
    imports: [Select2, JsonPipe, TranslocoModule, Select2HighlightPipe, Highlight],
})
export class ExemplesTemplateComponent extends Examples {
    data23 = data23;
    data24 = data24;
    data25: Select2Data = JSON.parse(JSON.stringify(data23));
    data26: Select2Data = JSON.parse(JSON.stringify(data23));

    value23 = '';
    value24 = '';
    value25 = '';
    value26 = '';

    exemple23 = computed(
        () =>
            `<ng-select2
    class="flower-list"${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    [templates]="template"
    [templateSelection]="templateSelection"
>
  <ng-template #template let-data="data">
    <strong>{{ data?.color }}</strong>: {{ data?.name }}
  </ng-template>
  <ng-template #templateSelection let-data="data">
    <strong>{{ data?.color }}</strong> ({{ data?.name }})
  </ng-template>
</ng-select2>`,
    );

    exemple24 = computed(
        () =>
            `<ng-select2
    class="flower-list"${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    [templates]="{ option: templateOption, group: templateGroup }"
>
  <ng-template #templateOption let-data="data">
    <strong>{{ data?.color }}</strong>: {{ data?.name }}
  </ng-template>
  <ng-template #templateGroup let-label="label">
    <strong>({{ label }})</strong>
  </ng-template>
</ng-select2>`,
    );

    exemple25 = computed(
        () =>
            `<ng-select2
    class="flower-list"${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    [templates]="{ template1: template1, template2: template2, template3: template3 }"
>
  <ng-template #template1 let-data="data">
    <span [style.background]="data?.color">{{ data?.name }}</span>
  </ng-template>
  <ng-template #template2 let-data="data">
    <strong>{{ data?.color }}</strong>: {{ data?.name }}
  </ng-template>
  <ng-template #template3 let-data="data">
    {{ data | json }}
  </ng-template>
</ng-select2>`,
    );

    exemple26 = computed(
        () =>
            `<ng-select2
    class="flower-list"${this.overlayExemple()}${this.styleModeExemple()}
    [data]="data"
    [value]="value"
    highlightText
    [templates]="template"
    [templateSelection]="templateSelection"
>
  <ng-template #template let-data="data" let-searchText="searchText" let-highlightText="highlightText">
    <strong>{{ data?.color }}</strong>: 
    <span [innerHTML]="data?.name | highlightText: searchText : !highlightText"></span>
  </ng-template>
  <ng-template #templateSelection let-data="data">
    <strong>{{ data?.color }}</strong> ({{ data?.name }})
  </ng-template>
</ng-select2>`,
    );
}
