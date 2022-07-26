"use strict";
(self["webpackChunkng_select2"] = self["webpackChunkng_select2"] || []).push([["main"],{

/***/ 4128:
/*!****************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2-const.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMinCountForSearch": () => (/* binding */ defaultMinCountForSearch),
/* harmony export */   "protectRegexp": () => (/* binding */ protectRegexp),
/* harmony export */   "timeout": () => (/* binding */ timeout),
/* harmony export */   "unicodePatterns": () => (/* binding */ unicodePatterns)
/* harmony export */ });
const timeout = 200;
const unicodePatterns = [
    { l: 'a', s: /[ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ]/gi },
    { l: 'aa', s: /ꜳ/gi },
    { l: 'ae', s: /[æǽǣ]/gi },
    { l: 'ao', s: /ꜵ/gi },
    { l: 'au', s: /ꜷ/gi },
    { l: 'av', s: /[ꜹꜻ]/gi },
    { l: 'ay', s: /ꜽ/gi },
    { l: 'b', s: /[ⓑｂḃḅḇƀƃɓ]/gi },
    { l: 'c', s: /[ⓒｃćĉċčçḉƈȼꜿↄ]/gi },
    { l: 'd', s: /[ⓓｄḋďḍḑḓḏđƌɖɗꝺ]/gi },
    { l: 'dz', s: /[ǳǆ]/gi },
    { l: 'e', s: /[ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ]/gi },
    { l: 'f', s: /[ⓕｆḟƒꝼ]/gi },
    { l: 'g', s: /[ⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ]/gi },
    { l: 'h', s: /[ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ]/gi },
    { l: 'hv', s: /ƕ/gi },
    { l: 'i', s: /[ⓘｉìíîĩīĭİïḯỉǐȉȋịįḭɨı]/gi },
    { l: 'j', s: /[ⓙｊĵǰɉ]/gi },
    { l: 'k', s: /[ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ]/gi },
    { l: 'l', s: /[ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇꝆ]/gi },
    { l: 'lj', s: /ǉ/gi },
    { l: 'm', s: /[ⓜｍḿṁṃɱɯ]/gi },
    { l: 'n', s: /[ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ]/gi },
    { l: 'nj', s: /ǌ/gi },
    { l: 'o', s: /[ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔƟꝋꝍɵ]/gi },
    { l: 'oi', s: /ƣ/gi },
    { l: 'oe', s: /œ/gi },
    { l: 'oo', s: /ꝏ/gi },
    { l: 'ou', s: /ȣ/gi },
    { l: 'p', s: /[ⓟｐṕṗƥᵽꝑꝓꝕ]/gi },
    { l: 'q', s: /[ⓠｑɋꝗꝙ]/gi },
    { l: 'r', s: /[ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ]/gi },
    { l: 's', s: /[ⓢｓßẞśṥŝṡšṧṣṩșşȿꞩꞅẛ]/gi },
    { l: 't', s: /[ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ]/gi },
    { l: 'tz', s: /ꜩ/gi },
    { l: 'u', s: /[ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ]/gi },
    { l: 'v', s: /[ⓥｖṽṿʋꝟʌ]/gi },
    { l: 'vy', s: /ꝡ/gi },
    { l: 'w', s: /[ⓦｗẁẃŵẇẅẘẉⱳ]/gi },
    { l: 'x', s: /[ⓧｘẋẍ]/gi },
    { l: 'y', s: /[ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ]/gi },
    { l: 'z', s: /[ⓩｚźẑżžẓẕƶȥɀⱬꝣ]/gi },
];
const defaultMinCountForSearch = 6;
const protectRegexp = new RegExp('[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]', 'g');


/***/ }),

/***/ 2462:
/*!*************************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2-hint.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select2Hint": () => (/* binding */ Select2Hint)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let Select2Hint = class Select2Hint {
};
Select2Hint = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: 'select2-hint' })
], Select2Hint);



/***/ }),

/***/ 300:
/*!*********************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2-interfaces.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8871:
/*!**************************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2-label.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select2Label": () => (/* binding */ Select2Label)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let Select2Label = class Select2Label {
};
Select2Label = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({ selector: 'select2-label' })
], Select2Label);



/***/ }),

/***/ 9442:
/*!****************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2-utils.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select2Utils": () => (/* binding */ Select2Utils)
/* harmony export */ });
/* harmony import */ var _select2_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select2-const */ 4128);

class Select2Utils {
    static getOptionByValue(data, value) {
        if (Array.isArray(data)) {
            for (const groupOrOption of data) {
                const options = groupOrOption.options;
                if (options) {
                    for (const option of options) {
                        if (option.value === value) {
                            return option;
                        }
                    }
                }
                else if (groupOrOption.value === value) {
                    return groupOrOption;
                }
            }
        }
        return null;
    }
    static getOptionsByValue(data, value, multiple) {
        if (multiple) {
            const values = Array.isArray(value) ? value : [];
            const result = [];
            for (const v of values) {
                const option = Select2Utils.getOptionByValue(data, v);
                if (option) {
                    result.push(option);
                }
            }
            return result;
        }
        return Select2Utils.getOptionByValue(data, value);
    }
    static getFirstAvailableOption(data) {
        if (Array.isArray(data)) {
            for (const groupOrOption of data) {
                const options = groupOrOption.options;
                if (options) {
                    for (const option of options) {
                        if (!option.disabled) {
                            return option.value;
                        }
                    }
                }
                else {
                    const option = groupOrOption;
                    if (!option.disabled) {
                        return option.value;
                    }
                }
            }
        }
        return null;
    }
    static valueIsNotInFilteredData(filteredData, value) {
        if (Select2Utils.isNullOrUndefined(value)) {
            return true;
        }
        for (const groupOrOption of filteredData) {
            const options = groupOrOption.options;
            if (options) {
                for (const option of options) {
                    if (option.value === value) {
                        return false;
                    }
                }
            }
            else if (groupOrOption.value === value) {
                return false;
            }
        }
        return true;
    }
    // eslint-disable-next-line
    static getPreviousOption(filteredData, hoveringValue) {
        let findIt = Select2Utils.isNullOrUndefined(hoveringValue);
        for (let i = filteredData.length - 1; i >= 0; i--) {
            const groupOrOption = filteredData[i];
            const options = groupOrOption.options;
            if (options) {
                for (let j = options.length - 1; j >= 0; j--) {
                    const option = options[j];
                    if (findIt && !option.disabled && !option.hide) {
                        return option;
                    }
                    if (!findIt) {
                        findIt = option.value === hoveringValue;
                    }
                }
            }
            else {
                const option = groupOrOption;
                if (findIt && !option.disabled && !option.hide) {
                    return option;
                }
                if (!findIt) {
                    findIt = option.value === hoveringValue;
                }
            }
        }
        return null;
    }
    // eslint-disable-next-line
    static getNextOption(filteredData, hoveringValue) {
        let findIt = Select2Utils.isNullOrUndefined(hoveringValue);
        for (const groupOrOption of filteredData) {
            const options = groupOrOption.options;
            if (options) {
                for (const option of options) {
                    if (findIt) {
                        if (!option.disabled && !option.hide) {
                            return option;
                        }
                    }
                    else if (!findIt) {
                        findIt = option.value === hoveringValue;
                    }
                }
            }
            else {
                const option = groupOrOption;
                if (findIt) {
                    if (!option.disabled && !option.hide) {
                        return option;
                    }
                }
                else if (!findIt) {
                    findIt = option.value === hoveringValue;
                }
            }
        }
        return null;
    }
    static getReduceData(data, maxResults = 0) {
        if (maxResults > 0) {
            let counter = 0;
            const result = [];
            // debugger;
            for (const groupOrOption of data) {
                const options = groupOrOption.options;
                if (options) {
                    const group = {
                        ...groupOrOption,
                        options: [],
                    };
                    result.push(group);
                    for (const item of options) {
                        group.options.push(item);
                        counter++;
                        if (counter === maxResults) {
                            return { result, reduce: true };
                        }
                    }
                }
                else {
                    result.push(groupOrOption);
                    counter++;
                }
                if (counter === maxResults) {
                    return { result, reduce: true };
                }
            }
            return { result, reduce: false };
        }
        else {
            return { result: data, reduce: false };
        }
    }
    static getFilteredData(data, searchText, editPattern) {
        if (searchText) {
            const result = [];
            for (const groupOrOption of data) {
                const options = groupOrOption.options;
                if (options) {
                    if (options.some(group => Select2Utils.containSearchText(group.label, searchText, editPattern))) {
                        const filteredOptions = options.filter(group => Select2Utils.containSearchText(group.label, searchText, editPattern));
                        result.push({
                            ...groupOrOption,
                            options: filteredOptions,
                        });
                    }
                }
                else if (Select2Utils.containSearchText(groupOrOption.label, searchText, editPattern)) {
                    result.push(groupOrOption);
                }
            }
            return result;
        }
        else {
            return data;
        }
    }
    static getFilteredSelectedData(data, selectedOptions) {
        const result = [];
        for (const groupOrOption of data) {
            const options = groupOrOption.options;
            if (options) {
                const filteredOptions = options.filter(group => Select2Utils.isSelected(selectedOptions, group, true) === 'false');
                if (filteredOptions.length) {
                    result.push({
                        ...groupOrOption,
                        options: filteredOptions,
                    });
                }
            }
            else if (Select2Utils.isSelected(selectedOptions, groupOrOption, true) === 'false') {
                result.push(groupOrOption);
            }
        }
        return result;
    }
    static isSearchboxHiddex(data, minCountForSearch) {
        if (minCountForSearch === '' ||
            minCountForSearch === undefined ||
            minCountForSearch === null ||
            isNaN(+minCountForSearch)) {
            minCountForSearch = _select2_const__WEBPACK_IMPORTED_MODULE_0__.defaultMinCountForSearch;
        }
        const optionCount = Select2Utils.getOptionsCount(data);
        return optionCount < +minCountForSearch;
    }
    static isSelected(options, option, multiple) {
        return multiple
            ? options && options.some(op => op.value === option.value)
                ? 'true'
                : 'false'
            : options && option.value === options.value
                ? 'true'
                : 'false';
    }
    static removeSelection(options, option) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === option.value) {
                options.splice(i, 1);
                return;
            }
        }
    }
    static getOptionsCount(data) {
        let count = 0;
        if (Array.isArray(data)) {
            for (const groupOrOption of data) {
                const options = groupOrOption.options;
                if (options) {
                    count += options.length;
                }
                else {
                    count++;
                }
            }
        }
        return count;
    }
    static isNullOrUndefined(value) {
        return value === null || value === undefined;
    }
    static containSearchText(label, searchText, editPattern) {
        return searchText
            ? Select2Utils.formatSansUnicode(label).match(new RegExp(Select2Utils.formatPattern(searchText, editPattern), 'i')) !== null
            : true;
    }
    static protectPattern(str) {
        return str.replace(_select2_const__WEBPACK_IMPORTED_MODULE_0__.protectRegexp, '\\$&');
    }
    static formatSansUnicode(str) {
        for (const unicodePattern of _select2_const__WEBPACK_IMPORTED_MODULE_0__.unicodePatterns) {
            str = str.replace(unicodePattern.s, unicodePattern.l);
        }
        return str;
    }
    static formatPattern(str, editPattern) {
        str = Select2Utils.formatSansUnicode(Select2Utils.protectPattern(str));
        if (editPattern && typeof editPattern === 'function') {
            str = editPattern(str);
        }
        return str;
    }
}


/***/ }),

/***/ 6484:
/*!********************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select2": () => (/* binding */ Select2)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _select2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select2.component.html?ngResource */ 7833);
/* harmony import */ var _select2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select2.component.scss?ngResource */ 8190);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _select2_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select2-const */ 4128);
/* harmony import */ var _select2_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select2-utils */ 9442);










