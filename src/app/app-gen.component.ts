import { AfterContentInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Json2html, Json2htmlAttr, Json2htmlRef } from 'json2html-lib';

import { data1 } from './app.data';

@Component({
    selector: 'app-root',
    templateUrl: './app-gen.component.html',
    styleUrls: ['./app-gen.component.scss']
})
export class AppGenComponent implements AfterContentInit {
    data = data1;

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

        // tags

        if (value.label) {
            (json.body as Json2htmlRef[]).push({ tag: 'select2-label', body: value.label, inline: true });
        }
        if (value.hint) {
            (json.body as Json2htmlRef[]).push({ tag: 'select2-hint', body: value.hint, inline: true });
        }

        // parameters

        if (value.disabled) {
            json.attrs.disabled = this._testBoolean(value.disabled);
        }
        if (value.minCharForSearch) {
            json.attrs.minCharForSearch = value.minCharForSearch;
        }
        if (value.minCountForSearch) {
            json.attrs.minCountForSearch = value.minCountForSearch;
        }
        if (value.displaySearchStatus) {
            json.attrs.displaySearchStatus = value.displaySearchStatus;
        }
        if (value.placeholder) {
            json.attrs.placeholder = value.placeholder;
        }
        if (value.customSearchEnabled) {
            json.attrs.customSearchEnabled = this._testBoolean(value.customSearchEnabled);
        }
        if (value.multiple) {
            json.attrs.multiple = this._testBoolean(value.multiple);
        }
        if (value.resettable) {
            json.attrs.resettable = this._testBoolean(value.resettable);
        }
        if (value.limitSelection) {
            json.attrs.limitSelection = value.limitSelection;
        }
        if (value.hideSelectedItems) {
            json.attrs.hideSelectedItems = this._testBoolean(value.hideSelectedItems);
        }
        if (value.resultMaxHeight) {
            json.attrs.resultMaxHeight = value.resultMaxHeight;
        }
        if (value.listPosition) {
            json.attrs.listPosition = value.listPosition;
        }
        if (value.material) {
            json.attrs.material = this._testBoolean(value.material);
        }
        if (value.noStyle) {
            json.attrs.noStyle = this._testBoolean(value.noStyle);
        }

        // event

        if (value.update) {
            json.attrs['(update)'] = '$event';
        }
        if (value.open) {
            json.attrs['(open)'] = '$event';
        }
        if (value.close) {
            json.attrs['(close)'] = '$event';
        }
        if (value.focus) {
            json.attrs['(focus)'] = '$event';
        }
        if (value.blur) {
            json.attrs['(blur)'] = '$event';
        }
        if (value.search) {
            json.attrs['(search)'] = '$event';
        }

        this.html = new Json2html(json).toString();
    }

    private _testBoolean(value: any) {
        return value ? null : undefined;
    }

}
