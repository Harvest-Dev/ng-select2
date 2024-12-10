import {
    CdkConnectedOverlay,
    ConnectedOverlayPositionChange,
    ConnectedPosition,
    VerticalConnectionPos,
} from '@angular/cdk/overlay';
import { ViewportRuler } from '@angular/cdk/scrolling';
import type { ElementRef, QueryList } from '@angular/core';
import {
    AfterViewInit,
    Attribute,
    ChangeDetectorRef,
    Component,
    DoCheck,
    EventEmitter,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Optional,
    Output,
    Self,
    TemplateRef,
    ViewChild,
    ViewChildren,
    booleanAttribute,
    computed,
    input,
    numberAttribute,
    signal,
} from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl, NgForm } from '@angular/forms';

import { Subject } from 'rxjs';

import {
    Select2AutoCreateEvent,
    Select2Data,
    Select2Group,
    Select2Option,
    Select2RemoveEvent,
    Select2ScrollEvent,
    Select2SearchEvent,
    Select2SelectionOverride,
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
    host: {
        '[id]': 'id()',
    },
})
export class Select2 implements ControlValueAccessor, OnInit, DoCheck, AfterViewInit {
    readonly _uid = `select2-${nextUniqueId++}`;
    _data: Select2Data;

    /** data of options & optiongrps */
    @Input({ required: true }) set data(data: Select2Data) {
        this._data = data;
        this.updateFilteredData(true);
    }
    @Input({ transform: numberAttribute }) minCharForSearch = 0;
    @Input() displaySearchStatus: 'default' | 'hidden' | 'always';
    @Input() placeholder: string;

    @Input({ transform: numberAttribute }) limitSelection = 0;
    @Input() listPosition: 'above' | 'below' | 'auto' = 'below';

    @Input({ transform: booleanAttribute })
    get multiple(): boolean {
        return this._multiple;
    }
    set multiple(value: boolean) {
        this._multiple = value;
        this.ngOnInit();
    }

    /** use the material style */
    @Input({ transform: booleanAttribute })
    overlay = false;

    /** use the material style */
    @Input() styleMode: 'material' | 'noStyle' | 'borderless' | 'default' = 'default';

    /** message when no result */
    @Input() noResultMessage: string;

    /** maximum results limit (0 = no limit) */
    @Input({ transform: numberAttribute }) maxResults = 0;

    /** message when maximum results */
    @Input() maxResultsMessage = 'Too many results…';

    /** infinite scroll distance */
    @Input({ transform: numberAttribute }) infiniteScrollDistance = 1.5;

    /** infinite scroll distance */
    @Input({ transform: numberAttribute }) infiniteScrollThrottle = 150;

    /** infinite scroll activated */
    @Input({ transform: booleanAttribute }) infiniteScroll = false;

    /** auto create if not exist */
    @Input({ transform: booleanAttribute }) autoCreate = false;

    /** no template for label selection */
    @Input({ transform: booleanAttribute }) noLabelTemplate = false;

    /** use it for change the pattern of the filter search */
    @Input() editPattern: (str: string) => string;

    /** template(s) for formatting */
    @Input() templates: TemplateRef<any> | { [key: string]: TemplateRef<any> };

    /** template for formatting selected option */
    @Input() templateSelection: TemplateRef<any>;

    /** the max height of the results container when opening the select */
    @Input() resultMaxHeight = '200px';

    /** Active Search event */
    @Input({ transform: booleanAttribute }) customSearchEnabled = false;

    /** minimal data of show the search field */
    @Input({ transform: numberAttribute })
    get minCountForSearch(): number {
        return this._minCountForSearch;
    }
    set minCountForSearch(value: number) {
        this._minCountForSearch = value;
        this.updateSearchBox();
    }

    /** Unique id of the element. */
    id = input<string>(this._uid);
    idLabel = computed(() => `${this.id()}-label`);
    idCombo = computed(() => `${this.id()}-combo`);
    idOptions = computed(() => `${this.id()}-options`);