let nextUniqueId = 0;
const displaySearchStatusList = ['default', 'hidden', 'always'];
let Select2 = class Select2 {
    constructor(_viewportRuler, _changeDetectorRef, _parentForm, _parentFormGroup, _control, tabIndex) {
        this._viewportRuler = _viewportRuler;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this._control = _control;
        this.minCharForSearch = 0;
        this.limitSelection = 0;
        this.listPosition = 'below';
        /** use the material style */
        this.styleMode = 'default';
        /** maximum results limit (0 = no limit) */
        this.maxResults = 0;
        /** message when maximum results */
        this.maxResultsMessage = 'Too many results…';
        /** infinite scroll distance */
        this.infiniteScrollDistance = 1.5;
        /** infinite scroll distance */
        this.infiniteScrollThrottle = 150;
        /** the max height of the results container when opening the select */
        this.resultMaxHeight = '200px';
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.removeOption = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.option = null;
        this.isOpen = false;
        /** Whether the element is focused or not. */
        this.focused = false;
        this.hoveringValue = null;
        this.innerSearchText = '';
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this._disabled = false;
        this._required = false;
        this._readonly = false;
        this._multiple = false;
        this._overlay = false;
        this._resettable = false;
        this._hideSelectedItems = false;
        this._clickDetection = false;
        this._uid = `select2-${nextUniqueId++}`;
        this._infiniteScroll = true;
        /** View -> model callback called when select has been touched */
        this._onTouched = () => {
            // do nothing
        };
        /** View -> model callback called when value changes */
        this._onChange = () => {
            // do nothing
        };
        // eslint-disable-next-line no-self-assign
        this.id = this.id;
        this._tabIndex = parseInt(tabIndex, 10) || 0;
        if (this._control) {
            this._control.valueAccessor = this;
        }
        this._clickDetectionFc = this.clickDetection.bind(this);
    }
    /** data of options & optiongrps */
    set data(data) {
        this._data = data;
        this.updateFilteredData();
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = this._coerceBooleanProperty(value);
        this.ngOnInit();
    }
    /** use the material style */
    get overlay() {
        return this._overlay;
    }
    set overlay(value) {
        this._overlay = this._coerceBooleanProperty(value);
    }
    /** infinite scroll activated */
    get infiniteScroll() {
        return this._infiniteScroll;
    }
    set infiniteScroll(value) {
        this._infiniteScroll = this._coerceBooleanProperty(value);
    }
    get select2Options() {
        return this.multiple ? this.option : null;
    }
    get select2Option() {
        return this.multiple ? null : this.option;
    }
    get searchText() {
        return this.innerSearchText;
    }
    set searchText(text) {
        if (this.customSearchEnabled) {
            this.search.emit({
                component: this,
                value: this._value,
                search: text,
            });
        }
        this.innerSearchText = text;
    }
    /** minimal data of show the search field */
    get minCountForSearch() {
        return this._minCountForSearch;
    }
    set minCountForSearch(value) {
        this._minCountForSearch = value;
        this.updateSearchBox();
    }
    /** Unique id of the element. */
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value || this._uid;
    }
    /** Whether the element is required. */
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = this._coerceBooleanProperty(value);
    }
    /** Whether selected items should be hidden. */
    get disabled() {
        return this._control ? this._control.disabled : this._disabled;
    }
    set disabled(value) {
        this._disabled = this._coerceBooleanProperty(value);
    }
    /** Whether items are hidden when has. */
    get hideSelectedItems() {
        return this._hideSelectedItems;
    }
    set hideSelectedItems(value) {
        this._hideSelectedItems = this._coerceBooleanProperty(value);
    }
    /** Whether the element is readonly. */
    get readonly() {
        return this._readonly;
    }
    set readonly(value) {
        this._readonly = this._coerceBooleanProperty(value);
    }
    /** The input element's value. */
    get value() {
        return this._value;
    }
    set value(value) {
        if (this.testValueChange(this._value, value)) {
            setTimeout(() => {
                this._value = value;
                this.writeValue(value);
            }, 10);
        }
    }
    /** Tab index for the select2 element. */
    get tabIndex() {
        return this.disabled ? -1 : this._tabIndex;
    }
    set tabIndex(value) {
        if (typeof value !== 'undefined') {
            this._tabIndex = value;
        }
    }
    /** reset with no selected value */
    get resettable() {
        return this._resettable;
    }
    set resettable(value) {
        this._resettable = this._coerceBooleanProperty(value);
    }
    get ariaInvalid() {
        return this._isErrorState();
    }
    get classMaterial() {
        return this.styleMode === 'material';
    }
    get classNostyle() {
        return this.styleMode === 'noStyle';
    }
    get select2above() {
        return !this.overlay ? this.listPosition === 'above' : this._isAbobeOverlay();
    }
    get _positions() {
        if (this.listPosition === 'auto') {
            [
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'bottom',
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top',
                },
            ];
        }
        else {
            return null;
        }
    }
    get resultsElement() {
        return this.resultContainer?.nativeElement;
    }
    ngOnInit() {
        this._viewportRuler.change(100).subscribe(() => {
            if (this.isOpen) {
                this.triggerRect();
            }
        });
        const option = _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getOptionsByValue(this._data, this._control ? this._control.value : this.value, this.multiple);
        if (option !== null) {
            this.option = option;
        }
        if (!Array.isArray(option)) {
            this.hoveringValue = this.value;
        }
        this.updateSearchBox();
    }
    ngAfterViewInit() {
        this.cdkConnectedOverlay.positionChange.subscribe((posChange) => {
            if (this.listPosition === 'auto' &&
                posChange.connectionPair?.originY &&
                this._overlayPosition !== posChange.connectionPair.originY) {
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
    ngOnDestroy() {
        window.document.body.removeEventListener('click', this._clickDetectionFc);
    }
    updateSearchBox() {
        const hidden = this.customSearchEnabled
            ? false
            : _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.isSearchboxHiddex(this._data, this._minCountForSearch);
        if (this.isSearchboxHidden !== hidden) {
            this.isSearchboxHidden = hidden;
        }
    }
    hideSearch() {
        const displaySearchStatus = displaySearchStatusList.indexOf(this.displaySearchStatus) > -1 ? this.displaySearchStatus : 'default';
        return (displaySearchStatus === 'default' && this.isSearchboxHidden) || displaySearchStatus === 'hidden';
    }
    getOptionStyle(option) {
        return ('select2-results__option ' +
            (option.hide ? 'select2-results__option--hide ' : '') +
            (option.value === this.hoveringValue ? 'select2-results__option--highlighted ' : '') +
            (option.classes || ''));
    }
    mouseenter(option) {
        if (!option.disabled) {
            this.hoveringValue = option.value;
        }
    }
    click(option) {
        if (this.testSelection(option)) {
            this.select(option);
        }
    }
    reset(e) {
        this.select(null);
        e.preventDefault();
        e.stopPropagation();
    }
    prevChange(event) {
        event.stopPropagation();
    }
    toggleOpenAndClose() {
        if (this.disabled) {
            return;
        }
        this._focus(true);
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.innerSearchText = '';
            this.updateFilteredData();
            this._focusSearchboxOrResultsElement();
            setTimeout(() => {
                if (this.option) {
                    const option = this.option instanceof Array ? this.option[0] : this.option;
                    this.updateScrollFromOption(option);
                }
                else if (this.resultsElement) {
                    this.resultsElement.scrollTop = 0;
                }
                setTimeout(() => {
                    this.triggerRect();
                    this.cdkConnectedOverlay?.overlayRef?.updatePosition();
                }, 100);
            });
            this.open.emit(this);
        }
        else {
            this.close.emit(this);
        }
        if (this.isOpen && !this._clickDetection) {
            setTimeout(() => {
                window.document.body.addEventListener('click', this._clickDetectionFc, false);
                this._clickDetection = true;
            }, _select2_const__WEBPACK_IMPORTED_MODULE_2__.timeout);
        }
        this._changeDetectorRef.markForCheck();
    }
    hasTemplate(option, defaut) {
        return (this.templates instanceof _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef ||
            this.templates?.[option.templateId] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef ||
            this.templates?.[defaut] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef);
    }
    getTemplate(option, defaut) {
        return this.hasTemplate(option, defaut)
            ? this.templates[option.templateId] || this.templates[defaut] || this.templates
            : undefined;
    }
    triggerRect() {
        this._triggerRect = this.selectionElement.getBoundingClientRect();
        this._dropdownRect = this.dropdown?.nativeElement
            ? this.dropdown.nativeElement.getBoundingClientRect()
            : undefined;
    }
    testSelection(option) {
        if (option.disabled) {
            return false;
        }
        if (!this.multiple ||
            !this.limitSelection ||
            (Array.isArray(this._value) && this._value.length < this.limitSelection)) {
            return true;
        }
        return false;
    }
    testValueChange(value1, value2) {
        if (((value1 === null || value1 === undefined) && (value2 === null || value2 === undefined)) ||
            value1 === value2) {
            return false;
        }
        if (this.multiple &&
            value1?.length &&
            value2?.length &&
            value1.length === value2.length) {
            for (const e1 of value1) {
                const test = value2.indexOf(e1) > -1;
                if (!test) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    updateFilteredData() {
        setTimeout(() => {
            let result = this._data;
            if (this.multiple && this.hideSelectedItems) {
                result = _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getFilteredSelectedData(result, this.option);
            }
            if (!this.customSearchEnabled && this.searchText && this.searchText.length >= +this.minCharForSearch) {
                result = _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getFilteredData(result, this.searchText, this.editPattern);
            }
            if (this.maxResults > 0) {
                const data = _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getReduceData(result, +this.maxResults);
                result = data.result;
                this.maxResultsExceeded = data.reduce;
            }
            else {
                this.maxResultsExceeded = false;
            }
            if (_select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.valueIsNotInFilteredData(result, this.hoveringValue)) {
                this.hoveringValue = _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getFirstAvailableOption(result);
            }
            this.filteredData = result;
            this._changeDetectorRef.markForCheck();
        });
    }
    clickDetection(e) {
        if (!this.ifParentContainsClass(e.target, 'selection')) {
            if (this.isOpen && !this.ifParentContainsClass(e.target, 'select2-dropdown')) {
                this.toggleOpenAndClose();
            }
            if (!this.ifParentContainsId(e.target, this._id)) {
                this.clickExit();
            }
        }
        else if (this.isOpen && !this.ifParentContainsId(e.target, this._id)) {
            this.toggleOpenAndClose();
            this.clickExit();
        }
    }
    clickExit() {
        this._focus(false);
        window.document.body.removeEventListener('click', this._clickDetectionFc);
        this._clickDetection = false;
    }
    ifParentContainsClass(element, cssClass) {
        return this.getParentElementByClass(element, cssClass) !== null;
    }
    ifParentContainsId(element, id) {
        return this.getParentElementById(element, id) !== null;
    }
    getParentElementByClass(element, cssClass) {
        if (this.containClasses(element, cssClass.trim().split(/\s+/))) {
            return element;
        }
        return element.parentElement ? this.getParentElementByClass(element.parentElement, cssClass) : null;
    }
    getParentElementById(element, id) {
        if (element.id === id) {
            return element;
        }
        return element.parentElement ? this.getParentElementById(element.parentElement, id) : null;
    }
    containClasses(element, cssClasses) {
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
    select(option) {
        let value;
        if (option !== null) {
            if (this.multiple) {
                const options = this.option;
                const index = options.findIndex(op => op.value === option.value);
                if (index === -1) {
                    options.push(option);
                }
                else {
                    options.splice(index, 1);
                }
                value = this.option.map(op => op.value);
            }
            else {
                this.option = option;
                if (this.isOpen) {
                    this.isOpen = false;
                    this.close.emit(this);
                    if (this.selectionElement) {
                        this.selectionElement.focus();
                    }
                }
                value = this.option.value;
            }
        }
        else {
            this.option = null;
        }
        if (this.multiple && this.hideSelectedItems) {
            this.updateFilteredData();
        }
        if (this._control) {
            this._onChange(value);
        }
        else {
            this._value = value;
        }
        this.update.emit({
            component: this,
            value: value,
            options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null,
        });
    }
    keyDown(e) {
        if (this._testKey(e, ['ArrowDown', 40])) {
            this.moveDown();
            e.preventDefault();
        }
        else if (this._testKey(e, ['ArrowUp', 38])) {
            this.moveUp();
            e.preventDefault();
        }
        else if (this._testKey(e, ['Enter', 13])) {
            this.selectByEnter();
            e.preventDefault();
        }
        else if (this._testKey(e, ['Escape', 'Tab', 9, 27]) && this.isOpen) {
            this.toggleOpenAndClose();
            this._focus(false);
        }
    }
    openKey(e) {
        if (this._testKey(e, ['ArrowDown', 'ArrowUp', 'Enter', 40, 38, 13])) {
            this.toggleOpenAndClose();
            e.preventDefault();
        }
        else if (this._testKey(e, ['Escape', 'Tab', 9, 27])) {
            this._focus(false);
            this._onTouched();
        }
    }
    trackBy(_index, item) {
        return item.value;
    }
    searchUpdate(e) {
        this.searchText = e.target.value;
        this.updateFilteredData();
    }
    isSelected(option) {
        return _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.isSelected(this.option, option, this.multiple);
    }
    isDisabled(option) {
        return option.disabled ? 'true' : 'false';
    }
    removeSelection(e, option) {
        _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.removeSelection(this.option, option);
        if (this.multiple && this.hideSelectedItems) {
            this.updateFilteredData();
        }
        const value = this.option.map(op => op.value);
        if (this._control) {
            this._onChange(value);
        }
        else {
            this._value = value;
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
            this._focusSearchboxOrResultsElement();
        }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this._setSelectionByValue(value);
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onScroll(way) {
        this.scroll.emit({
            component: this,
            way,
            search: this.innerSearchText,
        });
    }
    _isErrorState() {
        const isInvalid = this._control && this._control.invalid;
        const isTouched = this._control && this._control.touched;
        const isSubmitted = (this._parentFormGroup && this._parentFormGroup.submitted) ||
            (this._parentForm && this._parentForm.submitted);
        return !!(isInvalid && (isTouched || isSubmitted));
    }
    moveUp() {
        this.updateScrollFromOption(_select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getPreviousOption(this.filteredData, this.hoveringValue));
    }
    moveDown() {
        this.updateScrollFromOption(_select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getNextOption(this.filteredData, this.hoveringValue));
    }
    updateScrollFromOption(option) {
        if (option) {
            this.hoveringValue = option.value;
            const domElement = this.results.find(r => r.nativeElement.innerText.trim() === option.label);
            if (domElement && this.resultsElement) {
                this.resultsElement.scrollTop = 0;
                const listClientRect = this.resultsElement.getBoundingClientRect();
                const optionClientRect = domElement.nativeElement.getBoundingClientRect();
                this.resultsElement.scrollTop = optionClientRect.top - listClientRect.top;
            }
        }
    }
    selectByEnter() {
        if (this.hoveringValue) {
            const option = _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getOptionByValue(this._data, this.hoveringValue);
            this.select(option);
        }
    }
    _testKey(event, refs = []) {
        return this._isKey(this._getKey(event), refs);
    }
    _getKey(event) {
        let code;
        if (event.key !== undefined) {
            code = event.key;
        }
        else if (event['keyIdentifier'] !== undefined) {
            code = event['keyIdentifier'];
        }
        else if (event['keyCode'] !== undefined) {
            code = event['keyCode'];
        }
        else {
            event.preventDefault();
        }
        return code;
    }
    _isKey(code, refs = []) {
        return refs && refs.length > 0 ? refs.indexOf(code) !== -1 : false;
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    _setSelectionByValue(value) {
        if (this.option || (value !== undefined && value !== null)) {
            const isArray = Array.isArray(value);
            if (this.multiple && value && !isArray) {
                throw new Error('Non array value.');
            }
            else if (this._data) {
                if (this.multiple) {
                    this.option = []; // if value is null, then empty option and return
                    if (isArray) {
                        // value is not null. Preselect value
                        const selectedValues = _select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getOptionsByValue(this._data, value, this.multiple);
                        selectedValues.map(item => this.select(item));
                    }
                }
                else {
                    this.select(_select2_utils__WEBPACK_IMPORTED_MODULE_3__.Select2Utils.getOptionByValue(this._data, value));
                }
            }
            else if (this._control) {
                this._control.viewToModelUpdate(value);
            }
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Does some manual dirty checking on the native input `value` property. */
    _dirtyCheckNativeValue() {
        const newValue = this.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this._stateChanges.next();
        }
    }
    _coerceBooleanProperty(value) {
        return value != null && `${value}` !== 'false';
    }
    _focusSearchboxOrResultsElement() {
        if (!this.isSearchboxHidden) {
            setTimeout(() => {
                if (this.searchInput && this.searchInput.nativeElement) {
                    this.searchInput.nativeElement.focus();
                }
            });
        }
        else if (this.resultsElement) {
            this.resultsElement.focus();
        }
    }
    _focus(state) {
        if (!state && this.focused) {
            this.focused = state;
            this.blur.emit(this);
        }
        else if (state && !this.focused) {
            this.focused = state;
            this.focus.emit(this);
        }
    }
    _isAbobeOverlay() {
        return this.overlay && this._overlayPosition && this.listPosition === 'auto'
            ? this._overlayPosition === 'top'
            : this.listPosition === 'above';
    }
};
Select2.ctorParameters = () => [
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ViewportRuler },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Self }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Attribute, args: ['tabindex',] }] }
];
Select2.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    minCharForSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    displaySearchStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    customSearchEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    limitSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    listPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    styleMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    noResultMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    maxResults: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    maxResultsMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    infiniteScrollDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    infiniteScrollThrottle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    editPattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    resultMaxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    removeOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    minCountForSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['id',] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    hideSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    resettable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    ariaInvalid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['attr.aria-invalid',] }],
    classMaterial: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['class.material',] }],
    classNostyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['class.nostyle',] }],
    select2above: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding, args: ['class.select2-above',] }],
    cdkConnectedOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.CdkConnectedOverlay,] }],
    selection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['selection', { static: true },] }],
    resultContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['results',] }],
    results: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChildren, args: ['result',] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['searchInput',] }],
    dropdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['dropdown',] }]
};
Select2 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'select2',
        template: _select2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_select2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Select2);



/***/ }),

/***/ 1286:
/*!*****************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select2Module": () => (/* binding */ Select2Module)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _select2_hint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select2-hint.component */ 2462);
/* harmony import */ var _select2_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select2-label.component */ 8871);
/* harmony import */ var _select2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select2.component */ 6484);









let Select2Module = class Select2Module {
};
Select2Module = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__.InfiniteScrollModule],
        declarations: [_select2_hint_component__WEBPACK_IMPORTED_MODULE_0__.Select2Hint, _select2_label_component__WEBPACK_IMPORTED_MODULE_1__.Select2Label, _select2_component__WEBPACK_IMPORTED_MODULE_2__.Select2],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _select2_hint_component__WEBPACK_IMPORTED_MODULE_0__.Select2Hint, _select2_label_component__WEBPACK_IMPORTED_MODULE_1__.Select2Label, _select2_component__WEBPACK_IMPORTED_MODULE_2__.Select2],
    })
], Select2Module);



/***/ }),

/***/ 7365:
/*!*********************************************************!*\
  !*** ./projects/ng-select2-component/src/public_api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select2": () => (/* reexport safe */ _lib_select2_component__WEBPACK_IMPORTED_MODULE_2__.Select2),
/* harmony export */   "Select2Hint": () => (/* reexport safe */ _lib_select2_hint_component__WEBPACK_IMPORTED_MODULE_3__.Select2Hint),
/* harmony export */   "Select2Label": () => (/* reexport safe */ _lib_select2_label_component__WEBPACK_IMPORTED_MODULE_4__.Select2Label),
/* harmony export */   "Select2Module": () => (/* reexport safe */ _lib_select2_module__WEBPACK_IMPORTED_MODULE_6__.Select2Module),
/* harmony export */   "Select2Utils": () => (/* reexport safe */ _lib_select2_utils__WEBPACK_IMPORTED_MODULE_5__.Select2Utils),
/* harmony export */   "defaultMinCountForSearch": () => (/* reexport safe */ _lib_select2_const__WEBPACK_IMPORTED_MODULE_1__.defaultMinCountForSearch),
/* harmony export */   "protectRegexp": () => (/* reexport safe */ _lib_select2_const__WEBPACK_IMPORTED_MODULE_1__.protectRegexp),
/* harmony export */   "timeout": () => (/* reexport safe */ _lib_select2_const__WEBPACK_IMPORTED_MODULE_1__.timeout),
/* harmony export */   "unicodePatterns": () => (/* reexport safe */ _lib_select2_const__WEBPACK_IMPORTED_MODULE_1__.unicodePatterns)
/* harmony export */ });
/* harmony import */ var _lib_select2_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/select2-interfaces */ 300);
/* harmony import */ var _lib_select2_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/select2-const */ 4128);
/* harmony import */ var _lib_select2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/select2.component */ 6484);
/* harmony import */ var _lib_select2_hint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/select2-hint.component */ 2462);
/* harmony import */ var _lib_select2_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/select2-label.component */ 8871);
/* harmony import */ var _lib_select2_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/select2-utils */ 9442);
/* harmony import */ var _lib_select2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/select2.module */ 1286);
/*
 * Public API Surface of ng-select2-component
 */










/***/ }),

/***/ 3907:
/*!*******************************************!*\
  !*** ./src/app/app-examples.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppExamplesComponent": () => (/* binding */ AppExamplesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_examples_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-examples.component.html?ngResource */ 5805);
/* harmony import */ var _app_examples_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-examples.component.scss?ngResource */ 8303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.data */ 161);






let AppExamplesComponent = class AppExamplesComponent {
    constructor(fb) {
        this.fb = fb;
        this.data1 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data1;
        this.data2 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data2;
        this.data3 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data3;
        this.data4 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data3));
        this.data5 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data5;
        this.data6 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data6;
        this.data7 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data3));
        this.data8 = [];
        this.data9 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data1));
        this.data10 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data1));
        this.data11 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data1));
        this.data12 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data1));
        this.data13 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data13;
        this.data15 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data2;
        this.data16 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data2;
        this.data17 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data17;
        this.data18 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data18;
        this.data19 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data19;
        this.data20 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data19));
        this.data21 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data19));
        this.data22 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data22;
        this.data23 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data23;
        this.data24 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data24;
        this.data25 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data23));
        this.data26 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data26;
        this.data28 = _app_data__WEBPACK_IMPORTED_MODULE_2__.data28;
        this.minCountForSearch = Infinity;
        this.value1 = 'CA';
        this.value2 = 'CA';
        this.value3 = 'foo';
        this.value4 = 'bar';
        this.value5 = 0;
        this.value6 = 'foo3';
        this.value7 = '';
        this.value8 = '';
        this.value9 = [];
        this.value10 = [];
        this.value11 = 'CA';
        this.value12 = 'CA';
        this.value13 = true;
        this.value15 = '';
        this.value16 = '';
        this.value17 = '';
        this.value18 = '';
        this.value19 = '';
        this.value20 = '';
        this.value21 = 'foo6';
        this.value22 = '';
        this.value23 = '';
        this.value24 = '';
        this.value25 = '';
        this.value26 = '';
        this.value28 = '';
        this.limitSelection = 0;
        this.overlay = false;
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(),
        });
        this.ctrlForm = this.fb.group({
            test11: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
        });
        this.ctrlForm2 = this.fb.group({
            test5: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
        });
        this.fg.patchValue(this.formData());
    }
    addItem() {
        const count = this.data6.length + 1;
        this.data6.push({ value: 'foo' + count, label: 'foo' + count });
    }
    removeItem() {
        this.data6.pop();
    }
    open(key, event) {
        console.log(key, event);
    }
    close(key, event) {
        console.log(key, event);
    }
    focus(key, event) {
        console.log(key, event);
    }
    blur(key, event) {
        console.log(key, event);
    }
    change(key, event) {
        console.log(key, event);
    }
    search(key, event) {
        console.log(key, event);
    }
    open8() {
        this.data8 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data2));
    }
    close8() {
        alert('close');
    }
    search8(text) {
        this.data8 = text
            ? JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data2)).filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
            : JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_2__.data2));
    }
    reset11() {
        const test11 = this.ctrlForm.get('test11');
        if (test11) {
            test11.reset();
        }
    }
    change11() {
        const test11 = this.ctrlForm.get('test11');
        if (test11) {
            test11.setValue('UT');
        }
    }
    scroll26(event) {
        console.log('scroll26', event);
        if (event.way === 'down' && !event.search) {
            const l = this.data26.length;
            for (let i = 1 + l; i <= 50 + l; i++) {
                this.data26.push({ value: i, label: '>' + i });
            }
        }
    }
    update(key, event) {
        this[key] = event.value;
    }
    resetForm() {
        this.fg.reset(this.formData());
    }
    print() {
        console.log('FormControl', this.fg.value);
    }
    formData() {
        return {
            state: ['CA', 'NV'],
        };
    }
};
AppExamplesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder }
];
AppExamplesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_examples_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_examples_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppExamplesComponent);



