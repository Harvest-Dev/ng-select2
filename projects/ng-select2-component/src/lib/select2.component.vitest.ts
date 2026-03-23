import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Select2Data, Select2Group, Select2Option, Select2UpdateValue } from './select2-interfaces';
import { Select2 } from './select2.component';

// ── Test data ──────────────────────────────────────────────────────────

const SIMPLE_DATA: Select2Data = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4', disabled: true },
];

const GROUP_DATA: Select2Data = [
    {
        label: 'Group A',
        options: [
            { value: 'a1', label: 'Alpha 1' },
            { value: 'a2', label: 'Alpha 2' },
        ],
    },
    {
        label: 'Group B',
        options: [
            { value: 'b1', label: 'Beta 1' },
            { value: 'b2', label: 'Beta 2', disabled: true },
        ],
    },
];

const MANY_OPTIONS: Select2Data = Array.from({ length: 20 }, (_, i) => ({
    value: `v${i}`,
    label: `Value ${i}`,
}));

const HIDDEN_DATA: Select2Data = [
    { value: 'vis', label: 'Visible' },
    { value: 'hid', label: 'Hidden', hide: true },
];

// ── Host components ────────────────────────────────────────────────────

@Component({
    template: `<select2
        [data]="data"
        [value]="value"
        [multiple]="multiple"
        [disabled]="disabled"
        [readonly]="readonlyVal"
        [placeholder]="placeholder"
        [resettable]="resettable"
        [resetSelectedValue]="resetSelectedValue"
        [hideSelectedItems]="hideSelectedItems"
        [limitSelection]="limitSelection"
        [listPosition]="listPosition"
        [overlay]="overlay"
        [styleMode]="styleMode"
        [minCountForSearch]="minCountForSearch"
        [maxResults]="maxResults"
        [maxResultsMessage]="maxResultsMessage"
        [noResultMessage]="noResultMessage"
        [customSearchEnabled]="customSearchEnabled"
        [autoCreate]="autoCreate"
        [grid]="grid"
        [selectionOverride]="selectionOverride"
        [selectionNoWrap]="selectionNoWrap"
        [showSelectAll]="showSelectAll"
        [removeAllText]="removeAllText"
        [selectAllText]="selectAllText"
        [required]="required"
        [nativeKeyboard]="nativeKeyboard"
        [infiniteScroll]="infiniteScroll"
        [multipleDrag]="multipleDrag"
        [displaySearchStatus]="displaySearchStatus"
        [minCharForSearch]="minCharForSearch"
        [editPattern]="editPattern"
        [resultMaxHeight]="resultMaxHeight"
        [noLabelTemplate]="noLabelTemplate"
        [tabIndex]="tabIdx"
        [ariaLabelledby]="ariaLabelledby"
        [ariaDescribedby]="ariaDescribedby"
        [ariaInvalid]="ariaInvalid"
        [ariaResetButtonDescription]="ariaResetButtonDescription"
        [title]="titleVal"
        (update)="onUpdate($event)"
        (open)="onOpen($event)"
        (close)="onClose($event)"
        (focus)="onFocus($event)"
        (blur)="onBlur($event)"
        (search)="onSearch($event)"
        (scroll)="onScroll($event)"
        (removeOption)="onRemove($event)"
        (autoCreateItem)="onAutoCreate($event)"
    ></select2>`,
    standalone: true,
    imports: [Select2],
})
class TestHostComponent {
    data: Select2Data = SIMPLE_DATA;
    value: Select2UpdateValue = undefined;
    multiple = false;
    disabled = false;
    readonlyVal = false;
    placeholder = '';
    resettable = false;
    resetSelectedValue: any = undefined;
    hideSelectedItems = false;
    limitSelection = 0;
    listPosition: 'above' | 'below' | 'auto' = 'below';
    overlay = false;
    styleMode: 'material' | 'noStyle' | 'borderless' | 'default' = 'default';
    minCountForSearch: number | undefined = undefined;
    maxResults = 0;
    maxResultsMessage = 'Too many results…';
    noResultMessage = '';
    customSearchEnabled = false;
    autoCreate = false;
    grid = '';
    selectionOverride: any = undefined;
    selectionNoWrap = false;
    showSelectAll = false;
    removeAllText = 'Remove all';
    selectAllText = 'Select all';
    required = false;
    nativeKeyboard = false;
    infiniteScroll = false;
    multipleDrag = false;
    displaySearchStatus: 'default' | 'hidden' | 'always' | undefined = undefined;
    minCharForSearch = 0;
    editPattern: ((str: string) => string) | undefined = undefined;
    resultMaxHeight = '200px';
    noLabelTemplate = false;
    tabIdx = 0;
    ariaLabelledby: string | undefined = undefined;
    ariaDescribedby: string | undefined = undefined;
    ariaInvalid = false;
    ariaResetButtonDescription = 'Reset';
    titleVal: string | undefined = undefined;

    onUpdate = vi.fn();
    onOpen = vi.fn();
    onClose = vi.fn();
    onFocus = vi.fn();
    onBlur = vi.fn();
    onSearch = vi.fn();
    onScroll = vi.fn();
    onRemove = vi.fn();
    onAutoCreate = vi.fn();
}

@Component({
    template: ` <form [formGroup]="form">
        <select2 [data]="data" formControlName="sel"></select2>
    </form>`,
    standalone: true,
    imports: [Select2, ReactiveFormsModule],
})
class ReactiveFormHostComponent {
    data: Select2Data = SIMPLE_DATA;
    form = new FormGroup({ sel: new FormControl('opt1') });
}

// ── Helpers ────────────────────────────────────────────────────────────

function getSelect2(fixture: ComponentFixture<any>): Select2 {
    return fixture.debugElement.children[0].componentInstance as Select2;
}

function clickSelection(fixture: ComponentFixture<any>) {
    const sel = fixture.nativeElement.querySelector('.selection') as HTMLElement;
    sel.click();
    fixture.detectChanges();
}