    title = input<string>();
    ariaLabelledby = input<string>();
    ariaDescribedby = input<string>();
    ariaInvalid = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Whether the element is required. */
    @Input({ transform: booleanAttribute }) required = false;

    /** Whether selected items should be hidden. */
    @Input({ transform: booleanAttribute })
    get disabled() {
        return this._control ? this._control.disabled : this._disabled;
    }
    set disabled(value: boolean) {
        this._disabled = value;
    }

    /** Whether items are hidden when has. */
    @Input({ transform: booleanAttribute }) hideSelectedItems = false;

    /** Whether the element is readonly. */
    @Input({ transform: booleanAttribute }) readonly = false;

    /** The input element's value. */
    @Input()
    get value() {
        return this._value;
    }
    set value(value: Select2UpdateValue) {
        if (this.testValueChange(this._value, value)) {
            setTimeout(() => {
                if (this._value === undefined) {
                    this._value = value ?? null;
                }
                this.writeValue(value ?? null);
            }, 10);
        }
    }

    /** Tab index for the select2 element. */
    @Input({ transform: numberAttribute })
    get tabIndex(): number {
        return this.disabled ? -1 : this._tabIndex;
    }
    set tabIndex(value: number) {
        this._tabIndex = value;
    }

    /** reset with no selected value */
    @Input({ transform: booleanAttribute })
    resettable = false;

    /** selected value when × is clicked */
    @Input() resetSelectedValue: any;

    /** grid: item by line
     * * 0 = no grid
     * * number = item by line (4)
     * * string = minimal size item (100px)
     */
    @Input() grid = '';

    /**
     * Replace selection by a text
     * * if string: `%size%` = total selected options
     * * if function: juste show the string
     */
    @Input() selectionOverride: Select2SelectionOverride;

    /** force selection on one line */
    @HostBinding('class.select2-selection-nowrap')
    @Input({ transform: booleanAttribute })
    selectionNoWrap = false;

    /** Add an option to select or remove all (if all is selected) */
    @Input({ transform: booleanAttribute })
    showSelectAll = false;

    /** Text for remove all options */
    @Input()
    removeAllText = 'Remove all';

    /** Text for select all options */
    @Input()
    selectAllText = 'Select all';

    @Output() update = new EventEmitter<Select2UpdateEvent<Select2UpdateValue>>();
    @Output() autoCreateItem = new EventEmitter<Select2AutoCreateEvent<Select2UpdateValue>>();
    @Output() open = new EventEmitter<Select2>();
    @Output() close = new EventEmitter<Select2>();
    @Output() focus = new EventEmitter<Select2>();
    @Output() blur = new EventEmitter<Select2>();
    @Output() search = new EventEmitter<Select2SearchEvent<Select2UpdateValue>>();
    @Output() scroll = new EventEmitter<Select2ScrollEvent>();
    @Output() removeOption = new EventEmitter<Select2RemoveEvent<Select2UpdateValue>>();

    option: Select2Option | Select2Option[] | null = null;
    isOpen = false;
    searchStyle: string;

    /** Whether the element is focused or not. */
    focused = false;

    filteredData = signal<Select2Data | undefined>(undefined);

    get select2Options() {
        return this.multiple ? (this.option as Select2Option[]) : null;
    }

    get select2Option() {
        return this.multiple ? null : (this.option as Select2Option);
    }

    get searchText() {
        return this.innerSearchText;
    }

    set searchText(text: string) {
        this.innerSearchText = text;
    }

    @HostBinding('class.material')
    get classMaterial(): boolean {
        return this.styleMode === 'material';
    }

    @HostBinding('class.nostyle')
    get classNostyle(): boolean {
        return this.styleMode === 'noStyle';
    }