/***/ }),

/***/ 380:
/*!**************************************!*\
  !*** ./src/app/app-gen.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppGenComponent": () => (/* binding */ AppGenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_gen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-gen.component.html?ngResource */ 4380);
/* harmony import */ var _app_gen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-gen.component.scss?ngResource */ 6913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bowser */ 3962);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var json2html_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! json2html-lib */ 1294);
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.data */ 161);








let AppGenComponent = class AppGenComponent {
    constructor(fb) {
        this.fb = fb;
        this.data = _app_data__WEBPACK_IMPORTED_MODULE_3__.data24;
        this.ctrlForm = this.fb.group({
            // data
            json: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(JSON.stringify(this.data, null, 2)),
            // tags
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            hint: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            // parameters
            disabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            overlay: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            minCharForSearch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            minCountForSearch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            displaySearchStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            placeholder: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            customSearchEnabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            multiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            resettable: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            limitSelection: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            hideSelectedItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            resultMaxHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            listPosition: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            infiniteScroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            infiniteScrollDistance: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            infiniteScrollThrottle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            styleMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            noResultMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            maxResults: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            maxResultsMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            // template
            template: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            // event
            update: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            open: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            close: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            focus: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            blur: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            scroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
            removeOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(),
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
    getTemplate(template, option, group, template1, template2) {
        switch (this.ctrlForm.value.template) {
            case 'ref':
                return template;
            case 'option-group':
                return { option: option, group: group };
            case 'templateId':
                return { template1: template1, template2: template2 };
        }
    }
    _event(type, event) {
        if (this.ctrlForm.value && this.ctrlForm.value[type]) {
            console.log('Event', type, event);
        }
    }
    codeGeneration() {
        const json = {
            tag: 'select2',
            attrs: {
                '[data]': 'data',
            },
            body: [],
        };
        const value = this.ctrlForm.value;
        const attrs = json.attrs;
        const body = json.body;
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
        if (value.infiniteScroll) {
            attrs.infiniteScroll = this._testBoolean(value.infiniteScroll);
        }
        if (value.infiniteScrollDistance) {
            attrs.infiniteScrollDistance = value.infiniteScrollDistance;
        }
        if (value.infiniteScrollThrottle) {
            attrs.infiniteScrollThrottle = value.infiniteScrollThrottle;
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
        // template
        switch (value.template) {
            case 'ref':
                attrs['[templates]'] = 'template';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#template': null, 'let-data': 'data' },
                    body: '<ng-container *ngIf="data?.color"> <strong>{{data?.color}}</strong>: </ng-container>{{data?.name}}',
                });
                break;
            case 'option-group':
                attrs['[templates]'] = '{option : option, group: group}';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#option': null, 'let-data': 'data' },
                    body: '{{data?.name}}',
                }, {
                    tag: 'ng-template',
                    attrs: { '#group': null, 'let-label': 'label' },
                    body: 'Group: {{label}}',
                });
                break;
            case 'templateId':
                attrs['[templates]'] = '{template1 : template1, template2: template2}';
                body.push({
                    tag: 'ng-template',
                    attrs: { '#template1': null, 'let-data': 'data' },
                    body: '{{data?.name}}',
                }, {
                    tag: 'ng-template',
                    attrs: { '#template2': null, 'let-label': 'label', 'let-data': 'data' },
                    body: '{{label}} : {{data?.color}}',
                });
                break;
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
        this.html = new json2html_lib__WEBPACK_IMPORTED_MODULE_5__.Json2html(json).toString();
    }
    changeJson(value) {
        this.jsonError = '';
        try {
            this.data = JSON.parse(value);
        }
        catch (error) {
            this.jsonError = this._parseJsonError(value, error);
        }
    }
    _parseJsonError(value, error) {
        let returnMessage = '';
        const message = error.message.match(/[^\n]+/)[0];
        const browser = bowser__WEBPACK_IMPORTED_MODULE_2__.getParser(window.navigator.userAgent).getResult();
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
            }
            else {
                returnMessage = message;
            }
        }
        else if (browser.browser.name === 'Firefox') {
            if (message.match(/at line/)) {
                const [, line, column] = message.match(/at line (\d+) column (\d+)/);
                const lines = value.split(/\n/);
                if (lines[+line - 1]) {
                    returnMessage =
                        message + '<br><pre>' + lines[+line - 1] + '\n' + ' '.repeat(+column - 1) + '^</pre>';
                }
                else {
                    returnMessage = message;
                }
            }
            else {
                returnMessage = message;
            }
        }
        else {
            returnMessage = message;
        }
        return returnMessage;
    }
    _testBoolean(value) {
        return value ? null : undefined;
    }
};
AppGenComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder }
];
AppGenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _app_gen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_gen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppGenComponent);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 161:
/*!*****************************!*\
  !*** ./src/app/app.data.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data1": () => (/* binding */ data1),
/* harmony export */   "data13": () => (/* binding */ data13),
/* harmony export */   "data17": () => (/* binding */ data17),
/* harmony export */   "data18": () => (/* binding */ data18),
/* harmony export */   "data19": () => (/* binding */ data19),
/* harmony export */   "data2": () => (/* binding */ data2),
/* harmony export */   "data22": () => (/* binding */ data22),
/* harmony export */   "data23": () => (/* binding */ data23),
/* harmony export */   "data24": () => (/* binding */ data24),
/* harmony export */   "data26": () => (/* binding */ data26),
/* harmony export */   "data28": () => (/* binding */ data28),
/* harmony export */   "data3": () => (/* binding */ data3),
/* harmony export */   "data5": () => (/* binding */ data5),
/* harmony export */   "data6": () => (/* binding */ data6)
/* harmony export */ });
const data1 = [
    {
        label: 'Alaskan/Hawaiian Time Zone',
        options: [
            { value: 'AK', label: 'Alaska' },
            { value: 'HI', label: 'Hawaii', disabled: true },
        ],
    },
    {
        label: 'Pacific Time Zone',
        options: [
            { value: 'CA', label: 'California' },
            { value: 'NV', label: 'Nevada' },
            { value: 'OR', label: 'Oregon' },
            { value: 'WA', label: 'Washington' },
        ],
    },
    {
        label: 'Mountain Time Zone',
        options: [
            { value: 'AZ', label: 'Arizona' },
            { value: 'CO', label: 'Colorado' },
            { value: 'ID', label: 'Idaho' },
            { value: 'MT', label: 'Montana' },
            { value: 'NE', label: 'Nebraska' },
            { value: 'NM', label: 'New Mexico' },
            { value: 'ND', label: 'North Dakota' },
            { value: 'UT', label: 'Utah' },
            { value: 'WY', label: 'Wyoming' },
        ],
    },
    {
        label: 'Central Time Zone',
        options: [
            { value: 'AL', label: 'Alabama' },
            { value: 'AR', label: 'Arkansas' },
            { value: 'IL', label: 'Illinois' },
            { value: 'IA', label: 'Iowa' },
            { value: 'KS', label: 'Kansas' },
            { value: 'KY', label: 'Kentucky' },
            { value: 'LA', label: 'Louisiana' },
            { value: 'MN', label: 'Minnesota' },
            { value: 'MS', label: 'Mississippi' },
            { value: 'MO', label: 'Missouri' },
            { value: 'OK', label: 'Oklahoma' },
            { value: 'SD', label: 'South Dakota' },
            { value: 'TX', label: 'Texas' },
            { value: 'TN', label: 'Tennessee' },
            { value: 'WI', label: 'Wisconsin' },
        ],
    },
    {
        label: 'Eastern Time Zone',
        options: [
            { value: 'CT', label: 'Connecticut' },
            { value: 'DE', label: 'Delaware' },
            { value: 'FL', label: 'Florida' },
            { value: 'GA', label: 'Georgia' },
            { value: 'IN', label: 'Indiana' },
            { value: 'ME', label: 'Maine' },
            { value: 'MD', label: 'Maryland' },
            { value: 'MA', label: 'Massachusetts' },
            { value: 'MI', label: 'Michigan' },
            { value: 'NH', label: 'New Hampshire' },
            { value: 'NJ', label: 'New Jersey' },
            { value: 'NY', label: 'New York' },
            { value: 'NC', label: 'North Carolina' },
            { value: 'OH', label: 'Ohio' },
            { value: 'PA', label: 'Pennsylvania' },
            { value: 'RI', label: 'Rhode Island' },
            { value: 'SC', label: 'South Carolina' },
            { value: 'VT', label: 'Vermont' },
            { value: 'VA', label: 'Virginia' },
            { value: 'WV', label: 'West Virginia' },
        ],
    },
];
const data2 = [
    { value: 'AK', label: 'Alaska' },
    { value: 'HI', label: 'Hawaii', disabled: true },
    { value: 'CA', label: 'California' },
    { value: 'NV', label: 'Nevada' },
    { value: 'OR', label: 'Oregon' },
    { value: 'WA', label: 'Washington' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'CO', label: 'Colorado' },
    { value: 'ID', label: 'Idaho' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'UT', label: 'Utah' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'AL', label: 'Alabama' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TX', label: 'Texas' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'IN', label: 'Indiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'OH', label: 'Ohio' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia', disabled: true },
    { value: 'WV', label: 'West Virginia' },
];
const data3 = [
    { value: 'foo', label: 'foo' },
    { value: 'bar', label: 'bar' },
    { value: 'baz', label: 'baz' },
];
const data5 = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
];
const data6 = [
    { value: 'foo1', label: 'foo1' },
    { value: 'foo2', label: 'foo2' },
    { value: 'foo3', label: 'foo3' },
    { value: 'foo4', label: 'foo4' },
    { value: 'foo5', label: 'foo5' },
    { value: 'foo6', label: 'foo6' },
];
const data18 = [
    {
        label: 'Mainland region',
        options: [
            { value: 'FR-ARA', label: 'Auvergne-Rhône-Alpes' },
            { value: 'FR-BFC', label: 'Bourgogne-Franche-Comté' },
            { value: 'FR-BRE', label: 'Bretagne' },
            { value: 'FR-CVL', label: 'Centre-Val de Loire' },
            { value: 'FR-COR', label: 'Corse' },
            { value: 'FR-GES', label: 'Grand Est' },
            { value: 'FR-HDF', label: 'Hauts-de-France' },
            { value: 'FR-IDF', label: 'Île-de-France' },
            { value: 'FR-NOR', label: 'Normandie' },
            { value: 'FR-NAQ', label: 'Nouvelle-Aquitaine' },
            { value: 'FR-OCC', label: 'Occitanie' },
            { value: 'FR-PDL', label: 'Pays de la Loire' },
            { value: 'FR-PAC', label: "Provence-Alpes-Côte d'Azur" },
        ],
    },
    {
        label: 'Overseas region',
        options: [
            { value: 'FR-GP', label: 'Guadeloupe' },
            { value: 'FR-MQ', label: 'Martinique' },
            { value: 'FR-GF', label: 'Guyane' },
            { value: 'FR-RE', label: 'La Réunion' },
            { value: 'FR-YT', label: 'Mayotte' },
        ],
    },
];
const data19 = [
    { value: 'foo1', label: 'foo1' },
    { value: 'foo2', label: 'foo2' },
    { value: 'foo3', label: 'foo3' },
    { value: 'foo4', label: 'foo4' },
    { value: 'foo5', label: 'foo5' },
    { value: 'foo6', label: 'foo6' },
    { value: 'foo7', label: 'foo7' },
    { value: 'foo8', label: 'foo8' },
    { value: 'foo9', label: 'foo9', hide: true },
];
const data13 = [
    { value: true, label: 'true' },
    { value: false, label: 'false' },
];
const data17 = [
    {
        value: 'fr',
        label: `<div class="select2-multiple-labels">
                    <div>France</div>
                    <div>Europe</div>
                </div>`,
    },
    {
        value: 'sp',
        label: `<div class="select2-multiple-labels">
                    <div>Spain</div>
                    <div>Europe</div>
                </div>`,
    },
    {
        value: 'ch',
        label: `<div class="select2-multiple-labels">
                    <div>China</div>
                    <div>Asia</div>
                </div>`,
    },
];
const data22 = [
    { value: 'heliotrope', label: 'Heliotrope', classes: 'white flower', id: 'option-heliotrope' },
    { value: 'hibiscus', label: 'Hibiscus', classes: 'red flower', id: 'option-hibiscus' },
    { value: 'lily', label: 'Lily', classes: 'white flower', id: 'option-lily' },
    { value: 'marigold', label: 'Marigold', classes: 'red flower', id: 'option-marigold' },
    { value: 'petunia', label: 'Petunia', classes: 'white flower', id: 'option-petunia' },
    { value: 'sunflower', label: 'Sunflower', classes: 'yellow flower', id: 'option-sunflower' },
];
const data23 = [
    {
        value: 'heliotrope',
        label: 'Heliotrope',
        data: { color: 'white', name: 'Heliotrope' },
        templateId: 'template1',
        id: 'option-heliotrope',
    },
    {
        value: 'hibiscus',
        label: 'Hibiscus',
        data: { color: 'red', name: 'Hibiscus' },
        templateId: 'template1',
        id: 'option-hibiscus',
    },
    {
        value: 'lily',
        label: 'Lily',
        data: { color: 'white', name: 'Lily' },
        templateId: 'template2',
        id: 'option-lily',
    },
    {
        value: 'marigold',
        label: 'Marigold',
        data: { color: 'red', name: 'Marigold' },
        templateId: 'template2',
        id: 'option-marigold',
    },
    {
        value: 'petunia',
        label: 'Petunia',
        data: { color: 'white', name: 'Petunia' },
        templateId: 'template3',
        id: 'option-petunia',
    },
    {
        value: 'sunflower',
        label: 'Sunflower',
        data: { color: 'yellow', name: 'Sunflower' },
        templateId: 'template3',
        id: 'option-sunflower',
    },
];
const data24 = [
    {
        label: 'Red',
        data: { name: '(Red)' },
        options: [
            {
                value: 'hibiscus',
                label: 'Hibiscus',
                data: { color: 'red', name: 'Hibiscus' },
                templateId: 'template1',
                id: 'option-hibiscus',
            },
            {
                value: 'marigold',
                label: 'Marigold',
                data: { color: 'red', name: 'Marigold' },
                templateId: 'template2',
                id: 'option-marigold',
            },
        ],
    },
    {
        label: 'Yellow',
        data: { name: '(Yellow)' },
        options: [
            {
                value: 'sunflower',
                label: 'Sunflower',
                data: { color: 'yellow', name: 'Sunflower' },
                templateId: 'template3',
                id: 'option-sunflower',
            },
        ],
    },
    {
        label: 'White',
        data: { name: '(White)' },
        options: [
            {
                value: 'heliotrope',
                label: 'Heliotrope',
                data: { color: 'white', name: 'Heliotrope' },
                templateId: 'template1',
                id: 'option-heliotrope',
            },
            {
                value: 'lily',
                label: 'Lily',
                data: { color: 'white', name: 'Lily' },
                templateId: 'template2',
                id: 'option-lily',
            },
            {
                value: 'petunia',
                label: 'Petunia',
                data: { color: 'white', name: 'Petunia' },
                templateId: 'template3',
                id: 'option-petunia',
            },
        ],
    },
];
let data26 = [];
for (let i = 1; i <= 50; i++) {
    data26.push({ value: i, label: '>' + i });
}
let data28 = [];
for (let i = 1; i <= 200; i++) {
    data28.push({ value: i, label: 'item n° ' + i });
}


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "hljsLanguages": () => (/* binding */ hljsLanguages)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var projects_ng_select2_component_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/ng-select2-component/src/public_api */ 7365);
/* harmony import */ var _app_examples_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-examples.component */ 3907);
/* harmony import */ var _app_gen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-gen.component */ 380);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ 6738);










