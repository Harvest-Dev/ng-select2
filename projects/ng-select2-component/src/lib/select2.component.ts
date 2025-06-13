import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import {
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    ConnectedOverlayPositionChange,
    ConnectionPositionPair,
    VerticalConnectionPos,
} from '@angular/cdk/overlay';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { NgTemplateOutlet } from '@angular/common';
import {
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    ElementRef,
    HostBinding,
    HostListener,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Self,
    SimpleChanges,
    TemplateRef,
    booleanAttribute,
    computed,
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

interface KeyInfo {
    key: string;
    altKey: boolean;
}

const OPEN_KEYS_NATIVE: (string | KeyInfo)[] = ['Enter', ' '];
const CLOSE_KEYS_NATIVE: (string | KeyInfo)[] = ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageUp', 'PageDown'];
const OPEN_KEYS: (string | KeyInfo)[] = ['ArrowDown', 'ArrowUp', 'Enter', ' ', 'Home', 'End', 'PageUp', 'PageDown'];
const ON_OPEN_KEYS: (string | KeyInfo)[] = ['Home', 'End', 'PageUp', 'PageDown'];
const CLOSE_KEYS: (string | KeyInfo)[] = ['Escape', 'Tab', { key: 'ArrowUp', altKey: true }];

@Component({
    selector: 'select2, ng-select2',
    templateUrl: './select2.component.html',
    styleUrls: ['./select2.component.scss'],
    standalone: true,
    imports: [CdkOverlayOrigin, NgTemplateOutlet, CdkConnectedOverlay, InfiniteScrollDirective, CdkDropList, CdkDrag],
    host: {
        '[id]': 'id()',
        '[class.select2-selection-nowrap]': 'selectionNoWrap()',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Select2 implements ControlValueAccessor, OnInit, DoCheck, AfterViewInit, OnDestroy, OnChanges {
    readonly _uid = `select2-${nextUniqueId++}`;
    // ----------------------- signal-input

    /** data of options & option groups */
    readonly data = input.required<Select2Data>();

    /** minimum characters to start filter search */
    readonly minCharForSearch = input(0, { transform: numberAttribute });

    /** text placeholder */
    readonly displaySearchStatus = input<'default' | 'hidden' | 'always' | undefined>(undefined);

    /** text placeholder */
    readonly placeholder = input<string | undefined>(undefined);

    /** in multiple: maximum selection element (0 = no limit) */
    readonly limitSelection = input(0, { transform: numberAttribute });

    /** dropdown position */
    readonly listPosition = input<'above' | 'below' | 'auto'>('below');

    /** overlay with CDK Angular position */
    readonly overlay = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** select one or more item */
    readonly multiple = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** drag'n drop list of items in multiple */
    readonly multipleDrag = input<boolean, unknown>(false, { transform: booleanAttribute });

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
    readonly infiniteScroll = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** auto create if not exist */
    readonly autoCreate = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** no template for label selection */
    readonly noLabelTemplate = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** use it for change the pattern of the filter search */
    readonly editPattern = input<((str: string) => string) | undefined>(undefined);

    /** template(s) for formatting */
    readonly templates = input<Select2Template>(undefined);

    /** template for formatting selected option */
    readonly templateSelection = input<TemplateRef<any> | undefined>(undefined);

    /** the max height of the results container when opening the select */
    readonly resultMaxHeight = input('200px');

    /** Active Search event */
    readonly customSearchEnabled = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** minimal data of show the search field */
    readonly minCountForSearch = input(undefined, { transform: numberAttribute });

    /** Unique id of the element. */
    readonly id = input<string>(this._uid);

    /** Unique id of label element. */
    readonly idLabel = computed(() => `${this.id()}-label`);

    /** Unique id of combo element. */
    readonly idCombo = computed(() => `${this.id()}-combo`);

    /** Unique id of options element. */
    readonly idOptions = computed(() => `${this.id()}-options`);

    /** Unique id of overlay element. */
    readonly idOverlay = computed(() => `${this.id()}-overlay`);

    /** Whether the element is required. */
    readonly required = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Whether selected items should be hidden. */
    readonly disabled = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Whether items are hidden when has. */
    readonly hideSelectedItems = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Whether the element is readonly. */
    readonly readonly = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** The input element's value. */
    readonly value = input<Select2UpdateValue>();

    /** Tab index for the select2 element. */
    readonly tabIndex = input(0, { transform: numberAttribute });

    /** reset with no selected value */
    readonly resettable = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** selected value when × is clicked */
    readonly resetSelectedValue = input<any>(undefined);

    /** like native select keyboard navigation (only single mode) */
    readonly nativeKeyboard = input<boolean, unknown>(false, { transform: booleanAttribute });

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
    readonly selectionNoWrap = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Add an option to select or remove all (if all is selected) */
    readonly showSelectAll = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Text for remove all options */
    readonly removeAllText = input('Remove all');

    /** Text for select all options */
    readonly selectAllText = input('Select all');

    // -- WAI related inputs ---

    /** title attribute applied to the input */
    readonly title = input<string>();

    /** aria-labelledby attribute applied to the input, to specify en external label */
    readonly ariaLabelledby = input<string>();

    /** aria-describedby attribute applied to the input */
    readonly ariaDescribedby = input<string>();

    /** aria-invalid attribute applied to the input, to force error state */
    readonly ariaInvalid = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** description of the reset button when using 'resettable'. Default value : 'Reset' */
    readonly ariaResetButtonDescription = input<string>('Reset');

    // ----------------------- output

    readonly update = output<Select2UpdateEvent<Select2UpdateValue>>();
    readonly autoCreateItem = output<Select2AutoCreateEvent<Select2UpdateValue>>();
    readonly open = output<Select2>();
    readonly close = output<Select2>();
    readonly focus = output<Select2>();
    readonly blur = output<Select2>();
    readonly search = output<Select2SearchEvent<Select2UpdateValue>>();
    readonly scroll = output<Select2ScrollEvent>();
    readonly removeOption = output<Select2RemoveEvent<Select2UpdateValue>>();

    // ----------------------- signal viewChild

    readonly cdkConnectedOverlay = viewChild.required(CdkConnectedOverlay);
    readonly selection = viewChild.required<ElementRef<HTMLElement>>('selection');
    readonly resultContainer = viewChild<ElementRef<HTMLElement>>('results');
    readonly results = viewChildren<ElementRef>('result');
    readonly searchInput = viewChild<ElementRef<HTMLElement>>('searchInput');
    readonly dropdown = viewChild<ElementRef<HTMLElement>>('dropdown');

    // ----------------------- HostBinding

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

    get select2Options(): Select2Option[] {
        return this.multiple() ? ((this.selectedOption as Select2Option[]) ?? []) : [];
    }

    get select2Option(): Select2Option | null {
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

    private hoveringOption = signal<Select2Option | null>(null);
    hoveringOptionId = computed(() => this.getElementId(this.hoveringOption()));

    private innerSearchText = '';
    protected isSearchboxHidden: boolean | undefined;

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

    private _disabled = false;

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
        if (this._control) {
            this._control.valueAccessor = this;
        }
        this.toObservable.add(
            toObservable(this.multiple).subscribe(_multiple => {
                this.ngOnInit();
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
    }

    ngOnChanges(changes: SimpleChanges): void {
        let updateFilterData;
        if (changes['data']) {
            this._data = changes['data'].currentValue;
            updateFilterData = true;
        }
        if (changes['value']) {
            const value = changes['value'].currentValue;
            if (this.testValueChange(this._value, value)) {
                if (this._value === undefined) {
                    this._value = value;
                }
                this.writeValue(value);
                updateFilterData = true;
            }
        }
        // now call update filter data so that _data and the current selected values are set
        if (updateFilterData) {
            this.updateFilteredData();
        }
    }

    @HostListener('document:click', ['$event'])
    clickDetection(e: MouseEvent) {
        if (this.isOpen) {
            const target = e.target as HTMLElement;
            if (!this.ifParentContainsClass(target, 'selection')) {
                if (
                    (!this.ifParentContainsClass(target, 'select2-dropdown') &&
                        !this.multiple() &&
                        !this.hideSelectedItems()) ||
                    !(
                        this.ifParentContainsClass(target, 'select2-results__option') ||
                        this.ifParentContainsClass(target, 'select2-dropdown')
                    )
                ) {
                    this.toggleOpenAndClose();
                }

                if (!this.overlay() && !this.ifParentContainsId(target, this.id())) {
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
            this._control ? this._control.value : this.value(),
            this.multiple(),
        );
        if (option !== null) {
            this.selectedOption = option ?? null;
        }
        if (!Array.isArray(option)) {
            this.hoveringOption.set(Select2Utils.getOptionByValue(this._data, this.value));
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
                this._changeDetectorRef.detectChanges();
            }
            if (
                this._dropdownRect &&
                this._dropdownRect.height > 0 &&
                this.overlayHeight !== this._dropdownRect.height
            ) {
                this.overlayHeight = this.listPosition() === 'auto' ? this._dropdownRect.height : 0;
                this.fixValue();
            }
        }
    }

    ngOnDestroy(): void {
        this.toObservable.unsubscribe();
    }

    fixValue() {
        if (!Array.isArray(this.selectedOption) && this.multiple()) {
            const selectedOption = this.selectedOption;
            this.selectedOption = [];
            setTimeout(() => {
                this.select(selectedOption);
                this._changeDetectorRef.detectChanges();
            });
        } else if (Array.isArray(this.selectedOption) && !this.multiple()) {
            const selectedOption = this.selectedOption[0];
            this.selectedOption = null;
            setTimeout(() => {
                this.select(selectedOption);
                this._changeDetectorRef.detectChanges();
            });
        } else {
            this._changeDetectorRef.detectChanges();
        }
    }

    updateSearchBox() {
        if (this.autoCreate() && !this.multiple()) {
            this.isSearchboxHidden = false;
        } else {
            const hidden =
                this.displaySearchStatus() === 'hidden' ||
                (this.displaySearchStatus() !== 'always' &&
                    !this.customSearchEnabled() &&
                    Select2Utils.isSearchboxHidden(this._data, this.minCountForSearch()));

            if (this.isSearchboxHidden !== hidden) {
                this.isSearchboxHidden = hidden;
            }
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
        const resetSelectedValue = this.resetSelectedValue();
        this.select(
            resetSelectedValue !== undefined
                ? (Select2Utils.getOptionByValue(this._data, resetSelectedValue) ?? null)
                : null,
        );

        if (event) {
            this.stopEvent(event);
        }
        this._focus(true);
    }

    prevChange(event: Event) {
        event.stopPropagation();
    }

    stopEvent(event: Event) {
        event.preventDefault();
        event.stopPropagation();
    }

    toggleOpenAndClose(focus = true, open?: boolean, event?: KeyboardEvent) {
        if (this.disabledState || this.readonly()) {
            return;
        }
        this._focus(focus);

        const onOpenAction = event && this._testKey(event, ON_OPEN_KEYS);
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
                if (this.selectedOption) {
                    const option = Array.isArray(this.selectedOption) ? this.selectedOption[0] : this.selectedOption;
                    this.updateScrollFromOption(option);
                } else if (this.resultsElement) {
                    this.resultsElement.scrollTop = 0;
                }
                if (onOpenAction) {
                    this.keyDown(event);
                }
                this._changeDetectorRef.detectChanges();

                this.triggerRect();
                this.cdkConnectedOverlay().overlayRef?.updatePosition();
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
                    if (Select2Utils.isGroup(e)) {
                        e.options.forEach(f => {
                            if (!f.disabled && !f.hide) {
                                options.push(f);
                            }
                        });
                    } else if (!e.disabled && !e.hide) {
                        options.push(e);
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
                if (Select2Utils.isGroup(e)) {
                    e.options.forEach(f => {
                        if (!f.disabled && !f.hide) {
                            options++;
                        }
                    });
                } else if (!e.disabled && !e.hide) {
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
        return !this.multiple() || !limitSelection || this.optionsSize() < limitSelection;
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

        if (Select2Utils.optionIsNotInFilteredData(result, this.hoveringOption())) {
            this.hoveringOption.set(Select2Utils.getFirstAvailableOption(result));
        }

        this.filteredData.set(result);

        // replace selected options when data change

        if (this.multiple() && Array.isArray(this.selectedOption) && this.selectedOption.length) {
            const options: Select2Option[] = [];
            const value = this.selectedOption.map(e => e.value);
            this._data.forEach(e => {
                if (Select2Utils.isGroup(e)) {
                    e.options.forEach(f => {
                        if (value.includes(f.value)) {
                            options.push(f);
                        }
                    });
                } else if (value.includes(e.value)) {
                    options.push(e);
                }
            });
            // preserve selection order
            this.selectedOption = this.selectedOption.map(e => options.find(f => f.value === e.value)!);
        } else if (!Array.isArray(this.selectedOption) && this.selectedOption) {
            let option: Select2Option | null = null;
            this._data.forEach(e => {
                if (Select2Utils.isGroup(e)) {
                    e.options.forEach(f => {
                        if ((this.selectedOption as Select2Option).value === f.value) {
                            option = f;
                        }
                    });
                } else if ((this.selectedOption as Select2Option).value === e.value) {
                    option = e;
                }
            });
            this.selectedOption = option;
        }
        this._changeDetectorRef.detectChanges();
    }

    private clickExit() {
        this._focus(false);
    }

    private isInSelect(elt: Element): boolean {
        return this.ifParentContainsId(elt, this.id()) || this.ifParentContainsId(elt, this.idOverlay());
    }

    private ifParentContainsClass(element: Element, cssClass: string): boolean {
        return this.getParentElementByClass(element, cssClass) !== null;
    }

    private ifParentContainsId(element: Element, id: string): boolean {
        return this.getParentElementById(element, id) !== null;
    }

    private getParentElementByClass(element: Element, cssClass: string): Element | null {
        return this.containClasses(element, cssClass.trim().split(/\s+/))
            ? element
            : element.parentElement
              ? this.getParentElementByClass(element.parentElement, cssClass)
              : null;
    }

    private getParentElementById(element: Element, id: string): Element | null {
        return element.id === id
            ? element
            : element.parentElement
              ? this.getParentElementById(element.parentElement, id)
              : null;
    }

    private containClasses(element: Element, cssClasses: string[]): boolean {
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

    focusin(options?: FocusOptions) {
        if (!this.disabledState) {
            this._focus(true, options);
        }
    }

    focusout(event: FocusEvent) {
        if (!event.relatedTarget || !this.isInSelect(event.relatedTarget as Element)) {
            this._focus(false);
            this._onTouched();
        }
    }

    select(option: Select2Option | null, emit: boolean = true, closeOnSelect: boolean = true) {
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
                if (closeOnSelect && this.isOpen) {
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
                this.updateEvent(value);
            });
        }
    }

    private testDiffValue(val1: Select2UpdateValue | null, val2: any) {
        return Array.isArray(val1) ? (val1 as [])?.length !== val2?.length : val1 !== val2;
    }

    keyDown(event: KeyboardEvent, create = false) {
        if (create && this._testKey(event, ['Enter'])) {
            this.createAndAdd(event);
        } else if (this._testKey(event, [{ key: 'ArrowDown', altKey: false }])) {
            this.moveDown();
            this.actionAfterKeyDownMoveAction(event);
        } else if (this._testKey(event, [{ key: 'ArrowUp', altKey: false }])) {
            this.moveUp();
            this.actionAfterKeyDownMoveAction(event);
        } else if (this._testKey(event, ['Home'])) {
            this.moveStart();
            this.actionAfterKeyDownMoveAction(event);
        } else if (this._testKey(event, ['End'])) {
            this.moveEnd();
            this.actionAfterKeyDownMoveAction(event);
        } else if (this._testKey(event, ['PageUp'])) {
            this.moveUp(10);
            this.actionAfterKeyDownMoveAction(event);
        } else if (this._testKey(event, ['PageDown'])) {
            this.moveDown(10);
            this.actionAfterKeyDownMoveAction(event);
        } else if (this._testKey(event, ['Enter']) || (this.isSearchboxHidden && this._testKey(event, [' ']))) {
            this.selectByEnter(true);
            event.preventDefault();
        } else if (this._testKey(event, CLOSE_KEYS) && this.isOpen) {
            this.toggleOpenAndClose();
            this._focus(true);
        }
    }

    private actionAfterKeyDownMoveAction(event: KeyboardEvent) {
        event.preventDefault();
        if (this.nativeKeyboard() && !this.multiple()) {
            this.selectByEnter(false);
        }
    }

    openKey(event: KeyboardEvent, create = false) {
        if (create && this._testKey(event, ['Enter'])) {
            this.createAndAdd(event);
        } else if (this._testKey(event, this.nativeKeyboard() && !this.multiple() ? OPEN_KEYS_NATIVE : OPEN_KEYS)) {
            this.toggleOpenAndClose(true, true, event);
            event.preventDefault();
        } else if (this.nativeKeyboard() && !this.multiple() && this._testKey(event, CLOSE_KEYS_NATIVE)) {
            this.updateScrollFromOption(this.select2Option);
            this.keyDown(event, create);
        } else if (this._testKey(event, CLOSE_KEYS)) {
            if (this.isOpen) {
                this.toggleOpenAndClose();
                this._onTouched();
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
        if (this.readonly() || this.disabledState) {
            return;
        }

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

        this.updateEvent(value);
        this.removeOption.emit({
            component: this,
            value: value,
            removedOption: option,
        });

        e.preventDefault();
        e.stopPropagation();

        if (this.isOpen) {
            this._focusSearchbox();
        } else {
            this._focus(true);
        }
    }

    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value: any) {
        this.selectedOption = null;
        this._setSelectionByValue(this.multiple() ? (value ?? []) : value);
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

    drop(event: CdkDragDrop<string[], string[], any>) {
        if (Array.isArray(this.selectedOption)) {
            moveItemInArray(this.selectedOption, event.previousIndex, event.currentIndex);
            const value = this.selectedOption.map(e => e.value);
            this.writeValue(value);
            this._value = value;
            this.updateEvent(value);
        }
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

    getElementId(elt: Select2Group | Select2Option | null): string | null {
        if (!elt) {
            return elt;
        } else if (elt.id) {
            return elt.id;
        }

        const [i, j] = this._getElementPath(elt);
        const toSuffix = (index: number) => (index !== undefined ? `-${index}` : '');
        elt.id ??= `${this.id()}-option${toSuffix(i)}${toSuffix(j)}`;
        return elt.id;
    }

    _getElementPath(elt: Select2Group | Select2Option): number[] {
        for (let i = 0; i < this._data.length; i++) {
            const optionOrGroup = this._data[i];

            if (optionOrGroup === elt) {
                return [i];
            } else if (Select2Utils.isGroup(optionOrGroup)) {
                const j = optionOrGroup.options.findIndex(o => o === elt);
                if (j >= 0) {
                    return [i, j];
                }
            }
        }

        return [];
    }

    _toGroup(group: Select2Option | Select2Group) {
        return group as Select2Group;
    }

    _toOption(option: Select2Option | Select2Group) {
        return option as Select2Option;
    }

    private updateEvent(value: Select2UpdateValue) {
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

    private moveUp(times = 1) {
        for (let i = 0; i < times; i++) {
            this.updateScrollFromOption(Select2Utils.getPreviousOption(this.filteredData()!, this.hoveringOption()));
        }
    }

    private moveDown(times = 1) {
        for (let i = 0; i < times; i++) {
            this.updateScrollFromOption(Select2Utils.getNextOption(this.filteredData()!, this.hoveringOption()));
        }
    }

    private moveStart() {
        this.updateScrollFromOption(Select2Utils.getFirstOption(this.filteredData()!));
    }

    private moveEnd() {
        this.updateScrollFromOption(Select2Utils.getLastOption(this.filteredData()!));
    }

    private updateScrollFromOption(option: Select2Option | null) {
        if (option) {
            this.hoveringOption.set(option);
            const domElement = this.results().find(r => r.nativeElement.innerText.trim() === option.label);
            if (domElement && this.resultsElement) {
                const resultClientRect = this.resultsElement.getBoundingClientRect();
                const eltClientRect = domElement.nativeElement.getBoundingClientRect();

                if (eltClientRect.bottom > resultClientRect.bottom) {
                    // Needs element scroll to bottom
                    this.resultsElement.scrollTop += eltClientRect.bottom - resultClientRect.bottom;
                } else if (resultClientRect.top > eltClientRect.top) {
                    // Needs element scroll to top
                    this.resultsElement.scrollTop += eltClientRect.top - resultClientRect.top;
                }
            }
        }
    }

    private selectByEnter(close: boolean = false) {
        const hoveringOption = this.hoveringOption();
        if (hoveringOption) {
            this.select(hoveringOption, true, close);
        }
    }

    private _testKey(event: KeyboardEvent, refs: (string | KeyInfo)[] = []): boolean {
        const { key, altKey } = event;
        return refs.some(ref => {
            if (typeof ref === 'string') {
                return ref === key;
            } else {
                return key === ref.key && altKey === ref.altKey;
            }
        });
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
                            this.updateEvent(value);
                        }
                    } else if (value === null) {
                        // fix if value is null
                        this._value = [];
                        this.reset();
                        this.select(null, false);

                        if (this.testDiffValue(this._value, value)) {
                            this._value = [];
                            this.updateEvent(this._value);
                        }
                    }
                } else {
                    this._value = value;
                    this.select(Select2Utils.getOptionByValue(this._data, this._value), this.isOpen, false);
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

    private _focusSearchbox(focus = true) {
        if (!this.isSearchboxHidden) {
            setTimeout(() => {
                const searchInput = this.searchInput();
                if (searchInput && searchInput.nativeElement && focus) {
                    searchInput.nativeElement.focus();
                }
            });
        }
    }

    private _focus(state: boolean, options?: FocusOptions) {
        if (state) {
            const eltToFocus =
                !this.isSearchboxHidden && this.isOpen
                    ? this.searchInput()!.nativeElement
                    : this.selection().nativeElement;
            if (document.activeElement !== eltToFocus) {
                eltToFocus.focus(options);
            }
        } else if (
            document.activeElement === this.selection()?.nativeElement ||
            document.activeElement === this.searchInput()?.nativeElement
        ) {
            (document.activeElement as HTMLElement).blur();
        }

        this._updateFocusState(state);
    }

    private _isAbobeOverlay(): boolean {
        const listPosition = this.listPosition();
        return this.overlay() && this._overlayPosition && listPosition === 'auto'
            ? this._overlayPosition === 'top'
            : listPosition === 'above';
    }

    protected _updateFocusState(state: boolean) {
        if (!state && this.focused) {
            this.focused = state;
            this.blur.emit(this);
        } else if (state && !this.focused) {
            this.focused = state;
            this.focus.emit(this);
        }
    }
}
