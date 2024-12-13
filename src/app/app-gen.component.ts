import { AfterContentInit, Component, TemplateRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { Json2html, Json2htmlRef } from '@ikilote/json2html';
import * as Bowser from 'bowser';

import { Select2SelectionOverride } from 'projects/ng-select2-component/src/public_api';
import { data24 } from './app.data';

@Component({
    selector: 'app-root',
    templateUrl: './app-gen.component.html',
    styleUrls: ['./app-gen.component.scss'],
})
export class AppGenComponent implements AfterContentInit {
    data = data24;

    html = '';

    jsonError: string;

    ctrlForm: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder) {
        this.ctrlForm = this.fb.group({
            // data
            json: new UntypedFormControl(JSON.stringify(this.data, null, 2)),
            // tags
            label: new UntypedFormControl(),
            hint: new UntypedFormControl(),
            // parameters
            disabled: new UntypedFormControl(),
            readonly: new UntypedFormControl(),
            overlay: new UntypedFormControl(),
            minCharForSearch: new UntypedFormControl(),
            minCountForSearch: new UntypedFormControl(),
            displaySearchStatus: new UntypedFormControl(),
            placeholder: new UntypedFormControl(),
            multiple: new UntypedFormControl(),
            autoCreate: new UntypedFormControl(),
            resettable: new UntypedFormControl(),
            resetSelectedValue: new UntypedFormControl(),
            limitSelection: new UntypedFormControl(),
            hideSelectedItems: new UntypedFormControl(),
            resultMaxHeight: new UntypedFormControl(),
            listPosition: new UntypedFormControl(),
            infiniteScroll: new UntypedFormControl(),
            infiniteScrollDistance: new UntypedFormControl(),
            infiniteScrollThrottle: new UntypedFormControl(),
            styleMode: new UntypedFormControl(),
            noResultMessage: new UntypedFormControl(),
            maxResults: new UntypedFormControl(),
            maxResultsMessage: new UntypedFormControl(),
            grid: new UntypedFormControl(),
            selectionOverrideString: new UntypedFormControl(),
            selectionOverrideFunction: new UntypedFormControl(),
            selectionNoWrap: new UntypedFormControl(),
            showSelectAll: new UntypedFormControl(),
            removeAllText: new UntypedFormControl(),
            selectAllText: new UntypedFormControl(),
            // template
            template: new UntypedFormControl(),
            templateSelection: new UntypedFormControl(),
            noLabelTemplate: new UntypedFormControl(),
            // event
            update: new UntypedFormControl(),
            open: new UntypedFormControl(),
            close: new UntypedFormControl(),
            focus: new UntypedFormControl(),
            blur: new UntypedFormControl(),
            search: new UntypedFormControl(),
            scroll: new UntypedFormControl(),
            removeOption: new UntypedFormControl(),
        });

        this.ctrlForm.valueChanges.subscribe(() => {
            const a = this.ctrlForm.value;
            console.log(a);
        });

        this.ctrlForm.valueChanges.subscribe(_ => this.codeGeneration());
        this.ctrlForm.get('json').valueChanges.subscribe(value => this.changeJson(value));
    }

    ngAfterContentInit() {
        this.codeGeneration();
    }

    selectionOverride: Select2SelectionOverride = params => {
        return `Selection (${params.size}${params.options.length > 0 ? ': ' + params.options.map(e => e.label).join(', ') : ''}) `;
    };

    getTemplate(
        template: TemplateRef<any>,
        option: TemplateRef<any>,
        group: TemplateRef<any>,
        template1: TemplateRef<any>,
        template2: TemplateRef<any>,
        optionSelection: TemplateRef<any>,
        template2Selection: TemplateRef<any>,
        template3Selection: TemplateRef<any>,
    ) {
        switch (this.ctrlForm.value.template) {
            case 'ref':
                if (this.ctrlForm.value.templateSelection === 'option') {
                    return { template: template, optionSelection: optionSelection };
                } else if (this.ctrlForm.value.templateSelection === 'templateId') {
                    return {
                        template: template,
                        template2Selection: template2Selection,
                        template3Selection: template3Selection,
                    };
                } else {
                    return template;
                }
            case 'option-group':
                if (this.ctrlForm.value.templateSelection === 'option') {
                    return { option: option, group: group, optionSelection: optionSelection };
                } else if (this.ctrlForm.value.templateSelection === 'templateId') {
                    return {
                        option: option,
                        group: group,
                        template2Selection: template2Selection,
                        template3Selection: template3Selection,
                    };
                } else {
                    return { option: option, group: group };
                }
            case 'templateId':
                if (this.ctrlForm.value.templateSelection === 'option') {
                    return { template1: template1, template2: template2, optionSelection: optionSelection };
                } else if (this.ctrlForm.value.templateSelection === 'templateId') {
                    return {
                        template1: template1,
                        template2: template2,
                        template2Selection: template2Selection,
                        template3Selection: template3Selection,
                    };
                } else {
                    return { template1: template1, template2: template2 };
                }
            default:
                if (this.ctrlForm.value.templateSelection === 'option') {
                    return { optionSelection: optionSelection };
                } else if (this.ctrlForm.value.templateSelection === 'templateId') {
                    return { template2Selection: template2Selection, template3Selection: template3Selection };
                }
        }
        return undefined;
    }

    getTemplateSelection(template: TemplateRef<any>) {
        switch (this.ctrlForm.value.templateSelection) {
            case 'ref':
                return template;
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
                '[data]': 'data',
            },
            body: [],
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
        if (value.readonly) {
            attrs.readonly = this._testBoolean(value.readonly);
        }
        if (value.overlay) {
            attrs.overlay = this._testBoolean(value.overlay);
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
        if (value.search) {
            attrs.customSearchEnabled = this._testBoolean(value.search);
        }
        if (value.multiple) {
            attrs.multiple = this._testBoolean(value.multiple);
        } else {
            if (value.resettable) {
                attrs.resettable = this._testBoolean(value.resettable);
            }
            if (value.resetSelectedValue) {
                attrs.resetSelectedValue = value.resetSelectedValue;
            }
        }
        if (value.autoCreate) {
            attrs.autoCreate = this._testBoolean(value.autoCreate);
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
        if (value.infiniteScroll) {
            attrs.infiniteScroll = this._testBoolean(value.infiniteScroll);
        }
        if (value.infiniteScrollDistance) {
            attrs.infiniteScrollDistance = value.infiniteScrollDistance;
        }
        if (value.infiniteScrollThrottle) {
            attrs.infiniteScrollThrottle = value.infiniteScrollThrottle;
        }
        if (value.grid) {
            attrs.grid = value.grid;
        }
        if (value.styleMode) {
            attrs.styleMode = value.styleMode;
        }
        if (value.noResultMessage) {
            attrs.noResultMessage = value.noResultMessage;
        }
        if (value.maxResultsMessage) {
            attrs.maxResultsMessage = value.maxResultsMessage;
        }
        if (value.maxResults) {
            attrs.maxResults = value.maxResults;
        }
        if (value.noLabelTemplate) {
            attrs.noLabelTemplate = this._testBoolean(value.noLabelTemplate);
        }
        if (value.noLabelTemplate) {
            attrs.noLabelTemplate = this._testBoolean(value.noLabelTemplate);
        }
        if (value.selectionOverrideFunction) {
            attrs['[selectionOverride]'] = 'selectionOverride';
        } else if (value.selectionOverrideString) {
            attrs.selectionOverride = value.selectionOverrideString;
        }
        if (value.selectionNoWrap) {
            attrs.selectionNoWrap = this._testBoolean(value.selectionNoWrap);
        }
        if (value.showSelectAll) {
            attrs.showSelectAll = this._testBoolean(value.showSelectAll);

            if (value.removeAllText) {
                attrs.removeAllText = this._testBoolean(value.removeAllText);
            }
            if (value.removeAllText) {
                attrs.selectAllText = this._testBoolean(value.selectAllText);
            }
        }

        // template

        let templates: string = '';
        let templatesSelection: string = '';

        switch (value.template) {
            case 'ref':
                attrs['[templates]'] = 'template';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#template': null, 'let-data': 'data' },
                    body: `
        @if (data?.color) {
            <strong>{{ data?.color }}</strong>:
        }
        {{ data?.name }}`,
                });
                break;
            case 'option-group':
                templates += 'option: option, group: group';
                body.push(
                    {
                        tag: 'ng-template',
                        attrs: { '#option': null, 'let-data': 'data' },
                        body: 'Option: {{data?.name}}',
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#group': null, 'let-label': 'label' },
                        body: 'Group: {{label}}',
                    },
                );
                break;
            case 'templateId':
                templates += 'template1 : template1, template2: template2';
                body.push(
                    {
                        tag: 'ng-template',
                        attrs: { '#template1': null, 'let-data': 'data' },
                        body: '{{data?.name}}',
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#template2': null, 'let-label': 'label', 'let-data': 'data' },
                        body: '{{ label }} ~ <strong>{{ data?.color }}</strong>',
                    },
                );
                break;
        }

        switch (value.templateSelection) {
            case 'ref':
                attrs['[templateSelection]'] = 'templateSelection';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#templateSelection': null, 'let-label': 'label' },
                    body: `
        @if (data?.color) {
            <em>{{ data?.color }}</em>
        }
        #{{ data?.name }}`,
                });
                break;
            case 'option':
                templatesSelection += 'optionSelection : optionSelection';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#optionSelection': null, 'let-data': 'data' },
                    body: '[{{ data?.name }}]',
                });
                break;
            case 'templateId':
                templatesSelection += 'template2Selection : template2Selection, template3Selection: template3Selection';
                body.push(
                    {
                        tag: 'ng-template',
                        attrs: { '#template2Selection': null, 'let-data': 'data' },
                        body: '{{ label }} * <em>{{ data?.color }}</em>',
                    },
                    {
                        tag: 'ng-template',
                        attrs: { '#template3Selection': null, 'let-data': 'data' },
                        body: '{{ label }} = <em>{{ data?.color }}</em>',
                    },
                );
                break;
        }

        if (attrs['[templates]'] && templatesSelection) {
            attrs['[templates]'] = `{template: template, ${templatesSelection}}`;
        } else if (templatesSelection && templates) {
            attrs['[templates]'] = `{${templates}, ${templatesSelection}}`;
        } else if (templates) {
            attrs['[templates]'] = `{${templates}}`;
        } else if (templatesSelection) {
            attrs['[templates]'] = `{${templatesSelection}}`;
        }

        // event

        if (value.update) {
            attrs['(update)'] = '_update($event)';
        }
        if (value.open) {
            attrs['(open)'] = '_open($event)';
        }
        if (value.close) {
            attrs['(close)'] = '_close($event)';
        }
        if (value.focus) {
            attrs['(focus)'] = '_focus($event)';
        }
        if (value.blur) {
            attrs['(blur)'] = '_blur($event)';
        }
        if (value.search) {
            attrs['(search)'] = '_search($event)';
        }

        this.html = new Json2html(json).toString();
    }

    changeJson(value: string): void {
        this.jsonError = '';
        try {
            this.data = JSON.parse(value);
        } catch (error) {
            this.jsonError = this._parseJsonError(value, error);
        }
    }

    private _parseJsonError(value: string, error: Error): string {
        let returnMessage = '';

        const message = error.message.match(/[^\n]+/)[0];

        const browser = Bowser.getParser(window.navigator.userAgent).getResult();

        if (browser.browser.name === 'Chrome') {
            if (message.match(/at position/)) {
                const position = parseInt(message.match(/at position (\d+)/)[1], 10);
                const lines = value.split(/\n/);
                let l = 1;
                for (const line of lines) {
                    if (line) {
                        if (l + line.length >= position) {
                            returnMessage =
                                message + '<br><pre>' + line + '\n' + ' '.repeat(position - l + 1) + '^</pre>';
                            break;
                        }
                        l += line.length + 1;
                    }
                }
            } else {
                returnMessage = message;
            }
        } else if (browser.browser.name === 'Firefox') {
            if (message.match(/at line/)) {
                const [, line, column] = message.match(/at line (\d+) column (\d+)/);
                const lines = value.split(/\n/);
                if (lines[+line - 1]) {
                    returnMessage =
                        message + '<br><pre>' + lines[+line - 1] + '\n' + ' '.repeat(+column - 1) + '^</pre>';
                } else {
                    returnMessage = message;
                }
            } else {
                returnMessage = message;
            }
        } else {
            returnMessage = message;
        }

        return returnMessage;
    }

    private _testBoolean(value: any) {
        return value ? null : undefined;
    }
}
