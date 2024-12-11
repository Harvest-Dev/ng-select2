import {
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    ConnectedOverlayPositionChange,
    ConnectionPositionPair,
    VerticalConnectionPos,
} from '@angular/cdk/overlay';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { NgTemplateOutlet } from '@angular/common';
import type { ElementRef, OnDestroy } from '@angular/core';
import {
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    HostBinding,
    HostListener,
    OnInit,
    Optional,
    Self,
    TemplateRef,
    booleanAttribute,
    input,
    numberAttribute,
    output,
    signal,
    viewChild,
    viewChildren,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, FormGroupDirective, NgControl, NgForm } from '@angular/forms';

import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Subject, Subscription } from 'rxjs';

import {
    Select2AutoCreateEvent,
    Select2Data,
    Select2Group,
    Select2Option,
    Select2RemoveEvent,
    Select2ScrollEvent,
    Select2SearchEvent,
    Select2SelectionOverride,
    Select2Template,
    Select2UpdateEvent,
    Select2UpdateValue,
    Select2Value,
} from './select2-interfaces';
import { Select2Utils } from './select2-utils';

let nextUniqueId = 0;

const displaySearchStatusList = ['default', 'hidden', 'always'];

@Component({
    selector: 'select2',
    templateUrl: './select2.component.html',
    styleUrls: ['./select2.component.scss'],
    imports: [CdkOverlayOrigin, NgTemplateOutlet, CdkConnectedOverlay, InfiniteScrollDirective],
    host: {
        '[id]': '_id',
        '[class.select2-selection-nowrap]': 'selectionNoWrap()',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Select2 implements ControlValueAccessor, OnInit, DoCheck, AfterViewInit, OnDestroy {
    // ----------------------- signal-input

    /** data of options & option groups */
    readonly data = input.required<Select2Data>();

    readonly minCharForSearch = input(0, { transform: numberAttribute });

    readonly displaySearchStatus = input<'default' | 'hidden' | 'always' | undefined>(undefined);

    readonly placeholder = input<string | undefined>(undefined);

    readonly limitSelection = input(0, { transform: numberAttribute });

    readonly listPosition = input<'above' | 'below' | 'auto'>('below');

    readonly overlay = input(false, { transform: booleanAttribute });

    /** use the material style */
    readonly multiple = input(false, { transform: booleanAttribute });

    /** use the material style */
    readonly styleMode = input<'material' | 'noStyle' | 'borderless' | 'default'>('default');

    /** message when no result */
    readonly noResultMessage = input<string>();

    /** maximum results limit (0 = no limit) */
    readonly maxResults = input(0, { transform: numberAttribute });

    /** message when maximum results */
    readonly maxResultsMessage = input('Too many results…');

    /** infinite scroll distance */
    readonly infiniteScrollDistance = input(1.5, { transform: numberAttribute });

    /** infinite scroll distance */
    readonly infiniteScrollThrottle = input(150, { transform: numberAttribute });

    /** infinite scroll activated */
    readonly infiniteScroll = input(false, { transform: booleanAttribute });

    /** auto create if not exist */
    readonly autoCreate = input(false, { transform: booleanAttribute });

    /** no template for label selection */
    readonly noLabelTemplate = input(false, { transform: booleanAttribute });

    /** use it for change the pattern of the filter search */
    readonly editPattern = input<((str: string) => string) | undefined>(undefined);

    /** template(s) for formatting */
    readonly templates = input<Select2Template>(undefined);

    /** template for formatting selected option */
    readonly templateSelection = input<TemplateRef<any> | undefined>(undefined);

    /** the max height of the results container when opening the select */
    readonly resultMaxHeight = input('200px');

    /** Active Search event */
    readonly customSearchEnabled = input(false, { transform: booleanAttribute });

    /** minimal data of show the search field */
    readonly minCountForSearch = input(undefined, { transform: numberAttribute });

    /** Unique id of the element. */
    readonly id = input<string>();

    /** Whether the element is required. */
    readonly required = input(false, { transform: booleanAttribute });

    /** Whether selected items should be hidden. */
    readonly disabled = input(false, { transform: booleanAttribute });

    /** Whether items are hidden when has. */
    readonly hideSelectedItems = input(false, { transform: booleanAttribute });

    /** Whether the element is readonly. */
    readonly readonly = input(false, { transform: booleanAttribute });

    /** The input element's value. */
    readonly value = input<Select2UpdateValue>();

    /** Tab index for the select2 element. */
    readonly tabIndex = input(0, { transform: numberAttribute });

    /** reset with no selected value */
    readonly resettable = input(false, { transform: booleanAttribute });

    /** selected value when × is clicked */
    readonly resetSelectedValue = input<any>(undefined);

    /** grid: item by line
     * * 0 = no grid
     * * number = item by line (4)
     * * string = minimal size item (100px)
     */
    readonly grid = input('');

    /**
     * Replace selection by a text
     * * if string: `%size%` = total selected options
     * * if function: juste show the string
     */
    readonly selectionOverride = input<Select2SelectionOverride | undefined>(undefined);

    /** force selection on one line */
    readonly selectionNoWrap = input(false, { transform: booleanAttribute });

    /** Add an option to select or remove all (if all is selected) */
    readonly showSelectAll = input(false, { transform: booleanAttribute });

    /** Text for remove all options */
    readonly removeAllText = input('Remove all');

    /** Text for select all options */
    readonly selectAllText = input('Select all');

    // ----------------------- signal-output

    readonly update = output<Select2UpdateEvent<Select2UpdateValue>>();
    readonly autoCreateItem = output<Select2AutoCreateEvent<Select2UpdateValue>>();
    readonly open = output<Select2>();
    readonly close = output<Select2>();
    readonly focus = output<Select2>();
    readonly blur = output<Select2>();
    readonly search = output<Select2SearchEvent<Select2UpdateValue>>();
    readonly scroll = output<Select2ScrollEvent>();
    readonly removeOption = output<Select2RemoveEvent<Select2UpdateValue>>();

    // ----------------------- signal-input

    readonly cdkConnectedOverlay = viewChild.required(CdkConnectedOverlay);
    readonly selection = viewChild.required<ElementRef<HTMLElement>>('selection');
    readonly resultContainer = viewChild<ElementRef<HTMLElement>>('results');
    readonly results = viewChildren<ElementRef>('result');
    readonly searchInput = viewChild<ElementRef<HTMLElement>>('searchInput');
    readonly dropdown = viewChild<ElementRef<HTMLElement>>('dropdown');

    // ----------------------- HostBinding

    @HostBinding('attr.aria-invalid')
    get ariaInvalid(): boolean {
        return this._isErrorState();
    }

    @HostBinding('class.material')
    get classMaterial(): boolean {
        return this.styleMode() === 'material';
    }

    @HostBinding('class.nostyle')
    get classNostyle(): boolean {
        return this.styleMode() === 'noStyle';
    }

    @HostBinding('class.borderless')
    get classBorderless(): boolean {
        return this.styleMode() === 'borderless';
    }

    @HostBinding('class.select2-above')
    get select2above(): boolean {
        return !this.overlay() ? this.listPosition() === 'above' : this._isAbobeOverlay();
    }

    // ----------------------- internal var

    selectedOption: Select2Option | Select2Option[] | null = null;
    isOpen = false;
    searchStyle: string | undefined;

    /** Whether the element is focused or not. */
    focused = false;

    filteredData = signal<Select2Data | undefined>(undefined);

    get select2Options() {
        return this.multiple() ? (this.selectedOption as Select2Option[]) : null;
    }

    get select2Option() {
        return this.multiple() ? null : (this.selectedOption as Select2Option);
    }

    get searchText() {
        return this.innerSearchText;
    }

    protected set searchText(text: string) {
        this.innerSearchText = text;
    }

    get disabledState() {
        return this._control?.disabled ?? this._disabled;
    }

    protected overlayWidth: number | string = '';
    protected overlayHeight: number | string = '';
    protected _triggerRect: DOMRect | undefined;
    protected _dropdownRect: DOMRect | undefined;

    protected get _positions(): any {
        switch (this.listPosition()) {
            case 'above':
                return [
                    new ConnectionPositionPair(
                        { originX: 'start', originY: 'top' },
                        { overlayX: 'start', overlayY: 'bottom' },
                    ),
                ];
            case 'auto':
                return [
                    new ConnectionPositionPair(
                        { originX: 'start', originY: 'bottom' },
                        { overlayX: 'start', overlayY: 'top' },
                    ),
                    new ConnectionPositionPair(
                        { originX: 'start', originY: 'top' },
                        { overlayX: 'start', overlayY: 'bottom' },
                    ),
                ];

            default:
                return [
                    new ConnectionPositionPair(
                        { originX: 'start', originY: 'bottom' },
                        { overlayX: 'start', overlayY: 'top' },
                    ),
                ];
        }
    }

    protected maxResultsExceeded: boolean | undefined;

    private hoveringValue: Select2Value | null | undefined = null;
    private innerSearchText = '';
    private isSearchboxHidden: boolean | undefined;

    private selectionElement: HTMLElement | undefined;

    private get resultsElement(): HTMLElement | undefined {
        return this.resultContainer()?.nativeElement;
    }

    private _stateChanges = new Subject<void>();

    /** Tab index for the element. */
    protected get _tabIndex(): number {
        return this.disabledState ? -1 : this.tabIndex();
    }

    private _data: Select2Data = [];

    get _id(): string {
        return this.id() || this._uid;
    }

    private _disabled = false;

    private _uid = `select2-${nextUniqueId++}`;
    protected _value: Select2UpdateValue | null = null;
    private _previousNativeValue: Select2UpdateValue | undefined;
    private _overlayPosition: VerticalConnectionPos | undefined;
    private toObservable = new Subscription();

    constructor(
        protected _viewportRuler: ViewportRuler,
        private _changeDetectorRef: ChangeDetectorRef,
        @Optional() private _parentForm: NgForm,
        @Optional() private _parentFormGroup: FormGroupDirective,
        @Self() @Optional() public _control: NgControl,
        @Attribute('tabindex') tabIndex: string,
    ) {
        // eslint-disable-next-line no-self-assign
        this.id = this.id;

        if (this._control) {
            this._control.valueAccessor = this;
        }

        this.toObservable.add(
            toObservable(this.multiple).subscribe(_multiple => {
                this.ngOnInit();
            }),
        );
        this.toObservable.add(
            toObservable(this.data).subscribe(_data => {
                this._data = _data;
                this.updateFilteredData();
            }),
        );
        this.toObservable.add(
            toObservable(this.minCountForSearch).subscribe(minCountForSearch => {
                this.updateSearchBox();
            }),
        );
        this.toObservable.add(
            toObservable(this.disabled).subscribe(disabled => {
                this._disabled = disabled;
            }),
        );
        this.toObservable.add(
            toObservable(this.value).subscribe(value => {
                if (this.testValueChange(this._value, value)) {
                    if (this._value === undefined) {
                        this._value = value;
                    }
                    this.writeValue(value);
                }
            }),
        );
    }

    @HostListener('document:click', ['$event'])
    clickDetection(e: MouseEvent) {
        if (this.isOpen) {
            const target = e.target as HTMLElement;
            if (!this.ifParentContainsClass(target, 'selection')) {
                if (!this.ifParentContainsClass(target, 'select2-dropdown')) {
                    this.toggleOpenAndClose();
                }
                if (!this.overlay() && !this.ifParentContainsId(target, this._id)) {
                    this.clickExit();
                }
            } else if (!this.ifParentContainsId(target, this._id)) {
                this.toggleOpenAndClose();
                this.clickExit();
            }
        } else if (this.focused) {
            const target = e.target as HTMLElement;
            this._focus(this.clickOnSelect2Element(target));
        }
    }

    /** View -> model callback called when select has been touched */
    private _onTouched = () => {
        // do nothing
    };

    /** View -> model callback called when value changes */
    private _onChange: (value: any) => void = () => {
        // do nothing
    };

    ngOnInit() {
        this._viewportRuler.change(100).subscribe(() => {
            if (this.isOpen) {
                this.triggerRect();
            }
        });

        const option = Select2Utils.getOptionsByValue(
            this._data,
            this._control ? this._control.value : this.value(),
            this.multiple(),
        );
        if (option !== null) {
            this.selectedOption = option ?? null;
        }
        if (!Array.isArray(option)) {
            this.hoveringValue = this.value();
        }
        this.updateSearchBox();
    }

    ngAfterViewInit() {
        this.cdkConnectedOverlay().positionChange.subscribe((posChange: ConnectedOverlayPositionChange) => {
            if (
                this.listPosition() === 'auto' &&
                posChange.connectionPair?.originY &&
                this._overlayPosition !== posChange.connectionPair.originY
            ) {
                this.triggerRect();
                this._overlayPosition = posChange.connectionPair.originY;
                this._changeDetectorRef.detectChanges();
            }
        });

        this.selectionElement = this.selection().nativeElement;
        this.triggerRect();
    }

    ngDoCheck() {
        this.updateSearchBox();
        this._dirtyCheckNativeValue();
        if (this._triggerRect) {
            if (this.overlayWidth !== this._triggerRect.width) {
                this.overlayWidth = this._triggerRect.width;
            }
            if (
                this._dropdownRect &&
                this._dropdownRect.height > 0 &&
                this.overlayHeight !== this._dropdownRect.height
            ) {
                this.overlayHeight = this.listPosition() === 'auto' ? this._dropdownRect.height : 0;
            }
        }
    }

    ngOnDestroy(): void {
        this.toObservable.unsubscribe();
    }

    updateSearchBox() {
        const hidden = this.customSearchEnabled()
            ? false
            : Select2Utils.isSearchboxHidden(this._data, this.minCountForSearch());
        if (this.isSearchboxHidden !== hidden) {
            this.isSearchboxHidden = hidden;
        }
    }

    hideSearch(): boolean {
        if (this.autoCreate() && !this.multiple()) {
            return false;
        }
        const displaySearchStatus =
            this.displaySearchStatus() && displaySearchStatusList.indexOf(this.displaySearchStatus()!) > -1
                ? this.displaySearchStatus()
                : 'default';
        return (displaySearchStatus === 'default' && this.isSearchboxHidden) || displaySearchStatus === 'hidden';
    }

    getOptionStyle(option: Select2Option) {
        return (
            'select2-results__option ' +
            (option.hide ? 'select2-results__option--hide ' : '') +
            (option.value === this.hoveringValue ? 'select2-results__option--highlighted ' : '') +
            (option.classes || '')
        );
    }

    mouseenter(option: Select2Option) {
        if (!option.disabled) {
            this.hoveringValue = option.value;
        }
    }

    click(option: Select2Option) {
        if (this.testSelection(option)) {
            this.select(option);
        }
    }

    reset(event?: MouseEvent) {
        // const test = Select2Utils.getOptionByValue(this._data, this.resetSelectedValue);
        // debugger;
        const resetSelectedValue = this.resetSelectedValue();
        this.select(
            resetSelectedValue !== undefined
                ? (Select2Utils.getOptionByValue(this._data, resetSelectedValue) ?? null)
                : null,
        );

        if (event) {
            this.stopEvent(event);
        }
    }

    prevChange(event: Event) {
        event.stopPropagation();
    }

    stopEvent(event: Event) {
        event.preventDefault();
        event.stopPropagation();
    }

    toggleOpenAndClose(focus = true, open?: boolean, event?: KeyboardEvent) {
        if (this.disabledState) {
            return;
        }
        this._focus(focus);

        const changeEmit = this.isOpen !== (open ?? !this.isOpen);
        this.isOpen = open ?? !this.isOpen;
        if (this.isOpen) {
            if (!this.isSearchboxHidden) {
                this.innerSearchText = '';
                this.updateFilteredData();
                this._focusSearchboxOrResultsElement(focus);
            }

            if (this.isSearchboxHidden && !changeEmit && event) {
                this.keyDown(event);
            } else {
                setTimeout(() => {
                    if (this.selectedOption) {
                        const option = Array.isArray(this.selectedOption)
                            ? this.selectedOption[0]
                            : this.selectedOption;
                        this.updateScrollFromOption(option);
                    } else if (this.resultsElement) {
                        this.resultsElement.scrollTop = 0;
                    }
                    this._changeDetectorRef.detectChanges();

                    setTimeout(() => {
                        this.triggerRect();
                        this.cdkConnectedOverlay().overlayRef?.updatePosition();
                    }, 100);
                });
            }
            if (changeEmit) {
                this.open.emit(this);
            }
        } else if (changeEmit) {
            this.close.emit(this);
        }

        this._changeDetectorRef.markForCheck();
    }

    hasTemplate(option: Select2Option | Select2Group, defaultValue: string, select: boolean = false) {
        const templates: any = this.templates();
        const templatesValue: any = this.templates();
        return (
            (select
                ? templates?.[(option as Select2Option).templateSelectionId ?? ''] instanceof TemplateRef ||
                  templates?.[`${defaultValue}Selection`] instanceof TemplateRef ||
                  templates?.[`templateSelection`] instanceof TemplateRef ||
                  this.templateSelection() instanceof TemplateRef
                : false) ||
            templatesValue?.[option.templateId ?? ''] instanceof TemplateRef ||
            templatesValue?.[defaultValue] instanceof TemplateRef ||
            templatesValue?.['template'] instanceof TemplateRef ||
            templatesValue instanceof TemplateRef ||
            false
        );
    }

    getTemplate(option: Select2Option | Select2Group, defaultValue: string, select: boolean = false) {
        const templates: any = this.templates();
        const templatesValue: any = this.templates();
        return this.hasTemplate(option, defaultValue, select)
            ? (select
                  ? templates?.[(option as Select2Option).templateSelectionId ?? ''] ||
                    templates?.[`${defaultValue}Selection`] ||
                    templates?.[`templateSelection`] ||
                    this.templateSelection()
                  : undefined) ||
                  templatesValue?.[option.templateId ?? ''] ||
                  templatesValue?.[defaultValue] ||
                  templatesValue?.['template'] ||
                  templatesValue
            : undefined;
    }

    triggerRect() {
        this._triggerRect = this.selectionElement?.getBoundingClientRect();
        const dropdown = this.dropdown();
        this._dropdownRect = dropdown?.nativeElement ? dropdown.nativeElement.getBoundingClientRect() : undefined;
    }

    isNumber(o: any): boolean {
        return !isNaN(o - 0) && o !== null && o !== '' && o !== false;
    }

    selectAll() {
        if (this.multiple()) {
            if (!this.selectAllTest()) {
                const options: Select2Option[] = [];
                this._data.forEach(e => {
                    if ((e as Select2Group).options) {
                        (e as Select2Group).options.forEach(f => {
                            if (!f.disabled && !f.hide) {
                                options.push(f);
                            }
                        });
                    } else if (!(e as Select2Option).disabled && !(e as Select2Option).hide) {
                        options.push(e as Select2Option);
                    }
                });
                this.selectedOption = options;
                this.writeValue(options.map(e => e.value));
            } else {
                this.selectedOption = [];
                this.writeValue([]);
            }

            this.isOpen = false;
            this.close.emit(this);
        }
    }

    selectAllTest() {
        if (this.multiple() && Array.isArray(this.selectedOption) && this.selectedOption.length) {
            let options = 0;
            this._data.forEach(e => {
                if ((e as Select2Group).options) {
                    (e as Select2Group).options.forEach(f => {
                        if (!f.disabled && !f.hide) {
                            options++;
                        }
                    });
                } else if (!(e as Select2Option).disabled && !(e as Select2Option).hide) {
                    options++;
                }
            });
            return this.selectedOption.length === options;
        }
        return false;
    }

    private testSelection(option: Select2Option) {
        if (option.disabled) {
            return false;
        }

        const limitSelection = this.limitSelection();
        return (
            !this.multiple() || !limitSelection || (Array.isArray(this._value) && this._value.length < limitSelection)
        );
    }

    private testValueChange(value1: Select2UpdateValue | null, value2: Select2UpdateValue | undefined) {
        if (
            ((value1 === null || value1 === undefined) && (value2 === null || value2 === undefined)) ||
            value1 === value2
        ) {
            return false;
        }
        if (
            this.multiple() &&
            (value1 as Select2Value[])?.length &&
            (value2 as Select2Value[])?.length &&
            (value1 as Select2Value[]).length === (value2 as Select2Value[]).length
        ) {
            for (const e1 of value1 as Select2Value[]) {
                const test = (value2 as Select2Value[]).indexOf(e1) > -1;
                if (!test) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }

    private updateFilteredData() {
        let result = this._data;

        if (this.multiple() && this.hideSelectedItems()) {
            result = Select2Utils.getFilteredSelectedData(result, this.selectedOption);
        }
        if (!this.customSearchEnabled() && this.searchText && this.searchText.length >= +this.minCharForSearch()) {
            result = Select2Utils.getFilteredData(result, this.searchText, this.editPattern());
        }
        if (this.maxResults() > 0) {
            const data = Select2Utils.getReduceData(result, +this.maxResults());
            result = data.result;
            this.maxResultsExceeded = data.reduce;
        } else {
            this.maxResultsExceeded = false;
        }

        if (Select2Utils.valueIsNotInFilteredData(result, this.hoveringValue)) {
            this.hoveringValue = Select2Utils.getFirstAvailableOption(result);
        }

        this.filteredData.set(result);

        // replace selected options when data change

        if (this.multiple() && Array.isArray(this.selectedOption) && this.selectedOption.length) {
            const options: Select2Option[] = [];
            const value = this.selectedOption.map(e => e.value);
            this._data.forEach(e => {
                if ((e as Select2Group).options) {
                    (e as Select2Group).options.forEach(f => {
                        if (value.includes(f.value)) {
                            options.push(f);
                        }
                    });
                } else if (value.includes((e as Select2Option).value)) {
                    options.push(e as Select2Option);
                }
            });
            // preserve selection order
            this.selectedOption = this.selectedOption.map(e => options.find(f => f.value === e.value)!);
        } else if (!Array.isArray(this.selectedOption) && this.selectedOption) {
            let option: Select2Option | null = null;
            this._data.forEach(e => {
                if ((e as Select2Group).options) {
                    (e as Select2Group).options.forEach(f => {
                        if ((this.selectedOption as Select2Option).value === f.value) {
                            option = f;
                        }
                    });
                } else if ((this.selectedOption as Select2Option).value === (e as Select2Option).value) {
                    option = e as Select2Option;
                }
            });
            this.selectedOption = option;
        }
        this._changeDetectorRef.detectChanges();
    }

    private clickExit() {
        this._focus(false);
    }

    private ifParentContainsClass(element: HTMLElement, cssClass: string): boolean {
        return this.getParentElementByClass(element, cssClass) !== null;
    }

    private ifParentContainsId(element: HTMLElement, id: string): boolean {
        return this.getParentElementById(element, id) !== null;
    }

    private getParentElementByClass(element: HTMLElement, cssClass: string): HTMLElement | null {
        return this.containClasses(element, cssClass.trim().split(/\s+/))
            ? element
            : element.parentElement
              ? this.getParentElementByClass(element.parentElement, cssClass)
              : null;
    }

    private getParentElementById(element: HTMLElement, id: string): HTMLElement | null {
        return element.id === id
            ? element
            : element.parentElement
              ? this.getParentElementById(element.parentElement, id)
              : null;
    }

    private containClasses(element: HTMLElement, cssClasses: string[]): boolean {
        if (!element.classList) {
            return false;
        }

        for (const cssClass of cssClasses) {
            if (!element.classList.contains(cssClass)) {
                return false;
            }
        }

        return true;
    }

    private containAlmostOneClasses(element: HTMLElement, cssClasses: string[]): boolean {
        if (!element.classList) {
            return false;
        }

        let containAlmostOne = false;
        for (const cssClass of cssClasses) {
            if (element.classList.contains(cssClass)) {
                containAlmostOne = true;
            }
        }

        return containAlmostOne;
    }

    private clickOnSelect2Element(element: HTMLElement): boolean {
        return this.containAlmostOneClasses(element, [
            'select2-overlay-backdrop',
            'select2-label-content',
            'select2-selection__rendered',
            'select2-results__option',
        ]);
    }

    focusin() {
        if (!this.disabledState) {
            this._focus(true);
        }
    }

    focusout() {
        if (this.selectionElement && !this.selectionElement.classList.contains('select2-focused')) {
            this._focus(false);
            this._onTouched();
        }
    }

    select(option: Select2Option | null, emit: boolean = true) {
        let value: any;

        if (option !== null && option !== undefined) {
            if (this.multiple()) {
                this.selectedOption ??= [];
                const options = this.selectedOption as Select2Option[];
                const index = options.findIndex(op => op.value === option.value);
                if (index === -1) {
                    options.push(option);
                } else {
                    options.splice(index, 1);
                }

                value = (this.selectedOption as Select2Option[]).map(op => op.value);
            } else {
                this.selectedOption = option;
                if (this.isOpen) {
                    this.isOpen = false;
                    this.close.emit(this);
                    this.selectionElement?.focus();
                }
                value = this.selectedOption.value;
                if (!option && this._value === null) {
                    this._value = value;
                }
            }
        } else {
            // when remove value
            if (Array.isArray(this.selectedOption) ? this.selectedOption?.length : this.selectedOption) {
                value = '';
            }
            this.selectedOption = null;
        }

        if (this.multiple() && this.hideSelectedItems()) {
            this.updateFilteredData();
        }

        emit &&= value !== undefined && this.testDiffValue(this._value, value);

        if (this._control) {
            this._onChange(value);
        }

        if (emit) {
            this.writeValue(value);
            setTimeout(() => {
                this.update.emit({
                    component: this,
                    value: value,
                    options: Array.isArray(this.selectedOption)
                        ? this.selectedOption
                        : this.selectedOption
                          ? [this.selectedOption]
                          : null,
                });
            });
        }
    }

    private testDiffValue(val1: Select2UpdateValue | null, val2: any) {
        return Array.isArray(val1) ? (val1 as [])?.length !== val2?.length : val1 !== val2;
    }

    keyDown(event: KeyboardEvent, create = false) {
        if (create && this._testKey(event, ['Enter'])) {
            this.createAndAdd(event);
        } else if (this._testKey(event, ['ArrowDown'])) {
            this.moveDown();
            event.preventDefault();
        } else if (this._testKey(event, ['ArrowUp'])) {
            this.moveUp();
            event.preventDefault();
        } else if (this._testKey(event, ['Enter'])) {
            this.selectByEnter();
            event.preventDefault();
        } else if (this._testKey(event, ['Escape', 'Tab']) && this.isOpen) {
            this.toggleOpenAndClose();
            this._focus(false);
        }
    }

    openKey(event: KeyboardEvent, create = false) {
        if (create && this._testKey(event, ['Enter'])) {
            this.createAndAdd(event);
        } else if (this._testKey(event, ['ArrowDown', 'ArrowUp', 'Enter'])) {
            this.toggleOpenAndClose(true, true, event);
            event.preventDefault();
        } else if (this._testKey(event, ['Escape', 'Tab'])) {
            if (this.isOpen) {
                this.toggleOpenAndClose(false);
                this._onTouched();
                event.preventDefault();
            } else {
                this._focus(false);
            }
        }
    }

    searchUpdate(e: Event) {
        this.searchText = (e.target as HTMLInputElement).value;
        if (!this.customSearchEnabled()) {
            this.updateFilteredData();
        } else {
            this.search.emit({
                component: this,
                value: this._value,
                search: this.searchText,
                data: this._data,
                filteredData: (data: Select2Data) => {
                    this.filteredData.set(data);
                    this._changeDetectorRef.markForCheck();
                },
            });
        }
    }

    isSelected(option: Select2Option) {
        return Select2Utils.isSelected(this.selectedOption, option, this.multiple());
    }

    isDisabled(option: Select2Option) {
        return option.disabled ? 'true' : 'false';
    }

    removeSelection(e: MouseEvent | KeyboardEvent | Event, option: Select2Option) {
        Select2Utils.removeSelection(this.selectedOption, option);

        if (this.multiple() && this.hideSelectedItems()) {
            this.updateFilteredData();
        }

        const value = (this.selectedOption as Select2Option[]).map(op => op.value);

        if (this._control) {
            this._onChange(value);
        } else {
            this._value = value ?? null;
        }

        this.update.emit({
            component: this,
            value: value,
            options: Array.isArray(this.selectedOption)
                ? this.selectedOption
                : this.selectedOption
                  ? [this.selectedOption]
                  : null,
        });
        this.removeOption.emit({
            component: this,
            value: value,
            removedOption: option,
        });

        e.preventDefault();
        e.stopPropagation();

        if (this.isOpen) {
            this._focusSearchboxOrResultsElement();
        }
    }

    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value: any) {
        this.selectedOption = null;
        this._setSelectionByValue(value);
        if (this.testValueChange(this._value, value)) {
            this._value = value;
        }
    }

    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn: (value: any) => void): void {
        this._onChange = fn;
    }

    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }

    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param isDisabled
     */
    setDisabledState(isDisabled: boolean) {
        this._disabled = isDisabled;
    }

    onScroll(way: 'up' | 'down') {
        this.scroll.emit({
            component: this,
            way,
            search: this.innerSearchText,
            data: this._data,
        });
    }

    _isErrorState(): boolean {
        const isInvalid = this._control?.invalid;
        const isTouched = this._control?.touched;
        const isSubmitted = this._parentFormGroup?.submitted || this._parentForm?.submitted;
        return !!(isInvalid && (isTouched || isSubmitted));
    }

    _selectionOverrideLabel() {
        const selectionOverride = this.selectionOverride();
        if (typeof selectionOverride === 'function') {
            return selectionOverride({
                size: this.optionsSize(),
                options: Array.isArray(this.selectedOption)
                    ? this.selectedOption
                    : this.selectedOption
                      ? [this.selectedOption]
                      : null,
            });
        } else if (typeof selectionOverride === 'string') {
            return selectionOverride.replaceAll('%size%', `${this.optionsSize()}`);
        }
        return undefined;
    }

    _toGroup(group: Select2Option | Select2Group) {
        return group as Select2Group;
    }

    _toOption(option: Select2Option | Select2Group) {
        return option as Select2Option;
    }

    private optionsSize() {
        return Array.isArray(this.selectedOption) ? this.selectedOption.length : this.selectedOption ? 1 : 0;
    }

    private addItem(value: string): Select2Option {
        let item = Select2Utils.getOptionByValue(this._data, value);
        if (!item) {
            item = {
                value,
                label: value,
            };
            this._data.push(item);
        }
        return item;
    }

    private createAndAdd(e: KeyboardEvent) {
        const value = (e.target as HTMLInputElement).value;
        if (value.trim()) {
            (e.target as HTMLInputElement).value = '';
            this.searchText = '';
            const item = this.addItem(value.trim());
            this.click(item);
            this.updateFilteredData();

            this.autoCreateItem.emit({
                value: item,
                component: this,
                options: Array.isArray(this.selectedOption)
                    ? this.selectedOption
                    : this.selectedOption
                      ? [this.selectedOption]
                      : null,
            });
        }
        this.stopEvent(e);
    }

    private moveUp() {
        this.updateScrollFromOption(Select2Utils.getPreviousOption(this.filteredData()!, this.hoveringValue));
    }

    private moveDown() {
        this.updateScrollFromOption(Select2Utils.getNextOption(this.filteredData()!, this.hoveringValue));
    }

    private updateScrollFromOption(option: Select2Option | null) {
        if (option) {
            this.hoveringValue = option.value;
            const domElement = this.results().find(r => r.nativeElement.innerText.trim() === option.label);
            if (domElement && this.resultsElement) {
                this.resultsElement.scrollTop = 0;
                const listClientRect = this.resultsElement.getBoundingClientRect();
                const optionClientRect = domElement.nativeElement.getBoundingClientRect();
                this.resultsElement.scrollTop = optionClientRect.top - listClientRect.top;
            }
        }
    }

    private selectByEnter() {
        if (this.hoveringValue) {
            const option = Select2Utils.getOptionByValue(this._data, this.hoveringValue) ?? null;
            this.select(option);
        }
    }

    private _testKey(event: KeyboardEvent, refs: (number | string)[] = []): boolean {
        return this._isKey(this._getKey(event), refs);
    }

    private _getKey(event: KeyboardEvent): number | string {
        let code: number | string | undefined;

        if (event.key !== undefined) {
            code = event.key;
        } else if ((event as any)['keyIdentifier'] !== undefined) {
            code = (event as any)['keyIdentifier'];
        } else if ((event as any)['keyCode'] !== undefined) {
            code = (event as any)['keyCode'];
        } else {
            event.preventDefault();
        }

        return code ?? '';
    }

    private _isKey(code: number | string, refs: (number | string)[] = []): boolean {
        return refs && refs.length > 0 ? refs.indexOf(code) !== -1 : false;
    }

    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    private _setSelectionByValue(value: any | any[]): void {
        if (this.selectedOption || (value !== undefined && value !== null)) {
            const isArray = Array.isArray(value);
            if (this.multiple() && value && !isArray) {
                throw new Error('Non array value.');
            } else if (this._data) {
                if (this.multiple()) {
                    if (!Array.isArray(this.selectedOption)) {
                        this.selectedOption = []; // if value is null, then empty option and return
                    }
                    if (isArray) {
                        // value is not null. Preselect value
                        (Select2Utils.getOptionsByValue(this._data, value, this.multiple()) as []).forEach(item =>
                            this.select(item, false),
                        );
                        this._value ??= value;

                        if (this.testDiffValue(this._value, value)) {
                            this.update.emit({
                                component: this,
                                value: value,
                                options: Array.isArray(this.selectedOption)
                                    ? this.selectedOption
                                    : this.selectedOption
                                      ? [this.selectedOption]
                                      : null,
                            });
                        }
                    } else if (value === null) {
                        // fix if value is null
                        this._value = [];
                        this.reset();
                        this.select(null, false);

                        if (this.testDiffValue(this._value, value)) {
                            this._value = [];
                            this.update.emit({
                                component: this,
                                value: this._value,
                                options: Array.isArray(this.selectedOption)
                                    ? this.selectedOption
                                    : this.selectedOption
                                      ? [this.selectedOption]
                                      : null,
                            });
                        }
                    }
                } else {
                    this._value = value;
                    this.select(Select2Utils.getOptionByValue(this._data, this._value));
                }
            } else if (this._control) {
                this._control.viewToModelUpdate(value);
            }

            this._changeDetectorRef.markForCheck();
        }
    }

    /** Does some manual dirty checking on the native input `value` property. */
    private _dirtyCheckNativeValue() {
        const newValue = this.value();

        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this._stateChanges.next();
        }
    }

    private _focusSearchboxOrResultsElement(focus = true) {
        if (!this.isSearchboxHidden) {
            setTimeout(() => {
                const searchInput = this.searchInput();
                if (searchInput && searchInput.nativeElement && focus) {
                    searchInput.nativeElement.focus();
                }
            });
            if (this.resultsElement && focus) {
                this.resultsElement.focus();
            }
        }
    }

    private _focus(state: boolean) {
        if (!state && this.focused) {
            this.focused = state;
            this.blur.emit(this);
        } else if (state && !this.focused) {
            this.focused = state;
            this.focus.emit(this);
        }
    }

    private _isAbobeOverlay(): boolean {
        const listPosition = this.listPosition();
        return this.overlay() && this._overlayPosition && listPosition === 'auto'
            ? this._overlayPosition === 'top'
            : listPosition === 'above';
    }
}