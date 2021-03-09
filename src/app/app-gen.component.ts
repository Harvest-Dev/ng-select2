import { AfterContentInit, Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Json2html, Json2htmlAttr, Json2htmlRef } from 'json2html-lib';

import { data24 } from './app.data';

@Component({
    selector: 'app-root',
    templateUrl: './app-gen.component.html',
    styleUrls: ['./app-gen.component.scss']
})
export class AppGenComponent implements AfterContentInit {
    data = data24;

    html: string;

    ctrlForm: FormGroup;

    constructor(private fb: FormBuilder) {

        this.ctrlForm = this.fb.group({
            // data
            json: new FormControl(''),
            // tags
            label: new FormControl(),
            hint: new FormControl(),
            // parameters
            disabled: new FormControl(),
            minCharForSearch: new FormControl(),
            minCountForSearch: new FormControl(),
            displaySearchStatus: new FormControl(),
            placeholder: new FormControl(),
            customSearchEnabled: new FormControl(),
            multiple: new FormControl(),
            resettable: new FormControl(),
            limitSelection: new FormControl(),
            hideSelectedItems: new FormControl(),
            resultMaxHeight: new FormControl(),
            listPosition: new FormControl(),
            material: new FormControl(),
            noStyle: new FormControl(),
            // template
            template: new FormControl(),
            // event
            update: new FormControl(),
            open: new FormControl(),
            close: new FormControl(),
            focus: new FormControl(),
            blur: new FormControl(),
            search: new FormControl()
        });

        this.ctrlForm.valueChanges.subscribe(() => {
            const a = this.ctrlForm.value;
            console.log(a);
        });

        this.ctrlForm.valueChanges.subscribe(_ => this.codeGeneration());
    }

    ngAfterContentInit() {
        this.codeGeneration();
    }

    getTemplate(
        template: TemplateRef<any>,
        option: TemplateRef<any>, group: TemplateRef<any>,
        template1: TemplateRef<any>, template2: TemplateRef<any>
    ) {
        switch (this.ctrlForm.value.template) {
            case 'ref':
                return template;
            case 'option-group':
                return { option: option, group: group };
            case 'templateId':
                return { template1: template1, template2: template2 };
        }
    }

    _event(type: string, event: any) {
        if (this.ctrlForm.value && this.ctrlForm.value[type]) {
            console.log('Event', type, event);
        }
    }

    codeGeneration() {
        const json: Json2htmlRef = {
            tag: 'select2',
            attrs: {
                '[data]': 'data'
            },
            body: []
        };
        const value = this.ctrlForm.value;
        const attrs = json.attrs;
        const body = json.body as Json2htmlRef[];

        // tags

        if (value.label) {
            body.push({ tag: 'select2-label', body: value.label, inline: true });
        }
        if (value.hint) {
            body.push({ tag: 'select2-hint', body: value.hint, inline: true });
        }

        // parameters

        if (value.disabled) {
            attrs.disabled = this._testBoolean(value.disabled);
        }
        if (value.minCharForSearch) {
            attrs.minCharForSearch = value.minCharForSearch;
        }
        if (value.minCountForSearch) {
            attrs.minCountForSearch = value.minCountForSearch;
        }
        if (value.displaySearchStatus) {
            attrs.displaySearchStatus = value.displaySearchStatus;
        }
        if (value.placeholder) {
            attrs.placeholder = value.placeholder;
        }
        if (value.customSearchEnabled) {
            attrs.customSearchEnabled = this._testBoolean(value.customSearchEnabled);
        }
        if (value.multiple) {
            attrs.multiple = this._testBoolean(value.multiple);
        }
        if (value.resettable) {
            attrs.resettable = this._testBoolean(value.resettable);
        }
        if (value.limitSelection) {
            attrs.limitSelection = value.limitSelection;
        }
        if (value.hideSelectedItems) {
            attrs.hideSelectedItems = this._testBoolean(value.hideSelectedItems);
        }
        if (value.resultMaxHeight) {
            attrs.resultMaxHeight = value.resultMaxHeight;
        }
        if (value.listPosition) {
            attrs.listPosition = value.listPosition;
        }
        if (value.material) {
            attrs.material = this._testBoolean(value.material);
        }
        if (value.noStyle) {
            attrs.noStyle = this._testBoolean(value.noStyle);
        }

        // template

        switch (value.template) {
            case 'ref':
                attrs['[templates]'] = 'template';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#template': null, 'let-data': 'data' },
                    body: '<ng-container *ngIf="data?.color"> <strong>{{data?.color}}</strong>: </ng-container>{{data?.name}}'
                });
                break;
            case 'option-group':
                attrs['[templates]'] = '{option : option, group: group}';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#option': null, 'let-data': 'data' },
                    body: '{{data?.name}}'
                }, {
                    tag: 'ng-template',
                    attrs: { '#group': null, 'let-label': 'label' },
                    body: 'Group: {{label}}'
                });
                break;
            case 'templateId':
                attrs['[templates]'] = '{template1 : template1, template2: template2}';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#template1': null, 'let-data': 'data' },
                    body: '{{data?.name}}'
                }, {
                    tag: 'ng-template',
                    attrs: { '#template2': null, 'let-label': 'label', 'let-data': 'data' },
                    body: '{{label}} : {{data?.color}}'
                });
                break;
        }

        // event

        if (value.update) {
            attrs['(update)'] = '$event';
        }
        if (value.open) {
            attrs['(open)'] = '$event';
        }
        if (value.close) {
            attrs['(close)'] = '$event';
        }
        if (value.focus) {
            attrs['(focus)'] = '$event';
        }
        if (value.blur) {
            attrs['(blur)'] = '$event';
        }
        if (value.search) {
            attrs['(search)'] = '$event';
        }

        this.html = new Json2html(json).toString();
    }

    private _testBoolean(value: any) {
        return value ? null : undefined;
    }

}