/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
function hljsLanguages() {
    return [
        { name: 'typescript', func: __webpack_require__(/*! highlight.js/lib/languages/typescript */ 2016) },
        { name: 'javascript', func: __webpack_require__(/*! highlight.js/lib/languages/javascript */ 5407) },
        { name: 'scss', func: __webpack_require__(/*! highlight.js/lib/languages/scss */ 541) },
        { name: 'xml', func: __webpack_require__(/*! highlight.js/lib/languages/xml */ 5275) },
    ];
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _app_examples_component__WEBPACK_IMPORTED_MODULE_1__.AppExamplesComponent, _app_gen_component__WEBPACK_IMPORTED_MODULE_2__.AppGenComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, projects_ng_select2_component_src_public_api__WEBPACK_IMPORTED_MODULE_0__.Select2Module, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__.HighlightModule],
        providers: [
            {
                provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__.HIGHLIGHT_OPTIONS,
                useValue: {
                    coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 8622)),
                    lineNumbersLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlightjs-line-numbers_js_src_highlightjs-line-numbers_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlightjs-line-numbers.js */ 5523, 23)),
                    languages: {
                        typescript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 5281)),
                        javascript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_javascript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/javascript */ 9633)),
                        css: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_css_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/css */ 9009)),
                        xml: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 526)),
                    },
                },
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_examples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-examples.component */ 3907);
/* harmony import */ var _app_gen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-gen.component */ 380);