    @HostBinding('class.borderless')
    get classBorderless(): boolean {
        return this.styleMode === 'borderless';
    }

    @HostBinding('class.select2-above')
    get select2above(): boolean {
        return !this.overlay ? this.listPosition === 'above' : this._isAbobeOverlay();
    }

    overlayWidth: number;
    overlayHeight: number;
    _triggerRect: DOMRect;
    _dropdownRect: DOMRect;

    get _positions(): ConnectedPosition[] {
        return this.listPosition === 'auto' ? undefined : null;
    }

    maxResultsExceeded: boolean;

    private _minCountForSearch?: number;

    @ViewChild(CdkConnectedOverlay) private cdkConnectedOverlay: CdkConnectedOverlay;
    @ViewChild('selection', { static: true }) private selection: ElementRef<HTMLElement>;
    @ViewChild('results') private resultContainer: ElementRef<HTMLElement>;
    @ViewChildren('result') private results: QueryList<ElementRef>;
    @ViewChild('searchInput') private searchInput: ElementRef<HTMLElement>;
    @ViewChild('dropdown') private dropdown: ElementRef<HTMLElement>;

    private hoveringOption = signal<Select2Option | null>(null);
    hoveringOptionId = computed(() => this.getElementId(this.hoveringOption()));

    private innerSearchText = '';
    private isSearchboxHidden: boolean;

    private selectionElement: HTMLElement;

    private get resultsElement(): HTMLElement {
        return this.resultContainer?.nativeElement;
    }

    private _stateChanges = new Subject<void>();

    /** Tab index for the element. */
    private _tabIndex: number;

    private _disabled = false;
    private _multiple = false;
    private _value: Select2UpdateValue = null;
    private _previousNativeValue: Select2UpdateValue;
    private _overlayPosition: VerticalConnectionPos;

    constructor(
        protected _viewportRuler: ViewportRuler,
        private _changeDetectorRef: ChangeDetectorRef,
        @Optional() private _parentForm: NgForm,
        @Optional() private _parentFormGroup: FormGroupDirective,
        @Self() @Optional() public _control: NgControl,
        @Attribute('tabindex') tabIndex: string,
    ) {
        this._tabIndex = parseInt(tabIndex, 10) || 0;

        if (this._control) {
            this._control.valueAccessor = this;
        }
    }