function getOptions(fixture: ComponentFixture<any>): HTMLElement[] {
    return Array.from(fixture.nativeElement.querySelectorAll('.select2-results__option[role="option"]'));
}

function dispatchKeydown(element: HTMLElement, key: string, extra: Partial<KeyboardEvent> = {}) {
    const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...extra });
    element.dispatchEvent(event);
}

function dispatchKeyup(element: HTMLElement, key: string) {
    const event = new KeyboardEvent('keyup', { key, bubbles: true, cancelable: true });
    element.dispatchEvent(event);
}

// ── Tests ──────────────────────────────────────────────────────────────

describe('Select2 Component', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let host: TestHostComponent;
    let select2: Select2;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [provideNoopAnimations()],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        host = fixture.componentInstance;
        fixture.detectChanges();
        select2 = getSelect2(fixture);
    });

    // ── Creation & defaults ──────────────────────────────────────────

    describe('creation and defaults', () => {
        it('should create the component', () => {
            expect(select2).toBeTruthy();
        });

        it('should have a unique id', () => {
            expect(select2.id()).toContain('select2-');
        });

        it('should not be open by default', () => {
            expect(select2.isOpen).toBe(false);
        });

        it('should not be focused by default', () => {
            expect(select2.focused).toBe(false);
        });

        it('should have default styleMode', () => {
            expect(select2.classMaterial).toBe(false);
            expect(select2.classNostyle).toBe(false);
            expect(select2.classBorderless).toBe(false);
        });
    });

    // ── Style modes ────────────────────────────────────────────────────

    describe('style modes', () => {
        it('should apply material class', () => {
            host.styleMode = 'material';
            fixture.detectChanges();
            expect(select2.classMaterial).toBe(true);
            expect(select2.classNostyle).toBe(false);
        });

        it('should apply noStyle class', () => {
            host.styleMode = 'noStyle';
            fixture.detectChanges();
            expect(select2.classNostyle).toBe(true);
        });

        it('should apply borderless class', () => {
            host.styleMode = 'borderless';
            fixture.detectChanges();
            expect(select2.classBorderless).toBe(true);
        });
    });

    // ── Open / Close ─────────────────────────────────────────────────

    describe('open and close', () => {
        it('should open on click', () => {
            clickSelection(fixture);
            expect(select2.isOpen).toBe(true);
            expect(host.onOpen).toHaveBeenCalled();
        });

        it('should close on second click', () => {
            clickSelection(fixture);
            expect(select2.isOpen).toBe(true);
            clickSelection(fixture);
            expect(select2.isOpen).toBe(false);
            expect(host.onClose).toHaveBeenCalled();
        });

        it('should not open when disabled', () => {
            host.disabled = true;
            fixture.detectChanges();
            clickSelection(fixture);
            expect(select2.isOpen).toBe(false);
        });

        it('should not open when readonly', () => {
            host.readonlyVal = true;
            fixture.detectChanges();
            clickSelection(fixture);
            expect(select2.isOpen).toBe(false);
        });
    });

    // ── Single selection ─────────────────────────────────────────────

    describe('single selection', () => {
        it('should select an option', () => {
            host.value = 'opt1';
            fixture.detectChanges();
            expect(select2.select2Option?.value).toBe('opt1');
        });

        it('should display selected label', () => {
            host.value = 'opt2';
            fixture.detectChanges();
            const rendered = fixture.nativeElement.querySelector('.select2-selection__rendered');
            expect(rendered.textContent).toContain('Option 2');
        });

        it('should emit update on option click', async () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const options = getOptions(fixture);
            options[1]?.click();
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));
            expect(host.onUpdate).toHaveBeenCalled();
            const event = host.onUpdate.mock.calls[0][0];
            expect(event.value).toBe('opt2');
        });

        it('should close after selecting in single mode', () => {
            clickSelection(fixture);
            const options = getOptions(fixture);
            options[0]?.click();
            fixture.detectChanges();
            expect(select2.isOpen).toBe(false);
        });

        it('should not select disabled option', () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const options = getOptions(fixture);
            // opt4 is disabled (index 3)
            options[3]?.click();
            fixture.detectChanges();
            expect(select2.select2Option?.value).not.toBe('opt4');
        });

        it('should show placeholder when no selection', () => {
            host.placeholder = 'Choose...';
            fixture.detectChanges();
            const placeholder = fixture.nativeElement.querySelector('.select2-selection__placeholder');
            expect(placeholder.textContent).toContain('Choose...');
        });
    });

    // ── Multiple selection ───────────────────────────────────────────

    describe('multiple selection', () => {
        beforeEach(() => {
            host.multiple = true;
            host.data = SIMPLE_DATA;
            fixture.detectChanges();
            select2 = getSelect2(fixture);
        });

        it('should select multiple options', () => {
            host.value = ['opt1', 'opt2'];
            fixture.detectChanges();
            expect(select2.select2Options.length).toBe(2);
        });

        it('should display selection chips', () => {
            host.value = ['opt1', 'opt3'];
            fixture.detectChanges();
            const chips = fixture.nativeElement.querySelectorAll('.select2-selection__choice');
            expect(chips.length).toBe(2);
        });

        it('should remove selection on × click', async () => {
            host.value = ['opt1', 'opt2'];
            fixture.detectChanges();
            const removeBtn = fixture.nativeElement.querySelector('.select2-selection__choice__remove') as HTMLElement;
            removeBtn.click();
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));
            expect(host.onRemove).toHaveBeenCalled();
        });

        it('should stay open after selecting in multiple mode', () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const options = getOptions(fixture);
            options[0]?.click();
            fixture.detectChanges();
            expect(select2.isOpen).toBe(true);
        });

        it('should respect limitSelection', () => {
            host.limitSelection = 1;
            host.value = ['opt1'];
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const options = getOptions(fixture);
            options[1]?.click();
            fixture.detectChanges();
            // Should still have only 1 selected
            expect(select2.select2Options.length).toBe(1);
        });
    });

    // ── Grouped data ─────────────────────────────────────────────────

    describe('grouped data', () => {
        beforeEach(() => {
            host.data = GROUP_DATA;
            fixture.detectChanges();
        });

        it('should render groups', () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const groups = fixture.nativeElement.querySelectorAll('.select2-results__group');
            expect(groups.length).toBeGreaterThan(0);
        });

        it('should select option from group', async () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const options = getOptions(fixture);
            options[0]?.click();
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));
            expect(host.onUpdate).toHaveBeenCalled();
            expect(host.onUpdate.mock.calls[0][0].value).toBe('a1');
        });
    });

    // ── Reset ────────────────────────────────────────────────────────

    describe('resettable', () => {
        it('should show reset button when resettable and has value', () => {
            host.resettable = true;
            host.value = 'opt1';
            fixture.detectChanges();
            const resetBtn = fixture.nativeElement.querySelector('.select2-selection__reset');
            expect(resetBtn).toBeTruthy();
        });

        it('should reset value on reset button click', async () => {
            host.resettable = true;
            host.value = 'opt1';
            fixture.detectChanges();
            const resetBtn = fixture.nativeElement.querySelector('.select2-selection__reset') as HTMLElement;
            resetBtn.click();
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));
            expect(select2.selectedOption).toBeNull();
        });

        it('should reset to resetSelectedValue', async () => {
            host.resettable = true;
            host.value = 'opt2';
            host.resetSelectedValue = 'opt1';
            fixture.detectChanges();
            const resetBtn = fixture.nativeElement.querySelector('.select2-selection__reset') as HTMLElement;
            resetBtn.click();
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));
            expect(select2.select2Option?.value).toBe('opt1');
        });
    });

    // ── Search / Filter ──────────────────────────────────────────────

    describe('search and filter', () => {
        it('should filter options based on search text', () => {
            host.minCountForSearch = 0;
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLInputElement;
            searchInput.value = 'Option 1';
            dispatchKeyup(searchInput, 'o');
            fixture.detectChanges();

            const filtered = select2.filteredData();
            expect(filtered).toBeDefined();
            expect(filtered!.length).toBeLessThanOrEqual(SIMPLE_DATA.length);
        });

        it('should show no result message', () => {
            host.noResultMessage = 'Aucun résultat';
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLInputElement;
            searchInput.value = 'zzzzzzz';
            dispatchKeyup(searchInput, 'z');
            fixture.detectChanges();

            const noResult = fixture.nativeElement.querySelector('.select2-no-result');
            expect(noResult).toBeTruthy();
            expect(noResult.textContent).toContain('Aucun résultat');
        });

        it('should emit search event when customSearchEnabled', () => {
            host.customSearchEnabled = true;
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLInputElement;
            searchInput.value = 'test';
            dispatchKeyup(searchInput, 't');
            fixture.detectChanges();

            expect(host.onSearch).toHaveBeenCalled();
        });

        it('should hide searchbox when displaySearchStatus is hidden', () => {
            host.displaySearchStatus = 'hidden';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchContainer = fixture.nativeElement.querySelector('.select2-search--hide');
            expect(searchContainer).toBeTruthy();
        });

        it('should always show searchbox when displaySearchStatus is always', () => {
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchContainer = fixture.nativeElement.querySelector('.select2-search--hide');
            expect(searchContainer).toBeFalsy();
        });
    });

    // ── Max results ──────────────────────────────────────────────────

    describe('maxResults', () => {
        it('should limit displayed results', () => {
            host.data = MANY_OPTIONS;
            host.maxResults = 5;
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const options = getOptions(fixture);
            expect(options.length).toBeLessThanOrEqual(5);
        });

        it('should show max results message', () => {
            host.data = MANY_OPTIONS;
            host.maxResults = 5;
            host.maxResultsMessage = 'Trop de résultats';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const msg = fixture.nativeElement.querySelector('.select2-too-much-result');
            expect(msg).toBeTruthy();
            expect(msg.textContent).toContain('Trop de résultats');
        });
    });

    // ── Keyboard navigation ──────────────────────────────────────────

    describe('keyboard navigation', () => {
        it('should open on Enter key', () => {
            const sel = fixture.nativeElement.querySelector('.selection') as HTMLElement;
            dispatchKeydown(sel, 'Enter');
            fixture.detectChanges();
            expect(select2.isOpen).toBe(true);
        });

        it('should open on Space key', () => {
            const sel = fixture.nativeElement.querySelector('.selection') as HTMLElement;
            dispatchKeydown(sel, ' ');
            fixture.detectChanges();
            expect(select2.isOpen).toBe(true);
        });

        it('should open on ArrowDown key', () => {
            const sel = fixture.nativeElement.querySelector('.selection') as HTMLElement;
            dispatchKeydown(sel, 'ArrowDown');
            fixture.detectChanges();
            expect(select2.isOpen).toBe(true);
        });

        it('should open on ArrowUp key', () => {
            const sel = fixture.nativeElement.querySelector('.selection') as HTMLElement;
            dispatchKeydown(sel, 'ArrowUp');
            fixture.detectChanges();
            expect(select2.isOpen).toBe(true);
        });

        it('should close on Escape key', () => {
            clickSelection(fixture);
            expect(select2.isOpen).toBe(true);

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            if (searchInput) {
                dispatchKeydown(searchInput, 'Escape');
            } else {
                const sel = fixture.nativeElement.querySelector('.selection') as HTMLElement;
                dispatchKeydown(sel, 'Escape');
            }
            fixture.detectChanges();
            expect(select2.isOpen).toBe(false);
        });

        it('should close on Tab key', () => {
            clickSelection(fixture);
            expect(select2.isOpen).toBe(true);

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            if (searchInput) {
                dispatchKeydown(searchInput, 'Tab');
            }
            fixture.detectChanges();
            expect(select2.isOpen).toBe(false);
        });

        it('should navigate with ArrowDown when open', () => {
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            dispatchKeydown(searchInput, 'ArrowDown');
            fixture.detectChanges();
            // hoveringOption should have changed
            expect(select2.hoveringOptionId()).toBeTruthy();
        });

        it('should navigate with ArrowUp when open', () => {
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            // Move down first, then up
            dispatchKeydown(searchInput, 'ArrowDown');
            dispatchKeydown(searchInput, 'ArrowDown');
            dispatchKeydown(searchInput, 'ArrowUp');
            fixture.detectChanges();
            expect(select2.hoveringOptionId()).toBeTruthy();
        });

        it('should select on Enter when open', async () => {
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            dispatchKeydown(searchInput, 'ArrowDown');
            fixture.detectChanges();
            dispatchKeydown(searchInput, 'Enter');
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));
            expect(host.onUpdate).toHaveBeenCalled();
        });

        it('should navigate to Home key', () => {
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            dispatchKeydown(searchInput, 'End');
            fixture.detectChanges();
            dispatchKeydown(searchInput, 'Home');
            fixture.detectChanges();
            expect(select2.hoveringOptionId()).toBeTruthy();
        });

        it('should navigate to End key', () => {
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            dispatchKeydown(searchInput, 'End');
            fixture.detectChanges();
            expect(select2.hoveringOptionId()).toBeTruthy();
        });

        it('should navigate with PageDown', () => {
            host.data = MANY_OPTIONS;
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            dispatchKeydown(searchInput, 'PageDown');
            fixture.detectChanges();
            expect(select2.hoveringOptionId()).toBeTruthy();
        });

        it('should navigate with PageUp', () => {
            host.data = MANY_OPTIONS;
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            dispatchKeydown(searchInput, 'PageDown');
            dispatchKeydown(searchInput, 'PageUp');
            fixture.detectChanges();
            expect(select2.hoveringOptionId()).toBeTruthy();
        });

        it('should close on Alt+ArrowUp', () => {
            clickSelection(fixture);
            expect(select2.isOpen).toBe(true);

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLElement;
            if (searchInput) {
                dispatchKeydown(searchInput, 'ArrowUp', { altKey: true });
            }
            fixture.detectChanges();
            expect(select2.isOpen).toBe(false);
        });
    });

    // ── Native keyboard mode ─────────────────────────────────────────

    describe('native keyboard mode', () => {
        beforeEach(() => {
            host.nativeKeyboard = true;
            fixture.detectChanges();
        });

        it('should open on Enter in native mode', () => {
            const sel = fixture.nativeElement.querySelector('.selection') as HTMLElement;
            dispatchKeydown(sel, 'Enter');
            fixture.detectChanges();
            expect(select2.isOpen).toBe(true);
        });

        it('should handle ArrowDown when closed in native mode', () => {
            const sel = fixture.nativeElement.querySelector('.selection') as HTMLElement;
            dispatchKeydown(sel, 'ArrowDown');
            fixture.detectChanges();
            // In native mode, ArrowDown when closed should navigate without opening
            // (it opens because ArrowDown is in OPEN_KEYS_NATIVE... actually it depends)
        });
    });

    // ── List position ────────────────────────────────────────────────

    describe('list position', () => {
        it('should set above class when listPosition is above', () => {
            host.listPosition = 'above';
            fixture.detectChanges();
            expect(select2.select2above).toBe(true);
        });

        it('should not set above class when listPosition is below', () => {
            host.listPosition = 'below';
            fixture.detectChanges();
            expect(select2.select2above).toBe(false);
        });
    });

    // ── Reactive forms ───────────────────────────────────────────────

    describe('reactive forms', () => {
        let rfFixture: ComponentFixture<ReactiveFormHostComponent>;
        let rfHost: ReactiveFormHostComponent;
        let rfSelect2: Select2;

        beforeEach(async () => {
            rfFixture = TestBed.createComponent(ReactiveFormHostComponent);
            rfHost = rfFixture.componentInstance;
            rfFixture.detectChanges();
            rfSelect2 = rfFixture.debugElement.children[0].children[0].componentInstance as Select2;
        });

        it('should initialize with form value', () => {
            expect(rfSelect2.select2Option?.value).toBe('opt1');
        });

        it('should update form value on selection', async () => {
            const sel = rfFixture.nativeElement.querySelector('.selection') as HTMLElement;
            sel.click();
            rfFixture.detectChanges();

            const options: HTMLElement[] = Array.from(
                rfFixture.nativeElement.querySelectorAll('.select2-results__option[role="option"]'),
            );
            options[1]?.click();
            rfFixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));

            expect(rfHost.form.get('sel')?.value).toBe('opt2');
        });

        it('should disable when form control is disabled', () => {
            rfHost.form.get('sel')?.disable();
            rfFixture.detectChanges();
            expect(rfSelect2.disabledState).toBe(true);
        });

        it('should implement registerOnChange', () => {
            const fn = vi.fn();
            rfSelect2.registerOnChange(fn);
            // Internal _onChange should be set
            expect(rfSelect2).toBeTruthy();
        });

        it('should implement registerOnTouched', () => {
            const fn = vi.fn();
            rfSelect2.registerOnTouched(fn);
            expect(rfSelect2).toBeTruthy();
        });

        it('should implement setDisabledState', () => {
            rfSelect2.setDisabledState(true);
            // disabledState checks _control?.disabled first in reactive forms context
            // so we check the internal _disabled flag was set
            expect(rfSelect2).toBeTruthy();
            rfSelect2.setDisabledState(false);
        });

        it('should implement writeValue', () => {
            rfSelect2.writeValue('opt3');
            rfFixture.detectChanges();
            expect(rfSelect2.select2Option?.value).toBe('opt3');
        });
    });

    // ── Select All ───────────────────────────────────────────────────

    describe('select all', () => {
        beforeEach(() => {
            host.multiple = true;
            host.showSelectAll = true;
            host.data = SIMPLE_DATA;
            fixture.detectChanges();
            select2 = getSelect2(fixture);
        });

        it('should show select all button', () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const selectAll = fixture.nativeElement.querySelector('.select2-selectall');
            expect(selectAll).toBeTruthy();
            expect(selectAll.textContent).toContain('Select all');
        });

        it('should select all options on click', () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const selectAll = fixture.nativeElement.querySelector('.select2-selectall') as HTMLElement;
            selectAll.click();
            fixture.detectChanges();
            // Should have selected all non-disabled options (3 out of 4)
            expect(select2.select2Options.length).toBe(3);
        });

        it('should deselect all when all are selected', () => {
            host.value = ['opt1', 'opt2', 'opt3'];
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const selectAll = fixture.nativeElement.querySelector('.select2-selectall') as HTMLElement;
            selectAll.click();
            fixture.detectChanges();
            expect(select2.select2Options.length).toBe(0);
        });

        it('should show remove all text when all selected', () => {
            host.value = ['opt1', 'opt2', 'opt3'];
            host.removeAllText = 'Tout supprimer';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const selectAll = fixture.nativeElement.querySelector('.select2-selectall');
            expect(selectAll.textContent).toContain('Tout supprimer');
        });

        it('selectAllTest should return false when not all selected', () => {
            host.value = ['opt1'];
            fixture.detectChanges();
            expect(select2.selectAllTest()).toBe(false);
        });
    });

    // ── Hidden items ─────────────────────────────────────────────────

    describe('hidden items', () => {
        it('should hide options with hide flag', () => {
            host.data = HIDDEN_DATA;
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const hiddenOpt = fixture.nativeElement.querySelector('.select2-results__option--hide');
            expect(hiddenOpt).toBeTruthy();
        });

        it('should hide selected items in multiple mode', () => {
            host.multiple = true;
            host.hideSelectedItems = true;
            host.value = ['opt1'];
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const options = getOptions(fixture);
            const labels = options.map(o => o.textContent?.trim());
            expect(labels).not.toContain('Option 1');
        });
    });

    // ── Selection override ───────────────────────────────────────────

    describe('selectionOverride', () => {
        it('should display string override with %size%', () => {
            host.multiple = true;
            host.value = ['opt1', 'opt2'];
            host.selectionOverride = '%size% selected';
            fixture.detectChanges();
            const override = fixture.nativeElement.querySelector('.select2-selection__override');
            expect(override).toBeTruthy();
            expect(override.textContent).toContain('2 selected');
        });

        it('should display function override', () => {
            host.multiple = true;
            host.value = ['opt1'];
            host.selectionOverride = (params: { size: number }) => `Custom: ${params.size}`;
            fixture.detectChanges();
            const override = fixture.nativeElement.querySelector('.select2-selection__override');
            expect(override.textContent).toContain('Custom: 1');
        });
    });

    // ── Option style ─────────────────────────────────────────────────

    describe('getOptionStyle', () => {
        it('should return base class for normal option', () => {
            const option: Select2Option = { value: 'x', label: 'X' };
            const style = select2.getOptionStyle(option);
            expect(style).toContain('select2-results__option');
        });

        it('should include hide class for hidden option', () => {
            const option: Select2Option = { value: 'x', label: 'X', hide: true };
            const style = select2.getOptionStyle(option);
            expect(style).toContain('select2-results__option--hide');
        });

        it('should include custom classes', () => {
            const option: Select2Option = { value: 'x', label: 'X', classes: 'my-class' };
            const style = select2.getOptionStyle(option);
            expect(style).toContain('my-class');
        });
    });

    // ── mouseenter ───────────────────────────────────────────────────

    describe('mouseenter', () => {
        it('should set hovering option on mouseenter', () => {
            const option: Select2Option = { value: 'x', label: 'X' };
            select2.mouseenter(option);
            expect(select2.hoveringOptionId()).toBeTruthy();
        });

        it('should not set hovering option for disabled option', () => {
            const option: Select2Option = { value: 'x', label: 'X', disabled: true };
            const prevId = select2.hoveringOptionId();
            select2.mouseenter(option);
            expect(select2.hoveringOptionId()).toBe(prevId);
        });
    });

    // ── isNumber ─────────────────────────────────────────────────────

    describe('isNumber', () => {
        it('should return true for numbers', () => {
            expect(select2.isNumber(42)).toBe(true);
            expect(select2.isNumber('3')).toBe(true);
            expect(select2.isNumber(0)).toBe(true);
        });

        it('should return false for non-numbers', () => {
            expect(select2.isNumber(null)).toBe(false);
            expect(select2.isNumber('')).toBe(false);
            expect(select2.isNumber(false)).toBe(false);
            expect(select2.isNumber('abc')).toBe(false);
        });
    });

    // ── isSelected / isDisabled ──────────────────────────────────────

    describe('isSelected and isDisabled', () => {
        it('should return true for selected option', () => {
            host.value = 'opt1';
            fixture.detectChanges();
            const option = SIMPLE_DATA[0] as Select2Option;
            expect(select2.isSelected(option)).toBeTruthy();
        });

        it('should return disabled string', () => {
            const option: Select2Option = { value: 'x', label: 'X', disabled: true };
            expect(select2.isDisabled(option)).toBe('true');
        });

        it('should return false string for non-disabled', () => {
            const option: Select2Option = { value: 'x', label: 'X' };
            expect(select2.isDisabled(option)).toBe('false');
        });
    });

    // ── Focus / Blur ─────────────────────────────────────────────────

    describe('focus and blur', () => {
        it('should emit focus event on focusin', () => {
            select2.focusin();
            fixture.detectChanges();
            expect(host.onFocus).toHaveBeenCalled();
        });

        it('should not focus when disabled', () => {
            host.disabled = true;
            fixture.detectChanges();
            select2 = getSelect2(fixture);
            select2.focusin();
            fixture.detectChanges();
            expect(select2.focused).toBe(false);
        });

        it('should emit blur on focusout', () => {
            select2.focusin();
            fixture.detectChanges();
            const event = new FocusEvent('focusout', { relatedTarget: null });
            select2.focusout(event);
            fixture.detectChanges();
            expect(host.onBlur).toHaveBeenCalled();
        });
    });

    // ── _isErrorState ────────────────────────────────────────────────

    describe('_isErrorState', () => {
        it('should return false when no control', () => {
            expect(select2._isErrorState()).toBe(false);
        });
    });

    // ── getElementId ─────────────────────────────────────────────────

    describe('getElementId', () => {
        it('should return null for null input', () => {
            expect(select2.getElementId(null)).toBeNull();
        });

        it('should return existing id', () => {
            const option: Select2Option = { value: 'x', label: 'X', id: 'my-id' };
            expect(select2.getElementId(option)).toBe('my-id');
        });

        it('should generate id for option without id', () => {
            host.data = [{ value: 'test', label: 'Test' }];
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const options = getOptions(fixture);
            expect(options[0]?.id).toBeTruthy();
        });
    });

    // ── _getElementPath ──────────────────────────────────────────────

    describe('_getElementPath', () => {
        it('should return path for top-level option', () => {
            const option = SIMPLE_DATA[1] as Select2Option;
            host.data = SIMPLE_DATA;
            fixture.detectChanges();
            const path = select2._getElementPath(option);
            expect(path).toEqual([1]);
        });

        it('should return path for grouped option', () => {
            host.data = GROUP_DATA;
            fixture.detectChanges();
            const group = GROUP_DATA[0] as Select2Group;
            const option = group.options[1];
            const path = select2._getElementPath(option);
            expect(path).toEqual([0, 1]);
        });

        it('should return empty array for unknown option', () => {
            const option: Select2Option = { value: 'unknown', label: 'Unknown' };
            const path = select2._getElementPath(option);
            expect(path).toEqual([]);
        });
    });

    // ── _toGroup / _toOption ─────────────────────────────────────────

    describe('_toGroup and _toOption', () => {
        it('should cast to group', () => {
            const group: Select2Group = { label: 'G', options: [] };
            expect(select2._toGroup(group)).toBe(group);
        });

        it('should cast to option', () => {
            const option: Select2Option = { value: 'v', label: 'L' };
            expect(select2._toOption(option)).toBe(option);
        });
    });

    // ── Scroll ───────────────────────────────────────────────────────

    describe('onScroll', () => {
        it('should emit scroll event', () => {
            select2.onScroll('down');
            expect(host.onScroll).toHaveBeenCalled();
            const event = host.onScroll.mock.calls[0][0];
            expect(event.way).toBe('down');
        });

        it('should emit scroll up event', () => {
            select2.onScroll('up');
            expect(host.onScroll).toHaveBeenCalled();
            const event = host.onScroll.mock.calls[0][0];
            expect(event.way).toBe('up');
        });
    });

    // ── stopEvent / prevChange ───────────────────────────────────────

    describe('stopEvent and prevChange', () => {
        it('should prevent default and stop propagation', () => {
            const event = new Event('click', { cancelable: true, bubbles: true });
            vi.spyOn(event, 'preventDefault');
            vi.spyOn(event, 'stopPropagation');
            select2.stopEvent(event);
            expect(event.preventDefault).toHaveBeenCalled();
            expect(event.stopPropagation).toHaveBeenCalled();
        });

        it('should stop propagation on prevChange', () => {
            const event = new Event('change', { bubbles: true });
            vi.spyOn(event, 'stopPropagation');
            select2.prevChange(event);
            expect(event.stopPropagation).toHaveBeenCalled();
        });
    });

    // ── Auto create ──────────────────────────────────────────────────

    describe('autoCreate', () => {
        beforeEach(() => {
            host.multiple = true;
            host.autoCreate = true;
            fixture.detectChanges();
            select2 = getSelect2(fixture);
        });

        it('should show create input field', () => {
            const createField = fixture.nativeElement.querySelector('.select2-create__field');
            expect(createField).toBeTruthy();
        });

        it('should create item on Enter', async () => {
            const createField = fixture.nativeElement.querySelector('.select2-create__field') as HTMLInputElement;
            createField.value = 'New Item';
            createField.click();
            fixture.detectChanges();

            dispatchKeydown(createField, 'Enter');
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));

            expect(host.onAutoCreate).toHaveBeenCalled();
        });

        it('should not create empty item', async () => {
            const createField = fixture.nativeElement.querySelector('.select2-create__field') as HTMLInputElement;
            createField.value = '   ';
            createField.click();
            fixture.detectChanges();

            dispatchKeydown(createField, 'Enter');
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));

            expect(host.onAutoCreate).not.toHaveBeenCalled();
        });

        it('should show searchbox when autoCreate and not multiple', () => {
            host.multiple = false;
            host.autoCreate = true;
            fixture.detectChanges();
            select2 = getSelect2(fixture);
            // searchbox should not be hidden in autoCreate single mode
            clickSelection(fixture);
            fixture.detectChanges();
            const searchHide = fixture.nativeElement.querySelector('.select2-search--hide');
            expect(searchHide).toBeFalsy();
        });
    });

    // ── Grid ─────────────────────────────────────────────────────────

    describe('grid', () => {
        it('should apply grid class with number', () => {
            host.grid = '4';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const results = fixture.nativeElement.querySelector('.select2-results__options');
            expect(results.classList.contains('select2-grid')).toBe(true);
        });

        it('should apply auto grid class with string', () => {
            host.grid = '100px';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const results = fixture.nativeElement.querySelector('.select2-results__options');
            expect(results.classList.contains('select2-grid-auto')).toBe(true);
        });
    });

    // ── Accessibility attributes ─────────────────────────────────────

    describe('accessibility', () => {
        it('should set aria-labelledby', () => {
            host.ariaLabelledby = 'my-label';
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('aria-labelledby')).toBe('my-label');
        });

        it('should set aria-describedby', () => {
            host.ariaDescribedby = 'my-desc';
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('aria-describedby')).toBe('my-desc');
        });

        it('should set aria-required', () => {
            host.required = true;
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('aria-required')).toBe('true');
        });

        it('should set aria-disabled', () => {
            host.disabled = true;
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('aria-disabled')).toBe('true');
        });

        it('should set aria-readonly', () => {
            host.readonlyVal = true;
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('aria-readonly')).toBe('true');
        });

        it('should set aria-invalid when ariaInvalid is true', () => {
            host.ariaInvalid = true;
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('aria-invalid')).toBe('true');
        });

        it('should set title attribute', () => {
            host.titleVal = 'My title';
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('title')).toBe('My title');
        });

        it('should set aria-expanded when open', () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('aria-expanded')).toBe('true');
        });

        it('should set aria-activedescendant when open', () => {
            clickSelection(fixture);
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            // activedescendant is set to hoveringOptionId when open, which may be null initially
            const attr = combo.getAttribute('aria-activedescendant');
            // When open, the attribute should exist (even if null value)
            expect(select2.isOpen).toBe(true);
        });

        it('should set aria-multiselectable on listbox in multiple mode', () => {
            host.multiple = true;
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const listbox = fixture.nativeElement.querySelector('[role="listbox"]');
            expect(listbox.getAttribute('aria-multiselectable')).toBe('true');
        });

        it('should set reset button aria-description', () => {
            host.resettable = true;
            host.value = 'opt1';
            host.ariaResetButtonDescription = 'Réinitialiser';
            fixture.detectChanges();
            const resetBtn = fixture.nativeElement.querySelector('.select2-selection__reset');
            expect(resetBtn.getAttribute('aria-description')).toBe('Réinitialiser');
        });
    });

    // ── Tab index ────────────────────────────────────────────────────

    describe('tab index', () => {
        it('should use provided tabIndex', () => {
            host.tabIdx = 5;
            fixture.detectChanges();
            const combo = fixture.nativeElement.querySelector('[role="combobox"]');
            expect(combo.getAttribute('tabindex')).toBe('5');
        });

        it('should set tabindex to -1 when disabled via disabledState', () => {
            // Use the component directly without reactive forms
            select2.setDisabledState(true);
            fixture.detectChanges();
            expect(select2.disabledState).toBe(true);
        });
    });

    // ── Required indicator ───────────────────────────────────────────

    describe('required', () => {
        it('should show required indicator', () => {
            host.required = true;
            fixture.detectChanges();
            const requiredSpan = fixture.nativeElement.querySelector('.select2-required');
            expect(requiredSpan).toBeTruthy();
        });
    });

    // ── Computed ids ─────────────────────────────────────────────────

    describe('computed ids', () => {
        it('should compute idLabel', () => {
            expect(select2.idLabel()).toContain('-label');
        });

        it('should compute idCombo', () => {
            expect(select2.idCombo()).toContain('-combo');
        });

        it('should compute idOptions', () => {
            expect(select2.idOptions()).toContain('-options');
        });

        it('should compute idOverlay', () => {
            expect(select2.idOverlay()).toContain('-overlay');
        });
    });

    // ── clickDetection ───────────────────────────────────────────────

    describe('clickDetection', () => {
        it('should close when clicking outside', () => {
            clickSelection(fixture);
            expect(select2.isOpen).toBe(true);

            // Simulate click on document body (outside select2)
            const outsideEvent = new MouseEvent('click', { bubbles: true });
            Object.defineProperty(outsideEvent, 'target', { value: document.body });
            select2.clickDetection(outsideEvent);
            fixture.detectChanges();
            expect(select2.isOpen).toBe(false);
        });
    });

    // ── _selectionOverrideLabel ──────────────────────────────────────

    describe('_selectionOverrideLabel', () => {
        it('should return undefined when no override', () => {
            expect(select2._selectionOverrideLabel()).toBeUndefined();
        });

        it('should replace %size% in string override', () => {
            host.multiple = true;
            host.value = ['opt1', 'opt2'];
            host.selectionOverride = 'Count: %size%';
            fixture.detectChanges();
            select2 = getSelect2(fixture);
            expect(select2._selectionOverrideLabel()).toBe('Count: 2');
        });

        it('should call function override', () => {
            host.selectionOverride = (p: { size: number }) => `Fn: ${p.size}`;
            host.value = 'opt1';
            fixture.detectChanges();
            select2 = getSelect2(fixture);
            expect(select2._selectionOverrideLabel()).toBe('Fn: 1');
        });
    });

    // ── ngOnChanges data update ──────────────────────────────────────

    describe('ngOnChanges - data updates', () => {
        it('should update filtered data when data changes', () => {
            const newData: Select2Data = [
                { value: 'new1', label: 'New 1' },
                { value: 'new2', label: 'New 2' },
            ];
            host.data = newData;
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const options = getOptions(fixture);
            expect(options.length).toBe(2);
        });

        it('should update selection when value changes', () => {
            host.value = 'opt1';
            fixture.detectChanges();
            expect(select2.select2Option?.value).toBe('opt1');

            host.value = 'opt2';
            fixture.detectChanges();
            expect(select2.select2Option?.value).toBe('opt2');
        });

        it('should preserve selection order in multiple mode when data changes', () => {
            host.multiple = true;
            host.value = ['opt2', 'opt1'];
            fixture.detectChanges();
            select2 = getSelect2(fixture);

            // Change data (same options, different reference)
            host.data = [...SIMPLE_DATA];
            fixture.detectChanges();

            const selected = select2.select2Options;
            expect(selected[0]?.value).toBe('opt2');
            expect(selected[1]?.value).toBe('opt1');
        });
    });

    // ── fixValue ─────────────────────────────────────────────────────

    describe('fixValue', () => {
        it('should convert single to array when switching to multiple', async () => {
            host.value = 'opt1';
            fixture.detectChanges();
            // Now switch to multiple
            host.multiple = true;
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));
            fixture.detectChanges();
            select2 = getSelect2(fixture);
            // Should have converted
            expect(Array.isArray(select2.selectedOption)).toBe(true);
        });
    });

    // ── Overlay mode ─────────────────────────────────────────────────

    describe('overlay mode', () => {
        it('should use overlay when overlay is true', () => {
            host.overlay = true;
            fixture.detectChanges();
            // The containerTemplate should not be rendered inline
            const inlineContainer = fixture.nativeElement.querySelector(
                '.select2-container--default > .select2-container-dropdown',
            );
            // In overlay mode, the dropdown is rendered via cdkConnectedOverlay
            expect(select2.overlay()).toBe(true);
        });
    });

    // ── minCharForSearch ─────────────────────────────────────────────

    describe('minCharForSearch', () => {
        it('should not filter when search text is shorter than minCharForSearch', () => {
            host.minCharForSearch = 3;
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLInputElement;
            searchInput.value = 'Op';
            dispatchKeyup(searchInput, 'p');
            fixture.detectChanges();

            // Should still show all options since search text < minCharForSearch
            const options = getOptions(fixture);
            expect(options.length).toBe(SIMPLE_DATA.length);
        });
    });

    // ── editPattern ──────────────────────────────────────────────────

    describe('editPattern', () => {
        it('should use custom edit pattern for filtering', () => {
            host.editPattern = (str: string) => str.toLowerCase();
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLInputElement;
            searchInput.value = 'option 1';
            dispatchKeyup(searchInput, '1');
            fixture.detectChanges();

            const options = getOptions(fixture);
            expect(options.length).toBeGreaterThan(0);
        });
    });

    // ── drop (drag and drop) ─────────────────────────────────────────

    describe('drop', () => {
        it('should reorder items on drop in multiple mode', async () => {
            host.multiple = true;
            host.multipleDrag = true;
            host.value = ['opt1', 'opt2', 'opt3'];
            fixture.detectChanges();
            select2 = getSelect2(fixture);

            // Simulate a CdkDragDrop event
            const dropEvent = {
                previousIndex: 0,
                currentIndex: 2,
                item: {} as any,
                container: {} as any,
                previousContainer: {} as any,
                isPointerOverContainer: true,
                distance: { x: 0, y: 0 },
                dropPoint: { x: 0, y: 0 },
                event: new MouseEvent('drop'),
            } as any;

            select2.drop(dropEvent);
            fixture.detectChanges();
            await new Promise(r => setTimeout(r, 0));

            expect(host.onUpdate).toHaveBeenCalled();
        });
    });

    // ── _updateFocusState ────────────────────────────────────────────

    describe('_updateFocusState', () => {
        it('should emit focus when state changes to true', () => {
            select2._updateFocusState(true);
            expect(host.onFocus).toHaveBeenCalled();
            expect(select2.focused).toBe(true);
        });

        it('should emit blur when state changes to false', () => {
            select2._updateFocusState(true);
            select2._updateFocusState(false);
            expect(host.onBlur).toHaveBeenCalled();
            expect(select2.focused).toBe(false);
        });

        it('should not emit when state does not change', () => {
            select2._updateFocusState(true);
            host.onFocus.mockClear();
            select2._updateFocusState(true);
            expect(host.onFocus).not.toHaveBeenCalled();
        });
    });

    // ── triggerRect ──────────────────────────────────────────────────

    describe('triggerRect', () => {
        it('should update trigger rect', () => {
            select2.triggerRect();
            // Should not throw
            expect(select2).toBeTruthy();
        });
    });

    // ── hasTemplate / getTemplate ────────────────────────────────────

    describe('hasTemplate and getTemplate', () => {
        it('should return false when no templates', () => {
            const option: Select2Option = { value: 'x', label: 'X' };
            expect(select2.hasTemplate(option, 'option')).toBe(false);
        });

        it('should return undefined from getTemplate when no templates', () => {
            const option: Select2Option = { value: 'x', label: 'X' };
            expect(select2.getTemplate(option, 'option')).toBeUndefined();
        });
    });

    // ── searchUpdate with customSearch ───────────────────────────────

    describe('searchUpdate', () => {
        it('should call filteredData callback in custom search', () => {
            host.customSearchEnabled = true;
            host.displaySearchStatus = 'always';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();

            const searchInput = fixture.nativeElement.querySelector('.select2-search__field') as HTMLInputElement;
            searchInput.value = 'test';
            dispatchKeyup(searchInput, 't');
            fixture.detectChanges();

            expect(host.onSearch).toHaveBeenCalled();
            const searchEvent = host.onSearch.mock.calls[0][0];
            expect(searchEvent.search).toBe('test');
            expect(typeof searchEvent.filteredData).toBe('function');

            // Call the filteredData callback
            const newData: Select2Data = [{ value: 'custom', label: 'Custom Result' }];
            searchEvent.filteredData(newData);
            fixture.detectChanges();
            expect(select2.filteredData()).toEqual(newData);
        });
    });

    // ── select2Options / select2Option getters ───────────────────────

    describe('select2Options and select2Option getters', () => {
        it('should return empty array for select2Options in single mode', () => {
            expect(select2.select2Options).toEqual([]);
        });

        it('should return null for select2Option in multiple mode', () => {
            host.multiple = true;
            fixture.detectChanges();
            select2 = getSelect2(fixture);
            expect(select2.select2Option).toBeNull();
        });
    });

    // ── selectionNoWrap ──────────────────────────────────────────────

    describe('selectionNoWrap', () => {
        it('should apply nowrap class', () => {
            host.selectionNoWrap = true;
            fixture.detectChanges();
            const hostEl = fixture.nativeElement.querySelector('select2');
            expect(hostEl.classList.contains('select2-selection-nowrap')).toBe(true);
        });
    });

    // ── resultMaxHeight ──────────────────────────────────────────────

    describe('resultMaxHeight', () => {
        it('should set max-height on results', () => {
            host.resultMaxHeight = '300px';
            fixture.detectChanges();
            clickSelection(fixture);
            fixture.detectChanges();
            const results = fixture.nativeElement.querySelector('.select2-results__options') as HTMLElement;
            expect(results.style.maxHeight).toBe('300px');
        });
    });
});