const routes = [
    { path: 'examples', component: _app_examples_component__WEBPACK_IMPORTED_MODULE_0__.AppExamplesComponent },
    { path: 'generator', component: _app_gen_component__WEBPACK_IMPORTED_MODULE_1__.AppGenComponent },
    { path: '**', component: _app_examples_component__WEBPACK_IMPORTED_MODULE_0__.AppExamplesComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 8190:
/*!*********************************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".select2-label {\n  color: #000;\n  color: var(--select2-label-text-color, #000);\n}\n\n.select2-container {\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n  width: 100%;\n}\n\n.select2-container .select2-container-dropdown {\n  position: absolute;\n  width: 0px;\n  opacity: 0;\n}\n\n.select2-container .select2-selection--single {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  height: 28px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.select2-container .select2-selection--single .select2-selection__rendered {\n  display: block;\n  padding: 0 0 0 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1 1 auto;\n}\n\n.select2-container .select2-selection--single .select2-selection__clear {\n  position: relative;\n}\n\n.select2-container .select2-selection--multiple {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  min-height: 32px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.select2-container .select2-selection--multiple .select2-selection__rendered {\n  display: inline-block;\n  overflow: hidden;\n  padding-left: 8px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.select2-container .select2-search--inline {\n  float: left;\n}\n\n.select2-container .select2-search--inline .select2-search__field {\n  box-sizing: border-box;\n  border: none;\n  font-size: 100%;\n  margin-top: 5px;\n  padding: 0;\n}\n\n.select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\n.select2-dropdown {\n  background: white;\n  background: var(--select2-dropdown-background, white);\n  border: 1px solid #aaa;\n  border: 1px solid var(--select2-dropdown-border-color, #aaa);\n  border-radius: 4px;\n  border-radius: var(--select2-selection-border-radius, 4px);\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 100%;\n  z-index: 1051;\n  height: 0;\n  overflow: hidden;\n}\n\n.select2-dropdown .select2-label-content {\n  /* autoprefixer: ignore next */\n  display: contents;\n}\n\n.select2-results {\n  display: block;\n}\n\n.select2-results__options {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.select2-results__option {\n  padding: 6px;\n  -webkit-user-select: none;\n          user-select: none;\n  color: #000;\n  color: var(--select2-option-text-color, #000);\n}\n\n.select2-results__option[aria-selected] {\n  cursor: pointer;\n}\n\n.select2-container.select2-container-dropdown.select2-container--open {\n  width: 100%;\n  opacity: 1;\n}\n\n.select2-container--open .select2-dropdown {\n  overflow: auto;\n  height: auto;\n}\n\n.select2-container--open .select2-dropdown--above {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  bottom: 27px;\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.select2-container--open .select2-dropdown--below {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.select2-search--dropdown {\n  display: block;\n  padding: 4px;\n}\n\n.select2-search--dropdown .select2-search__field {\n  padding: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\n.select2-search--dropdown.select2-search--hide {\n  display: none;\n}\n\n.select2-close-mask {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  min-width: 100%;\n  height: auto;\n  width: auto;\n  opacity: 0;\n  z-index: 99;\n  background: #fff;\n  filter: alpha(opacity=0);\n}\n\n.select2-required::before {\n  content: \"*\";\n  color: red;\n  color: var(--select2-required-color, red);\n}\n\n.select2-hidden-accessible {\n  border: 0 !important;\n  clip: rect(0 0 0 0) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n}\n\n.select2-container--default .select2-selection--single {\n  background: #fff;\n  background: var(--select2-selection-background, #fff);\n  border: 1px solid #aaa;\n  border: 1px solid var(--select2-selection-border-color, #aaa);\n  border-radius: 4px;\n  border-radius: var(--select2-selection-border-radius, 4px);\n  display: flex;\n}\n\n.select2-container--default .select2-selection--single .select2-selection__rendered {\n  color: #444;\n  color: var(--select2-selection-text-color, #444);\n  line-height: 28px;\n}\n\n.select2-container--default .select2-selection--single .select2-selection__clear {\n  cursor: pointer;\n  float: right;\n  font-weight: bold;\n}\n\n.select2-container--default .select2-selection--single .select2-selection__placeholder {\n  color: #999;\n  color: var(--select2-placeholder-color, #999);\n}\n\n.select2-container--default .select2-selection--single .select2-selection__placeholder span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-overflow: var(--select2-placeholder-overflow, ellipsis);\n}\n\n.select2-container--default .select2-selection--single .select2-selection__placeholder__option {\n  display: none;\n}\n\n.select2-container--default .select2-selection--single .select2-selection__reset,\n.select2-container--default .select2-selection--single .select2-selection__arrow {\n  display: flex;\n  width: 20px;\n  align-items: center;\n  justify-content: center;\n}\n\n.select2-container--default .select2-selection--single .select2-selection__arrow::before {\n  content: \" \";\n  border-color: #888 transparent;\n  border-color: var(--select2-arrow-color, #888) transparent;\n  border-style: solid;\n  border-width: 5px 4px 0;\n  height: 0;\n  width: 0;\n}\n\n.select2-container--default .select2-selection--single .select2-selection__reset {\n  color: #999;\n  color: var(--select2-reset-color, #999);\n}\n\n.select2-container--default.select2-container--disabled .select2-selection--single {\n  background: #eee;\n  background: var(--select2-selection-disabled-background, #eee);\n  cursor: default;\n}\n\n.select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear {\n  display: none;\n}\n\n.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow::before {\n  border-color: transparent transparent #888;\n  border-color: transparent transparent var(--select2-arrow-color, #888);\n  border-width: 0 4px 5px;\n}\n\n.select2-container--default .select2-selection--multiple {\n  background: #fff;\n  background: var(--select2-selection-background, #fff);\n  border: 1px solid #aaa;\n  border: 1px solid var(--select2-selection-border-color, #aaa);\n  border-radius: 4px;\n  border-radius: var(--select2-selection-border-radius, 4px);\n  cursor: text;\n}\n\n.select2-container--default .select2-selection--multiple .select2-selection__rendered {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  list-style: none;\n  margin: 0;\n  padding: 0 5px;\n  width: 100%;\n}\n\n.select2-container--default .select2-selection--multiple .select2-selection__rendered li {\n  list-style: none;\n}\n\n.select2-container--default .select2-selection--multiple .select2-selection__placeholder {\n  display: block;\n  width: 100%;\n  color: #999;\n  color: var(--select2-placeholder-color, #999);\n  margin-top: 5px;\n  float: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-overflow: var(--select2-placeholder-overflow, ellipsis);\n}\n\n.select2-container--default .select2-selection--multiple .select2-selection__placeholder__option {\n  display: none;\n}\n\n.select2-container--default .select2-selection--multiple .select2-selection__clear {\n  cursor: pointer;\n  float: right;\n  font-weight: bold;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n\n.select2-container--default .select2-selection--multiple .select2-selection__choice {\n  color: #000;\n  color: var(--select2-selection-choice-text-color, #000);\n  background: #e4e4e4;\n  background: var(--select2-selection-choice-background, #e4e4e4);\n  border: 1px solid #aaa;\n  border: 1px solid var(--select2-selection-choice-border-color, #aaa);\n  border-radius: 4px;\n  border-radius: var(--select2-selection-border-radius, 4px);\n  cursor: default;\n  float: left;\n  margin-right: 5px;\n  margin-top: 5px;\n  padding: 0 5px;\n}\n\n.select2-container--default .select2-selection--multiple .select2-selection__choice__remove {\n  color: #999;\n  color: var(--select2-selection-choice-close-color, #999);\n  cursor: pointer;\n  display: inline-block;\n  font-weight: bold;\n  margin-right: 2px;\n}\n\n.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {\n  color: #333;\n  color: var(--select2-selection-choice-hover-close-color, #333);\n}\n\n.select2-container--default.select2-container--focused .select2-selection--multiple {\n  border: solid #000 1px;\n  border: solid var(--select2-selection-focus-border-color, #000) 1px;\n  outline: none;\n}\n\n.select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--single,\n.select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--multiple {\n  border: solid #000 1px;\n  border: solid var(--select2-selection-focus-border-color, #000) 1px;\n  outline: none;\n}\n\n.select2-container--default.select2-container--disabled .select2-selection--multiple {\n  background: #eee;\n  background: var(--select2-selection-disabled-background, #eee);\n  cursor: default;\n}\n\n.select2-container--default.select2-container--disabled .select2-selection__choice__remove {\n  display: none;\n}\n\n.select2-container--default.select2-container--open.select2-container--above .select2-selection--single,\n.select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.select2-container--default.select2-container--open.select2-container--below .select2-selection--single,\n.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.select2-container--default .select2-search--dropdown .select2-search__field {\n  border: 1px solid #aaa;\n  border: 1px solid var(--select2-search-border-color, #aaa);\n  background: #fff;\n  background: 1px solid var(--select2-search-background, #fff);\n  border-radius: 0px;\n  border-radius: var(--select2-search-border-radius, 0px);\n}\n\n.select2-container--default .select2-search--inline .select2-search__field {\n  background: transparent;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  -webkit-appearance: textfield;\n}\n\n.select2-container--default .select2-results > .select2-results__options {\n  overflow-y: auto;\n}\n\n.select2-container--default .select2-results__option[role=group] {\n  padding: 0;\n}\n\n.select2-container--default .select2-results__option[aria-disabled=true] {\n  color: #999;\n  color: var(--select2-option-disabled-text-color, #999);\n  background: transparent;\n  background: var(--select2-option-disabled-background, transparent);\n}\n\n.select2-container--default .select2-results__option[aria-selected=true] {\n  color: #000;\n  color: var(--select2-option-selected-text-color, #000);\n  background: #ddd;\n  background: var(--select2-option-selected-background, #ddd);\n}\n\n.select2-container--default .select2-results__option .select2-results__option {\n  padding-left: 1em;\n}\n\n.select2-container--default .select2-results__option .select2-results__option .select2-results__group {\n  padding-left: 0;\n}\n\n.select2-container--default .select2-results__option .select2-results__option .select2-results__option {\n  margin-left: -1em;\n  padding-left: 2em;\n}\n\n.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n  margin-left: -2em;\n  padding-left: 3em;\n}\n\n.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n  margin-left: -3em;\n  padding-left: 4em;\n}\n\n.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n  margin-left: -4em;\n  padding-left: 5em;\n}\n\n.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n  margin-left: -5em;\n  padding-left: 6em;\n}\n\n.select2-container--default .select2-results__option--highlighted[aria-selected] {\n  background: #5897fb;\n  background: var(--select2-option-highlighted-background, #5897fb);\n  color: #fff;\n  color: var(--select2-option-highlighted-text-color, #fff);\n}\n\n.select2-container--default .select2-results__option--hide {\n  display: none;\n}\n\n.select2-container--default .select2-results__group {\n  cursor: default;\n  display: block;\n  padding: 6px;\n  color: gray;\n  color: var(--select2-option-group-text-color, gray);\n  background: transparent;\n  background: var(--select2-option-group-background, transparent);\n}\n\n.select2-no-result {\n  color: #888;\n  color: var(--select2-no-result-color, #888);\n  font-style: italic;\n  font-style: var(--select2-no-result-font-style, italic);\n}\n\n.select2-too-much-result {\n  color: #888;\n  color: var(--select2-too-much-result-color, #888);\n  font-style: italic;\n  font-style: var(--select2-too-much-font-style, italic);\n}\n\n:host.nostyle .select2-dropdown {\n  border-color: transparent;\n}\n\n:host.nostyle .select2-selection--single,\n:host.nostyle .select2-selection--multiple {\n  background: transparent;\n  border-color: transparent;\n}\n\n:host.nostyle .select2-container--default .select2-focused .select2-selection--single,\n:host.nostyle .select2-container--default .select2-focused .select2-selection--multiple,\n:host.nostyle .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--single,\n:host.nostyle .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--multiple {\n  background: transparent;\n  border-color: transparent;\n}\n\n/* stylelint-disable-next-line selector-type-no-unknown */\n\n:host.material {\n  display: inline-block;\n  width: 300px;\n}\n\n:host.material > .select2-container {\n  padding-bottom: 1.29688em;\n  vertical-align: inherit;\n}\n\n:host.material > .select2-container .selection {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent;\n  display: inline-flex;\n  align-items: baseline;\n  width: 100%;\n  height: auto;\n}\n\n:host.material .select2-container--default .select2-selection--single,\n:host.material .select2-container--default .select2-selection--multiple {\n  width: 100%;\n  border: 0;\n  border-radius: 0;\n  height: 24px;\n  box-sizing: border-box;\n}\n\n:host.material .select2-container--default .select2-selection--single::before,\n:host.material .select2-container--default .select2-selection--multiple::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  bottom: 1.65em;\n  background: #ddd;\n  background: var(--select2-material-underline, #ddd);\n  height: 1px;\n  width: 100%;\n}\n\n:host.material .select2-container--default .select2-selection--single::after,\n:host.material .select2-container--default .select2-selection--multiple::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  bottom: 1.63em;\n  background: #5a419e;\n  background: var(--select2-material-underline-active, #5a419e);\n  height: 2px;\n  width: 0%;\n  left: 50%;\n  transition: none;\n}\n\n:host.material .select2-container--default .select2-selection--single .select2-selection__rendered,\n:host.material .select2-container--default .select2-selection--multiple .select2-selection__rendered {\n  padding-left: 1px;\n  line-height: inherit;\n}\n\n:host.material .select2-container--default .select2-selection--single .select2-selection__placeholder,\n:host.material .select2-container--default .select2-selection--multiple .select2-selection__placeholder {\n  display: block;\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--select2-material-placeholder-color, rgba(0, 0, 0, 0.38));\n  transition: transform 0.3s;\n  position: absolute;\n  transform-origin: 0 21px;\n  left: 0;\n  top: 20px;\n}\n\n:host.material .select2-container--default .select2-container--open {\n  left: 0;\n  bottom: 1.6em;\n}\n\n:host.material .select2-container--default .select2-selection__placeholder__option {\n  transform: translateY(-1.5em) scale(0.75) perspective(100px) translateZ(0.001px);\n  width: 133.33333%;\n}\n\n:host.material .select2-container--default .select2-selection__arrow {\n  top: 20px;\n}\n\n:host.material .select2-container--default.select2-container--open .select2-selection--single::after,\n:host.material .select2-container--default.select2-container--open .select2-selection--multiple::after,\n:host.material .select2-container--default .select2-focused .select2-selection--single::after,\n:host.material .select2-container--default .select2-focused .select2-selection--multiple::after {\n  transition: width 0.3s cubic-bezier(0.12, 1, 0.77, 1), left 0.3s cubic-bezier(0.12, 1, 0.77, 1);\n  width: 100%;\n  left: 0%;\n}\n\n:host.material .select2-container--default .select2-dropdown {\n  border-radius: 0;\n  border: 0;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);\n}\n\n:host.material .select2-container--default .select2-results__option[aria-selected=true],\n:host.material .select2-container--default .select2-results__option--highlighted[aria-selected] {\n  background: rgba(0, 0, 0, 0.04);\n  background: var(--select2-material-option-selected-background, rgba(0, 0, 0, 0.04));\n  color: #000;\n  color: var(--select2-material-option-highlighted-text-color, #000);\n}\n\n:host.material .select2-container--default .select2-results__option[aria-selected=true] {\n  color: #ff5722;\n  color: var(--select2-material-option-selected-text-color, #ff5722);\n}\n\n:host.material .select2-container--default.select2-container--disabled .select2-selection--single, :host.material .select2-container--default.select2-container--disabled .select2-selection--multiple {\n  background: transparent;\n}\n\n:host.material .select2-container--default.select2-container--disabled .select2-selection--single::before, :host.material .select2-container--default.select2-container--disabled .select2-selection--multiple::before {\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.26) 0, rgba(0, 0, 0, 0.26) 33%, transparent 0);\n  background: var(--select2-material-underline-disabled, linear-gradient(to right, rgba(0, 0, 0, 0.26) 0, rgba(0, 0, 0, 0.26) 33%, transparent 0));\n  background-size: 4px 1px;\n  background-repeat: repeat-x;\n  background-position: 0 bottom;\n}\n\n:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--single::before, :host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--single::after, :host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--multiple::before, :host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--multiple::after {\n  background: red;\n  background: var(--select2-material-underline-invalid, red);\n}\n\n:host.material:not(.select2-container--open) .select2-focused .select2-selection--single,\n:host.material:not(.select2-container--open) .select2-focused .select2-selection--multiple {\n  border: 0;\n}\n\n:host.material .select2-subscript-wrapper {\n  position: absolute;\n  top: calc(100% - 1.72917em);\n  font-size: 75%;\n  color: #888;\n  color: var(--select2-hint-text-color, #888);\n}\n\n::ng-deep .select2-overlay-backdrop {\n  background: rgba(0, 0, 0, 0.32);\n  background: var(--select2-overlay-backdrop, transparent);\n}\n\n::ng-deep .cdk-overlay-container .select2-container .select2-dropdown.select2-dropdown--above {\n  bottom: 28px;\n}\n\n::ng-deep .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown {\n  margin-bottom: 28px;\n}\n\n::ng-deep .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown.select2-dropdown--above {\n  bottom: 0;\n  margin-bottom: 0;\n  margin-top: 28px;\n}\n\n/* stylelint-disable selector-type-no-unknown */\n\n@supports (-moz-appearance: none) {\n  select2.material .select2-container--default .select2-selection--single,\nselect2.material .select2-container--default .select2-selection--multiple {\n    height: 26px;\n  }\n}\n\n@supports (-ms-scroll-limit: 0) {\n  select2.material .select2-container--default .select2-selection--single,\nselect2.material .select2-container--default .select2-selection--multiple {\n    height: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdDIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsNENBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDUjs7QUFFSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUFSOztBQUVRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFaOztBQUdRO0VBQ0ksa0JBQUE7QUFEWjs7QUFLSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFIUjs7QUFLUTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIWjs7QUFPSTtFQUNJLFdBQUE7QUFMUjs7QUFPUTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUxaOztBQU9ZO0VBQ0ksd0JBQUE7QUFMaEI7O0FBV0E7RUFDSSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBUko7O0FBVUk7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FBUlI7O0FBWUE7RUFDSSxjQUFBO0FBVEo7O0FBWUE7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBVEo7O0FBWUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtBQVRKOztBQVdJO0VBQ0ksZUFBQTtBQVRSOztBQWFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFWSjs7QUFjSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBWFI7O0FBY0k7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBWlI7O0FBZUk7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFiUjs7QUFpQkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQWRKOztBQWdCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFkUjs7QUFnQlE7RUFDSSx3QkFBQTtBQWRaOztBQWtCSTtFQUNJLGFBQUE7QUFoQlI7O0FBb0JBO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFJQSxnQkFBQTtFQUNBLHdCQUFBO0FBcEJKOztBQXVCQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7QUFwQko7O0FBdUJBO0VBQ0ksb0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQXBCSjs7QUF3Qkk7RUFDSSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxhQUFBO0FBckJSOztBQXVCUTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLGlCQUFBO0FBckJaOztBQXdCUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF0Qlo7O0FBeUJRO0VBQ0ksV0FBQTtFQUNBLDZDQUFBO0FBdkJaOztBQXlCWTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDREQUFBO0FBdkJoQjs7QUEyQlE7RUFDSSxhQUFBO0FBekJaOztBQTRCUTs7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUExQlo7O0FBNkJRO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMERBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUEzQlo7O0FBOEJRO0VBQ0ksV0FBQTtFQUNBLHVDQUFBO0FBNUJaOztBQWlDUTtFQUNJLGdCQUFBO0VBQ0EsOERBQUE7RUFDQSxlQUFBO0FBL0JaOztBQWlDWTtFQUNJLGFBQUE7QUEvQmhCOztBQXNDWTtFQUNJLDBDQUFBO0VBQ0Esc0VBQUE7RUFDQSx1QkFBQTtBQXBDaEI7O0FBeUNJO0VBQ0ksZ0JBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0EsWUFBQTtBQXZDUjs7QUF5Q1E7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXZDWjs7QUF5Q1k7RUFDSSxnQkFBQTtBQXZDaEI7O0FBMkNRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDREQUFBO0FBekNaOztBQTRDUTtFQUNJLGFBQUE7QUExQ1o7O0FBNkNRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTNDWjs7QUE4Q1E7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxtQkFBQTtFQUNBLCtEQUFBO0VBQ0Esc0JBQUE7RUFDQSxvRUFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE1Q1o7O0FBK0NRO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQTdDWjs7QUErQ1k7RUFDSSxXQUFBO0VBQ0EsOERBQUE7QUE3Q2hCOztBQW1EUTtFQUNJLHNCQUFBO0VBQ0EsbUVBQUE7RUFDQSxhQUFBO0FBakRaOztBQXNEUTs7RUFFSSxzQkFBQTtFQUNBLG1FQUFBO0VBQ0EsYUFBQTtBQXBEWjs7QUF5RFE7RUFDSSxnQkFBQTtFQUNBLDhEQUFBO0VBQ0EsZUFBQTtBQXZEWjs7QUEwRFE7RUFDSSxhQUFBO0FBeERaOztBQTZEUTs7RUFFSSx5QkFBQTtFQUNBLDBCQUFBO0FBM0RaOztBQWdFUTs7RUFFSSw0QkFBQTtFQUNBLDZCQUFBO0FBOURaOztBQW1FUTtFQUNJLHNCQUFBO0VBQ0EsMERBQUE7RUFDQSxnQkFBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtBQWpFWjs7QUFzRVE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXBFWjs7QUF3RUk7RUFDSSxnQkFBQTtBQXRFUjs7QUEwRVE7RUFDSSxVQUFBO0FBeEVaOztBQTJFUTtFQUNJLFdBQUE7RUFDQSxzREFBQTtFQUNBLHVCQUFBO0VBQ0Esa0VBQUE7QUF6RVo7O0FBNEVRO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBQTFFWjs7QUE2RVE7RUFDSSxpQkFBQTtBQTNFWjs7QUE2RVk7RUFDSSxlQUFBO0FBM0VoQjs7QUE4RVk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBNUVoQjs7QUE4RWdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQTVFcEI7O0FBOEVvQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUE1RXhCOztBQThFd0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBNUU1Qjs7QUE4RTRCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQTVFaEM7O0FBcUZJO0VBQ0ksbUJBQUE7RUFDQSxpRUFBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtBQW5GUjs7QUFzRkk7RUFDSSxhQUFBO0FBcEZSOztBQXVGSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtREFBQTtFQUNBLHVCQUFBO0VBQ0EsK0RBQUE7QUFyRlI7O0FBeUZBO0VBQ0ksV0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtBQXRGSjs7QUF5RkE7RUFDSSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLHNEQUFBO0FBdEZKOztBQTBGSTtFQUNJLHlCQUFBO0FBdkZSOztBQTBGSTs7RUFFSSx1QkFBQTtFQUNBLHlCQUFBO0FBeEZSOztBQTZGUTs7OztFQUVJLHVCQUFBO0VBQ0EseUJBQUE7QUF6Rlo7O0FBK0ZBLHlEQUFBOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBNUZKOztBQThGSTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUE1RlI7O0FBOEZRO0VBQ0ksbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTVGWjs7QUFpR1E7O0VBRUksV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQS9GWjs7QUFpR1k7O0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUE5RmhCOztBQWlHWTs7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQTlGaEI7O0FBaUdZOztFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUE5RmhCOztBQWlHWTs7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxxRUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBOUZoQjs7QUFrR1E7RUFDSSxPQUFBO0VBQ0EsYUFBQTtBQWhHWjs7QUFtR1E7RUFDSSxnRkFBQTtFQUNBLGlCQUFBO0FBakdaOztBQW9HUTtFQUNJLFNBQUE7QUFsR1o7O0FBdUdZOzs7O0VBRUksK0ZBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQW5HaEI7O0FBdUdRO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7QUFyR1o7O0FBd0dROztFQUVJLCtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxXQUFBO0VBQ0Esa0VBQUE7QUF0R1o7O0FBeUdRO0VBQ0ksY0FBQTtFQUNBLGtFQUFBO0FBdkdaOztBQTBHUTtFQUVJLHVCQUFBO0FBekdaOztBQTJHWTtFQUNJLG9HQUFBO0VBQ0EsZ0pBQUE7RUFJQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUE1R2hCOztBQW1IUTtFQUVJLGVBQUE7RUFDQSwwREFBQTtBQWxIWjs7QUF1SFE7O0VBRUksU0FBQTtBQXJIWjs7QUF5SEk7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQXZIUjs7QUE0SEk7RUFDSSwrQkFBQTtFQUNBLHdEQUFBO0FBekhSOztBQTRIUTtFQUNJLFlBQUE7QUExSFo7O0FBNEhRO0VBQ0ksbUJBQUE7QUExSFo7O0FBMkhZO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF6SGhCOztBQWdJQSwrQ0FBQTs7QUFDQTtFQUNJOztJQUVJLFlBQUE7RUE3SE47QUFDRjs7QUFrSUE7RUFDSTs7SUFFSSxZQUFBO0VBaElOO0FBQ0YiLCJmaWxlIjoic2VsZWN0Mi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3QyLWxhYmVsIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1sYWJlbC10ZXh0LWNvbG9yLCAjMDAwKTtcbn1cblxuLnNlbGVjdDItY29udGFpbmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuc2VsZWN0Mi1jb250YWluZXItZHJvcGRvd24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA4cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QyLXNlYXJjaC0taW5saW5lIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgLnNlbGVjdDItc2VhcmNoX19maWVsZCB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0Mi1kcm9wZG93biB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1kcm9wZG93bi1iYWNrZ3JvdW5kLCB3aGl0ZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWxlY3QyLWRyb3Bkb3duLWJvcmRlci1jb2xvciwgI2FhYSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWJvcmRlci1yYWRpdXMsIDRweCk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA1MTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5zZWxlY3QyLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgIH1cbn1cblxuLnNlbGVjdDItcmVzdWx0cyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbnMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiB7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi10ZXh0LWNvbG9yLCAjMDAwKTtcblxuICAgICZbYXJpYS1zZWxlY3RlZF0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1jb250YWluZXItZHJvcGRvd24uc2VsZWN0Mi1jb250YWluZXItLW9wZW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiB7XG4gICAgLnNlbGVjdDItZHJvcGRvd24ge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5zZWxlY3QyLWRyb3Bkb3duLS1hYm92ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3R0b206IDI3cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cge1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG59XG5cbi5zZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDRweDtcblxuICAgIC5zZWxlY3QyLXNlYXJjaF9fZmllbGQge1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICY6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLXNlYXJjaC0taGlkZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uc2VsZWN0Mi1jbG9zZS1tYXNrIHtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDk5O1xuXG4gICAgLy8gc3R5bGVzIHJlcXVpcmVkIGZvciBJRSB0byB3b3JrXG5cbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eSA9IDApO1xufVxuXG4uc2VsZWN0Mi1yZXF1aXJlZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnKic7XG4gICAgY29sb3I6IHJlZDtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1yZXF1aXJlZC1jb2xvciwgcmVkKTtcbn1cblxuLnNlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUge1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogLTFweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQge1xuICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tYmFja2dyb3VuZCwgI2ZmZik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWJvcmRlci1jb2xvciwgI2FhYSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tYm9yZGVyLXJhZGl1cywgNHB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLXRleHQtY29sb3IsICM0NDQpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLXBsYWNlaG9sZGVyLWNvbG9yLCAjOTk5KTtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IHZhcigtLXNlbGVjdDItcGxhY2Vob2xkZXItb3ZlcmZsb3csIGVsbGlwc2lzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJfX29wdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19yZXNldCxcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODg4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWxlY3QyLWFycm93LWNvbG9yLCAjODg4KSB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweCA0cHggMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19yZXNldCB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLXJlc2V0LWNvbG9yLCAjOTk5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkIHtcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWRpc2FibGVkLWJhY2tncm91bmQsICNlZWUpO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiB7XG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3c6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjODg4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tc2VsZWN0Mi1hcnJvdy1jb2xvciwgIzg4OCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDRweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tYmFja2dyb3VuZCwgI2ZmZik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWJvcmRlci1jb2xvciwgI2FhYSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tYm9yZGVyLXJhZGl1cywgNHB4KTtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1wbGFjZWhvbGRlci1jb2xvciwgIzk5OSk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiB2YXIoLS1zZWxlY3QyLXBsYWNlaG9sZGVyLW92ZXJmbG93LCBlbGxpcHNpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyX19vcHRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLXNlbGVjdGlvbi1jaG9pY2UtdGV4dC1jb2xvciwgIzAwMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLWJhY2tncm91bmQsICNlNGU0ZTQpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWNob2ljZS1ib3JkZXItY29sb3IsICNhYWEpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tYm9yZGVyLXJhZGl1cywgNHB4KTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLWNsb3NlLWNvbG9yLCAjOTk5KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLXNlbGVjdGlvbi1jaG9pY2UtaG92ZXItY2xvc2UtY29sb3IsICMzMzMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tZm9jdXNlZCB7XG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMDAwIDFweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tZm9jdXMtYm9yZGVyLWNvbG9yLCAjMDAwKSAxcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLnNlbGVjdDItY29udGFpbmVyLS1vcGVuKSAuc2VsZWN0Mi1mb2N1c2VkIHtcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMDAwIDFweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tZm9jdXMtYm9yZGVyLWNvbG9yLCAjMDAwKSAxcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLXNlbGVjdGlvbi1kaXNhYmxlZC1iYWNrZ3JvdW5kLCAjZWVlKTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuc2VsZWN0Mi1jb250YWluZXItLW9wZW4uc2VsZWN0Mi1jb250YWluZXItLWFib3ZlIHtcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tb3Blbi5zZWxlY3QyLWNvbnRhaW5lci0tYmVsb3cge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSxcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duIHtcbiAgICAgICAgLnNlbGVjdDItc2VhcmNoX19maWVsZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VsZWN0Mi1zZWFyY2gtYm9yZGVyLWNvbG9yLCAjYWFhKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAxcHggc29saWQgdmFyKC0tc2VsZWN0Mi1zZWFyY2gtYmFja2dyb3VuZCwgI2ZmZik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWxlY3QyLXNlYXJjaC1ib3JkZXItcmFkaXVzLCAwcHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUge1xuICAgICAgICAuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QyLXJlc3VsdHMgPiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICAgICAgICAmW3JvbGU9J2dyb3VwJ10ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItb3B0aW9uLWRpc2FibGVkLXRleHQtY29sb3IsICM5OTkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi1kaXNhYmxlZC1iYWNrZ3JvdW5kLCB0cmFuc3BhcmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAmW2FyaWEtc2VsZWN0ZWQ9J3RydWUnXSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi1zZWxlY3RlZC10ZXh0LWNvbG9yLCAjMDAwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kLCAjZGRkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcblxuICAgICAgICAgICAgLnNlbGVjdDItcmVzdWx0c19fZ3JvdXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcblxuICAgICAgICAgICAgICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcblxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkW2FyaWEtc2VsZWN0ZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzU4OTdmYjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1vcHRpb24taGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCwgIzU4OTdmYik7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1vcHRpb24taGlnaGxpZ2h0ZWQtdGV4dC1jb2xvciwgI2ZmZik7XG4gICAgfVxuXG4gICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1yZXN1bHRzX19ncm91cCB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi1ncm91cC10ZXh0LWNvbG9yLCBncmF5KTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItb3B0aW9uLWdyb3VwLWJhY2tncm91bmQsIHRyYW5zcGFyZW50KTtcbiAgICB9XG59XG5cbi5zZWxlY3QyLW5vLXJlc3VsdCB7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgY29sb3I6IHZhcigtLXNlbGVjdDItbm8tcmVzdWx0LWNvbG9yLCAjODg4KTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zdHlsZTogdmFyKC0tc2VsZWN0Mi1uby1yZXN1bHQtZm9udC1zdHlsZSwgaXRhbGljKTtcbn1cblxuLnNlbGVjdDItdG9vLW11Y2gtcmVzdWx0IHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi10b28tbXVjaC1yZXN1bHQtY29sb3IsICM4ODgpO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXN0eWxlOiB2YXIoLS1zZWxlY3QyLXRvby1tdWNoLWZvbnQtc3R5bGUsIGl0YWxpYyk7XG59XG5cbjpob3N0Lm5vc3R5bGUge1xuICAgIC5zZWxlY3QyLWRyb3Bkb3duIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSxcbiAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLWZvY3VzZWQsXG4gICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0Om5vdCguc2VsZWN0Mi1jb250YWluZXItLW9wZW4pIC5zZWxlY3QyLWZvY3VzZWQge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSxcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIG1hdGVyaWFsIHN0eWxlXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG46aG9zdC5tYXRlcmlhbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgICYgPiAuc2VsZWN0Mi1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yOTY4OGVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcblxuICAgICAgICAuc2VsZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNDM3NWVtIDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAwLjg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IHtcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMS42NWVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1tYXRlcmlhbC11bmRlcmxpbmUsICNkZGQpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDEuNjNlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWE0MTllO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItbWF0ZXJpYWwtdW5kZXJsaW5lLWFjdGl2ZSwgIzVhNDE5ZSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItbWF0ZXJpYWwtcGxhY2Vob2xkZXItY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4zOCkpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDIxcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1jb250YWluZXItLW9wZW4ge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMS42ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyX19vcHRpb24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDFweCk7XG4gICAgICAgICAgICB3aWR0aDogMTMzLjMzMzMzJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cge1xuICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbixcbiAgICAgICAgLnNlbGVjdDItZm9jdXNlZCB7XG4gICAgICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZTo6YWZ0ZXIsXG4gICAgICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlOjphZnRlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC4xMiwgMSwgMC43NywgMSksIGxlZnQgMC4zcyBjdWJpYy1iZXppZXIoMC4xMiwgMSwgMC43NywgMSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1kcm9wZG93biB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkPSd0cnVlJ10sXG4gICAgICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWRbYXJpYS1zZWxlY3RlZF0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItbWF0ZXJpYWwtb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQsIHJnYmEoMCwgMCwgMCwgMC4wNCkpO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1tYXRlcmlhbC1vcHRpb24taGlnaGxpZ2h0ZWQtdGV4dC1jb2xvciwgIzAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZD0ndHJ1ZSddIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmY1NzIyO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItbWF0ZXJpYWwtb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3IsICNmZjU3MjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsXG4gICAgICAgICYuc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuMjYpIDAsIHJnYmEoMCwgMCwgMCwgMC4yNikgMzMlLCB0cmFuc3BhcmVudCAwKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoXG4gICAgICAgICAgICAgICAgICAgIC0tc2VsZWN0Mi1tYXRlcmlhbC11bmRlcmxpbmUtZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjI2KSAwLCByZ2JhKDAsIDAsIDAsIDAuMjYpIDMzJSwgdHJhbnNwYXJlbnQgMClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNHB4IDFweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBib3R0b207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5nLWludmFsaWQubmctdG91Y2hlZCAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsXG4gICAgJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItbWF0ZXJpYWwtdW5kZXJsaW5lLWludmFsaWQsIHJlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCguc2VsZWN0Mi1jb250YWluZXItLW9wZW4pIC5zZWxlY3QyLWZvY3VzZWQge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSxcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSAxLjcyOTE3ZW0pO1xuICAgICAgICBmb250LXNpemU6IDc1JTtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLWhpbnQtdGV4dC1jb2xvciwgIzg4OCk7XG4gICAgfVxufVxuXG46Om5nLWRlZXAge1xuICAgIC5zZWxlY3QyLW92ZXJsYXktYmFja2Ryb3Age1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLW92ZXJsYXktYmFja2Ryb3AsIHRyYW5zcGFyZW50KTtcbiAgICB9XG4gICAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1kcm9wZG93bi5zZWxlY3QyLWRyb3Bkb3duLS1hYm92ZSB7XG4gICAgICAgICAgICBib3R0b206IDI4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1vcGVuLnNlbGVjdDItcG9zaXRpb24tYXV0byAuc2VsZWN0Mi1kcm9wZG93biB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgICAgICAgICAgJi5zZWxlY3QyLWRyb3Bkb3duLS1hYm92ZSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gbWF0ZXJpYWwgZml4IChmaXJlZm94KVxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG5Ac3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xuICAgIHNlbGVjdDIubWF0ZXJpYWwgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlLFxuICAgIHNlbGVjdDIubWF0ZXJpYWwgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgfVxufVxuXG4vLyBtYXRlcmlhbCBmaXggKG1zIGVkZ2UpXG5cbkBzdXBwb3J0cyAoLW1zLXNjcm9sbC1saW1pdDogMCkge1xuICAgIHNlbGVjdDIubWF0ZXJpYWwgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlLFxuICAgIHNlbGVjdDIubWF0ZXJpYWwgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 8303:
/*!********************************************************!*\
  !*** ./src/app/app-examples.component.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n#select2-17 ::ng-deep .select2-multiple-labels {\n  display: flex;\n  justify-content: space-between;\n}\n.noStyle {\n  background-color: antiquewhite;\n}\n.flower-list ::ng-deep .flower.white::before {\n  content: \"🌼 \";\n}\n.flower-list ::ng-deep .flower.red::before {\n  content: \"🌹 \";\n}\n.flower-list ::ng-deep .flower.yellow::before {\n  content: \"🌻 \";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQUNBO0VBQ0ksOEJBQUE7QUFFSjtBQUVJO0VBQ0ksY0FBQTtBQUNSO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7QUFEUiIsImZpbGUiOiJhcHAtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VsZWN0Mi0xNyA6Om5nLWRlZXAgLnNlbGVjdDItbXVsdGlwbGUtbGFiZWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5vU3R5bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmZsb3dlci1saXN0IDo6bmctZGVlcCAuZmxvd2VyIHtcbiAgICAmLndoaXRlOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAn8J+MvCAnO1xuICAgIH1cblxuICAgICYucmVkOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAn8J+MuSAnO1xuICAgIH1cblxuICAgICYueWVsbG93OjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAn8J+MuyAnO1xuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 6913:
/*!***************************************************!*\
  !*** ./src/app/app-gen.component.scss?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "label {\n  display: inline-block;\n  width: 250px;\n}\n\n.cols {\n  display: flex;\n  max-width: 100%;\n}\n\n.cols > * {\n  flex: 1 0 50%;\n  max-width: 50%;\n}\n\n.code {\n  overflow: auto;\n}\n\n.error {\n  color: red;\n}\n\ntextarea#json {\n  width: calc(100% - 15px);\n  resize: vertical;\n  box-sizing: border-box;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1nZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNSOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUFKIiwiZmlsZSI6ImFwcC1nZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLmNvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgJiA+ICoge1xuICAgICAgICBmbGV4OiAxIDAgNTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICB9XG59XG5cbi5jb2RlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG50ZXh0YXJlYSNqc29uIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!\n  Theme: GitHub\n  Description: Light theme as seen on github.com\n  Author: github.com\n  Maintainer: @Hirse\n  Updated: 2021-05-15\n\n  Outdated base version: https://github.com/primer/github-syntax-light\n  Current colors taken from GitHub's CSS\n*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}:root {\n  /* label */\n  --select2-label-text-color: #000;\n  --select2-required-color: red;\n  /* selection */\n  --select2-selection-border-radius: 4px;\n  --select2-selection-background: #fff;\n  --select2-selection-disabled-background: #eee;\n  --select2-selection-border-color: #aaa;\n  --select2-selection-focus-border-color: #000;\n  --select2-selection-text-color: #444;\n  /* selection: choice item (multiple) */\n  --select2-selection-choice-background: #e4e4e4;\n  --select2-selection-choice-text-color: #000;\n  --select2-selection-choice-border-color: #aaa;\n  --select2-selection-choice-close-color: #999;\n  --select2-selection-choice-hover-close-color: #333;\n  /* placeholder */\n  --select2-placeholder-color: #999;\n  --select2-placeholder-overflow: ellipsis;\n  /* no result message */\n  --select2-no-result-color: #888;\n  --select2-no-result-font-style: italic;\n  /* no result message */\n  --select2-too-much-result-color: #888;\n  --select2-too-much-result-style: italic;\n  /* reset */\n  --select2-reset-color: #999;\n  /* arrow */\n  --select2-arrow-color: #888;\n  /* dropdown panel */\n  --select2-dropdown-background: #fff;\n  --select2-dropdown-border-color: #aaa;\n  /* overlay */\n  --select2-overlay-backdrop: transparent;\n  /* search field */\n  --select2-search-border-color: #aaa;\n  --select2-search-background: #fff;\n  --select2-search-border-radius: 0px;\n  /* dropdown option */\n  --select2-option-text-color: #000;\n  --select2-option-disabled-text-color: #999;\n  --select2-option-disabled-background: transparent;\n  --select2-option-selected-text-color: #000;\n  --select2-option-selected-background: #ddd;\n  --select2-option-highlighted-text-color: #fff;\n  --select2-option-highlighted-background: #5897fb;\n  --select2-option-group-text-color: gray;\n  --select2-option-group-background: transparent;\n  /* hint */\n  --select2-hint-text-color: #888;\n  /* for Material ------------------------------------------*/\n  --select2-material-underline: #ddd;\n  --select2-material-underline-active: #5a419e;\n  --select2-material-underline-disabled: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.26) 0,\n      rgba(0, 0, 0, 0.26) 33%,\n      transparent 0\n  );\n  --select2-material-underline-invalid: red;\n  --select2-material-placeholder-color: rgba(0, 0, 0, 0.38);\n  --select2-material-selection-background: #ddd;\n  --select2-material-option-selected-background: rgba(0, 0, 0, 0.04);\n  --select2-material-option-highlighted-text-color: #000;\n  --select2-material-option-selected-text-color: #ff5722;\n}nav ul {\n  display: block;\n}nav li {\n  display: inline-block;\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS1wcmVidWlsdC5jc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL3N0eWxlcy9naXRodWIuY3NzIiwiYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1EQUFtRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLGNBQWMsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLFlBQVksQ0FBQyw0QkFBNEIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLHNCQUFzQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLHlEQUF5RCxDQUFDLFNBQVMsQ0FBQyxtREFBbUQsU0FBUyxDQUFDLDZFQUE2RSxVQUFVLENBQUMsMkJBQTJCLDBCQUEwQixDQUFDLGtDQUFrQyxtREFBbUQsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsK0RBQStELFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxxQ0FBcUMsZUFBZSxDQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLGNBQWMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENDQXp3QyxjQUFjLGFBQWEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFVBQVUsZUFBZSxDQUFDOzs7Ozs7Ozs7Q0FTakYsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxlQUFlLENBQUMsbUlBQW1JLGFBQWEsQ0FBQyxvRkFBb0YsYUFBYSxDQUFDLDBKQUEwSixhQUFhLENBQUMsa0RBQWtELGFBQWEsQ0FBQyw0QkFBNEIsYUFBYSxDQUFDLHVDQUF1QyxhQUFhLENBQUMsZ0VBQWdFLGFBQWEsQ0FBQyxZQUFZLGFBQWEsQ0FBQyxjQUFjLGFBQWEsQ0FBQyxlQUFlLENBQUMsYUFBYSxhQUFhLENBQUMsZUFBZSxhQUFhLENBQUMsaUJBQWlCLENBQUMsYUFBYSxhQUFhLENBQUMsZUFBZSxDQUFDLGVBQWUsYUFBYSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsYUFBYSxDQUFDLHdCQUF3QixDQ05wOUI7RUFDSSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esb0NBQUE7RUFFQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0RBQUE7RUFFQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFFQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFFQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFFQSxVQUFBO0VBQ0EsMkJBQUE7RUFFQSxVQUFBO0VBQ0EsMkJBQUE7RUFFQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFFQSxZQUFBO0VBQ0EsdUNBQUE7RUFFQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUVBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1Q0FBQTtFQUNBLDhDQUFBO0VBRUEsU0FBQTtFQUNBLCtCQUFBO0VBRUEsMkRBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0E7Ozs7O0dBQUE7RUFNQSx5Q0FBQTtFQUNBLHlEQUFBO0VBQ0EsNkNBQUE7RUFDQSxrRUFBQTtFQUNBLHNEQUFBO0VBQ0Esc0RBQUE7QUFiSixDQWlCSTtFQUNJLGNBQUE7QUFkUixDQWlCSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQWZSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZGstb3ZlcmxheS1jb250YWluZXIsLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye3BvaW50ZXItZXZlbnRzOm5vbmU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmNkay1vdmVybGF5LWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eXtkaXNwbGF5Om5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LXBhbmV7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LmNkay1vdmVybGF5LWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MTAwMDtwb2ludGVyLWV2ZW50czphdXRvOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO3RyYW5zaXRpb246b3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eToxfS5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTouNn0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMyKX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3B7dHJhbnNpdGlvbjp2aXNpYmlsaXR5IDFtcyBsaW5lYXIsb3BhY2l0eSAxbXMgbGluZWFyO3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjA7dmlzaWJpbGl0eTp2aXNpYmxlfS5jZGstb3ZlcmxheS1iYWNrZHJvcC1ub29wLWFuaW1hdGlvbnt0cmFuc2l0aW9uOm5vbmV9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfSIsInByZSBjb2RlLmhsanN7ZGlzcGxheTpibG9jaztvdmVyZmxvdy14OmF1dG87cGFkZGluZzoxZW19Y29kZS5obGpze3BhZGRpbmc6M3B4IDVweH0vKiFcbiAgVGhlbWU6IEdpdEh1YlxuICBEZXNjcmlwdGlvbjogTGlnaHQgdGhlbWUgYXMgc2VlbiBvbiBnaXRodWIuY29tXG4gIEF1dGhvcjogZ2l0aHViLmNvbVxuICBNYWludGFpbmVyOiBASGlyc2VcbiAgVXBkYXRlZDogMjAyMS0wNS0xNVxuXG4gIE91dGRhdGVkIGJhc2UgdmVyc2lvbjogaHR0cHM6Ly9naXRodWIuY29tL3ByaW1lci9naXRodWItc3ludGF4LWxpZ2h0XG4gIEN1cnJlbnQgY29sb3JzIHRha2VuIGZyb20gR2l0SHViJ3MgQ1NTXG4qLy5obGpze2NvbG9yOiMyNDI5MmU7YmFja2dyb3VuZDojZmZmfS5obGpzLWRvY3RhZywuaGxqcy1rZXl3b3JkLC5obGpzLW1ldGEgLmhsanMta2V5d29yZCwuaGxqcy10ZW1wbGF0ZS10YWcsLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsLmhsanMtdHlwZSwuaGxqcy12YXJpYWJsZS5sYW5ndWFnZV97Y29sb3I6I2Q3M2E0OX0uaGxqcy10aXRsZSwuaGxqcy10aXRsZS5jbGFzc18sLmhsanMtdGl0bGUuY2xhc3NfLmluaGVyaXRlZF9fLC5obGpzLXRpdGxlLmZ1bmN0aW9uX3tjb2xvcjojNmY0MmMxfS5obGpzLWF0dHIsLmhsanMtYXR0cmlidXRlLC5obGpzLWxpdGVyYWwsLmhsanMtbWV0YSwuaGxqcy1udW1iZXIsLmhsanMtb3BlcmF0b3IsLmhsanMtc2VsZWN0b3ItYXR0ciwuaGxqcy1zZWxlY3Rvci1jbGFzcywuaGxqcy1zZWxlY3Rvci1pZCwuaGxqcy12YXJpYWJsZXtjb2xvcjojMDA1Y2M1fS5obGpzLW1ldGEgLmhsanMtc3RyaW5nLC5obGpzLXJlZ2V4cCwuaGxqcy1zdHJpbmd7Y29sb3I6IzAzMmY2Mn0uaGxqcy1idWlsdF9pbiwuaGxqcy1zeW1ib2x7Y29sb3I6I2UzNjIwOX0uaGxqcy1jb2RlLC5obGpzLWNvbW1lbnQsLmhsanMtZm9ybXVsYXtjb2xvcjojNmE3MzdkfS5obGpzLW5hbWUsLmhsanMtcXVvdGUsLmhsanMtc2VsZWN0b3ItcHNldWRvLC5obGpzLXNlbGVjdG9yLXRhZ3tjb2xvcjojMjI4NjNhfS5obGpzLXN1YnN0e2NvbG9yOiMyNDI5MmV9LmhsanMtc2VjdGlvbntjb2xvcjojMDA1Y2M1O2ZvbnQtd2VpZ2h0OjcwMH0uaGxqcy1idWxsZXR7Y29sb3I6IzczNWMwZn0uaGxqcy1lbXBoYXNpc3tjb2xvcjojMjQyOTJlO2ZvbnQtc3R5bGU6aXRhbGljfS5obGpzLXN0cm9uZ3tjb2xvcjojMjQyOTJlO2ZvbnQtd2VpZ2h0OjcwMH0uaGxqcy1hZGRpdGlvbntjb2xvcjojMjI4NjNhO2JhY2tncm91bmQtY29sb3I6I2YwZmZmNH0uaGxqcy1kZWxldGlvbntjb2xvcjojYjMxZDI4O2JhY2tncm91bmQtY29sb3I6I2ZmZWVmMH0iLCJAaW1wb3J0ICdAYW5ndWxhci9jZGsvb3ZlcmxheS1wcmVidWlsdC5jc3MnO1xuQGltcG9ydCAnfmhpZ2hsaWdodC5qcy9zdHlsZXMvZ2l0aHViLmNzcyc7XG5cbjpyb290IHtcbiAgICAvKiBsYWJlbCAqL1xuICAgIC0tc2VsZWN0Mi1sYWJlbC10ZXh0LWNvbG9yOiAjMDAwO1xuICAgIC0tc2VsZWN0Mi1yZXF1aXJlZC1jb2xvcjogcmVkO1xuXG4gICAgLyogc2VsZWN0aW9uICovXG4gICAgLS1zZWxlY3QyLXNlbGVjdGlvbi1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLS1zZWxlY3QyLXNlbGVjdGlvbi1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tc2VsZWN0Mi1zZWxlY3Rpb24tZGlzYWJsZWQtYmFja2dyb3VuZDogI2VlZTtcbiAgICAtLXNlbGVjdDItc2VsZWN0aW9uLWJvcmRlci1jb2xvcjogI2FhYTtcbiAgICAtLXNlbGVjdDItc2VsZWN0aW9uLWZvY3VzLWJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAtLXNlbGVjdDItc2VsZWN0aW9uLXRleHQtY29sb3I6ICM0NDQ7XG5cbiAgICAvKiBzZWxlY3Rpb246IGNob2ljZSBpdGVtIChtdWx0aXBsZSkgKi9cbiAgICAtLXNlbGVjdDItc2VsZWN0aW9uLWNob2ljZS1iYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgIC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLXRleHQtY29sb3I6ICMwMDA7XG4gICAgLS1zZWxlY3QyLXNlbGVjdGlvbi1jaG9pY2UtYm9yZGVyLWNvbG9yOiAjYWFhO1xuICAgIC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLWNsb3NlLWNvbG9yOiAjOTk5O1xuICAgIC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLWhvdmVyLWNsb3NlLWNvbG9yOiAjMzMzO1xuXG4gICAgLyogcGxhY2Vob2xkZXIgKi9cbiAgICAtLXNlbGVjdDItcGxhY2Vob2xkZXItY29sb3I6ICM5OTk7XG4gICAgLS1zZWxlY3QyLXBsYWNlaG9sZGVyLW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgIC8qIG5vIHJlc3VsdCBtZXNzYWdlICovXG4gICAgLS1zZWxlY3QyLW5vLXJlc3VsdC1jb2xvcjogIzg4ODtcbiAgICAtLXNlbGVjdDItbm8tcmVzdWx0LWZvbnQtc3R5bGU6IGl0YWxpYztcblxuICAgIC8qIG5vIHJlc3VsdCBtZXNzYWdlICovXG4gICAgLS1zZWxlY3QyLXRvby1tdWNoLXJlc3VsdC1jb2xvcjogIzg4ODtcbiAgICAtLXNlbGVjdDItdG9vLW11Y2gtcmVzdWx0LXN0eWxlOiBpdGFsaWM7XG5cbiAgICAvKiByZXNldCAqL1xuICAgIC0tc2VsZWN0Mi1yZXNldC1jb2xvcjogIzk5OTtcblxuICAgIC8qIGFycm93ICovXG4gICAgLS1zZWxlY3QyLWFycm93LWNvbG9yOiAjODg4O1xuXG4gICAgLyogZHJvcGRvd24gcGFuZWwgKi9cbiAgICAtLXNlbGVjdDItZHJvcGRvd24tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLXNlbGVjdDItZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAjYWFhO1xuXG4gICAgLyogb3ZlcmxheSAqL1xuICAgIC0tc2VsZWN0Mi1vdmVybGF5LWJhY2tkcm9wOiB0cmFuc3BhcmVudDtcblxuICAgIC8qIHNlYXJjaCBmaWVsZCAqL1xuICAgIC0tc2VsZWN0Mi1zZWFyY2gtYm9yZGVyLWNvbG9yOiAjYWFhO1xuICAgIC0tc2VsZWN0Mi1zZWFyY2gtYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLXNlbGVjdDItc2VhcmNoLWJvcmRlci1yYWRpdXM6IDBweDtcblxuICAgIC8qIGRyb3Bkb3duIG9wdGlvbiAqL1xuICAgIC0tc2VsZWN0Mi1vcHRpb24tdGV4dC1jb2xvcjogIzAwMDtcbiAgICAtLXNlbGVjdDItb3B0aW9uLWRpc2FibGVkLXRleHQtY29sb3I6ICM5OTk7XG4gICAgLS1zZWxlY3QyLW9wdGlvbi1kaXNhYmxlZC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXNlbGVjdDItb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6ICMwMDA7XG4gICAgLS1zZWxlY3QyLW9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kOiAjZGRkO1xuICAgIC0tc2VsZWN0Mi1vcHRpb24taGlnaGxpZ2h0ZWQtdGV4dC1jb2xvcjogI2ZmZjtcbiAgICAtLXNlbGVjdDItb3B0aW9uLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6ICM1ODk3ZmI7XG4gICAgLS1zZWxlY3QyLW9wdGlvbi1ncm91cC10ZXh0LWNvbG9yOiBncmF5O1xuICAgIC0tc2VsZWN0Mi1vcHRpb24tZ3JvdXAtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAvKiBoaW50ICovXG4gICAgLS1zZWxlY3QyLWhpbnQtdGV4dC1jb2xvcjogIzg4ODtcblxuICAgIC8qIGZvciBNYXRlcmlhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC0tc2VsZWN0Mi1tYXRlcmlhbC11bmRlcmxpbmU6ICNkZGQ7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLXVuZGVybGluZS1hY3RpdmU6ICM1YTQxOWU7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLXVuZGVybGluZS1kaXNhYmxlZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byByaWdodCxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjI2KSAwLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjYpIDMzJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMFxuICAgICk7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLXVuZGVybGluZS1pbnZhbGlkOiByZWQ7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAgIC0tc2VsZWN0Mi1tYXRlcmlhbC1zZWxlY3Rpb24tYmFja2dyb3VuZDogI2RkZDtcbiAgICAtLXNlbGVjdDItbWF0ZXJpYWwtb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLW9wdGlvbi1oaWdobGlnaHRlZC10ZXh0LWNvbG9yOiAjMDAwO1xuICAgIC0tc2VsZWN0Mi1tYXRlcmlhbC1vcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogI2ZmNTcyMjtcbn1cblxubmF2IHtcbiAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 7833:
/*!*********************************************************************************!*\
  !*** ./projects/ng-select2-component/src/lib/select2.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"select2-label\" (click)=\"toggleOpenAndClose()\">\n    <ng-content select=\"select2-label\"></ng-content>\n    <span *ngIf=\"required\" class=\"select2-required\"></span>\n</div>\n<div\n    class=\"select2 select2-container select2-container--default select2-container--focus\"\n    [class.select2-container--below]=\"!select2above\"\n    [class.select2-container--above]=\"select2above\"\n    [class.select2-container--open]=\"isOpen\"\n    [class.select2-container--disabled]=\"disabled\"\n>\n    <div\n        class=\"selection\"\n        #selection\n        #trigger=\"cdkOverlayOrigin\"\n        [attr.tabindex]=\"!this.isOpen ? tabIndex : '-1'\"\n        (click)=\"toggleOpenAndClose()\"\n        (focus)=\"focusin()\"\n        (blur)=\"focusout()\"\n        (keydown)=\"openKey($event)\"\n        cdkOverlayOrigin\n        [class.select2-focused]=\"focused\"\n    >\n        <div\n            class=\"select2-selection\"\n            [class.select2-selection--multiple]=\"multiple\"\n            [class.select2-selection--single]=\"!multiple\"\n            role=\"combobox\"\n        >\n            <span *ngIf=\"!multiple\" class=\"select2-selection__rendered\" [title]=\"select2Option?.label || ''\">\n                <span *ngIf=\"!select2Option\">&nbsp;</span>\n                <span *ngIf=\"select2Option\" [innerHTML]=\"select2Option.label\"></span>\n                <span [class.select2-selection__placeholder__option]=\"option\" class=\"select2-selection__placeholder\">{{\n                    placeholder\n                }}</span>\n            </span>\n            <span\n                (click)=\"reset($event)\"\n                *ngIf=\"!multiple && resettable && select2Option && !(disabled || readonly)\"\n                class=\"select2-selection__reset\"\n                role=\"presentation\"\n                >×</span\n            >\n            <span *ngIf=\"!multiple\" class=\"select2-selection__arrow\" role=\"presentation\"> </span>\n            <ul *ngIf=\"multiple\" class=\"select2-selection__rendered\">\n                <span\n                    [class.select2-selection__placeholder__option]=\"select2Options?.length > 0\"\n                    class=\"select2-selection__placeholder\"\n                    >{{ placeholder }}</span\n                >\n                <li *ngFor=\"let op of option; trackBy: trackBy\" class=\"select2-selection__choice\" [title]=\"op.label\">\n                    <span\n                        *ngIf=\"!(disabled || readonly)\"\n                        (click)=\"removeSelection($event, op)\"\n                        class=\"select2-selection__choice__remove\"\n                        role=\"presentation\"\n                        >×</span\n                    >\n                    <span [innerHTML]=\"op.label\"></span>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <ng-container *ngIf=\"!overlay\">\n        <ng-container *ngTemplateOutlet=\"containerTemplate\"></ng-container>\n    </ng-container>\n\n    <div class=\"select2-subscript-wrapper\">\n        <ng-content select=\"select2-hint\"></ng-content>\n    </div>\n</div>\n\n<ng-template\n    cdkConnectedOverlay\n    cdkConnectedOverlayHasBackdrop\n    cdkConnectedOverlayBackdropClass=\"select2-overlay-backdrop\"\n    [cdkConnectedOverlayOrigin]=\"trigger\"\n    [cdkConnectedOverlayOpen]=\"this.isOpen && overlay\"\n    [cdkConnectedOverlayMinWidth]=\"overlayWidth\"\n    [cdkConnectedOverlayHeight]=\"overlayHeight\"\n    [cdkConnectedOverlayPositions]=\"_positions\"\n    (backdropClick)=\"toggleOpenAndClose()\"\n>\n    <ng-container *ngTemplateOutlet=\"containerTemplate\"></ng-container>\n</ng-template>\n\n<ng-template #containerTemplate>\n    <div\n        class=\"select2-container select2-container--default select2-container-dropdown\"\n        [class.select2-container--open]=\"isOpen\"\n        [class.select2-overlay]=\"overlay\"\n        [class.select2-position-auto]=\"listPosition === 'auto'\"\n    >\n        <div\n            #dropdown\n            class=\"select2-dropdown\"\n            [class.select2-dropdown--below]=\"!select2above\"\n            [class.select2-dropdown--above]=\"select2above\"\n        >\n            <div class=\"select2-search select2-search--dropdown\" [class.select2-search--hide]=\"hideSearch()\">\n                <input\n                    #searchInput\n                    [id]=\"id + '-search-field'\"\n                    [value]=\"searchText\"\n                    (keydown)=\"keyDown($event)\"\n                    (keyup)=\"searchUpdate($event)\"\n                    (change)=\"prevChange($event)\"\n                    class=\"select2-search__field\"\n                    type=\"search\"\n                    role=\"textbox\"\n                    autocomplete=\"off\"\n                    autocorrect=\"off\"\n                    autocapitalize=\"off\"\n                    spellcheck=\"false\"\n                    [attr.tabindex]=\"this.isOpen ? tabIndex : '-1'\"\n                />\n            </div>\n            <div class=\"select2-results\">\n                <ul\n                    #results\n                    class=\"select2-results__options\"\n                    [style.max-height]=\"resultMaxHeight\"\n                    role=\"tree\"\n                    tabindex=\"-1\"\n                    infiniteScroll\n                    [infiniteScrollDisabled]=\"!infiniteScroll && !isOpen\"\n                    [infiniteScrollDistance]=\"infiniteScrollDistance\"\n                    [infiniteScrollThrottle]=\"infiniteScrollThrottle\"\n                    [infiniteScrollContainer]=\"results\"\n                    (scrolled)=\"onScroll('down')\"\n                    (scrolledUp)=\"onScroll('up')\"\n                    (keydown)=\"keyDown($event)\"\n                >\n                    <ng-container *ngFor=\"let groupOrOption of filteredData; index as i; trackBy: trackBy\">\n                        <li *ngIf=\"groupOrOption.options\" class=\"select2-results__option\" role=\"group\">\n                            <strong\n                                *ngIf=\"!hasTemplate(groupOrOption, 'group'); else optGroup\"\n                                [attr.class]=\"\n                                    'select2-results__group' +\n                                    (groupOrOption.classes ? ' ' + groupOrOption.classes : '')\n                                \"\n                                [innerHTML]=\"groupOrOption.label\"\n                            ></strong>\n                            <ng-template #optGroup>\n                                <ng-container\n                                    *ngTemplateOutlet=\"getTemplate(groupOrOption, 'group'); context: groupOrOption\"\n                                >\n                                </ng-container>\n                            </ng-template>\n\n                            <ul class=\"select2-results__options select2-results__options--nested\">\n                                <li\n                                    *ngFor=\"let option of groupOrOption.options; index as j; trackBy: trackBy\"\n                                    #result\n                                    [id]=\"option.id || id + '-option-' + i + '-' + j\"\n                                    [class]=\"getOptionStyle(option)\"\n                                    role=\"treeitem\"\n                                    [attr.aria-selected]=\"isSelected(option)\"\n                                    [attr.aria-disabled]=\"isDisabled(option)\"\n                                    (mouseenter)=\"mouseenter(option)\"\n                                    (click)=\"click(option)\"\n                                >\n                                    <div\n                                        *ngIf=\"!hasTemplate(option, 'option'); else liGroup\"\n                                        class=\"select2-label-content\"\n                                        [innerHTML]=\"option.label\"\n                                    ></div>\n                                    <ng-template #liGroup>\n                                        <ng-container\n                                            *ngTemplateOutlet=\"getTemplate(option, 'option'); context: option\"\n                                        >\n                                        </ng-container>\n                                    </ng-template>\n                                </li>\n                            </ul>\n                        </li>\n                        <li\n                            *ngIf=\"!groupOrOption.options\"\n                            #result\n                            [id]=\"groupOrOption.id || id + '-option-' + i\"\n                            [class]=\"getOptionStyle(groupOrOption)\"\n                            role=\"treeitem\"\n                            [attr.aria-selected]=\"isSelected(groupOrOption)\"\n                            [attr.aria-disabled]=\"isDisabled(groupOrOption)\"\n                            (mouseenter)=\"mouseenter(groupOrOption)\"\n                            (click)=\"click(groupOrOption)\"\n                        >\n                            <div\n                                *ngIf=\"!hasTemplate(groupOrOption, 'option'); else li\"\n                                [innerHTML]=\"groupOrOption.label\"\n                                class=\"select2-label-content\"\n                            ></div>\n                            <ng-template #li>\n                                <ng-container\n                                    *ngTemplateOutlet=\"getTemplate(groupOrOption, 'option'); context: groupOrOption\"\n                                >\n                                </ng-container>\n                            </ng-template>\n                        </li>\n                    </ng-container>\n                    <li\n                        class=\"select2-no-result select2-results__option\"\n                        *ngIf=\"!filteredData?.length && noResultMessage\"\n                        [innerHTML]=\"noResultMessage\"\n                    ></li>\n                    <li\n                        class=\"select2-too-much-result select2-results__option\"\n                        *ngIf=\"maxResultsExceeded\"\n                        [innerHTML]=\"maxResultsMessage\"\n                    ></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</ng-template>\n";

/***/ }),

/***/ 5805:
/*!********************************************************!*\
  !*** ./src/app/app-examples.component.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<h2>Examples</h2>\n\n<label for=\"disabled\">overlay : </label>\n<input type=\"checkbox\" [(ngModel)]=\"overlay\" />\n\n<div style=\"width: 500px\">\n    <h3>1. options in group ({{ value1 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data1\"\n        [value]=\"value1\"\n        (update)=\"update('value1', $event)\"\n        (change)=\"change('change1', $event)\"\n        (blur)=\"blur('blur1', $event)\"\n        (focus)=\"focus('focus1', $event)\"\n        (open)=\"open('open1', $event)\"\n        (close)=\"close('close1', $event)\"\n        (search)=\"search('search1', $event)\"\n        resettable\n        id=\"selec2-1\"\n    >\n    </select2>\n    <h3>2. options ({{ value2 }})</h3>\n    <select2 [overlay]=\"overlay\" [data]=\"data2\" [value]=\"value2\" (update)=\"update('value2', $event)\" id=\"selec2-2\">\n    </select2>\n    <h3>3. less options ({{ value3 }})</h3>\n    <select2 [overlay]=\"overlay\" [data]=\"data3\" [value]=\"value3\" (update)=\"update('value3', $event)\" id=\"selec2-3\">\n    </select2>\n    <h3>4. disabled ({{ value4 }})</h3>\n    <select2 [overlay]=\"overlay\" [data]=\"data4\" [value]=\"value4\" [disabled]=\"true\" id=\"selec2-4\"> </select2>\n    <h3>5. hide search box ({{ value5 }})</h3>\n    <form [formGroup]=\"ctrlForm2\">\n        <select2\n            [overlay]=\"overlay\"\n            [data]=\"data5\"\n            formControlName=\"test5\"\n            [minCountForSearch]=\"minCountForSearch\"\n            (update)=\"update('value5', $event)\"\n            id=\"selec2-5\"\n        >\n        </select2>\n    </form>\n    <h3>\n        6. search limit to <input #limit size=\"3\" value=\"7\" /> / display status\n        <select #status>\n            <option selected>default</option>\n            <option>hidden</option>\n            <option>always</option>\n        </select>\n        ({{ value6 }})\n    </h3>\n    <div>\n        <button type=\"button\" (click)=\"addItem()\">Add item</button>\n        <button type=\"button\" (click)=\"removeItem()\">Remove item</button>\n    </div>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data6\"\n        [value]=\"value6\"\n        [minCountForSearch]=\"limit.value\"\n        [displaySearchStatus]=\"status.value\"\n        (update)=\"update('value6', $event)\"\n        id=\"selec2-6\"\n    >\n    </select2>\n    <h3>7. placeholder ({{ value7 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data7\"\n        placeholder=\"select an item\"\n        (update)=\"update('value7', $event)\"\n        resettable\n        id=\"selec2-7\"\n    >\n    </select2>\n    <h3>8. open, close and search event ({{ value8 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data8\"\n        customSearchEnabled=\"true\"\n        listPosition=\"auto\"\n        (open)=\"open8()\"\n        (close)=\"close8()\"\n        (search)=\"search8($event)\"\n        (update)=\"update('value8', $event)\"\n        id=\"selec2-8\"\n    >\n        <select2-hint>value : {{ value8 }}</select2-hint>\n    </select2>\n    <h3>9. multiple + limite <input type=\"number\" [(ngModel)]=\"limitSelection\" /> ({{ value9 | json }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data9\"\n        [value]=\"value9\"\n        multiple=\"true\"\n        [limitSelection]=\"limitSelection\"\n        (update)=\"update('value9', $event)\"\n        (blur)=\"blur('blur9', $event)\"\n        (focus)=\"focus('focus9', $event)\"\n        (open)=\"open('open9', $event)\"\n        (close)=\"close('close9', $event)\"\n        (search)=\"search('search9', $event)\"\n        id=\"selec2-9\"\n    >\n    </select2>\n    <h3>10. multiple + hide selected items ({{ value10 | json }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data10\"\n        [value]=\"value10\"\n        multiple=\"true\"\n        (update)=\"update('value10', $event)\"\n        hideSelectedItems=\"true\"\n        id=\"selec2-10\"\n    >\n    </select2>\n    <h3>11. material style and form binding ({{ value11 }})</h3>\n    <form [formGroup]=\"ctrlForm\">\n        <select2\n            [overlay]=\"overlay\"\n            [(ngModel)]=\"value11\"\n            [data]=\"data11\"\n            formControlName=\"test11\"\n            placeholder=\"Select a state\"\n            styleMode=\"material\"\n            id=\"selec2-11\"\n        ></select2>\n        <button (click)=\"reset11()\">reset</button>\n        <button (click)=\"change11()\">Utah</button>\n    </form>\n\n    <h3>12. material style ({{ value12 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data12\"\n        [value]=\"value12\"\n        (update)=\"update('value12', $event)\"\n        styleMode=\"material\"\n        id=\"selec2-12\"\n    >\n    </select2>\n    <h3>13. boolean value ({{ value13 }})</h3>\n    <select2 [overlay]=\"overlay\" [data]=\"data13\" [value]=\"value13\" (update)=\"update('value13', $event)\" id=\"selec2-13\">\n    </select2>\n    <h3>14. FormControl</h3>\n    <form [formGroup]=\"fg\">\n        <select2 [overlay]=\"overlay\" [data]=\"data9\" multiple=\"true\" id=\"selec2-10\" formControlName=\"state\"> </select2>\n        <button (click)=\"print()\">Log Selected</button>\n        <button (click)=\"resetForm()\">Reset Form</button>\n    </form>\n    <h3>15. with label ({{ value15 }})</h3>\n    <select2 [overlay]=\"overlay\" [data]=\"data15\" [value]=\"value15\" (update)=\"update('value15', $event)\" id=\"selec2-15\">\n        <select2-label>Select a state</select2-label>\n    </select2>\n    <h3>16. required with label ({{ value16 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data16\"\n        [value]=\"value16\"\n        (update)=\"update('value16', $event)\"\n        required\n        id=\"selec2-16\"\n    >\n        <select2-label>Select a state</select2-label>\n    </select2>\n    <h3>17. with two option labels ({{ value17 }})</h3>\n    <select2 [overlay]=\"overlay\" [data]=\"data17\" [value]=\"value17\" (update)=\"update('value17', $event)\" id=\"select2-17\">\n    </select2>\n    <h3>18. search starts with 3 chars</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data18\"\n        [value]=\"value18\"\n        (update)=\"update('value18', $event)\"\n        minCharForSearch=\"3\"\n        id=\"selec2-18\"\n    >\n    </select2>\n    <h3>19. dropdown list position above ({{ value19 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data19\"\n        [value]=\"value19\"\n        (update)=\"update('value19', $event)\"\n        listPosition=\"above\"\n        id=\"selec2-19\"\n    >\n    </select2>\n    <div class=\"noStyle\">\n        <h3>20. nostyle ({{ value20 }})</h3>\n        <select2\n            [overlay]=\"overlay\"\n            [data]=\"data20\"\n            [value]=\"value20\"\n            (update)=\"update('value20', $event)\"\n            listPosition=\"above\"\n            styleMode=\"noStyle\"\n            id=\"selec2-20\"\n        >\n        </select2>\n    </div>\n    <h3>21. update to empty/null/undefined ({{ value21 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data21\"\n        [value]=\"value21\"\n        (update)=\"update('value21', $event)\"\n        listPosition=\"above\"\n        id=\"selec2-21\"\n    >\n    </select2>\n    <button (click)=\"value21 = ''\">Update value to empty string</button>\n    <button (click)=\"value21 = null\">Update value to null</button>\n    <button (click)=\"value21 = undefined\">Update value to undefined</button>\n    <h3>22. with item classes and id ({{ value22 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data22\"\n        [value]=\"value22\"\n        (update)=\"update('value22', $event)\"\n        listPosition=\"auto\"\n        id=\"selec2-22\"\n        class=\"flower-list\"\n    >\n    </select2>\n\n    <h3>23 with template ({{ value23 }})</h3>\n\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data23\"\n        [value]=\"value23\"\n        (update)=\"update('value23', $event)\"\n        listPosition=\"above\"\n        [templates]=\"template\"\n        id=\"selec2-23\"\n        class=\"flower-list\"\n    >\n        <ng-template #template let-data=\"data\"\n            ><strong>{{ data?.color }}</strong\n            >: {{ data?.name }}</ng-template\n        >\n    </select2>\n\n    <h3>24 with template (option / group) ({{ value24 }})</h3>\n\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data24\"\n        [value]=\"value24\"\n        (update)=\"update('value24', $event)\"\n        listPosition=\"above\"\n        [templates]=\"{ option: templateOption, group: templateGroup }\"\n        id=\"selec2-24\"\n        class=\"flower-list\"\n    >\n        <ng-template #templateOption let-data=\"data\"\n            ><strong>{{ data?.color }}</strong\n            >: {{ data?.name }}</ng-template\n        >\n        <ng-template #templateGroup let-label=\"label\"\n            ><strong>({{ label }})</strong></ng-template\n        >\n    </select2>\n\n    <h3>25 with templates Ids ({{ value25 }})</h3>\n\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data25\"\n        [value]=\"value25\"\n        (update)=\"update('value25', $event)\"\n        listPosition=\"above\"\n        [templates]=\"{ template1: template1, template2: template2, template3: template3 }\"\n        id=\"selec2-25\"\n        class=\"flower-list\"\n    >\n        <ng-template #template1 let-data=\"data\"\n            ><span [style.background]=\"data?.color\">{{ data?.name }}</span></ng-template\n        >\n        <ng-template #template2 let-data=\"data\"\n            ><strong>{{ data?.color }}</strong\n            >: {{ data?.name }}</ng-template\n        >\n        <ng-template #template3 let-data=\"data\">{{ data | json }}</ng-template>\n    </select2>\n    <h3>26. infiniteScroll({{ value26 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data26\"\n        [value]=\"value26\"\n        (update)=\"update('value26', $event)\"\n        listPosition=\"above\"\n        infiniteScroll\n        infiniteScrollDistance=\"1.5\"\n        infiniteScrollThrottle=\"150\"\n        (scroll)=\"scroll26($event)\"\n        id=\"selec2-26\"\n    ></select2>\n    <h3>27. position ({{ value2 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data2\"\n        [value]=\"value2\"\n        listPosition=\"auto\"\n        (update)=\"update('value2', $event)\"\n        id=\"selec2-27\"\n    ></select2>\n    <h3>28. max results 50 ({{ value28 }})</h3>\n    <select2\n        [overlay]=\"overlay\"\n        [data]=\"data28\"\n        [value]=\"value28\"\n        listPosition=\"auto\"\n        id=\"selec2-28\"\n        maxResults=\"50\"\n        maxResultsMessage=\"Too much results in this list.\"\n    ></select2>\n</div>\n";

/***/ }),