    @HostListener('document:click', ['$event'])
    clickDetection(e: MouseEvent) {
        if (this.isOpen && focus) {
            const target = e.target as HTMLElement;
            if (!this.ifParentContainsClass(target, 'selection')) {
                if (!this.ifParentContainsClass(target, 'select2-dropdown')) {
                    this.toggleOpenAndClose();
                }
                if (!this.overlay && !this.ifParentContainsId(target, this.id())) {
                    this.clickExit();
                }
            } else if (!this.ifParentContainsId(target, this.id())) {
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
            this._control ? this._control.value : this.value,
            this.multiple,
        );
        if (option !== null) {
            this.option = option;
        }
        if (!Array.isArray(option)) {
            this.hoveringOption.set(Select2Utils.getOptionByValue(this._data, this.value));
        }
        this.updateSearchBox();
    }

    ngAfterViewInit() {
        this.cdkConnectedOverlay.positionChange.subscribe((posChange: ConnectedOverlayPositionChange) => {
            if (
                this.listPosition === 'auto' &&
                posChange.connectionPair?.originY &&
                this._overlayPosition !== posChange.connectionPair.originY
            ) {
                this.triggerRect();
                this._overlayPosition = posChange.connectionPair.originY;
                this._changeDetectorRef.detectChanges();
            }
        });

        this.selectionElement = this.selection.nativeElement;
        this.triggerRect();
    }

    ngDoCheck() {
        this.updateSearchBox();
        this._dirtyCheckNativeValue();
        if (this._triggerRect) {
            if (this.overlayWidth !== this._triggerRect.width) {
                this.overlayWidth = this._triggerRect.width;
            }
            if (this._dropdownRect?.height > 0 && this.overlayHeight !== this._dropdownRect.height) {
                this.overlayHeight = this.listPosition === 'auto' ? this._dropdownRect.height : 0;
            }
        }
    }

    updateSearchBox() {
        const hidden =
            this.displaySearchStatus === 'hidden' ||
            (this.displaySearchStatus !== 'always' &&
                !this.customSearchEnabled &&
                Select2Utils.isSearchboxHidden(this._data, this._minCountForSearch));

        if (this.isSearchboxHidden !== hidden) {
            this.isSearchboxHidden = hidden;
        }
    }

    getOptionStyle(option: Select2Option) {
        return (
            'select2-results__option ' +
            (option.hide ? 'select2-results__option--hide ' : '') +
            (option === this.hoveringOption() ? 'select2-results__option--highlighted ' : '') +
            (option.classes || '')
        );
    }

    mouseenter(option: Select2Option) {
        if (!option.disabled) {
            this.hoveringOption.set(option);
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
        this.select(
            this.resetSelectedValue !== undefined
                ? (Select2Utils.getOptionByValue(this._data, this.resetSelectedValue) ?? null)
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
        if (this.disabled || this.readonly) {
            return;
        }
        this._focus(focus);

        const changeEmit = this.isOpen !== (open ?? !this.isOpen);
        this.isOpen = open ?? !this.isOpen;

        if (this.isOpen) {
            if (!this.isSearchboxHidden) {
                this.innerSearchText = '';
                this.updateFilteredData();
                this._focusSearchbox(focus);
            }

            if (this.isSearchboxHidden && !changeEmit && event) {
                this.keyDown(event);
            } else {
                setTimeout(() => {
                    if (this.option) {
                        const option = Array.isArray(this.option) ? this.option[0] : this.option;
                        this.updateScrollFromOption(option);
                    } else if (this.resultsElement) {
                        this.resultsElement.scrollTop = 0;
                    }
                    setTimeout(() => {
                        this.triggerRect();
                        this.cdkConnectedOverlay?.overlayRef?.updatePosition();
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
        return (
            (select
                ? this.templates?.[(option as Select2Option).templateSelectionId] instanceof TemplateRef ||
                  this.templates?.[`${defaultValue}Selection`] instanceof TemplateRef ||
                  this.templates?.[`templateSelection`] instanceof TemplateRef ||
                  this.templateSelection instanceof TemplateRef
                : false) ||
            this.templates?.[option.templateId] instanceof TemplateRef ||
            this.templates?.[defaultValue] instanceof TemplateRef ||
            this.templates?.['template'] instanceof TemplateRef ||
            this.templates instanceof TemplateRef ||
            false
        );
    }

    getTemplate(option: Select2Option | Select2Group, defaultValue: string, select: boolean = false) {
        return this.hasTemplate(option, defaultValue, select)
            ? (select
                  ? this.templates?.[(option as Select2Option).templateSelectionId] ||
                    this.templates?.[`${defaultValue}Selection`] ||
                    this.templates?.[`templateSelection`] ||
                    this.templateSelection
                  : undefined) ||
                  this.templates?.[option.templateId] ||
                  this.templates?.[defaultValue] ||
                  this.templates?.['template'] ||
                  this.templates
            : undefined;
    }

    triggerRect() {
        this._triggerRect = this.selectionElement.getBoundingClientRect();
        this._dropdownRect = this.dropdown?.nativeElement
            ? this.dropdown.nativeElement.getBoundingClientRect()
            : undefined;
    }

    isNumber(o: any): boolean {
        return !isNaN(o - 0) && o !== null && o !== '' && o !== false;
    }

    selectAll() {
        if (this.multiple) {
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
                this.option = options;
                this.value = options.map(e => e.value);
            } else {
                this.option = [];
                this.value = [];
            }

            this.isOpen = false;
            this.close.emit(this);
        }
    }

    selectAllTest() {
        if (this.multiple && Array.isArray(this.option) && this.option.length) {
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
            return this.option.length === options;
        }
        return false;
    }

    private testSelection(option: Select2Option) {
        if (option.disabled) {
            return false;
        }

        return (
            !this.multiple ||
            !this.limitSelection ||
            (Array.isArray(this._value) && this._value.length < this.limitSelection)
        );
    }

    private testValueChange(value1: Select2UpdateValue, value2: Select2UpdateValue) {
        if (
            ((value1 === null || value1 === undefined) && (value2 === null || value2 === undefined)) ||
            value1 === value2
        ) {
            return false;
        }
        if (
            this.multiple &&
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

    private updateFilteredData(writeValue = false) {
        setTimeout(() => {
            let result = this._data;
            if (this.multiple && this.hideSelectedItems) {
                result = Select2Utils.getFilteredSelectedData(result, this.option);
            }

            if (!this.customSearchEnabled && this.searchText && this.searchText.length >= +this.minCharForSearch) {
                result = Select2Utils.getFilteredData(result, this.searchText, this.editPattern);
            }

            if (this.maxResults > 0) {
                const data = Select2Utils.getReduceData(result, +this.maxResults);
                result = data.result;
                this.maxResultsExceeded = data.reduce;
            } else {
                this.maxResultsExceeded = false;
            }

            if (Select2Utils.optionIsNotInFilteredData(result, this.hoveringOption())) {
                this.hoveringOption.set(Select2Utils.getFirstAvailableOption(result));
            }

            if (writeValue && this._previousNativeValue !== this._value) {
                // refresh current selected value
                this.writeValue(this._control ? this._control.value : this._value);
            }

            this.filteredData.set(result);

            // replace selected options when data change

            if (this.multiple && Array.isArray(this.option) && this.option.length) {
                const options: Select2Option[] = [];
                const value = this.option.map(e => e.value);
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
                this.option = this.option.map(e => options.find(f => f.value === e.value));
            } else if (!Array.isArray(this.option) && this.option) {
                let option: Select2Option = undefined;
                this._data.forEach(e => {
                    if ((e as Select2Group).options) {
                        (e as Select2Group).options.forEach(f => {
                            if ((this.option as Select2Option).value === f.value) {
                                option = f;
                            }
                        });
                    } else if ((this.option as Select2Option).value === (e as Select2Option).value) {
                        option = e as Select2Option;
                    }
                });
                this.option = option;
            }
            this._changeDetectorRef.detectChanges();
        });
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
        if (!this.disabled) {
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
            if (this.multiple) {
                const options = this.option as Select2Option[];
                const index = options.findIndex(op => op.value === option.value);
                if (index === -1) {
                    options.push(option);
                } else {
                    options.splice(index, 1);
                }

                value = (this.option as Select2Option[]).map(op => op.value);
            } else {
                this.option = option;
                if (this.isOpen) {
                    this.isOpen = false;
                    this.close.emit(this);
                    this.selectionElement?.focus();
                }
                value = this.option.value;
                if (!option && this._value === null) {
                    this._value = value ?? null;
                }
            }
        } else {
            // when remove value
            if (Array.isArray(this.option) ? this.option?.length : this.option) {
                value = '';
            }
            this.option = null;
        }

        if (this.multiple && this.hideSelectedItems) {
            this.updateFilteredData();
        }

        emit &&= value !== undefined && this.testDiffValue(this._value, value);

        if (this._control) {
            this._onChange(value);
        }

        if (emit) {
            this._value = value ?? null;
            setTimeout(() => {
                this.update.emit({
                    component: this,
                    value: this._value,
                    options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null,
                });
            });
        }
    }

    private testDiffValue(val1: Select2UpdateValue, val2: any) {
        return Array.isArray(val1) ? (val1 as [])?.length !== val2?.length : val1 !== val2;
    }

    keyDown(event: KeyboardEvent, create = false) {
        if (create && this._testKey(event, ['Enter', 13])) {
            this.createAndAdd(event);
        } else if (this._testKey(event, ['ArrowDown', 40])) {
            this.moveDown();
            event.preventDefault();
        } else if (this._testKey(event, ['ArrowUp', 38])) {
            this.moveUp();
            event.preventDefault();
        } else if (this._testKey(event, ['Enter', 13])) {
            this.selectByEnter();
            event.preventDefault();
        } else if (this._testKey(event, ['Escape', 'Tab', 9, 27]) && this.isOpen) {
            this.toggleOpenAndClose();
            this._focus(false);
        }
    }

    openKey(event: KeyboardEvent, create = false) {
        if (create && this._testKey(event, ['Enter', 13])) {
            this.createAndAdd(event);
        } else if (this._testKey(event, ['ArrowDown', 'ArrowUp', 'Enter', 40, 38, 13])) {
            this.toggleOpenAndClose(true, true, event);
            event.preventDefault();
        } else if (this._testKey(event, ['Escape', 'Tab', 9, 27])) {
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
        if (!this.customSearchEnabled) {
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

    trackBy(_index: number, item: Select2Group | Select2Option): any {
        return (item as Select2Option).value ?? item;
    }

    isSelected(option: Select2Option) {
        return Select2Utils.isSelected(this.option, option, this.multiple);
    }

    isDisabled(option: Select2Option) {
        return option.disabled ? 'true' : 'false';
    }

    removeSelection(e: MouseEvent | KeyboardEvent, option: Select2Option) {
        Select2Utils.removeSelection(this.option, option);

        if (this.multiple && this.hideSelectedItems) {
            this.updateFilteredData();
        }

        const value = (this.option as Select2Option[]).map(op => op.value);

        if (this._control) {
            this._onChange(value);
        } else {
            this._value = value ?? null;
        }

        this.update.emit({
            component: this,
            value: value,
            options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null,
        });
        this.removeOption.emit({
            component: this,
            value: value,
            removedOption: option,
        });

        e.preventDefault();
        e.stopPropagation();

        if (this.isOpen) {
            this._focusSearchbox();
        }
    }

    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value: any) {
        this._setSelectionByValue(value);
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
        this.disabled = isDisabled;
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
        if (typeof this.selectionOverride === 'function') {
            return this.selectionOverride({
                size: this.optionsSize(),
                options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null,
            });
        } else if (typeof this.selectionOverride === 'string') {
            return this.selectionOverride.replaceAll('%size%', `${this.optionsSize()}`);
        }
    }

    getElementId(elt: Select2Group | Select2Option | null): string | null {
        if (!elt) {
            return null;
        }

        const [i, j] = this._getElementPath(elt);
        const toSuffix = index => (index !== undefined ? `-${index}` : '');
        return (elt as Select2Option).id ?? `${this.id()}-option${toSuffix(i)}${toSuffix(j)}`;
    }

    _getElementPath(elt: Select2Group | Select2Option): number[] {
        for (let i = 0; i < this._data.length; i++) {
            const optionOrGroup = this._data[i];

            if (optionOrGroup === elt) {
                return [i];
            }

            const j = (optionOrGroup as Select2Group)?.options?.findIndex(o => o === elt);
            if (j >= 0) {
                return [i, j];
            }
        }

        return [];
    }

    private optionsSize() {
        return Array.isArray(this.option) ? this.option.length : this.option ? 1 : 0;
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
            const item = this.addItem(value.trim());
            this.click(item);
            (e.target as HTMLInputElement).value = '';
            this.autoCreateItem.emit({
                value: item,
                component: this,
                options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null,
            });
        }
        this.stopEvent(e);
    }

    private moveUp() {
        this.updateScrollFromOption(Select2Utils.getPreviousOption(this.filteredData(), this.hoveringOption()));
    }

    private moveDown() {
        this.updateScrollFromOption(Select2Utils.getNextOption(this.filteredData(), this.hoveringOption()));
    }

    private updateScrollFromOption(option: Select2Option) {
        if (option) {
            this.hoveringOption.set(option);
            const domElement = this.results.find(r => r.nativeElement.innerText.trim() === option.label);
            if (domElement && this.resultsElement) {
                this.resultsElement.scrollTop = 0;
                const listClientRect = this.resultsElement.getBoundingClientRect();
                const optionClientRect = domElement.nativeElement.getBoundingClientRect();
                this.resultsElement.scrollTop = optionClientRect.top - listClientRect.top;
            }
        }
    }

    private selectByEnter() {
        if (this.hoveringOption()) {
            this.select(this.hoveringOption());
        }
    }

    private _testKey(event: KeyboardEvent, refs: (number | string)[] = []): boolean {
        return this._isKey(this._getKey(event), refs);
    }

    private _getKey(event: KeyboardEvent): number | string {
        let code: number | string;

        if (event.key !== undefined) {
            code = event.key;
        } else if (event['keyIdentifier'] !== undefined) {
            code = event['keyIdentifier'];
        } else if (event['keyCode'] !== undefined) {
            code = event['keyCode'];
        } else {
            event.preventDefault();
        }

        return code;
    }

    private _isKey(code: number | string, refs: (number | string)[] = []): boolean {
        return refs && refs.length > 0 ? refs.indexOf(code) !== -1 : false;
    }

    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    private _setSelectionByValue(value: any | any[]): void {
        if (this.option || (value !== undefined && value !== null)) {
            const isArray = Array.isArray(value);
            if (this.multiple && value && !isArray) {
                throw new Error('Non array value.');
            } else if (this._data) {
                if (this.multiple) {
                    this.option = []; // if value is null, then empty option and return
                    if (isArray) {
                        // value is not null. Preselect value
                        const selectedValues: any = Select2Utils.getOptionsByValue(this._data, value, this.multiple);
                        selectedValues.map(item => this.select(item, false));
                        this._value ??= value;

                        if (this.testDiffValue(this._value, value)) {
                            this.update.emit({
                                component: this,
                                value: value,
                                options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null,
                            });
                        }
                    } else if (value === null) {
                        // fix if value is null
                        this.value = [];
                        this.reset();
                        this.select(null, false);

                        if (this.testDiffValue(this._value, value)) {
                            this._value = [];
                            this.update.emit({
                                component: this,
                                value: this._value,
                                options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null,
                            });
                        }
                    }
                } else {
                    this._value ??= value;
                    this.select(Select2Utils.getOptionByValue(this._data, value));
                }
            } else if (this._control) {
                this._control.viewToModelUpdate(value);
            }

            this._changeDetectorRef.markForCheck();
        }
    }

    /** Does some manual dirty checking on the native input `value` property. */
    private _dirtyCheckNativeValue() {
        const newValue = this.value;

        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this._stateChanges.next();
        }
    }

    private _focusSearchbox(focus = true) {
        if (!this.isSearchboxHidden) {
            setTimeout(() => {
                if (this.searchInput && this.searchInput.nativeElement && focus) {
                    this.searchInput.nativeElement.focus();
                }
            });
        }
    }

    private _focus(state: boolean) {
        if (!state && this.focused) {
            this.selection.nativeElement.blur();
            this.focused = state;
            this.blur.emit(this);
        } else if (state && !this.focused) {
            this.selection.nativeElement.focus();
            this.focused = state;
            this.focus.emit(this);
        }
    }

    private _isAbobeOverlay(): boolean {
        return this.overlay && this._overlayPosition && this.listPosition === 'auto'
            ? this._overlayPosition === 'top'
            : this.listPosition === 'above';
    }
}