/***/ 4380:
/*!***************************************************!*\
  !*** ./src/app/app-gen.component.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<h2>Generator</h2>\n\n<div class=\"cols\">\n    <div [formGroup]=\"ctrlForm\">\n        <h4>data</h4>\n        <div>\n            <label for=\"json\">json (for <code>[data]</code>) : </label>\n            <textarea formControlName=\"json\" id=\"json\"></textarea>\n            <div class=\"error\" [innerHTML]=\"jsonError\"></div>\n        </div>\n        <h4>tags</h4>\n        <div>\n            <label for=\"label\">label : </label>\n            <input type=\"text\" formControlName=\"label\" id=\"label\" />\n        </div>\n        <div>\n            <label for=\"hint\">hint : </label>\n            <input type=\"text\" formControlName=\"hint\" id=\"hint\" />\n        </div>\n        <h4>parameters</h4>\n        <div>\n            <label for=\"disabled\">disabled : </label>\n            <input type=\"checkbox\" formControlName=\"disabled\" id=\"disabled\" />\n        </div>\n        <div>\n            <label for=\"overlay\">overlay : </label>\n            <input type=\"checkbox\" formControlName=\"overlay\" id=\"overlay\" />\n        </div>\n        <div>\n            <label for=\"minCharForSearch\">minCharForSearch (0) : </label>\n            <input type=\"number\" formControlName=\"minCharForSearch\" id=\"minCharForSearch\" />\n        </div>\n        <div>\n            <label for=\"minCountForSearch\">minCountForSearch (6) : </label>\n            <input type=\"number\" formControlName=\"minCountForSearch\" id=\"minCountForSearch\" />\n        </div>\n        <div>\n            <label for=\"displaySearchStatus\">displaySearchStatus :</label>\n            <select formControlName=\"displaySearchStatus\" id=\"displaySearchStatus\">\n                <option value=\"default\">default</option>\n                <option value=\"hidden\">hidden</option>\n                <option value=\"always\">always</option>\n            </select>\n        </div>\n        <div>\n            <label for=\"placeholder\">placeholder : </label>\n            <input type=\"text\" formControlName=\"placeholder\" id=\"placeholder\" />\n        </div>\n        <div>\n            <label for=\"noResultMessage\">noResultMessage : </label>\n            <input type=\"text\" formControlName=\"noResultMessage\" id=\"noResultMessage\" />\n        </div>\n        <div>\n            <label for=\"customSearchEnabled\">customSearchEnabled : </label>\n            <input type=\"checkbox\" formControlName=\"customSearchEnabled\" id=\"customSearchEnabled\" />\n        </div>\n        <div>\n            <label for=\"multiple\">multiple : </label>\n            <input type=\"checkbox\" formControlName=\"multiple\" id=\"multiple\" />\n        </div>\n        <div [class.hide]=\"ctrlForm?.value?.multiple\">\n            <label for=\"resettable\">resettable : </label>\n            <input type=\"checkbox\" formControlName=\"resettable\" id=\"resettable\" />\n        </div>\n        <div>\n            <label for=\"limitSelection\">limitSelection (0) : </label>\n            <input type=\"number\" formControlName=\"limitSelection\" id=\"limitSelection\" />\n        </div>\n        <div [class.hide]=\"!ctrlForm?.value?.multiple\">\n            <label for=\"hideSelectedItems\">hideSelectedItems : </label>\n            <input type=\"checkbox\" formControlName=\"hideSelectedItems\" id=\"hideSelectedItems\" />\n        </div>\n        <div>\n            <label for=\"resultMaxHeight\">resultMaxHeight ('200px') : </label>\n            <input type=\"text\" formControlName=\"resultMaxHeight\" id=\"resultMaxHeight\" />\n        </div>\n        <div>\n            <label for=\"maxResults\">maxResults (0 = infinity) : </label>\n            <input type=\"text\" formControlName=\"maxResults\" id=\"maxResults\" />\n        </div>\n        <div>\n            <label for=\"maxResultsMessage\">maxResultsMessage ('Too much result...') : </label>\n            <input type=\"text\" formControlName=\"maxResultsMessage\" id=\"maxResultsMessage\" />\n        </div>\n        <div>\n            <label for=\"listPosition\">listPosition :</label>\n            <select formControlName=\"listPosition\" id=\"listPosition\">\n                <option></option>\n                <option value=\"below\">below</option>\n                <option value=\"above\">above</option>\n            </select>\n        </div>\n        <div>\n            <label for=\"infiniteScroll\">infiniteScroll : </label>\n            <input type=\"checkbox\" formControlName=\"infiniteScroll\" id=\"infiniteScroll\" />\n        </div>\n        <div [class.hide]=\"!ctrlForm?.value?.infiniteScrollDistance\">\n            <label for=\"infiniteScrollDistance\">infiniteScrollDistance (1.5) : </label>\n            <input type=\"number\" formControlName=\"infiniteScrollDistance\" id=\"infiniteScrollDistance\" />\n        </div>\n        <div [class.hide]=\"!ctrlForm?.value?.infiniteScroll\">\n            <label for=\"infiniteScrollThrottle\">infiniteScrollThrottle (150) : </label>\n            <input type=\"number\" formControlName=\"infiniteScrollThrottle\" id=\"infiniteScrollThrottle\" />\n        </div>\n        <div>\n            <label for=\"styleMode\">styleMode : </label>\n            <select formControlName=\"styleMode\" id=\"listPstyleModeosition\">\n                <option value=\"\">default</option>\n                <option value=\"material\">material</option>\n                <option value=\"noStyle\">noStyle</option>\n            </select>\n        </div>\n        <h4>Templates</h4>\n        <div>\n            <label for=\"template\">template style :</label>\n            <select formControlName=\"template\" id=\"template\">\n                <option value=\"none\">None</option>\n                <option value=\"ref\">Unique template</option>\n                <option value=\"option-group\">Template group & option</option>\n                <option value=\"templateId\">Template by templateId</option>\n            </select>\n        </div>\n        <h4>Events</h4>\n        <div>\n            <label for=\"update\">update : </label>\n            <input type=\"checkbox\" formControlName=\"update\" id=\"update\" />\n        </div>\n        <div>\n            <label for=\"open\">open : </label>\n            <input type=\"checkbox\" formControlName=\"open\" id=\"open\" />\n        </div>\n        <div>\n            <label for=\"close\">close : </label>\n            <input type=\"checkbox\" formControlName=\"close\" id=\"close\" />\n        </div>\n        <div>\n            <label for=\"focus\">focus : </label>\n            <input type=\"checkbox\" formControlName=\"focus\" id=\"focus\" />\n        </div>\n        <div>\n            <label for=\"blur\">blur : </label>\n            <input type=\"checkbox\" formControlName=\"blur\" id=\"blur\" />\n        </div>\n        <div>\n            <label for=\"search\">search : </label>\n            <input type=\"checkbox\" formControlName=\"search\" id=\"search\" />\n        </div>\n        <div>\n            <label for=\"scroll\">scroll : </label>\n            <input type=\"checkbox\" formControlName=\"scroll\" id=\"scroll\" />\n        </div>\n        <div>\n            <label for=\"removeOption\">removeOption : </label>\n            <input type=\"checkbox\" formControlName=\"removeOption\" id=\"removeOption\" />\n        </div>\n    </div>\n    <div>\n        <h4>HTML render</h4>\n        <select2\n            *ngIf=\"ctrlForm.value\"\n            [data]=\"data\"\n            [overlay]=\"ctrlForm?.value?.overlay\"\n            [disabled]=\"ctrlForm?.value?.disabled\"\n            [minCharForSearch]=\"ctrlForm?.value?.minCharForSearch || 0\"\n            [minCountForSearch]=\"ctrlForm?.value?.minCountForSearch || 6\"\n            [displaySearchStatus]=\"ctrlForm?.value?.displaySearchStatus\"\n            [placeholder]=\"ctrlForm?.value?.placeholder\"\n            [customSearchEnabled]=\"ctrlForm?.value?.customSearchEnabled\"\n            [multiple]=\"ctrlForm?.value?.multiple\"\n            [resettable]=\"ctrlForm?.value?.resettable\"\n            [limitSelection]=\"ctrlForm?.value?.limitSelection || 0\"\n            [hideSelectedItems]=\"ctrlForm?.value?.hideSelectedItems\"\n            [resultMaxHeight]=\"ctrlForm?.value?.resultMaxHeight || '200px'\"\n            [maxResults]=\"ctrlForm?.value?.maxResults || 0\"\n            [maxResultsMessage]=\"ctrlForm?.value?.maxResultsMessage || 'Too many results…'\"\n            [listPosition]=\"ctrlForm?.value?.listPosition\"\n            [infiniteScroll]=\"ctrlForm?.value?.infiniteScroll\"\n            [infiniteScrollDistance]=\"ctrlForm?.value?.infiniteScrollDistance || 1.5\"\n            [infiniteScrollThrottle]=\"ctrlForm?.value?.infiniteScrollThrottle || 150\"\n            [styleMode]=\"ctrlForm?.value?.styleMode\"\n            [noResultMessage]=\"ctrlForm?.value?.noResultMessage\"\n            [templates]=\"getTemplate(template, option, group, template1, template2)\"\n            (update)=\"_event('update', $event)\"\n            (open)=\"_event('open', $event)\"\n            (close)=\"_event('close', $event)\"\n            (focus)=\"_event('focus', $event)\"\n            (blur)=\"_event('blur', $event)\"\n            (search)=\"_event('search', $event)\"\n            (scroll)=\"_event('scroll', $event)\"\n            (removeOption)=\"_event('removeOption', $event)\"\n        >\n            <select2-label [innerHTML]=\"ctrlForm?.value?.label\"></select2-label>\n            <select2-hint [innerHTML]=\"ctrlForm?.value?.hint\"></select2-hint>\n            <ng-template #template let-data=\"data\">\n                <ng-container *ngIf=\"data?.color\">\n                    <strong>{{ data?.color }}</strong\n                    >: </ng-container\n                >{{ data?.name }}\n            </ng-template>\n            <ng-template #option let-data=\"data\">{{ data?.name }}</ng-template>\n            <ng-template #group let-label=\"label\">Group: {{ label }}</ng-template>\n            <ng-template #template1 let-data=\"data\">{{ data?.name }}</ng-template>\n            <ng-template #template2 let-label=\"label\" let-data=\"data\">{{ label }} : {{ data?.color }}</ng-template>\n        </select2>\n\n        <h4>HTML Code</h4>\n\n        <div class=\"code\">\n            <code><pre [highlight]=\"html\"></pre></code>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<a href=\"https://github.com/Harvest-Dev/ng-select2/tree/master/src\" target=\"_blank\">the source code of the demo</a>\n\n<nav>\n    <ul>\n        <li><a routerLink=\"/examples\" routerLinkActive=\"active\">Exemples</a></li>\n\n        <li><a routerLink=\"/generator\" routerLinkActive=\"active\">Code generator</a></li>\n    </ul>\n</nav>\n\n<router-outlet></router-outlet>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map