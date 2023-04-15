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
const unicodePatterns = [{
  l: 'a',
  s: /[ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ]/gi
}, {
  l: 'aa',
  s: /ꜳ/gi
}, {
  l: 'ae',
  s: /[æǽǣ]/gi
}, {
  l: 'ao',
  s: /ꜵ/gi
}, {
  l: 'au',
  s: /ꜷ/gi
}, {
  l: 'av',
  s: /[ꜹꜻ]/gi
}, {
  l: 'ay',
  s: /ꜽ/gi
}, {
  l: 'b',
  s: /[ⓑｂḃḅḇƀƃɓ]/gi
}, {
  l: 'c',
  s: /[ⓒｃćĉċčçḉƈȼꜿↄ]/gi
}, {
  l: 'd',
  s: /[ⓓｄḋďḍḑḓḏđƌɖɗꝺ]/gi
}, {
  l: 'dz',
  s: /[ǳǆ]/gi
}, {
  l: 'e',
  s: /[ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ]/gi
}, {
  l: 'f',
  s: /[ⓕｆḟƒꝼ]/gi
}, {
  l: 'g',
  s: /[ⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ]/gi
}, {
  l: 'h',
  s: /[ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ]/gi
}, {
  l: 'hv',
  s: /ƕ/gi
}, {
  l: 'i',
  s: /[ⓘｉìíîĩīĭİïḯỉǐȉȋịįḭɨı]/gi
}, {
  l: 'j',
  s: /[ⓙｊĵǰɉ]/gi
}, {
  l: 'k',
  s: /[ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ]/gi
}, {
  l: 'l',
  s: /[ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇꝆ]/gi
}, {
  l: 'lj',
  s: /ǉ/gi
}, {
  l: 'm',
  s: /[ⓜｍḿṁṃɱɯ]/gi
}, {
  l: 'n',
  s: /[ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ]/gi
}, {
  l: 'nj',
  s: /ǌ/gi
}, {
  l: 'o',
  s: /[ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔƟꝋꝍɵ]/gi
}, {
  l: 'oi',
  s: /ƣ/gi
}, {
  l: 'oe',
  s: /œ/gi
}, {
  l: 'oo',
  s: /ꝏ/gi
}, {
  l: 'ou',
  s: /ȣ/gi
}, {
  l: 'p',
  s: /[ⓟｐṕṗƥᵽꝑꝓꝕ]/gi
}, {
  l: 'q',
  s: /[ⓠｑɋꝗꝙ]/gi
}, {
  l: 'r',
  s: /[ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ]/gi
}, {
  l: 's',
  s: /[ⓢｓßẞśṥŝṡšṧṣṩșşȿꞩꞅẛ]/gi
}, {
  l: 't',
  s: /[ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ]/gi
}, {
  l: 'tz',
  s: /ꜩ/gi
}, {
  l: 'u',
  s: /[ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ]/gi
}, {
  l: 'v',
  s: /[ⓥｖṽṿʋꝟʌ]/gi
}, {
  l: 'vy',
  s: /ꝡ/gi
}, {
  l: 'w',
  s: /[ⓦｗẁẃŵẇẅẘẉⱳ]/gi
}, {
  l: 'x',
  s: /[ⓧｘẋẍ]/gi
}, {
  l: 'y',
  s: /[ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ]/gi
}, {
  l: 'z',
  s: /[ⓩｚźẑżžẓẕƶȥɀⱬꝣ]/gi
}];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Select2Hint {}
Select2Hint.ɵfac = function Select2Hint_Factory(t) {
  return new (t || Select2Hint)();
};
Select2Hint.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Select2Hint,
  selectors: [["select2-hint"]]
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Select2Label {}
Select2Label.ɵfac = function Select2Label_Factory(t) {
  return new (t || Select2Label)();
};
Select2Label.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Select2Label,
  selectors: [["select2-label"]]
});

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
        } else if (groupOrOption.value === value) {
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
        } else {
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
      } else if (groupOrOption.value === value) {
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
      } else {
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
          } else if (!findIt) {
            findIt = option.value === hoveringValue;
          }
        }
      } else {
        const option = groupOrOption;
        if (findIt) {
          if (!option.disabled && !option.hide) {
            return option;
          }
        } else if (!findIt) {
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
            options: []
          };
          result.push(group);
          for (const item of options) {
            group.options.push(item);
            counter++;
            if (counter === maxResults) {
              return {
                result,
                reduce: true
              };
            }
          }
        } else {
          result.push(groupOrOption);
          counter++;
        }
        if (counter === maxResults) {
          return {
            result,
            reduce: true
          };
        }
      }
      return {
        result,
        reduce: false
      };
    } else {
      return {
        result: data,
        reduce: false
      };
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
              options: filteredOptions
            });
          }
        } else if (Select2Utils.containSearchText(groupOrOption.label, searchText, editPattern)) {
          result.push(groupOrOption);
        }
      }
      return result;
    } else {
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
            options: filteredOptions
          });
        }
      } else if (Select2Utils.isSelected(selectedOptions, groupOrOption, true) === 'false') {
        result.push(groupOrOption);
      }
    }
    return result;
  }
  static isSearchboxHiddex(data, minCountForSearch) {
    if (minCountForSearch === '' || minCountForSearch === undefined || minCountForSearch === null || isNaN(+minCountForSearch)) {
      minCountForSearch = _select2_const__WEBPACK_IMPORTED_MODULE_0__.defaultMinCountForSearch;
    }
    const optionCount = Select2Utils.getOptionsCount(data);
    return optionCount < +minCountForSearch;
  }
  static isSelected(options, option, multiple) {
    return multiple ? options && options.some(op => op.value === option.value) ? 'true' : 'false' : options && option.value === options.value ? 'true' : 'false';
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
        } else {
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
    return searchText ? Select2Utils.formatSansUnicode(label).match(new RegExp(Select2Utils.formatPattern(searchText, editPattern), 'i')) !== null : true;
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
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _select2_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select2-const */ 4128);
/* harmony import */ var _select2_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select2-utils */ 9442);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);











const _c0 = ["selection"];
const _c1 = ["results"];
const _c2 = ["searchInput"];
const _c3 = ["dropdown"];
const _c4 = ["result"];
function Select2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 14);
  }
}
function Select2_span_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Select2_span_8_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r13.select2Option.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function Select2_span_8_ng_container_2_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function Select2_span_8_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Select2_span_8_ng_container_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.getTemplate(ctx_r15.select2Option, "option"))("ngTemplateOutletContext", ctx_r15.select2Option);
  }
}
function Select2_span_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Select2_span_8_ng_container_2_span_1_Template, 1, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Select2_span_8_ng_container_2_ng_template_2_Template, 1, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.hasTemplate(ctx_r12.select2Option, "option") || ctx_r12.noLabelTemplate)("ngIfElse", _r14);
  }
}
function Select2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Select2_span_8_span_1_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Select2_span_8_ng_container_2_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", (ctx_r3.select2Option == null ? null : ctx_r3.select2Option.label) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.select2Option);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.select2Option);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("select2-selection__placeholder__option", ctx_r3.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.placeholder);
  }
}
function Select2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Select2_span_9_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.reset($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Select2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 22);
  }
}
function Select2_ul_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("select2-selection__placeholder__option", (ctx_r19.select2Options == null ? null : ctx_r19.select2Options.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.placeholder);
  }
}
function Select2_ul_11_li_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Select2_ul_11_li_2_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const op_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.removeSelection($event, op_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Select2_ul_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function Select2_ul_11_li_2_Template_li_keydown_enter_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const op_r22 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.removeSelection($event, op_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Select2_ul_11_li_2_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const op_r22 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", op_r22.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r20.disabled || ctx_r20.readonly));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", op_r22.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function Select2_ul_11_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function Select2_ul_11_li_3_Template_li_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.stopEvent($event));
    })("blur", function Select2_ul_11_li_3_Template_li_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.stopEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Select2_ul_11_li_3_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r32.toggleOpenAndClose(false, true);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.stopEvent($event));
    })("keydown", function Select2_ul_11_li_3_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.keyDown($event, true));
    })("keyup", function Select2_ul_11_li_3_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.searchUpdate($event));
    })("change", function Select2_ul_11_li_3_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.prevChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r21.id + "-create-field");
  }
}
function Select2_ul_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Select2_ul_11_span_1_Template, 2, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Select2_ul_11_li_2_Template, 3, 3, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Select2_ul_11_li_3_Template, 2, 1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.autoCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.option)("ngForTrackBy", ctx_r6.trackBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.autoCreate);
  }
}
function Select2_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function Select2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Select2_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r9);
  }
}
function Select2_ng_template_15_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function Select2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Select2_ng_template_15_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r9);
  }
}
function Select2_ng_template_16_ng_container_9_li_1_strong_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "strong", 19);
  }
  if (rf & 2) {
    const groupOrOption_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", groupOrOption_r44.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("class", "select2-results__group" + (groupOrOption_r44.classes ? " " + groupOrOption_r44.classes : ""));
  }
}
function Select2_ng_template_16_ng_container_9_li_1_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function Select2_ng_template_16_ng_container_9_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Select2_ng_template_16_ng_container_9_li_1_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const groupOrOption_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r50.getTemplate(groupOrOption_r44, "group"))("ngTemplateOutletContext", groupOrOption_r44);
  }
}
function Select2_ng_template_16_ng_container_9_li_1_li_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 55);
  }
  if (rf & 2) {
    const option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", option_r55.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function Select2_ng_template_16_ng_container_9_li_1_li_5_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function Select2_ng_template_16_ng_container_9_li_1_li_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Select2_ng_template_16_ng_container_9_li_1_li_5_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const option_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r60.getTemplate(option_r55, "option"))("ngTemplateOutletContext", option_r55);
  }
}
function Select2_ng_template_16_ng_container_9_li_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function Select2_ng_template_16_ng_container_9_li_1_li_5_Template_li_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r65);
      const option_r55 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r64.mouseenter(option_r55));
    })("click", function Select2_ng_template_16_ng_container_9_li_1_li_5_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r65);
      const option_r55 = restoredCtx.$implicit;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r66.click(option_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Select2_ng_template_16_ng_container_9_li_1_li_5_div_2_Template, 1, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Select2_ng_template_16_ng_container_9_li_1_li_5_ng_template_3_Template, 1, 2, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r55 = ctx.$implicit;
    const j_r56 = ctx.index;
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r51.getOptionStyle(option_r55));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", option_r55.id || ctx_r51.id + "-option-" + i_r45 + "-" + j_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", ctx_r51.isSelected(option_r55))("aria-disabled", ctx_r51.isDisabled(option_r55));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r51.hasTemplate(option_r55, "option"))("ngIfElse", _r59);
  }
}
function Select2_ng_template_16_ng_container_9_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Select2_ng_template_16_ng_container_9_li_1_strong_1_Template, 1, 2, "strong", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Select2_ng_template_16_ng_container_9_li_1_ng_template_2_Template, 1, 2, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, Select2_ng_template_16_ng_container_9_li_1_li_5_Template, 5, 7, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const groupOrOption_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r46.hasTemplate(groupOrOption_r44, "group"))("ngIfElse", _r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", groupOrOption_r44.options)("ngForTrackBy", ctx_r46.trackBy);
  }
}
function Select2_ng_template_16_ng_container_9_li_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 55);
  }
  if (rf & 2) {
    const groupOrOption_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", groupOrOption_r44.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function Select2_ng_template_16_ng_container_9_li_2_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function Select2_ng_template_16_ng_container_9_li_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, Select2_ng_template_16_ng_container_9_li_2_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const groupOrOption_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r72.getTemplate(groupOrOption_r44, "option"))("ngTemplateOutletContext", groupOrOption_r44);
  }
}
function Select2_ng_template_16_ng_container_9_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function Select2_ng_template_16_ng_container_9_li_2_Template_li_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78);
      const groupOrOption_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r76.mouseenter(groupOrOption_r44));
    })("click", function Select2_ng_template_16_ng_container_9_li_2_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78);
      const groupOrOption_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r79.click(groupOrOption_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Select2_ng_template_16_ng_container_9_li_2_div_2_Template, 1, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, Select2_ng_template_16_ng_container_9_li_2_ng_template_3_Template, 1, 2, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const groupOrOption_r44 = ctx_r81.$implicit;
    const i_r45 = ctx_r81.index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r47.getOptionStyle(groupOrOption_r44));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", groupOrOption_r44.id || ctx_r47.id + "-option-" + i_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", ctx_r47.isSelected(groupOrOption_r44))("aria-disabled", ctx_r47.isDisabled(groupOrOption_r44));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r47.hasTemplate(groupOrOption_r44, "option"))("ngIfElse", _r71);
  }
}
function Select2_ng_template_16_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Select2_ng_template_16_ng_container_9_li_1_Template, 6, 4, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Select2_ng_template_16_ng_container_9_li_2_Template, 5, 7, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const groupOrOption_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", groupOrOption_r44.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !groupOrOption_r44.options);
  }
}
function Select2_ng_template_16_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 57);
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r42.noResultMessage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function Select2_ng_template_16_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 58);
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r43.maxResultsMessage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function Select2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "div", 34, 35)(3, "div", 36)(4, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function Select2_ng_template_16_Template_input_keydown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r82.keyDown($event));
    })("keyup", function Select2_ng_template_16_Template_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r83);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r84.searchUpdate($event));
    })("change", function Select2_ng_template_16_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r83);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r85.prevChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 39)(7, "ul", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scrolled", function Select2_ng_template_16_Template_ul_scrolled_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r83);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r86.onScroll("down"));
    })("scrolledUp", function Select2_ng_template_16_Template_ul_scrolledUp_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r83);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r87.onScroll("up"));
    })("keydown", function Select2_ng_template_16_Template_ul_keydown_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r83);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r88.keyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, Select2_ng_template_16_ng_container_9_Template, 3, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, Select2_ng_template_16_li_10_Template, 1, 1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, Select2_ng_template_16_li_11_Template, 1, 1, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("select2-container--open", ctx_r10.isOpen)("select2-overlay", ctx_r10.overlay)("select2-position-auto", ctx_r10.listPosition === "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("select2-dropdown--below", !ctx_r10.select2above)("select2-dropdown--above", ctx_r10.select2above);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("select2-search--hide", ctx_r10.hideSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r10.id + "-search-field")("value", ctx_r10.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", ctx_r10.isOpen ? ctx_r10.tabIndex : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r10.resultMaxHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infiniteScrollDisabled", !ctx_r10.infiniteScroll && !ctx_r10.isOpen)("infiniteScrollDistance", ctx_r10.infiniteScrollDistance)("infiniteScrollThrottle", ctx_r10.infiniteScrollThrottle)("infiniteScrollContainer", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.filteredData)("ngForTrackBy", ctx_r10.trackBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r10.filteredData == null ? null : ctx_r10.filteredData.length) && ctx_r10.noResultMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.maxResultsExceeded);
  }
}
const _c5 = [[["select2-label"]], [["select2-hint"]]];
const _c6 = ["select2-label", "select2-hint"];
let nextUniqueId = 0;
const displaySearchStatusList = ['default', 'hidden', 'always'];
class Select2 {
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
  /** auto create if not existe */
  get autoCreate() {
    return this._autoCreate;
  }
  set autoCreate(value) {
    this._autoCreate = this._coerceBooleanProperty(value);
  }
  /** no template for label selection */
  get noLabelTemplate() {
    return this._noLabelTemplate;
  }
  set noLabelTemplate(value) {
    this._noLabelTemplate = this._coerceBooleanProperty(value);
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
        search: text
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
    return this.listPosition === 'auto' ? undefined : null;
  }
  get resultsElement() {
    return this.resultContainer?.nativeElement;
  }
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
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.removeOption = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.option = null;
    this.isOpen = false;
    /** Whether the element is focused or not. */
    this.focused = false;
    this.hoveringValue = null;
    this.innerSearchText = '';
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
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
    this._autoCreate = true;
    this._noLabelTemplate = true;
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
  ngOnInit() {
    this._viewportRuler.change(100).subscribe(() => {
      if (this.isOpen) {
        this.triggerRect();
      }
    });
    const option = _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getOptionsByValue(this._data, this._control ? this._control.value : this.value, this.multiple);
    if (option !== null) {
      this.option = option;
    }
    if (!Array.isArray(option)) {
      this.hoveringValue = this.value;
    }
    this.updateSearchBox();
  }
  ngAfterViewInit() {
    this.cdkConnectedOverlay.positionChange.subscribe(posChange => {
      if (this.listPosition === 'auto' && posChange.connectionPair?.originY && this._overlayPosition !== posChange.connectionPair.originY) {
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
    const hidden = this.customSearchEnabled ? false : _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.isSearchboxHiddex(this._data, this._minCountForSearch);
    if (this.isSearchboxHidden !== hidden) {
      this.isSearchboxHidden = hidden;
    }
  }
  hideSearch() {
    const displaySearchStatus = displaySearchStatusList.indexOf(this.displaySearchStatus) > -1 ? this.displaySearchStatus : 'default';
    return displaySearchStatus === 'default' && this.isSearchboxHidden || displaySearchStatus === 'hidden';
  }
  getOptionStyle(option) {
    return 'select2-results__option ' + (option.hide ? 'select2-results__option--hide ' : '') + (option.value === this.hoveringValue ? 'select2-results__option--highlighted ' : '') + (option.classes || '');
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
  reset(event) {
    this.select(null);
    this.stopEvent(event);
  }
  prevChange(event) {
    event.stopPropagation();
  }
  stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  toggleOpenAndClose(focus = true, open) {
    if (this.disabled) {
      return;
    }
    this._focus(focus);
    this.isOpen = open ?? !this.isOpen;
    if (this.isOpen) {
      this.innerSearchText = '';
      this.updateFilteredData();
      this._focusSearchboxOrResultsElement(focus);
      setTimeout(() => {
        if (this.option) {
          const option = this.option instanceof Array ? this.option[0] : this.option;
          this.updateScrollFromOption(option);
        } else if (this.resultsElement) {
          this.resultsElement.scrollTop = 0;
        }
        setTimeout(() => {
          this.triggerRect();
          this.cdkConnectedOverlay?.overlayRef?.updatePosition();
        }, 100);
      });
      this.open.emit(this);
    } else {
      this.close.emit(this);
    }
    if (this.isOpen && !this._clickDetection && focus) {
      setTimeout(() => {
        window.document.body.addEventListener('click', this._clickDetectionFc, false);
        this._clickDetection = true;
      }, _select2_const__WEBPACK_IMPORTED_MODULE_0__.timeout);
    }
    this._changeDetectorRef.markForCheck();
  }
  hasTemplate(option, defaut) {
    return this.templates instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef || this.templates?.[option.templateId] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef || this.templates?.[defaut] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef;
  }
  getTemplate(option, defaut) {
    return this.hasTemplate(option, defaut) ? this.templates[option.templateId] || this.templates[defaut] || this.templates : undefined;
  }
  triggerRect() {
    this._triggerRect = this.selectionElement.getBoundingClientRect();
    this._dropdownRect = this.dropdown?.nativeElement ? this.dropdown.nativeElement.getBoundingClientRect() : undefined;
  }
  testSelection(option) {
    if (option.disabled) {
      return false;
    }
    return !this.multiple || !this.limitSelection || Array.isArray(this._value) && this._value.length < this.limitSelection;
  }
  testValueChange(value1, value2) {
    if ((value1 === null || value1 === undefined) && (value2 === null || value2 === undefined) || value1 === value2) {
      return false;
    }
    if (this.multiple && value1?.length && value2?.length && value1.length === value2.length) {
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
        result = _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getFilteredSelectedData(result, this.option);
      }
      if (!this.customSearchEnabled && this.searchText && this.searchText.length >= +this.minCharForSearch) {
        result = _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getFilteredData(result, this.searchText, this.editPattern);
      }
      if (this.maxResults > 0) {
        const data = _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getReduceData(result, +this.maxResults);
        result = data.result;
        this.maxResultsExceeded = data.reduce;
      } else {
        this.maxResultsExceeded = false;
      }
      if (_select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.valueIsNotInFilteredData(result, this.hoveringValue)) {
        this.hoveringValue = _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getFirstAvailableOption(result);
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
    } else if (this.isOpen && !this.ifParentContainsId(e.target, this._id)) {
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
    return this.containClasses(element, cssClass.trim().split(/\s+/)) ? element : element.parentElement ? this.getParentElementByClass(element.parentElement, cssClass) : null;
  }
  getParentElementById(element, id) {
    return element.id === id ? element : element.parentElement ? this.getParentElementById(element.parentElement, id) : null;
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
        } else {
          options.splice(index, 1);
        }
        value = this.option.map(op => op.value);
      } else {
        this.option = option;
        if (this.isOpen) {
          this.isOpen = false;
          this.close.emit(this);
          this.selectionElement?.focus();
        }
        value = this.option.value;
      }
    } else {
      this.option = null;
    }
    if (this.multiple && this.hideSelectedItems) {
      this.updateFilteredData();
    }
    if (this._control) {
      this._onChange(value);
    } else {
      this._value = value;
    }
    this.update.emit({
      component: this,
      value: value,
      options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
    });
  }
  keyDown(e, create = false) {
    if (create && this._testKey(e, ['Enter', 13])) {
      this.createAndAdd(e);
      return;
    }
    if (this._testKey(e, ['ArrowDown', 40])) {
      this.moveDown();
      e.preventDefault();
    } else if (this._testKey(e, ['ArrowUp', 38])) {
      this.moveUp();
      e.preventDefault();
    } else if (this._testKey(e, ['Enter', 13])) {
      this.selectByEnter();
      e.preventDefault();
    } else if (this._testKey(e, ['Escape', 'Tab', 9, 27]) && this.isOpen) {
      this.toggleOpenAndClose();
      this._focus(false);
    }
  }
  openKey(e, create = false) {
    if (create && this._testKey(e, ['Enter', 13])) {
      this.createAndAdd(e);
      return;
    }
    if (this._testKey(e, ['ArrowDown', 'ArrowUp', 'Enter', 40, 38, 13])) {
      this.toggleOpenAndClose();
      e.preventDefault();
    } else if (this._testKey(e, ['Escape', 'Tab', 9, 27])) {
      this._focus(false);
      this._onTouched();
    }
  }
  searchUpdate(e) {
    this.searchText = e.target.value;
    this.updateFilteredData();
  }
  trackBy(_index, item) {
    return item.value;
  }
  isSelected(option) {
    return _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.isSelected(this.option, option, this.multiple);
  }
  isDisabled(option) {
    return option.disabled ? 'true' : 'false';
  }
  removeSelection(e, option) {
    _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.removeSelection(this.option, option);
    if (this.multiple && this.hideSelectedItems) {
      this.updateFilteredData();
    }
    const value = this.option.map(op => op.value);
    if (this._control) {
      this._onChange(value);
    } else {
      this._value = value;
    }
    this.update.emit({
      component: this,
      value: value,
      options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
    });
    this.removeOption.emit({
      component: this,
      value: value,
      removedOption: option
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
      search: this.innerSearchText
    });
  }
  _isErrorState() {
    const isInvalid = this._control?.invalid;
    const isTouched = this._control?.touched;
    const isSubmitted = this._parentFormGroup?.submitted || this._parentForm?.submitted;
    return !!(isInvalid && (isTouched || isSubmitted));
  }
  addItem(value) {
    let item = _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getOptionByValue(this._data, value);
    if (!item) {
      item = {
        value,
        label: value
      };
      this._data.push(item);
    }
    return item;
  }
  createAndAdd(e) {
    const value = e.target.value;
    if (value.trim()) {
      const item = this.addItem(value.trim());
      this.click(item);
      e.target.value = '';
    }
    this.stopEvent(e);
  }
  moveUp() {
    this.updateScrollFromOption(_select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getPreviousOption(this.filteredData, this.hoveringValue));
  }
  moveDown() {
    this.updateScrollFromOption(_select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getNextOption(this.filteredData, this.hoveringValue));
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
      const option = _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getOptionByValue(this._data, this.hoveringValue);
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
    } else if (event['keyIdentifier'] !== undefined) {
      code = event['keyIdentifier'];
    } else if (event['keyCode'] !== undefined) {
      code = event['keyCode'];
    } else {
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
    if (this.option || value !== undefined && value !== null) {
      const isArray = Array.isArray(value);
      if (this.multiple && value && !isArray) {
        throw new Error('Non array value.');
      } else if (this._data) {
        if (this.multiple) {
          this.option = []; // if value is null, then empty option and return
          if (isArray) {
            // value is not null. Preselect value
            const selectedValues = _select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getOptionsByValue(this._data, value, this.multiple);
            selectedValues.map(item => this.select(item));
          }
        } else {
          this.select(_select2_utils__WEBPACK_IMPORTED_MODULE_1__.Select2Utils.getOptionByValue(this._data, value));
        }
      } else if (this._control) {
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
  _focusSearchboxOrResultsElement(focus = true) {
    if (!this.isSearchboxHidden) {
      setTimeout(() => {
        if (this.searchInput && this.searchInput.nativeElement && focus) {
          this.searchInput.nativeElement.focus();
        }
      });
    } else if (this.resultsElement) {
      this.resultsElement.focus();
    }
  }
  _focus(state) {
    if (!state && this.focused) {
      this.focused = state;
      this.blur.emit(this);
    } else if (state && !this.focused) {
      this.focused = state;
      this.focus.emit(this);
    }
  }
  _isAbobeOverlay() {
    return this.overlay && this._overlayPosition && this.listPosition === 'auto' ? this._overlayPosition === 'top' : this.listPosition === 'above';
  }
}
Select2.ɵfac = function Select2_Factory(t) {
  return new (t || Select2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'));
};
Select2.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: Select2,
  selectors: [["select2"]],
  viewQuery: function Select2_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.CdkConnectedOverlay, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selection = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.resultContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.results = _t);
    }
  },
  hostVars: 8,
  hostBindings: function Select2_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-invalid", ctx.ariaInvalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("material", ctx.classMaterial)("nostyle", ctx.classNostyle)("select2-above", ctx.select2above);
    }
  },
  inputs: {
    data: "data",
    minCharForSearch: "minCharForSearch",
    displaySearchStatus: "displaySearchStatus",
    placeholder: "placeholder",
    customSearchEnabled: "customSearchEnabled",
    limitSelection: "limitSelection",
    listPosition: "listPosition",
    multiple: "multiple",
    overlay: "overlay",
    styleMode: "styleMode",
    noResultMessage: "noResultMessage",
    maxResults: "maxResults",
    maxResultsMessage: "maxResultsMessage",
    infiniteScrollDistance: "infiniteScrollDistance",
    infiniteScrollThrottle: "infiniteScrollThrottle",
    infiniteScroll: "infiniteScroll",
    autoCreate: "autoCreate",
    noLabelTemplate: "noLabelTemplate",
    editPattern: "editPattern",
    templates: "templates",
    resultMaxHeight: "resultMaxHeight",
    minCountForSearch: "minCountForSearch",
    id: "id",
    required: "required",
    disabled: "disabled",
    hideSelectedItems: "hideSelectedItems",
    readonly: "readonly",
    value: "value",
    tabIndex: "tabIndex",
    resettable: "resettable"
  },
  outputs: {
    update: "update",
    open: "open",
    close: "close",
    focus: "focus",
    blur: "blur",
    search: "search",
    scroll: "scroll",
    removeOption: "removeOption"
  },
  ngContentSelectors: _c6,
  decls: 18,
  vars: 28,
  consts: [[1, "select2-label", 3, "click"], ["class", "select2-required", 4, "ngIf"], [1, "select2", "select2-container", "select2-container--default"], ["cdkOverlayOrigin", "", 1, "selection", 3, "tabindex", "click", "focus", "blur", "keydown"], ["selection", "", "trigger", "cdkOverlayOrigin"], ["role", "combobox", 1, "select2-selection"], ["class", "select2-selection__rendered", 3, "title", 4, "ngIf"], ["class", "select2-selection__reset", "role", "presentation", 3, "click", 4, "ngIf"], ["class", "select2-selection__arrow", "role", "presentation", 4, "ngIf"], ["class", "select2-selection__rendered", 4, "ngIf"], [4, "ngIf"], [1, "select2-subscript-wrapper"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "select2-overlay-backdrop", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayPositions", "backdropClick"], ["containerTemplate", ""], [1, "select2-required"], [1, "select2-selection__rendered", 3, "title"], [1, "select2-selection__placeholder"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], ["template", ""], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "presentation", 1, "select2-selection__reset", 3, "click"], ["role", "presentation", 1, "select2-selection__arrow"], [1, "select2-selection__rendered"], ["class", "select2-selection__placeholder", 3, "select2-selection__placeholder__option", 4, "ngIf"], ["class", "select2-selection__choice", "tabindex", "0", 3, "title", "keydown.enter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "select2-selection__auto-create", 3, "focus", "blur", 4, "ngIf"], ["tabindex", "0", 1, "select2-selection__choice", 3, "title", "keydown.enter"], ["class", "select2-selection__choice__remove", "role", "presentation", 3, "click", 4, "ngIf"], ["role", "presentation", 1, "select2-selection__choice__remove", 3, "click"], [1, "select2-selection__auto-create", 3, "focus", "blur"], ["type", "search", "role", "textbox", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "select2-create__field", 3, "id", "click", "keydown", "keyup", "change"], [4, "ngTemplateOutlet"], [1, "select2-container", "select2-container--default", "select2-container-dropdown"], [1, "select2-dropdown"], ["dropdown", ""], [1, "select2-search", "select2-search--dropdown"], ["type", "search", "role", "textbox", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "select2-search__field", 3, "id", "value", "keydown", "keyup", "change"], ["searchInput", ""], [1, "select2-results"], ["role", "tree", "tabindex", "-1", "infiniteScroll", "", 1, "select2-results__options", 3, "infiniteScrollDisabled", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer", "scrolled", "scrolledUp", "keydown"], ["results", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "select2-no-result select2-results__option", 3, "innerHTML", 4, "ngIf"], ["class", "select2-too-much-result select2-results__option", 3, "innerHTML", 4, "ngIf"], ["class", "select2-results__option", "role", "group", 4, "ngIf"], ["role", "treeitem", 3, "id", "class", "mouseenter", "click", 4, "ngIf"], ["role", "group", 1, "select2-results__option"], ["optGroup", ""], [1, "select2-results__options", "select2-results__options--nested"], ["role", "treeitem", 3, "id", "class", "mouseenter", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "treeitem", 3, "id", "mouseenter", "click"], ["result", ""], ["class", "select2-label-content", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["liGroup", ""], [1, "select2-label-content", 3, "innerHTML"], ["li", ""], [1, "select2-no-result", "select2-results__option", 3, "innerHTML"], [1, "select2-too-much-result", "select2-results__option", 3, "innerHTML"]],
  template: function Select2_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Select2_Template_div_click_0_listener() {
        return ctx.toggleOpenAndClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Select2_span_2_Template, 1, 0, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Select2_Template_div_click_4_listener() {
        return ctx.toggleOpenAndClose();
      })("focus", function Select2_Template_div_focus_4_listener() {
        return ctx.focusin();
      })("blur", function Select2_Template_div_blur_4_listener() {
        return ctx.focusout();
      })("keydown", function Select2_Template_div_keydown_4_listener($event) {
        return ctx.openKey($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, Select2_span_8_Template, 5, 6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, Select2_span_9_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, Select2_span_10_Template, 1, 0, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, Select2_ul_11_Template, 4, 4, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, Select2_ng_container_12_Template, 2, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](14, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, Select2_ng_template_15_Template, 1, 1, "ng-template", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function Select2_Template_ng_template_backdropClick_15_listener() {
        return ctx.toggleOpenAndClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, Select2_ng_template_16_Template, 12, 25, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("select2-container--focus", ctx.focused)("select2-container--below", !ctx.select2above)("select2-container--above", ctx.select2above)("select2-container--open", ctx.isOpen)("select2-container--disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("select2-focused", ctx.focused);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tabindex", !ctx.isOpen ? ctx.tabIndex : "-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("select2-selection--multiple", ctx.multiple)("select2-selection--single", !ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.multiple && ctx.resettable && ctx.select2Option && !(ctx.disabled || ctx.readonly));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.overlay);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r2)("cdkConnectedOverlayOpen", ctx.isOpen && ctx.overlay)("cdkConnectedOverlayMinWidth", ctx.overlayWidth)("cdkConnectedOverlayHeight", ctx.overlayHeight)("cdkConnectedOverlayPositions", ctx._positions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.CdkConnectedOverlay, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.CdkOverlayOrigin, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__.InfiniteScrollDirective],
  styles: [".select2-label[_ngcontent-%COMP%] {\n  color: var(--select2-label-text-color, #000);\n}\n\n.select2-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n  width: 100%;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-container-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0px;\n  opacity: 0;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  height: var(--select2-single-height, 28px);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 0 0 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1 1 auto;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%] {\n  position: relative;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  min-height: var(--select2-multiple-height, 28px);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%] {\n  display: inline-flex;\n  overflow: hidden;\n  padding-left: 8px;\n  padding-bottom: 2px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-selection__auto-create[_ngcontent-%COMP%] {\n  flex: 1 1 150px;\n  min-width: 150px;\n  display: flex;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-create__field[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-create__field[_ngcontent-%COMP%]:focus {\n  border: 0;\n  outline: 0;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%] {\n  float: left;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: none;\n  font-size: 100%;\n  margin-top: 5px;\n  padding: 0;\n}\n.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\n.select2-dropdown[_ngcontent-%COMP%] {\n  background: var(--select2-dropdown-background, white);\n  border: 1px solid var(--select2-dropdown-border-color, #aaa);\n  border-radius: var(--select2-selection-border-radius, 4px);\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 100%;\n  z-index: 1051;\n  height: 0;\n  overflow: hidden;\n}\n.select2-dropdown[_ngcontent-%COMP%]   .select2-label-content[_ngcontent-%COMP%] {\n  \n  display: contents;\n}\n\n.select2-results[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.select2-results__options[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.select2-results__option[_ngcontent-%COMP%] {\n  padding: 6px;\n  -webkit-user-select: none;\n          user-select: none;\n  color: var(--select2-option-text-color, #000);\n}\n.select2-results__option[aria-selected][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.select2-container.select2-container-dropdown.select2-container--open[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 1;\n}\n\n.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: auto;\n}\n.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown--above[_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  bottom: 27px;\n  display: flex;\n  flex-direction: column-reverse;\n}\n.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown--below[_ngcontent-%COMP%] {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.select2-search--dropdown[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px;\n}\n.select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%] {\n  padding: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n.select2-search--dropdown.select2-search--hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.select2-close-mask[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  min-width: 100%;\n  height: auto;\n  width: auto;\n  opacity: 0;\n  z-index: 99;\n}\n\n.select2-required[_ngcontent-%COMP%]::before {\n  content: \"*\";\n  color: var(--select2-required-color, red);\n}\n\n.select2-hidden-accessible[_ngcontent-%COMP%] {\n  border: 0 !important;\n  clip: rect(0 0 0 0) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n}\n\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%] {\n  background: var(--select2-selection-background, #fff);\n  border: 1px solid var(--select2-selection-border-color, #aaa);\n  border-radius: var(--select2-selection-border-radius, 4px);\n  display: flex;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%] {\n  color: var(--select2-selection-text-color, #111);\n  line-height: 28px;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: right;\n  font-weight: bold;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%] {\n  color: var(--select2-placeholder-color, #999);\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: var(--select2-placeholder-overflow, ellipsis);\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%] {\n  display: none;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__reset[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%] {\n  display: flex;\n  width: 20px;\n  align-items: center;\n  justify-content: center;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]::before {\n  content: \" \";\n  border-color: var(--select2-arrow-color, #888) transparent;\n  border-style: solid;\n  border-width: 5px 4px 0;\n  height: 0;\n  width: 0;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__reset[_ngcontent-%COMP%] {\n  color: var(--select2-reset-color, #999);\n}\n.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%] {\n  background: var(--select2-selection-disabled-background, #eee);\n  cursor: default;\n}\n.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%] {\n  display: none;\n}\n.select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]::before {\n  border-color: transparent transparent var(--select2-arrow-color, #888);\n  border-width: 0 4px 5px;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  background: var(--select2-selection-background, #fff);\n  border: 1px solid var(--select2-selection-border-color, #aaa);\n  border-radius: var(--select2-selection-border-radius, 4px);\n  cursor: text;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  list-style: none;\n  margin: 0;\n  padding: 0 5px;\n  width: 100%;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  color: var(--select2-placeholder-color, #999);\n  margin-top: 5px;\n  float: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: var(--select2-placeholder-overflow, ellipsis);\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%] {\n  display: none;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: right;\n  font-weight: bold;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice[_ngcontent-%COMP%] {\n  color: var(--select2-selection-choice-text-color, #000);\n  background: var(--select2-selection-choice-background, #e4e4e4);\n  border: 1px solid var(--select2-selection-choice-border-color, #aaa);\n  border-radius: var(--select2-selection-border-radius, 4px);\n  cursor: default;\n  padding: 0 5px;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%] {\n  color: var(--select2-selection-choice-close-color, #999);\n  cursor: pointer;\n  display: inline-block;\n  font-weight: bold;\n  margin-right: 2px;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%]:hover {\n  color: var(--select2-selection-choice-hover-close-color, #333);\n}\n.select2-container--default.select2-container--focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  border: solid var(--select2-selection-focus-border-color, #000) 1px;\n  outline: none;\n}\n.select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  border: solid var(--select2-selection-focus-border-color, #000) 1px;\n  outline: none;\n}\n.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  background: var(--select2-selection-disabled-background, #eee);\n  cursor: default;\n}\n.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%] {\n  display: none;\n}\n.select2-container--default.select2-container--open.select2-container--above[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default.select2-container--open.select2-container--above[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.select2-container--default.select2-container--open.select2-container--below[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default.select2-container--open.select2-container--below[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%] {\n  border: 1px solid var(--select2-search-border-color, #aaa);\n  background: 1px solid var(--select2-search-background, #fff);\n  border-radius: var(--select2-search-border-radius, 0px);\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  -webkit-appearance: textfield;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results[_ngcontent-%COMP%]    > .select2-results__options[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[role=group][_ngcontent-%COMP%] {\n  padding: 0;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-disabled=true][_ngcontent-%COMP%] {\n  color: var(--select2-option-disabled-text-color, #999);\n  background: var(--select2-option-disabled-background, transparent);\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%] {\n  color: var(--select2-option-selected-text-color, #000);\n  background: var(--select2-option-selected-background, #ddd);\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__group[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%] {\n  margin-left: -1em;\n  padding-left: 2em;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%] {\n  margin-left: -2em;\n  padding-left: 3em;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%] {\n  margin-left: -3em;\n  padding-left: 4em;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%] {\n  margin-left: -4em;\n  padding-left: 5em;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%] {\n  margin-left: -5em;\n  padding-left: 6em;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option--highlighted[aria-selected][_ngcontent-%COMP%] {\n  background: var(--select2-option-highlighted-background, #5897fb);\n  color: var(--select2-option-highlighted-text-color, #fff);\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__option--hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.select2-container--default[_ngcontent-%COMP%]   .select2-results__group[_ngcontent-%COMP%] {\n  cursor: default;\n  display: block;\n  padding: 6px;\n  color: var(--select2-option-group-text-color, gray);\n  background: var(--select2-option-group-background, transparent);\n}\n\n.select2-no-result[_ngcontent-%COMP%] {\n  color: var(--select2-no-result-color, #888);\n  font-style: var(--select2-no-result-font-style, italic);\n}\n\n.select2-too-much-result[_ngcontent-%COMP%] {\n  color: var(--select2-too-much-result-color, #888);\n  font-style: var(--select2-too-much-font-style, italic);\n}\n\n.nostyle[_nghost-%COMP%]   .select2-dropdown[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n.nostyle[_nghost-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: transparent;\n}\n.nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: transparent;\n}\n\n\n.material[_nghost-%COMP%] {\n  display: inline-block;\n  width: 300px;\n}\n.material[_nghost-%COMP%]    > .select2-container[_ngcontent-%COMP%] {\n  padding-bottom: 1.29688em;\n  vertical-align: inherit;\n}\n.material[_nghost-%COMP%]    > .select2-container[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent;\n  display: inline-flex;\n  align-items: baseline;\n  width: 100%;\n  height: auto;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  border-radius: 0;\n  height: 24px;\n  box-sizing: border-box;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]::before, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  bottom: 1.65em;\n  background: var(--select2-material-underline, #ddd);\n  height: 1px;\n  width: 100%;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]::after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  bottom: 1.63em;\n  background: var(--select2-material-underline-active, #5a419e);\n  height: 2px;\n  width: 0%;\n  left: 50%;\n  transition: none;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%] {\n  padding-left: 1px;\n  line-height: inherit;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--select2-material-placeholder-color, rgba(0, 0, 0, 0.38));\n  transition: transform 0.3s;\n  position: absolute;\n  transform-origin: 0 21px;\n  left: 0;\n  top: 20px;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-container--open[_ngcontent-%COMP%] {\n  left: 0;\n  bottom: 1.6em;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%] {\n  transform: translateY(-1.5em) scale(0.75) perspective(100px) translateZ(0.001px);\n  width: 133.33333%;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%] {\n  top: 20px;\n}\n.material[_nghost-%COMP%]   .select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]::after, .material[_nghost-%COMP%]   .select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]::after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]::after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]::after {\n  transition: width 0.3s cubic-bezier(0.12, 1, 0.77, 1), left 0.3s cubic-bezier(0.12, 1, 0.77, 1);\n  width: 100%;\n  left: 0%;\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-dropdown[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: 0;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option--highlighted[aria-selected][_ngcontent-%COMP%] {\n  background: var(--select2-material-option-selected-background, rgba(0, 0, 0, 0.04));\n  color: var(--select2-material-option-highlighted-text-color, #000);\n}\n.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%] {\n  color: var(--select2-material-option-selected-text-color, #ff5722);\n}\n.material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]::before, .material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]::before {\n  background: var(--select2-material-underline-disabled, linear-gradient(to right, rgba(0, 0, 0, 0.26) 0, rgba(0, 0, 0, 0.26) 33%, transparent 0));\n  background-size: 4px 1px;\n  background-repeat: repeat-x;\n  background-position: 0 bottom;\n}\n.material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]::before, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]::after, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]::before, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]::after {\n  background: var(--select2-material-underline-invalid, red);\n}\n.material[_nghost-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n  border: 0;\n}\n.material[_nghost-%COMP%]   .select2-subscript-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% - 1.72917em);\n  font-size: 75%;\n  color: var(--select2-hint-text-color, #888);\n}\n\n  .select2-overlay-backdrop {\n  background: var(--select2-overlay-backdrop, transparent);\n}\n  .cdk-overlay-container .select2-container .select2-dropdown.select2-dropdown--above {\n  bottom: 28px;\n}\n  .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown {\n  margin-bottom: 28px;\n}\n  .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown.select2-dropdown--above {\n  bottom: 0;\n  margin-bottom: 0;\n  margin-top: 28px;\n}\n\n\n@supports (-moz-appearance: none) {\n  select2.material[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], select2.material[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%] {\n    height: 26px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25nLXNlbGVjdDItY29tcG9uZW50L3NyYy9saWIvc2VsZWN0Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDUjtBQUVJO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUFSO0FBRVE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQVo7QUFHUTtFQUNJLGtCQUFBO0FBRFo7QUFLSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFIUjtBQUtRO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFIWjtBQUtZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUhoQjtBQU1ZO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUFKaEI7QUFNZ0I7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUpwQjtBQVVJO0VBQ0ksV0FBQTtBQVJSO0FBVVE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFSWjtBQVVZO0VBQ0ksd0JBQUE7QUFSaEI7O0FBY0E7RUFDSSxxREFBQTtFQUNBLDREQUFBO0VBQ0EsMERBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBWEo7QUFhSTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUFYUjs7QUFlQTtFQUNJLGNBQUE7QUFaSjs7QUFlQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFaSjs7QUFlQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsNkNBQUE7QUFaSjtBQWNJO0VBQ0ksZUFBQTtBQVpSOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBYko7O0FBaUJJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFkUjtBQWlCSTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFmUjtBQWtCSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQWhCUjs7QUFvQkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQWpCSjtBQW1CSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFqQlI7QUFtQlE7RUFDSSx3QkFBQTtBQWpCWjtBQXFCSTtFQUNJLGFBQUE7QUFuQlI7O0FBdUJBO0VBQ0ksU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFwQko7O0FBdUJBO0VBQ0ksWUFBQTtFQUNBLHlDQUFBO0FBcEJKOztBQXVCQTtFQUNJLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFwQko7O0FBd0JJO0VBQ0kscURBQUE7RUFDQSw2REFBQTtFQUNBLDBEQUFBO0VBQ0EsYUFBQTtBQXJCUjtBQXVCUTtFQUNJLGdEQUFBO0VBQ0EsaUJBQUE7QUFyQlo7QUF3QlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBdEJaO0FBeUJRO0VBQ0ksNkNBQUE7QUF2Qlo7QUF5Qlk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7QUF2QmhCO0FBMkJRO0VBQ0ksYUFBQTtBQXpCWjtBQTRCUTs7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUExQlo7QUE2QlE7RUFDSSxZQUFBO0VBQ0EsMERBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUEzQlo7QUE4QlE7RUFDSSx1Q0FBQTtBQTVCWjtBQWlDUTtFQUNJLDhEQUFBO0VBQ0EsZUFBQTtBQS9CWjtBQWlDWTtFQUNJLGFBQUE7QUEvQmhCO0FBc0NZO0VBQ0ksc0VBQUE7RUFDQSx1QkFBQTtBQXBDaEI7QUF5Q0k7RUFDSSxxREFBQTtFQUNBLDZEQUFBO0VBQ0EsMERBQUE7RUFDQSxZQUFBO0FBdkNSO0FBeUNRO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUF2Q1o7QUF5Q1k7RUFDSSxnQkFBQTtBQXZDaEI7QUEyQ1E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7QUF6Q1o7QUE0Q1E7RUFDSSxhQUFBO0FBMUNaO0FBNkNRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTNDWjtBQThDUTtFQUNJLHVEQUFBO0VBQ0EsK0RBQUE7RUFDQSxvRUFBQTtFQUNBLDBEQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE1Q1o7QUErQ1E7RUFDSSx3REFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUE3Q1o7QUErQ1k7RUFDSSw4REFBQTtBQTdDaEI7QUFtRFE7RUFDSSxtRUFBQTtFQUNBLGFBQUE7QUFqRFo7QUFzRFE7O0VBRUksbUVBQUE7RUFDQSxhQUFBO0FBcERaO0FBeURRO0VBQ0ksOERBQUE7RUFDQSxlQUFBO0FBdkRaO0FBMERRO0VBQ0ksYUFBQTtBQXhEWjtBQTZEUTs7RUFFSSx5QkFBQTtFQUNBLDBCQUFBO0FBM0RaO0FBZ0VROztFQUVJLDRCQUFBO0VBQ0EsNkJBQUE7QUE5RFo7QUFtRVE7RUFDSSwwREFBQTtFQUNBLDREQUFBO0VBQ0EsdURBQUE7QUFqRVo7QUFzRVE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXBFWjtBQXdFSTtFQUNJLGdCQUFBO0FBdEVSO0FBMEVRO0VBQ0ksVUFBQTtBQXhFWjtBQTJFUTtFQUNJLHNEQUFBO0VBQ0Esa0VBQUE7QUF6RVo7QUE0RVE7RUFDSSxzREFBQTtFQUNBLDJEQUFBO0FBMUVaO0FBNkVRO0VBQ0ksaUJBQUE7QUEzRVo7QUE2RVk7RUFDSSxlQUFBO0FBM0VoQjtBQThFWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUE1RWhCO0FBOEVnQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUE1RXBCO0FBOEVvQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUE1RXhCO0FBOEV3QjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUE1RTVCO0FBOEU0QjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUE1RWhDO0FBcUZJO0VBQ0ksaUVBQUE7RUFDQSx5REFBQTtBQW5GUjtBQXNGSTtFQUNJLGFBQUE7QUFwRlI7QUF1Rkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLCtEQUFBO0FBckZSOztBQXlGQTtFQUNJLDJDQUFBO0VBQ0EsdURBQUE7QUF0Rko7O0FBeUZBO0VBQ0ksaURBQUE7RUFDQSxzREFBQTtBQXRGSjs7QUEwRkk7RUFDSSx5QkFBQTtBQXZGUjtBQTBGSTs7RUFFSSx1QkFBQTtFQUNBLHlCQUFBO0FBeEZSO0FBNkZROzs7O0VBRUksdUJBQUE7RUFDQSx5QkFBQTtBQXpGWjs7QUErRkEseURBQUE7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQTVGSjtBQThGSTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUE1RlI7QUE4RlE7RUFDSSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBNUZaO0FBaUdROztFQUVJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUEvRlo7QUFpR1k7O0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtREFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBOUZoQjtBQWlHWTs7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUE5RmhCO0FBaUdZOztFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUE5RmhCO0FBaUdZOztFQUNJLGNBQUE7RUFDQSxxRUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBOUZoQjtBQWtHUTtFQUNJLE9BQUE7RUFDQSxhQUFBO0FBaEdaO0FBbUdRO0VBQ0ksZ0ZBQUE7RUFDQSxpQkFBQTtBQWpHWjtBQW9HUTtFQUNJLFNBQUE7QUFsR1o7QUF1R1k7Ozs7RUFFSSwrRkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBbkdoQjtBQXVHUTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0FBckdaO0FBd0dROztFQUVJLG1GQUFBO0VBQ0Esa0VBQUE7QUF0R1o7QUF5R1E7RUFDSSxrRUFBQTtBQXZHWjtBQTBHUTtFQUVJLHVCQUFBO0FBekdaO0FBMkdZO0VBQ0ksZ0pBQUE7RUFJQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUE1R2hCO0FBbUhRO0VBRUksMERBQUE7QUFsSFo7QUF1SFE7O0VBRUksU0FBQTtBQXJIWjtBQXlISTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUF2SFI7O0FBNEhJO0VBQ0ksd0RBQUE7QUF6SFI7QUE0SFE7RUFDSSxZQUFBO0FBMUhaO0FBNEhRO0VBQ0ksbUJBQUE7QUExSFo7QUEySFk7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXpIaEI7O0FBZ0lBLCtDQUFBO0FBQ0E7RUFDSTs7SUFFSSxZQUFBO0VBN0hOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0Mi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLXNlbGVjdDItbGFiZWwtdGV4dC1jb2xvciwgIzAwMCk7XG59XG5cbi5zZWxlY3QyLWNvbnRhaW5lciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnNlbGVjdDItY29udGFpbmVyLWRyb3Bkb3duIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1zZWxlY3QyLXNpbmdsZS1oZWlnaHQsIDI4cHgpO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgOHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tc2VsZWN0Mi1tdWx0aXBsZS1oZWlnaHQsIDI4cHgpO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGdhcDogNXB4O1xuXG4gICAgICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2F1dG8tY3JlYXRlIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMTUwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0Mi1jcmVhdGVfX2ZpZWxkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG5cbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QyLXNlYXJjaC0taW5saW5lIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgLnNlbGVjdDItc2VhcmNoX19maWVsZCB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0Mi1kcm9wZG93biB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1kcm9wZG93bi1iYWNrZ3JvdW5kLCB3aGl0ZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VsZWN0Mi1kcm9wZG93bi1ib3JkZXItY29sb3IsICNhYWEpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWJvcmRlci1yYWRpdXMsIDRweCk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA1MTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5zZWxlY3QyLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgIH1cbn1cblxuLnNlbGVjdDItcmVzdWx0cyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbnMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiB7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi10ZXh0LWNvbG9yLCAjMDAwKTtcblxuICAgICZbYXJpYS1zZWxlY3RlZF0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1jb250YWluZXItZHJvcGRvd24uc2VsZWN0Mi1jb250YWluZXItLW9wZW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiB7XG4gICAgLnNlbGVjdDItZHJvcGRvd24ge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5zZWxlY3QyLWRyb3Bkb3duLS1hYm92ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3R0b206IDI3cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cge1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG59XG5cbi5zZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDRweDtcblxuICAgIC5zZWxlY3QyLXNlYXJjaF9fZmllbGQge1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICY6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLXNlYXJjaC0taGlkZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uc2VsZWN0Mi1jbG9zZS1tYXNrIHtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDk5O1xufVxuXG4uc2VsZWN0Mi1yZXF1aXJlZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnKic7XG4gICAgY29sb3I6IHZhcigtLXNlbGVjdDItcmVxdWlyZWQtY29sb3IsIHJlZCk7XG59XG5cbi5zZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IC0xcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxcHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IHtcbiAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWJhY2tncm91bmQsICNmZmYpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWxlY3QyLXNlbGVjdGlvbi1ib3JkZXItY29sb3IsICNhYWEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWxlY3QyLXNlbGVjdGlvbi1ib3JkZXItcmFkaXVzLCA0cHgpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLXRleHQtY29sb3IsICMxMTEpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1wbGFjZWhvbGRlci1jb2xvciwgIzk5OSk7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiB2YXIoLS1zZWxlY3QyLXBsYWNlaG9sZGVyLW92ZXJmbG93LCBlbGxpcHNpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyX19vcHRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVzZXQsXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc2VsZWN0Mi1hcnJvdy1jb2xvciwgIzg4OCkgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHggNHB4IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVzZXQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItcmVzZXQtY29sb3IsICM5OTkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLXNlbGVjdGlvbi1kaXNhYmxlZC1iYWNrZ3JvdW5kLCAjZWVlKTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuc2VsZWN0Mi1jb250YWluZXItLW9wZW4ge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gICAgICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tc2VsZWN0Mi1hcnJvdy1jb2xvciwgIzg4OCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDRweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tYmFja2dyb3VuZCwgI2ZmZik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWJvcmRlci1jb2xvciwgI2FhYSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWJvcmRlci1yYWRpdXMsIDRweCk7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLXBsYWNlaG9sZGVyLWNvbG9yLCAjOTk5KTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiB2YXIoLS1zZWxlY3QyLXBsYWNlaG9sZGVyLW92ZXJmbG93LCBlbGxpcHNpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyX19vcHRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLXRleHQtY29sb3IsICMwMDApO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLWJhY2tncm91bmQsICNlNGU0ZTQpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLWJvcmRlci1jb2xvciwgI2FhYSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWxlY3QyLXNlbGVjdGlvbi1ib3JkZXItcmFkaXVzLCA0cHgpO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLXNlbGVjdGlvbi1jaG9pY2UtY2xvc2UtY29sb3IsICM5OTkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWNob2ljZS1ob3Zlci1jbG9zZS1jb2xvciwgIzMzMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnNlbGVjdDItY29udGFpbmVyLS1mb2N1c2VkIHtcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWZvY3VzLWJvcmRlci1jb2xvciwgIzAwMCkgMXB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbikgLnNlbGVjdDItZm9jdXNlZCB7XG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlLFxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgdmFyKC0tc2VsZWN0Mi1zZWxlY3Rpb24tZm9jdXMtYm9yZGVyLWNvbG9yLCAjMDAwKSAxcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItc2VsZWN0aW9uLWRpc2FibGVkLWJhY2tncm91bmQsICNlZWUpO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tb3Blbi5zZWxlY3QyLWNvbnRhaW5lci0tYWJvdmUge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSxcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnNlbGVjdDItY29udGFpbmVyLS1vcGVuLnNlbGVjdDItY29udGFpbmVyLS1iZWxvdyB7XG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlLFxuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QyLXNlYXJjaC0tZHJvcGRvd24ge1xuICAgICAgICAuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlbGVjdDItc2VhcmNoLWJvcmRlci1jb2xvciwgI2FhYSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAxcHggc29saWQgdmFyKC0tc2VsZWN0Mi1zZWFyY2gtYmFja2dyb3VuZCwgI2ZmZik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zZWxlY3QyLXNlYXJjaC1ib3JkZXItcmFkaXVzLCAwcHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUge1xuICAgICAgICAuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QyLXJlc3VsdHMgPiAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICAgICAgICAmW3JvbGU9J2dyb3VwJ10ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi1kaXNhYmxlZC10ZXh0LWNvbG9yLCAjOTk5KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItb3B0aW9uLWRpc2FibGVkLWJhY2tncm91bmQsIHRyYW5zcGFyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbYXJpYS1zZWxlY3RlZD0ndHJ1ZSddIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi1zZWxlY3RlZC10ZXh0LWNvbG9yLCAjMDAwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQsICNkZGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuXG4gICAgICAgICAgICAuc2VsZWN0Mi1yZXN1bHRzX19ncm91cCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMmVtO1xuXG4gICAgICAgICAgICAgICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM2VtO1xuXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTNlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNGVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNWVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWRbYXJpYS1zZWxlY3RlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kLCAjNTg5N2ZiKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItb3B0aW9uLWhpZ2hsaWdodGVkLXRleHQtY29sb3IsICNmZmYpO1xuICAgIH1cblxuICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlkZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNlbGVjdDItcmVzdWx0c19fZ3JvdXAge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLW9wdGlvbi1ncm91cC10ZXh0LWNvbG9yLCBncmF5KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1vcHRpb24tZ3JvdXAtYmFja2dyb3VuZCwgdHJhbnNwYXJlbnQpO1xuICAgIH1cbn1cblxuLnNlbGVjdDItbm8tcmVzdWx0IHtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1uby1yZXN1bHQtY29sb3IsICM4ODgpO1xuICAgIGZvbnQtc3R5bGU6IHZhcigtLXNlbGVjdDItbm8tcmVzdWx0LWZvbnQtc3R5bGUsIGl0YWxpYyk7XG59XG5cbi5zZWxlY3QyLXRvby1tdWNoLXJlc3VsdCB7XG4gICAgY29sb3I6IHZhcigtLXNlbGVjdDItdG9vLW11Y2gtcmVzdWx0LWNvbG9yLCAjODg4KTtcbiAgICBmb250LXN0eWxlOiB2YXIoLS1zZWxlY3QyLXRvby1tdWNoLWZvbnQtc3R5bGUsIGl0YWxpYyk7XG59XG5cbjpob3N0Lm5vc3R5bGUge1xuICAgIC5zZWxlY3QyLWRyb3Bkb3duIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSxcbiAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLWZvY3VzZWQsXG4gICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0Om5vdCguc2VsZWN0Mi1jb250YWluZXItLW9wZW4pIC5zZWxlY3QyLWZvY3VzZWQge1xuICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSxcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIG1hdGVyaWFsIHN0eWxlXG4vKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG46aG9zdC5tYXRlcmlhbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgICYgPiAuc2VsZWN0Mi1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yOTY4OGVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcblxuICAgICAgICAuc2VsZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNDM3NWVtIDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAwLjg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IHtcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMS42NWVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlbGVjdDItbWF0ZXJpYWwtdW5kZXJsaW5lLCAjZGRkKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxLjYzZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VsZWN0Mi1tYXRlcmlhbC11bmRlcmxpbmUtYWN0aXZlLCAjNWE0MTllKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VsZWN0Mi1tYXRlcmlhbC1wbGFjZWhvbGRlci1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjM4KSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMjFweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAxLjZlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJfX29wdGlvbiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMXB4KTtcbiAgICAgICAgICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdDItY29udGFpbmVyLS1vcGVuLFxuICAgICAgICAuc2VsZWN0Mi1mb2N1c2VkIHtcbiAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlOjphZnRlcixcbiAgICAgICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGU6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjEyLCAxLCAwLjc3LCAxKSwgbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjEyLCAxLCAwLjc3LCAxKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLWRyb3Bkb3duIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWQ9J3RydWUnXSxcbiAgICAgICAgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZFthcmlhLXNlbGVjdGVkXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLW1hdGVyaWFsLW9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kLCByZ2JhKDAsIDAsIDAsIDAuMDQpKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLW1hdGVyaWFsLW9wdGlvbi1oaWdobGlnaHRlZC10ZXh0LWNvbG9yLCAjMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkPSd0cnVlJ10ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlbGVjdDItbWF0ZXJpYWwtb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3IsICNmZjU3MjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsXG4gICAgICAgICYuc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgICAgICAgICAgICAtLXNlbGVjdDItbWF0ZXJpYWwtdW5kZXJsaW5lLWRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC4yNikgMCwgcmdiYSgwLCAwLCAwLCAwLjI2KSAzMyUsIHRyYW5zcGFyZW50IDApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlLFxuICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgICAgICAgJjo6YmVmb3JlLFxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLW1hdGVyaWFsLXVuZGVybGluZS1pbnZhbGlkLCByZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLnNlbGVjdDItY29udGFpbmVyLS1vcGVuKSAuc2VsZWN0Mi1mb2N1c2VkIHtcbiAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUsXG4gICAgICAgIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdDItc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gMS43MjkxN2VtKTtcbiAgICAgICAgZm9udC1zaXplOiA3NSU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QyLWhpbnQtdGV4dC1jb2xvciwgIzg4OCk7XG4gICAgfVxufVxuXG46Om5nLWRlZXAge1xuICAgIC5zZWxlY3QyLW92ZXJsYXktYmFja2Ryb3Age1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWxlY3QyLW92ZXJsYXktYmFja2Ryb3AsIHRyYW5zcGFyZW50KTtcbiAgICB9XG4gICAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICAgIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1kcm9wZG93bi5zZWxlY3QyLWRyb3Bkb3duLS1hYm92ZSB7XG4gICAgICAgICAgICBib3R0b206IDI4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1vcGVuLnNlbGVjdDItcG9zaXRpb24tYXV0byAuc2VsZWN0Mi1kcm9wZG93biB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgICAgICAgICAgJi5zZWxlY3QyLWRyb3Bkb3duLS1hYm92ZSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gbWF0ZXJpYWwgZml4IChmaXJlZm94KVxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG5Ac3VwcG9ydHMgKC1tb3otYXBwZWFyYW5jZTogbm9uZSkge1xuICAgIHNlbGVjdDIubWF0ZXJpYWwgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlLFxuICAgIHNlbGVjdDIubWF0ZXJpYWwgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

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
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _select2_hint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select2-hint.component */ 2462);
/* harmony import */ var _select2_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select2-label.component */ 8871);
/* harmony import */ var _select2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select2.component */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class Select2Module {}
Select2Module.ɵfac = function Select2Module_Factory(t) {
  return new (t || Select2Module)();
};
Select2Module.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: Select2Module
});
Select2Module.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Select2Module, {
    declarations: [_select2_hint_component__WEBPACK_IMPORTED_MODULE_0__.Select2Hint, _select2_label_component__WEBPACK_IMPORTED_MODULE_1__.Select2Label, _select2_component__WEBPACK_IMPORTED_MODULE_2__.Select2],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _select2_hint_component__WEBPACK_IMPORTED_MODULE_0__.Select2Hint, _select2_label_component__WEBPACK_IMPORTED_MODULE_1__.Select2Label, _select2_component__WEBPACK_IMPORTED_MODULE_2__.Select2]
  });
})();

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.data */ 161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _projects_ng_select2_component_src_lib_select2_hint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ng-select2-component/src/lib/select2-hint.component */ 2462);
/* harmony import */ var _projects_ng_select2_component_src_lib_select2_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ng-select2-component/src/lib/select2-label.component */ 8871);
/* harmony import */ var _projects_ng_select2_component_src_lib_select2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/ng-select2-component/src/lib/select2.component */ 6484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function AppExamplesComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const data_r14 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r14 == null ? null : data_r14.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", data_r14 == null ? null : data_r14.name, "");
  }
}
function AppExamplesComponent_ng_template_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const data_r15 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15 == null ? null : data_r15.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", data_r15 == null ? null : data_r15.name, "");
  }
}
function AppExamplesComponent_ng_template_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const label_r16 = ctx.label;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", label_r16, ")");
  }
}
function AppExamplesComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r17 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", data_r17 == null ? null : data_r17.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r17 == null ? null : data_r17.name);
  }
}
function AppExamplesComponent_ng_template_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const data_r18 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r18 == null ? null : data_r18.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", data_r18 == null ? null : data_r18.name, "");
  }
}
function AppExamplesComponent_ng_template_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "json");
  }
  if (rf & 2) {
    const data_r19 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, data_r19));
  }
}
const _c0 = function (a0, a1) {
  return {
    option: a0,
    group: a1
  };
};
const _c1 = function (a0, a1, a2) {
  return {
    template1: a0,
    template2: a1,
    template3: a2
  };
};
class AppExamplesComponent {
  constructor(fb) {
    this.fb = fb;
    this.data1 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data1;
    this.data2 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data2;
    this.data3 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data3;
    this.data4 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data3));
    this.data5 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data5;
    this.data6 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data6;
    this.data7 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data3));
    this.data8 = [];
    this.data9 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data1));
    this.data10 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data1));
    this.data11 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data1));
    this.data12 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data1));
    this.data13 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data13;
    this.data15 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data2;
    this.data16 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data2;
    this.data17 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data17;
    this.data18 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data18;
    this.data19 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data19;
    this.data20 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data19));
    this.data21 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data19));
    this.data22 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data22;
    this.data23 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data23;
    this.data24 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data24;
    this.data25 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data23));
    this.data26 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data26;
    this.data28 = _app_data__WEBPACK_IMPORTED_MODULE_0__.data28;
    this.data29 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data1));
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
    this.value29 = [];
    this.limitSelection = 0;
    this.overlay = false;
    this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl()
    });
    this.ctrlForm = this.fb.group({
      test11: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
    });
    this.ctrlForm2 = this.fb.group({
      test5: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
    });
    this.fg.patchValue(this.formData());
  }
  addItem() {
    const count = this.data6.length + 1;
    this.data6.push({
      value: 'foo' + count,
      label: 'foo' + count
    });
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
    this.data8 = JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data2));
  }
  close8() {
    alert('close');
  }
  search8(text) {
    this.data8 = text ? JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data2)).filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1) : JSON.parse(JSON.stringify(_app_data__WEBPACK_IMPORTED_MODULE_0__.data2));
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
        this.data26.push({
          value: i,
          label: '>' + i
        });
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
      state: ['CA', 'NV']
    };
  }
}
AppExamplesComponent.ɵfac = function AppExamplesComponent_Factory(t) {
  return new (t || AppExamplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder));
};
AppExamplesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppExamplesComponent,
  selectors: [["app-root"]],
  decls: 150,
  vars: 135,
  consts: [["for", "disabled"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "block"], ["id", "ex-1"], ["resettable", "", "customSearchEnabled", "", "id", "selec2-1", 3, "overlay", "data", "value", "update", "change", "blur", "focus", "open", "close", "search"], ["id", "ex-2"], ["id", "selec2-2", 3, "overlay", "data", "value", "update"], ["id", "ex-3"], ["id", "selec2-3", 3, "overlay", "data", "value", "update"], ["id", "ex-4"], ["id", "selec2-4", 3, "overlay", "data", "value", "disabled"], ["id", "ex-5"], [3, "formGroup"], ["formControlName", "test5", "id", "selec2-5", 3, "overlay", "data", "minCountForSearch", "update"], ["id", "ex-6"], ["size", "3", "value", "7"], ["limit", ""], ["status", ""], ["selected", ""], ["type", "button", 3, "click"], ["id", "selec2-6", 3, "overlay", "data", "value", "minCountForSearch", "displaySearchStatus", "update"], ["id", "ex-7"], ["placeholder", "select an item", "resettable", "", "id", "selec2-7", 3, "overlay", "data", "update"], ["id", "ex-8"], ["customSearchEnabled", "", "listPosition", "auto", "id", "selec2-8", 3, "overlay", "data", "open", "close", "search", "update"], ["id", "ex-9"], ["type", "number", 3, "ngModel", "ngModelChange"], ["multiple", "true", "customSearchEnabled", "", "id", "selec2-9", 3, "overlay", "data", "value", "limitSelection", "update", "blur", "focus", "open", "close", "search"], ["id", "ex-10"], ["multiple", "true", "hideSelectedItems", "true", "id", "selec2-10", 3, "overlay", "data", "value", "update"], ["id", "ex-11"], ["formControlName", "test11", "placeholder", "Select a state", "styleMode", "material", "id", "selec2-11", 3, "overlay", "ngModel", "data", "ngModelChange"], [3, "click"], ["id", "ex-12"], ["styleMode", "material", "id", "selec2-12", 3, "overlay", "data", "value", "update"], ["id", "ex-13"], ["id", "selec2-13", 3, "overlay", "data", "value", "update"], ["id", "ex-14"], ["multiple", "true", "id", "selec2-10", "formControlName", "state", 3, "overlay", "data"], ["id", "ex-15"], ["id", "selec2-15", 3, "overlay", "data", "value", "update"], ["id", "ex-16"], ["required", "", "id", "selec2-16", 3, "overlay", "data", "value", "update"], ["id", "ex-17"], ["id", "select2-17", 3, "overlay", "data", "value", "update"], ["id", "ex-18"], ["minCharForSearch", "3", "id", "selec2-18", 3, "overlay", "data", "value", "update"], ["id", "ex-19"], ["listPosition", "above", "id", "selec2-19", 3, "overlay", "data", "value", "update"], [1, "noStyle"], ["id", "ex-20"], ["listPosition", "above", "styleMode", "noStyle", "id", "selec2-20", 3, "overlay", "data", "value", "update"], ["id", "ex-21"], ["listPosition", "above", "id", "selec2-21", 3, "overlay", "data", "value", "update"], ["id", "ex-22"], ["listPosition", "auto", "id", "selec2-22", 1, "flower-list", 3, "overlay", "data", "value", "update"], ["id", "ex-23"], ["listPosition", "above", "id", "selec2-23", 1, "flower-list", 3, "overlay", "data", "value", "templates", "update"], ["template", ""], ["id", "ex-24"], ["listPosition", "above", "id", "selec2-24", 1, "flower-list", 3, "overlay", "data", "value", "templates", "update"], ["templateOption", ""], ["templateGroup", ""], ["id", "ex-25"], ["listPosition", "above", "id", "selec2-25", 1, "flower-list", 3, "overlay", "data", "value", "templates", "update"], ["template1", ""], ["template2", ""], ["template3", ""], ["id", "ex-26"], ["listPosition", "above", "infiniteScroll", "", "infiniteScrollDistance", "1.5", "infiniteScrollThrottle", "150", "id", "selec2-26", 3, "overlay", "data", "value", "update", "scroll"], ["id", "ex-27"], ["listPosition", "auto", "id", "selec2-27", 3, "overlay", "data", "value", "update"], ["id", "ex-28"], ["listPosition", "auto", "id", "selec2-28", "maxResults", "50", "maxResultsMessage", "Too much results in this list.", 3, "overlay", "data", "value", "update"], ["multiple", "", "autoCreate", "", "id", "selec2-29", 3, "overlay", "data", "value", "update"]],
  template: function AppExamplesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Examples");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "overlay : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AppExamplesComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.overlay = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "select2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_8_listener($event) {
        return ctx.update("value1", $event);
      })("change", function AppExamplesComponent_Template_select2_change_8_listener($event) {
        return ctx.change("change1", $event);
      })("blur", function AppExamplesComponent_Template_select2_blur_8_listener($event) {
        return ctx.blur("blur1", $event);
      })("focus", function AppExamplesComponent_Template_select2_focus_8_listener($event) {
        return ctx.focus("focus1", $event);
      })("open", function AppExamplesComponent_Template_select2_open_8_listener($event) {
        return ctx.open("open1", $event);
      })("close", function AppExamplesComponent_Template_select2_close_8_listener($event) {
        return ctx.close("close1", $event);
      })("search", function AppExamplesComponent_Template_select2_search_8_listener($event) {
        return ctx.search("search1", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_11_listener($event) {
        return ctx.update("value2", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "select2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_14_listener($event) {
        return ctx.update("value3", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h3", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "select2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "form", 12)(21, "select2", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_21_listener($event) {
        return ctx.update("value5", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h3", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " 6. search limit to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " / display status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "select", null, 17)(29, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "default");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "always");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div")(37, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_37_listener() {
        return ctx.addItem();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Add item");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_39_listener() {
        return ctx.removeItem();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Remove item");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "select2", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_41_listener($event) {
        return ctx.update("value6", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "h3", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "select2", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_44_listener($event) {
        return ctx.update("value7", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h3", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "select2", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("open", function AppExamplesComponent_Template_select2_open_47_listener() {
        return ctx.open8();
      })("close", function AppExamplesComponent_Template_select2_close_47_listener() {
        return ctx.close8();
      })("search", function AppExamplesComponent_Template_select2_search_47_listener($event) {
        return ctx.search8($event);
      })("update", function AppExamplesComponent_Template_select2_update_47_listener($event) {
        return ctx.update("value8", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "select2-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "9. multiple + limite ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AppExamplesComponent_Template_input_ngModelChange_52_listener($event) {
        return ctx.limitSelection = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "select2", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_55_listener($event) {
        return ctx.update("value9", $event);
      })("blur", function AppExamplesComponent_Template_select2_blur_55_listener($event) {
        return ctx.blur("blur9", $event);
      })("focus", function AppExamplesComponent_Template_select2_focus_55_listener($event) {
        return ctx.focus("focus9", $event);
      })("open", function AppExamplesComponent_Template_select2_open_55_listener($event) {
        return ctx.open("open9", $event);
      })("close", function AppExamplesComponent_Template_select2_close_55_listener($event) {
        return ctx.close("close9", $event);
      })("search", function AppExamplesComponent_Template_select2_search_55_listener($event) {
        return ctx.search("search9", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "h3", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "select2", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_59_listener($event) {
        return ctx.update("value10", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "h3", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "form", 12)(63, "select2", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AppExamplesComponent_Template_select2_ngModelChange_63_listener($event) {
        return ctx.value11 = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_64_listener() {
        return ctx.reset11();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_66_listener() {
        return ctx.change11();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Utah");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "h3", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "select2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_70_listener($event) {
        return ctx.update("value12", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "h3", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "select2", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_73_listener($event) {
        return ctx.update("value13", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "h3", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "14. FormControl");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "form", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "select2", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_78_listener() {
        return ctx.print();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Log Selected");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_80_listener() {
        return ctx.resetForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Reset Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "h3", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "select2", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_84_listener($event) {
        return ctx.update("value15", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "select2-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Select a state");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "h3", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "select2", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_89_listener($event) {
        return ctx.update("value16", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "select2-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Select a state");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "h3", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "select2", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_94_listener($event) {
        return ctx.update("value17", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "h3", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "18. search starts with 3 chars");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "select2", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_97_listener($event) {
        return ctx.update("value18", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "h3", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "select2", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_100_listener($event) {
        return ctx.update("value19", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 49)(102, "h3", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "select2", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_104_listener($event) {
        return ctx.update("value20", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "h3", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "select2", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_107_listener($event) {
        return ctx.update("value21", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_108_listener() {
        return ctx.value21 = "";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Update value to empty string");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_110_listener() {
        return ctx.value21 = null;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Update value to null");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppExamplesComponent_Template_button_click_112_listener() {
        return ctx.value21 = undefined;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Update value to undefined");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "h3", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "select2", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_116_listener($event) {
        return ctx.update("value22", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "h3", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "select2", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_119_listener($event) {
        return ctx.update("value23", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](120, AppExamplesComponent_ng_template_120_Template, 3, 2, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "h3", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "select2", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_124_listener($event) {
        return ctx.update("value24", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](125, AppExamplesComponent_ng_template_125_Template, 3, 2, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](127, AppExamplesComponent_ng_template_127_Template, 2, 1, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "h3", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "select2", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_131_listener($event) {
        return ctx.update("value25", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](132, AppExamplesComponent_ng_template_132_Template, 2, 3, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](134, AppExamplesComponent_ng_template_134_Template, 3, 2, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](136, AppExamplesComponent_ng_template_136_Template, 2, 3, "ng-template", null, 67, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "h3", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "select2", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_140_listener($event) {
        return ctx.update("value26", $event);
      })("scroll", function AppExamplesComponent_Template_select2_scroll_140_listener($event) {
        return ctx.scroll26($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "h3", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "select2", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_143_listener($event) {
        return ctx.update("value2", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "h3", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "select2", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_146_listener($event) {
        return ctx.update("value28", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "select2", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function AppExamplesComponent_Template_select2_update_149_listener($event) {
        return ctx.update("value29", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](121);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](126);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](128);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](133);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](135);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](137);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.overlay);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("1. options in group (", ctx.value1, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data1)("value", ctx.value1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("2. options (", ctx.value2, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data2)("value", ctx.value2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("3. less options (", ctx.value3, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data3)("value", ctx.value3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("4. disabled (", ctx.value4, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data4)("value", ctx.value4)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("5. hide search box (", ctx.value5, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.ctrlForm2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data5)("minCountForSearch", ctx.minCountForSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", ctx.value6, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data6)("value", ctx.value6)("minCountForSearch", _r0.value)("displaySearchStatus", _r1.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("7. placeholder (", ctx.value7, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("8. open, close and search event (", ctx.value8, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("value : ", ctx.value8, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.limitSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 124, ctx.value9), ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data9)("value", ctx.value9)("limitSelection", ctx.limitSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("10. multiple + hide selected items (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 126, ctx.value10), ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data10)("value", ctx.value10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("11. material style and form binding (", ctx.value11, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.ctrlForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("ngModel", ctx.value11)("data", ctx.data11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("12. material style (", ctx.value12, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data12)("value", ctx.value12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("13. boolean value (", ctx.value13, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data13)("value", ctx.value13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.fg);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("15. with label (", ctx.value15, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data15)("value", ctx.value15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("16. required with label (", ctx.value16, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data16)("value", ctx.value16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("17. with two option labels (", ctx.value17, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data17)("value", ctx.value17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data18)("value", ctx.value18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("19. dropdown list position above (", ctx.value19, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data19)("value", ctx.value19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("20. nostyle (", ctx.value20, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data20)("value", ctx.value20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("21. update to empty/null/undefined (", ctx.value21, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data21)("value", ctx.value21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("22. with item classes and id (", ctx.value22, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data22)("value", ctx.value22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("23. with template (", ctx.value23, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data23)("value", ctx.value23)("templates", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("24. with template (option / group) (", ctx.value24, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data24)("value", ctx.value24)("templates", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](128, _c0, _r4, _r6));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("25. with templates Ids (", ctx.value25, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data25)("value", ctx.value25)("templates", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](131, _c1, _r8, _r10, _r12));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("26. infiniteScroll(", ctx.value26, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data26)("value", ctx.value26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("27. position (", ctx.value2, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data2)("value", ctx.value2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("28. max results 50 (", ctx.value28, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data28)("value", ctx.value28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("29. option autocreate (", ctx.value29, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("overlay", ctx.overlay)("data", ctx.data29)("value", ctx.value29);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _projects_ng_select2_component_src_lib_select2_hint_component__WEBPACK_IMPORTED_MODULE_1__.Select2Hint, _projects_ng_select2_component_src_lib_select2_label_component__WEBPACK_IMPORTED_MODULE_2__.Select2Label, _projects_ng_select2_component_src_lib_select2_component__WEBPACK_IMPORTED_MODULE_3__.Select2, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe],
  styles: ["@charset \"UTF-8\";\n#select2-17[_ngcontent-%COMP%]     .select2-multiple-labels {\n  display: flex;\n  justify-content: space-between;\n}\n\n.noStyle[_ngcontent-%COMP%] {\n  background-color: antiquewhite;\n}\n\n.flower-list[_ngcontent-%COMP%]     .flower.white::before {\n  content: \"\uD83C\uDF3C \";\n}\n.flower-list[_ngcontent-%COMP%]     .flower.red::before {\n  content: \"\uD83C\uDF39 \";\n}\n.flower-list[_ngcontent-%COMP%]     .flower.yellow::before {\n  content: \"\uD83C\uDF3B \";\n}\n\n.block[_ngcontent-%COMP%] {\n  padding-bottom: 300px;\n  max-width: 500px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNBO0VBQ0ksOEJBQUE7QUFFSjs7QUFFSTtFQUNJLGNBQUE7QUFDUjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBR0k7RUFDSSxjQUFBO0FBRFI7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VsZWN0Mi0xNyA6Om5nLWRlZXAgLnNlbGVjdDItbXVsdGlwbGUtbGFiZWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5vU3R5bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLmZsb3dlci1saXN0IDo6bmctZGVlcCAuZmxvd2VyIHtcbiAgICAmLndoaXRlOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnw7DCn8KMwrwgJztcbiAgICB9XG5cbiAgICAmLnJlZDo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ8Owwp/CjMK5ICc7XG4gICAgfVxuXG4gICAgJi55ZWxsb3c6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDsMKfwozCuyAnO1xuICAgIH1cbn1cblxuLmJsb2NrIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ikilote_json2html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ikilote/json2html */ 5190);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ 3962);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.data */ 161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_ng_select2_component_src_lib_select2_hint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ng-select2-component/src/lib/select2-hint.component */ 2462);
/* harmony import */ var _projects_ng_select2_component_src_lib_select2_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/ng-select2-component/src/lib/select2-label.component */ 8871);
/* harmony import */ var _projects_ng_select2_component_src_lib_select2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/ng-select2-component/src/lib/select2.component */ 6484);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ 7101);











function AppGenComponent_select2_186_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r11 == null ? null : data_r11.color);
  }
}
function AppGenComponent_select2_186_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppGenComponent_select2_186_ng_template_3_ng_container_0_Template, 4, 1, "ng-container", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", data_r11 == null ? null : data_r11.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", data_r11 == null ? null : data_r11.name, " ");
  }
}
function AppGenComponent_select2_186_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const data_r14 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r14 == null ? null : data_r14.name);
  }
}
function AppGenComponent_select2_186_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const label_r15 = ctx.label;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Group: ", label_r15, "");
  }
}
function AppGenComponent_select2_186_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const data_r16 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r16 == null ? null : data_r16.name);
  }
}
function AppGenComponent_select2_186_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const label_r17 = ctx.label;
    const data_r18 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", label_r17, " : ", data_r18 == null ? null : data_r18.color, "");
  }
}
function AppGenComponent_select2_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select2", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("update", function AppGenComponent_select2_186_Template_select2_update_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19._event("update", $event));
    })("open", function AppGenComponent_select2_186_Template_select2_open_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21._event("open", $event));
    })("close", function AppGenComponent_select2_186_Template_select2_close_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22._event("close", $event));
    })("focus", function AppGenComponent_select2_186_Template_select2_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23._event("focus", $event));
    })("blur", function AppGenComponent_select2_186_Template_select2_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24._event("blur", $event));
    })("search", function AppGenComponent_select2_186_Template_select2_search_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25._event("search", $event));
    })("scroll", function AppGenComponent_select2_186_Template_select2_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26._event("scroll", $event));
    })("removeOption", function AppGenComponent_select2_186_Template_select2_removeOption_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27._event("removeOption", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "select2-label", 87)(2, "select2-hint", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppGenComponent_select2_186_ng_template_3_Template, 2, 2, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppGenComponent_select2_186_ng_template_5_Template, 1, 1, "ng-template", null, 89, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppGenComponent_select2_186_ng_template_7_Template, 1, 1, "ng-template", null, 90, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppGenComponent_select2_186_ng_template_9_Template, 1, 1, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AppGenComponent_select2_186_ng_template_11_Template, 1, 2, "ng-template", null, 92, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r0.data)("overlay", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.overlay)("disabled", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.disabled)("minCharForSearch", (ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.minCharForSearch) || 0)("minCountForSearch", (ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.minCountForSearch) || 6)("displaySearchStatus", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.displaySearchStatus)("placeholder", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.placeholder)("customSearchEnabled", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.customSearchEnabled)("multiple", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.multiple)("resettable", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.resettable)("autoCreate", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.autoCreate)("limitSelection", (ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.limitSelection) || 0)("hideSelectedItems", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.hideSelectedItems)("resultMaxHeight", (ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.resultMaxHeight) || "200px")("maxResults", (ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.maxResults) || 0)("maxResultsMessage", (ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.maxResultsMessage) || "Too many results\u2026")("listPosition", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.listPosition)("infiniteScroll", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.infiniteScroll)("infiniteScrollDistance", (ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.infiniteScrollDistance) || 1.5)("infiniteScrollThrottle", (ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.infiniteScrollThrottle) || 150)("styleMode", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.styleMode)("noResultMessage", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.noResultMessage)("noLabelTemplate", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.noLabelTemplate)("templates", ctx_r0.getTemplate(_r1, _r3, _r5, _r7, _r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.label, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r0.ctrlForm == null ? null : ctx_r0.ctrlForm.value == null ? null : ctx_r0.ctrlForm.value.hint, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
class AppGenComponent {
  constructor(fb) {
    this.fb = fb;
    this.data = _app_data__WEBPACK_IMPORTED_MODULE_1__.data24;
    this.ctrlForm = this.fb.group({
      // data
      json: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(JSON.stringify(this.data, null, 2)),
      // tags
      label: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      hint: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      // parameters
      disabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      overlay: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      minCharForSearch: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      minCountForSearch: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      displaySearchStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      placeholder: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      customSearchEnabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      multiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      autoCreate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      resettable: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      limitSelection: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      hideSelectedItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      resultMaxHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      listPosition: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      infiniteScroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      infiniteScrollDistance: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      infiniteScrollThrottle: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      styleMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      noResultMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      maxResults: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      maxResultsMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      // template
      template: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      noLabelTemplate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      // event
      update: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      open: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      close: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      focus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      blur: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      search: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      scroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(),
      removeOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl()
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
        return {
          option: option,
          group: group
        };
      case 'templateId':
        return {
          template1: template1,
          template2: template2
        };
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
        '[data]': 'data'
      },
      body: []
    };
    const value = this.ctrlForm.value;
    const attrs = json.attrs;
    const body = json.body;
    // tags
    if (value.label) {
      body.push({
        tag: 'select2-label',
        body: value.label,
        inline: true
      });
    }
    if (value.hint) {
      body.push({
        tag: 'select2-hint',
        body: value.hint,
        inline: true
      });
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
    if (value.autoCreate) {
      attrs.autoCreate = this._testBoolean(value.autoCreate);
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
    if (value.noLabelTemplate) {
      attrs.noLabelTemplate = this._testBoolean(value.noLabelTemplate);
    }
    // template
    switch (value.template) {
      case 'ref':
        attrs['[templates]'] = 'template';
        body.push({
          tag: 'ng-template',
          attrs: {
            '#template': null,
            'let-data': 'data'
          },
          body: '<ng-container *ngIf="data?.color"> <strong>{{data?.color}}</strong>: </ng-container>{{data?.name}}'
        });
        break;
      case 'option-group':
        attrs['[templates]'] = '{option : option, group: group}';
        body.push({
          tag: 'ng-template',
          attrs: {
            '#option': null,
            'let-data': 'data'
          },
          body: '{{data?.name}}'
        }, {
          tag: 'ng-template',
          attrs: {
            '#group': null,
            'let-label': 'label'
          },
          body: 'Group: {{label}}'
        });
        break;
      case 'templateId':
        attrs['[templates]'] = '{template1 : template1, template2: template2}';
        body.push({
          tag: 'ng-template',
          attrs: {
            '#template1': null,
            'let-data': 'data'
          },
          body: '{{data?.name}}'
        }, {
          tag: 'ng-template',
          attrs: {
            '#template2': null,
            'let-label': 'label',
            'let-data': 'data'
          },
          body: '{{label}} : {{data?.color}}'
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
    this.html = new _ikilote_json2html__WEBPACK_IMPORTED_MODULE_7__.Json2html(json).toString();
  }
  changeJson(value) {
    this.jsonError = '';
    try {
      this.data = JSON.parse(value);
    } catch (error) {
      this.jsonError = this._parseJsonError(value, error);
    }
  }
  _parseJsonError(value, error) {
    let returnMessage = '';
    const message = error.message.match(/[^\n]+/)[0];
    const browser = bowser__WEBPACK_IMPORTED_MODULE_0__.getParser(window.navigator.userAgent).getResult();
    if (browser.browser.name === 'Chrome') {
      if (message.match(/at position/)) {
        const position = parseInt(message.match(/at position (\d+)/)[1], 10);
        const lines = value.split(/\n/);
        let l = 1;
        for (const line of lines) {
          if (line) {
            if (l + line.length >= position) {
              returnMessage = message + '<br><pre>' + line + '\n' + ' '.repeat(position - l + 1) + '^</pre>';
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
          returnMessage = message + '<br><pre>' + lines[+line - 1] + '\n' + ' '.repeat(+column - 1) + '^</pre>';
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
  _testBoolean(value) {
    return value ? null : undefined;
  }
}
AppGenComponent.ɵfac = function AppGenComponent_Factory(t) {
  return new (t || AppGenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder));
};
AppGenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppGenComponent,
  selectors: [["app-root"]],
  decls: 192,
  vars: 14,
  consts: [[1, "cols"], [3, "formGroup"], ["for", "json"], ["formControlName", "json", "id", "json"], [1, "error", 3, "innerHTML"], ["for", "label"], ["type", "text", "formControlName", "label", "id", "label"], ["for", "hint"], ["type", "text", "formControlName", "hint", "id", "hint"], ["for", "disabled"], ["type", "checkbox", "formControlName", "disabled", "id", "disabled"], ["for", "overlay"], ["type", "checkbox", "formControlName", "overlay", "id", "overlay"], ["for", "minCharForSearch"], ["type", "number", "formControlName", "minCharForSearch", "id", "minCharForSearch"], ["for", "minCountForSearch"], ["type", "number", "formControlName", "minCountForSearch", "id", "minCountForSearch"], ["for", "displaySearchStatus"], ["formControlName", "displaySearchStatus", "id", "displaySearchStatus"], ["value", "default"], ["value", "hidden"], ["value", "always"], ["for", "placeholder"], ["type", "text", "formControlName", "placeholder", "id", "placeholder"], ["for", "noResultMessage"], ["type", "text", "formControlName", "noResultMessage", "id", "noResultMessage"], ["for", "customSearchEnabled"], ["type", "checkbox", "formControlName", "customSearchEnabled", "id", "customSearchEnabled"], ["for", "multiple"], ["type", "checkbox", "formControlName", "multiple", "id", "multiple"], ["for", "resettable"], ["type", "checkbox", "formControlName", "resettable", "id", "resettable"], ["for", "autoCreate"], ["type", "checkbox", "formControlName", "autoCreate", "id", "autoCreate"], ["for", "limitSelection"], ["type", "number", "formControlName", "limitSelection", "id", "limitSelection"], ["for", "hideSelectedItems"], ["type", "checkbox", "formControlName", "hideSelectedItems", "id", "hideSelectedItems"], ["for", "resultMaxHeight"], ["type", "text", "formControlName", "resultMaxHeight", "id", "resultMaxHeight"], ["for", "maxResults"], ["type", "text", "formControlName", "maxResults", "id", "maxResults"], ["for", "maxResultsMessage"], ["type", "text", "formControlName", "maxResultsMessage", "id", "maxResultsMessage"], ["for", "listPosition"], ["formControlName", "listPosition", "id", "listPosition"], ["value", "below"], ["value", "above"], ["for", "infiniteScroll"], ["type", "checkbox", "formControlName", "infiniteScroll", "id", "infiniteScroll"], ["for", "infiniteScrollDistance"], ["type", "number", "formControlName", "infiniteScrollDistance", "id", "infiniteScrollDistance"], ["for", "infiniteScrollThrottle"], ["type", "number", "formControlName", "infiniteScrollThrottle", "id", "infiniteScrollThrottle"], ["for", "styleMode"], ["formControlName", "styleMode", "id", "listPstyleModeosition"], ["value", ""], ["value", "material"], ["value", "noStyle"], ["for", "template"], ["formControlName", "template", "id", "template"], ["value", "none"], ["value", "ref"], ["value", "option-group"], ["value", "templateId"], ["for", "noLabelTemplate"], ["type", "checkbox", "formControlName", "noLabelTemplate", "id", "noLabelTemplate"], ["for", "update"], ["type", "checkbox", "formControlName", "update", "id", "update"], ["for", "open"], ["type", "checkbox", "formControlName", "open", "id", "open"], ["for", "close"], ["type", "checkbox", "formControlName", "close", "id", "close"], ["for", "focus"], ["type", "checkbox", "formControlName", "focus", "id", "focus"], ["for", "blur"], ["type", "checkbox", "formControlName", "blur", "id", "blur"], ["for", "search"], ["type", "checkbox", "formControlName", "search", "id", "search"], ["for", "scroll"], ["type", "checkbox", "formControlName", "scroll", "id", "scroll"], ["for", "removeOption"], ["type", "checkbox", "formControlName", "removeOption", "id", "removeOption"], [3, "data", "overlay", "disabled", "minCharForSearch", "minCountForSearch", "displaySearchStatus", "placeholder", "customSearchEnabled", "multiple", "resettable", "autoCreate", "limitSelection", "hideSelectedItems", "resultMaxHeight", "maxResults", "maxResultsMessage", "listPosition", "infiniteScroll", "infiniteScrollDistance", "infiniteScrollThrottle", "styleMode", "noResultMessage", "noLabelTemplate", "templates", "update", "open", "close", "focus", "blur", "search", "scroll", "removeOption", 4, "ngIf"], [1, "code"], [3, "highlight"], [3, "data", "overlay", "disabled", "minCharForSearch", "minCountForSearch", "displaySearchStatus", "placeholder", "customSearchEnabled", "multiple", "resettable", "autoCreate", "limitSelection", "hideSelectedItems", "resultMaxHeight", "maxResults", "maxResultsMessage", "listPosition", "infiniteScroll", "infiniteScrollDistance", "infiniteScrollThrottle", "styleMode", "noResultMessage", "noLabelTemplate", "templates", "update", "open", "close", "focus", "blur", "search", "scroll", "removeOption"], [3, "innerHTML"], ["template", ""], ["option", ""], ["group", ""], ["template1", ""], ["template2", ""], [4, "ngIf"]],
  template: function AppGenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Generator");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "data");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div")(7, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "json (for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "[data]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, ") : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "textarea", 3)(13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "tags");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div")(17, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "label : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div")(21, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "hint : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "parameters");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div")(27, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "disabled : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div")(31, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "overlay : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div")(35, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "minCharForSearch (0) : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div")(39, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "minCountForSearch (6) : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div")(43, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "displaySearchStatus :");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "select", 18)(46, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "default");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "always");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div")(53, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "placeholder : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div")(57, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "noResultMessage : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div")(61, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "customSearchEnabled : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div")(65, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "multiple : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div")(69, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "resettable : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div")(73, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "autoCreate : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div")(77, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "limitSelection (0) : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div")(81, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "hideSelectedItems : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div")(85, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "resultMaxHeight ('200px') : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div")(89, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "maxResults (0 = infinity) : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div")(93, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "maxResultsMessage ('Too much result...') : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div")(97, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "listPosition :");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "select", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "option", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "below");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "option", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "above");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div")(106, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "infiniteScroll : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div")(110, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "infiniteScrollDistance (1.5) : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div")(114, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "infiniteScrollThrottle (150) : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div")(118, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "styleMode : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "select", 55)(121, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "default");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "option", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "material");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "noStyle");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Templates");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div")(130, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "template style :");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "select", 60)(133, "option", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "None");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "option", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Unique template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "Template group & option");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "Template by templateId");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div")(142, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, "noLabelTemplate : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div")(148, "label", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "update: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](150, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div")(152, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "open: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "div")(156, "label", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, "close: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](158, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div")(160, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "focus: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](162, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "div")(164, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](165, "blur: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](166, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div")(168, "label", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "search: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](170, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, " (Required: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, "customSearchEnabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div")(176, "label", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "scroll: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](178, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "div")(180, "label", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](181, "removeOption: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](182, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "div")(184, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "HTML render");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](186, AppGenComponent_select2_186_Template, 13, 26, "select2", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "HTML Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "div", 84)(190, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](191, "pre", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.ctrlForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.jsonError, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hide", ctx.ctrlForm == null ? null : ctx.ctrlForm.value == null ? null : ctx.ctrlForm.value.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hide", !(ctx.ctrlForm == null ? null : ctx.ctrlForm.value == null ? null : ctx.ctrlForm.value.multiple));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hide", !(ctx.ctrlForm == null ? null : ctx.ctrlForm.value == null ? null : ctx.ctrlForm.value.multiple));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hide", !(ctx.ctrlForm == null ? null : ctx.ctrlForm.value == null ? null : ctx.ctrlForm.value.infiniteScrollDistance));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("hide", !(ctx.ctrlForm == null ? null : ctx.ctrlForm.value == null ? null : ctx.ctrlForm.value.infiniteScroll));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](73);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ctrlForm.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("highlight", ctx.html);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _projects_ng_select2_component_src_lib_select2_hint_component__WEBPACK_IMPORTED_MODULE_2__.Select2Hint, _projects_ng_select2_component_src_lib_select2_label_component__WEBPACK_IMPORTED_MODULE_3__.Select2Label, _projects_ng_select2_component_src_lib_select2_component__WEBPACK_IMPORTED_MODULE_4__.Select2, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__.Highlight],
  styles: ["label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n}\n\n.cols[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 100%;\n}\n.cols[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 0 50%;\n  max-width: 50%;\n}\n\n.code[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\ntextarea#json[_ngcontent-%COMP%] {\n  width: calc(100% - 15px);\n  resize: vertical;\n  box-sizing: border-box;\n  height: 200px;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDUjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNLLGFBQUE7QUFBTCIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY29scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIGZsZXg6IDEgMCA1MCU7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgIH1cbn1cblxuLmNvZGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbnRleHRhcmVhI2pzb24ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhpZGUge1xuICAgICBkaXNwbGF5OiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 11,
  vars: 0,
  consts: [["href", "https://github.com/Harvest-Dev/ng-select2/tree/master/src", "target", "_blank"], ["routerLink", "/examples", "routerLinkActive", "active"], ["routerLink", "/generator", "routerLinkActive", "active"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "the source code of the demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav")(3, "ul")(4, "li")(5, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Exemples");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Code generator");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS1wcmVidWlsdC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbURBQW1ELG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsY0FBYyxDQUFDLFlBQVksQ0FBQyw2QkFBNkIsWUFBWSxDQUFDLDRCQUE0QixZQUFZLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMseUNBQXlDLENBQUMseURBQXlELENBQUMsU0FBUyxDQUFDLG1EQUFtRCxTQUFTLENBQUMsNkVBQTZFLFVBQVUsQ0FBQywyQkFBMkIsMEJBQTBCLENBQUMsa0NBQWtDLG1EQUFtRCxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQywrREFBK0QsU0FBUyxDQUFDLGtCQUFrQixDQUFDLHFDQUFxQyxlQUFlLENBQUMsNkNBQTZDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIuY2RrLW92ZXJsYXktY29udGFpbmVyLC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKTt0cmFuc2l0aW9uOm9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MX0uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9LmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4zMil9LmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9we3RyYW5zaXRpb246dmlzaWJpbGl0eSAxbXMgbGluZWFyLG9wYWNpdHkgMW1zIGxpbmVhcjt2aXNpYmlsaXR5OmhpZGRlbjtvcGFjaXR5OjF9LmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTowO3Zpc2liaWxpdHk6dmlzaWJsZX0uY2RrLW92ZXJsYXktYmFja2Ryb3Atbm9vcC1hbmltYXRpb257dHJhbnNpdGlvbjpub25lfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH0iXSwic291cmNlUm9vdCI6IiJ9 */pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!\n  Theme: GitHub\n  Description: Light theme as seen on github.com\n  Author: github.com\n  Maintainer: @Hirse\n  Updated: 2021-05-15\n\n  Outdated base version: https://github.com/primer/github-syntax-light\n  Current colors taken from GitHub's CSS\n*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2dpdGh1Yi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxhQUFhLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxVQUFVLGVBQWUsQ0FBQzs7Ozs7Ozs7O0NBU2pGLENBQUMsTUFBTSxhQUFhLENBQUMsZUFBZSxDQUFDLG1JQUFtSSxhQUFhLENBQUMsb0ZBQW9GLGFBQWEsQ0FBQywwSkFBMEosYUFBYSxDQUFDLGtEQUFrRCxhQUFhLENBQUMsNEJBQTRCLGFBQWEsQ0FBQyx1Q0FBdUMsYUFBYSxDQUFDLGdFQUFnRSxhQUFhLENBQUMsWUFBWSxhQUFhLENBQUMsY0FBYyxhQUFhLENBQUMsZUFBZSxDQUFDLGFBQWEsYUFBYSxDQUFDLGVBQWUsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsYUFBYSxDQUFDLGVBQWUsQ0FBQyxlQUFlLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLGFBQWEsQ0FBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJwcmUgY29kZS5obGpze2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3cteDphdXRvO3BhZGRpbmc6MWVtfWNvZGUuaGxqc3twYWRkaW5nOjNweCA1cHh9LyohXG4gIFRoZW1lOiBHaXRIdWJcbiAgRGVzY3JpcHRpb246IExpZ2h0IHRoZW1lIGFzIHNlZW4gb24gZ2l0aHViLmNvbVxuICBBdXRob3I6IGdpdGh1Yi5jb21cbiAgTWFpbnRhaW5lcjogQEhpcnNlXG4gIFVwZGF0ZWQ6IDIwMjEtMDUtMTVcblxuICBPdXRkYXRlZCBiYXNlIHZlcnNpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZXIvZ2l0aHViLXN5bnRheC1saWdodFxuICBDdXJyZW50IGNvbG9ycyB0YWtlbiBmcm9tIEdpdEh1YidzIENTU1xuKi8uaGxqc3tjb2xvcjojMjQyOTJlO2JhY2tncm91bmQ6I2ZmZn0uaGxqcy1kb2N0YWcsLmhsanMta2V5d29yZCwuaGxqcy1tZXRhIC5obGpzLWtleXdvcmQsLmhsanMtdGVtcGxhdGUtdGFnLC5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLC5obGpzLXR5cGUsLmhsanMtdmFyaWFibGUubGFuZ3VhZ2Vfe2NvbG9yOiNkNzNhNDl9LmhsanMtdGl0bGUsLmhsanMtdGl0bGUuY2xhc3NfLC5obGpzLXRpdGxlLmNsYXNzXy5pbmhlcml0ZWRfXywuaGxqcy10aXRsZS5mdW5jdGlvbl97Y29sb3I6IzZmNDJjMX0uaGxqcy1hdHRyLC5obGpzLWF0dHJpYnV0ZSwuaGxqcy1saXRlcmFsLC5obGpzLW1ldGEsLmhsanMtbnVtYmVyLC5obGpzLW9wZXJhdG9yLC5obGpzLXNlbGVjdG9yLWF0dHIsLmhsanMtc2VsZWN0b3ItY2xhc3MsLmhsanMtc2VsZWN0b3ItaWQsLmhsanMtdmFyaWFibGV7Y29sb3I6IzAwNWNjNX0uaGxqcy1tZXRhIC5obGpzLXN0cmluZywuaGxqcy1yZWdleHAsLmhsanMtc3RyaW5ne2NvbG9yOiMwMzJmNjJ9LmhsanMtYnVpbHRfaW4sLmhsanMtc3ltYm9se2NvbG9yOiNlMzYyMDl9LmhsanMtY29kZSwuaGxqcy1jb21tZW50LC5obGpzLWZvcm11bGF7Y29sb3I6IzZhNzM3ZH0uaGxqcy1uYW1lLC5obGpzLXF1b3RlLC5obGpzLXNlbGVjdG9yLXBzZXVkbywuaGxqcy1zZWxlY3Rvci10YWd7Y29sb3I6IzIyODYzYX0uaGxqcy1zdWJzdHtjb2xvcjojMjQyOTJlfS5obGpzLXNlY3Rpb257Y29sb3I6IzAwNWNjNTtmb250LXdlaWdodDo3MDB9LmhsanMtYnVsbGV0e2NvbG9yOiM3MzVjMGZ9LmhsanMtZW1waGFzaXN7Y29sb3I6IzI0MjkyZTtmb250LXN0eWxlOml0YWxpY30uaGxqcy1zdHJvbmd7Y29sb3I6IzI0MjkyZTtmb250LXdlaWdodDo3MDB9LmhsanMtYWRkaXRpb257Y29sb3I6IzIyODYzYTtiYWNrZ3JvdW5kLWNvbG9yOiNmMGZmZjR9LmhsanMtZGVsZXRpb257Y29sb3I6I2IzMWQyODtiYWNrZ3JvdW5kLWNvbG9yOiNmZmVlZjB9Il0sInNvdXJjZVJvb3QiOiIifQ== */:root {\n  /* label */\n  --select2-label-text-color: #000;\n  --select2-required-color: red;\n  /* selection */\n  --select2-selection-border-radius: 4px;\n  --select2-selection-background: #fff;\n  --select2-selection-disabled-background: #eee;\n  --select2-selection-border-color: #aaa;\n  --select2-selection-focus-border-color: #000;\n  --select2-selection-text-color: #111;\n  /* selection: choice item (multiple) */\n  --select2-selection-choice-background: #e4e4e4;\n  --select2-selection-choice-text-color: #000;\n  --select2-selection-choice-border-color: #aaa;\n  --select2-selection-choice-close-color: #999;\n  --select2-selection-choice-hover-close-color: #333;\n  /* placeholder */\n  --select2-placeholder-color: #999;\n  --select2-placeholder-overflow: ellipsis;\n  /* no result message */\n  --select2-no-result-color: #888;\n  --select2-no-result-font-style: italic;\n  /* no result message */\n  --select2-too-much-result-color: #888;\n  --select2-too-much-result-style: italic;\n  /* reset */\n  --select2-reset-color: #999;\n  /* arrow */\n  --select2-arrow-color: #888;\n  /* dropdown panel */\n  --select2-dropdown-background: #fff;\n  --select2-dropdown-border-color: #aaa;\n  /* overlay */\n  --select2-overlay-backdrop: transparent;\n  /* search field */\n  --select2-search-border-color: #aaa;\n  --select2-search-background: #fff;\n  --select2-search-border-radius: 0px;\n  /* dropdown option */\n  --select2-option-text-color: #000;\n  --select2-option-disabled-text-color: #999;\n  --select2-option-disabled-background: transparent;\n  --select2-option-selected-text-color: #000;\n  --select2-option-selected-background: #ddd;\n  --select2-option-highlighted-text-color: #fff;\n  --select2-option-highlighted-background: #5897fb;\n  --select2-option-group-text-color: gray;\n  --select2-option-group-background: transparent;\n  /* hint */\n  --select2-hint-text-color: #888;\n  /* for Material ------------------------------------------*/\n  --select2-material-underline: #ddd;\n  --select2-material-underline-active: #5a419e;\n  --select2-material-underline-disabled: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.26) 0,\n      rgba(0, 0, 0, 0.26) 33%,\n      transparent 0\n  );\n  --select2-material-underline-invalid: red;\n  --select2-material-placeholder-color: rgba(0, 0, 0, 0.38);\n  --select2-material-selection-background: #ddd;\n  --select2-material-option-selected-background: rgba(0, 0, 0, 0.04);\n  --select2-material-option-highlighted-text-color: #000;\n  --select2-material-option-selected-text-color: #ff5722;\n}\n\nnav ul {\n  display: block;\n}\nnav li {\n  display: inline-block;\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFFQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0VBRUEsc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsNkNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtEQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBRUEsc0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBRUEsc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBRUEsVUFBQTtFQUNBLDJCQUFBO0VBRUEsVUFBQTtFQUNBLDJCQUFBO0VBRUEsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBRUEsWUFBQTtFQUNBLHVDQUFBO0VBRUEsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFFQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7RUFDQSxpREFBQTtFQUNBLDBDQUFBO0VBQ0EsMENBQUE7RUFDQSw2Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsdUNBQUE7RUFDQSw4Q0FBQTtFQUVBLFNBQUE7RUFDQSwrQkFBQTtFQUVBLDJEQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBOzs7OztHQUFBO0VBTUEseUNBQUE7RUFDQSx5REFBQTtFQUNBLDZDQUFBO0VBQ0Esa0VBQUE7RUFDQSxzREFBQTtFQUNBLHNEQUFBO0FBYko7O0FBaUJJO0VBQ0ksY0FBQTtBQWRSO0FBaUJJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBZlIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdAYW5ndWxhci9jZGsvb3ZlcmxheS1wcmVidWlsdC5jc3MnO1xuQGltcG9ydCAnfmhpZ2hsaWdodC5qcy9zdHlsZXMvZ2l0aHViLmNzcyc7XG5cbjpyb290IHtcbiAgICAvKiBsYWJlbCAqL1xuICAgIC0tc2VsZWN0Mi1sYWJlbC10ZXh0LWNvbG9yOiAjMDAwO1xuICAgIC0tc2VsZWN0Mi1yZXF1aXJlZC1jb2xvcjogcmVkO1xuXG4gICAgLyogc2VsZWN0aW9uICovXG4gICAgLS1zZWxlY3QyLXNlbGVjdGlvbi1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLS1zZWxlY3QyLXNlbGVjdGlvbi1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tc2VsZWN0Mi1zZWxlY3Rpb24tZGlzYWJsZWQtYmFja2dyb3VuZDogI2VlZTtcbiAgICAtLXNlbGVjdDItc2VsZWN0aW9uLWJvcmRlci1jb2xvcjogI2FhYTtcbiAgICAtLXNlbGVjdDItc2VsZWN0aW9uLWZvY3VzLWJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAtLXNlbGVjdDItc2VsZWN0aW9uLXRleHQtY29sb3I6ICMxMTE7XG5cbiAgICAvKiBzZWxlY3Rpb246IGNob2ljZSBpdGVtIChtdWx0aXBsZSkgKi9cbiAgICAtLXNlbGVjdDItc2VsZWN0aW9uLWNob2ljZS1iYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgIC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLXRleHQtY29sb3I6ICMwMDA7XG4gICAgLS1zZWxlY3QyLXNlbGVjdGlvbi1jaG9pY2UtYm9yZGVyLWNvbG9yOiAjYWFhO1xuICAgIC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLWNsb3NlLWNvbG9yOiAjOTk5O1xuICAgIC0tc2VsZWN0Mi1zZWxlY3Rpb24tY2hvaWNlLWhvdmVyLWNsb3NlLWNvbG9yOiAjMzMzO1xuXG4gICAgLyogcGxhY2Vob2xkZXIgKi9cbiAgICAtLXNlbGVjdDItcGxhY2Vob2xkZXItY29sb3I6ICM5OTk7XG4gICAgLS1zZWxlY3QyLXBsYWNlaG9sZGVyLW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgIC8qIG5vIHJlc3VsdCBtZXNzYWdlICovXG4gICAgLS1zZWxlY3QyLW5vLXJlc3VsdC1jb2xvcjogIzg4ODtcbiAgICAtLXNlbGVjdDItbm8tcmVzdWx0LWZvbnQtc3R5bGU6IGl0YWxpYztcblxuICAgIC8qIG5vIHJlc3VsdCBtZXNzYWdlICovXG4gICAgLS1zZWxlY3QyLXRvby1tdWNoLXJlc3VsdC1jb2xvcjogIzg4ODtcbiAgICAtLXNlbGVjdDItdG9vLW11Y2gtcmVzdWx0LXN0eWxlOiBpdGFsaWM7XG5cbiAgICAvKiByZXNldCAqL1xuICAgIC0tc2VsZWN0Mi1yZXNldC1jb2xvcjogIzk5OTtcblxuICAgIC8qIGFycm93ICovXG4gICAgLS1zZWxlY3QyLWFycm93LWNvbG9yOiAjODg4O1xuXG4gICAgLyogZHJvcGRvd24gcGFuZWwgKi9cbiAgICAtLXNlbGVjdDItZHJvcGRvd24tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLXNlbGVjdDItZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAjYWFhO1xuXG4gICAgLyogb3ZlcmxheSAqL1xuICAgIC0tc2VsZWN0Mi1vdmVybGF5LWJhY2tkcm9wOiB0cmFuc3BhcmVudDtcblxuICAgIC8qIHNlYXJjaCBmaWVsZCAqL1xuICAgIC0tc2VsZWN0Mi1zZWFyY2gtYm9yZGVyLWNvbG9yOiAjYWFhO1xuICAgIC0tc2VsZWN0Mi1zZWFyY2gtYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLXNlbGVjdDItc2VhcmNoLWJvcmRlci1yYWRpdXM6IDBweDtcblxuICAgIC8qIGRyb3Bkb3duIG9wdGlvbiAqL1xuICAgIC0tc2VsZWN0Mi1vcHRpb24tdGV4dC1jb2xvcjogIzAwMDtcbiAgICAtLXNlbGVjdDItb3B0aW9uLWRpc2FibGVkLXRleHQtY29sb3I6ICM5OTk7XG4gICAgLS1zZWxlY3QyLW9wdGlvbi1kaXNhYmxlZC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXNlbGVjdDItb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6ICMwMDA7XG4gICAgLS1zZWxlY3QyLW9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kOiAjZGRkO1xuICAgIC0tc2VsZWN0Mi1vcHRpb24taGlnaGxpZ2h0ZWQtdGV4dC1jb2xvcjogI2ZmZjtcbiAgICAtLXNlbGVjdDItb3B0aW9uLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6ICM1ODk3ZmI7XG4gICAgLS1zZWxlY3QyLW9wdGlvbi1ncm91cC10ZXh0LWNvbG9yOiBncmF5O1xuICAgIC0tc2VsZWN0Mi1vcHRpb24tZ3JvdXAtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAvKiBoaW50ICovXG4gICAgLS1zZWxlY3QyLWhpbnQtdGV4dC1jb2xvcjogIzg4ODtcblxuICAgIC8qIGZvciBNYXRlcmlhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC0tc2VsZWN0Mi1tYXRlcmlhbC11bmRlcmxpbmU6ICNkZGQ7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLXVuZGVybGluZS1hY3RpdmU6ICM1YTQxOWU7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLXVuZGVybGluZS1kaXNhYmxlZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byByaWdodCxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjI2KSAwLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjYpIDMzJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgMFxuICAgICk7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLXVuZGVybGluZS1pbnZhbGlkOiByZWQ7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAgIC0tc2VsZWN0Mi1tYXRlcmlhbC1zZWxlY3Rpb24tYmFja2dyb3VuZDogI2RkZDtcbiAgICAtLXNlbGVjdDItbWF0ZXJpYWwtb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgLS1zZWxlY3QyLW1hdGVyaWFsLW9wdGlvbi1oaWdobGlnaHRlZC10ZXh0LWNvbG9yOiAjMDAwO1xuICAgIC0tc2VsZWN0Mi1tYXRlcmlhbC1vcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogI2ZmNTcyMjtcbn1cblxubmF2IHtcbiAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

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
const data1 = [{
  label: 'Alaskan/Hawaiian Time Zone',
  options: [{
    value: 'AK',
    label: 'Alaska'
  }, {
    value: 'HI',
    label: 'Hawaii',
    disabled: true
  }]
}, {
  label: 'Pacific Time Zone',
  options: [{
    value: 'CA',
    label: 'California'
  }, {
    value: 'NV',
    label: 'Nevada'
  }, {
    value: 'OR',
    label: 'Oregon'
  }, {
    value: 'WA',
    label: 'Washington'
  }]
}, {
  label: 'Mountain Time Zone',
  options: [{
    value: 'AZ',
    label: 'Arizona'
  }, {
    value: 'CO',
    label: 'Colorado'
  }, {
    value: 'ID',
    label: 'Idaho'
  }, {
    value: 'MT',
    label: 'Montana'
  }, {
    value: 'NE',
    label: 'Nebraska'
  }, {
    value: 'NM',
    label: 'New Mexico'
  }, {
    value: 'ND',
    label: 'North Dakota'
  }, {
    value: 'UT',
    label: 'Utah'
  }, {
    value: 'WY',
    label: 'Wyoming'
  }]
}, {
  label: 'Central Time Zone',
  options: [{
    value: 'AL',
    label: 'Alabama'
  }, {
    value: 'AR',
    label: 'Arkansas'
  }, {
    value: 'IL',
    label: 'Illinois'
  }, {
    value: 'IA',
    label: 'Iowa'
  }, {
    value: 'KS',
    label: 'Kansas'
  }, {
    value: 'KY',
    label: 'Kentucky'
  }, {
    value: 'LA',
    label: 'Louisiana'
  }, {
    value: 'MN',
    label: 'Minnesota'
  }, {
    value: 'MS',
    label: 'Mississippi'
  }, {
    value: 'MO',
    label: 'Missouri'
  }, {
    value: 'OK',
    label: 'Oklahoma'
  }, {
    value: 'SD',
    label: 'South Dakota'
  }, {
    value: 'TX',
    label: 'Texas'
  }, {
    value: 'TN',
    label: 'Tennessee'
  }, {
    value: 'WI',
    label: 'Wisconsin'
  }]
}, {
  label: 'Eastern Time Zone',
  options: [{
    value: 'CT',
    label: 'Connecticut'
  }, {
    value: 'DE',
    label: 'Delaware'
  }, {
    value: 'FL',
    label: 'Florida'
  }, {
    value: 'GA',
    label: 'Georgia'
  }, {
    value: 'IN',
    label: 'Indiana'
  }, {
    value: 'ME',
    label: 'Maine'
  }, {
    value: 'MD',
    label: 'Maryland'
  }, {
    value: 'MA',
    label: 'Massachusetts'
  }, {
    value: 'MI',
    label: 'Michigan'
  }, {
    value: 'NH',
    label: 'New Hampshire'
  }, {
    value: 'NJ',
    label: 'New Jersey'
  }, {
    value: 'NY',
    label: 'New York'
  }, {
    value: 'NC',
    label: 'North Carolina'
  }, {
    value: 'OH',
    label: 'Ohio'
  }, {
    value: 'PA',
    label: 'Pennsylvania'
  }, {
    value: 'RI',
    label: 'Rhode Island'
  }, {
    value: 'SC',
    label: 'South Carolina'
  }, {
    value: 'VT',
    label: 'Vermont'
  }, {
    value: 'VA',
    label: 'Virginia'
  }, {
    value: 'WV',
    label: 'West Virginia'
  }]
}];
const data2 = [{
  value: 'AK',
  label: 'Alaska'
}, {
  value: 'HI',
  label: 'Hawaii',
  disabled: true
}, {
  value: 'CA',
  label: 'California'
}, {
  value: 'NV',
  label: 'Nevada'
}, {
  value: 'OR',
  label: 'Oregon'
}, {
  value: 'WA',
  label: 'Washington'
}, {
  value: 'AZ',
  label: 'Arizona'
}, {
  value: 'CO',
  label: 'Colorado'
}, {
  value: 'ID',
  label: 'Idaho'
}, {
  value: 'MT',
  label: 'Montana'
}, {
  value: 'NE',
  label: 'Nebraska'
}, {
  value: 'NM',
  label: 'New Mexico'
}, {
  value: 'ND',
  label: 'North Dakota'
}, {
  value: 'UT',
  label: 'Utah'
}, {
  value: 'WY',
  label: 'Wyoming'
}, {
  value: 'AL',
  label: 'Alabama'
}, {
  value: 'AR',
  label: 'Arkansas'
}, {
  value: 'IL',
  label: 'Illinois'
}, {
  value: 'IA',
  label: 'Iowa'
}, {
  value: 'KS',
  label: 'Kansas'
}, {
  value: 'KY',
  label: 'Kentucky'
}, {
  value: 'LA',
  label: 'Louisiana'
}, {
  value: 'MN',
  label: 'Minnesota'
}, {
  value: 'MS',
  label: 'Mississippi'
}, {
  value: 'MO',
  label: 'Missouri'
}, {
  value: 'OK',
  label: 'Oklahoma'
}, {
  value: 'SD',
  label: 'South Dakota'
}, {
  value: 'TX',
  label: 'Texas'
}, {
  value: 'TN',
  label: 'Tennessee'
}, {
  value: 'WI',
  label: 'Wisconsin'
}, {
  value: 'CT',
  label: 'Connecticut'
}, {
  value: 'DE',
  label: 'Delaware'
}, {
  value: 'FL',
  label: 'Florida'
}, {
  value: 'GA',
  label: 'Georgia'
}, {
  value: 'IN',
  label: 'Indiana'
}, {
  value: 'ME',
  label: 'Maine'
}, {
  value: 'MD',
  label: 'Maryland'
}, {
  value: 'MA',
  label: 'Massachusetts'
}, {
  value: 'MI',
  label: 'Michigan'
}, {
  value: 'NH',
  label: 'New Hampshire'
}, {
  value: 'NJ',
  label: 'New Jersey'
}, {
  value: 'NY',
  label: 'New York'
}, {
  value: 'NC',
  label: 'North Carolina'
}, {
  value: 'OH',
  label: 'Ohio'
}, {
  value: 'PA',
  label: 'Pennsylvania'
}, {
  value: 'RI',
  label: 'Rhode Island'
}, {
  value: 'SC',
  label: 'South Carolina'
}, {
  value: 'VT',
  label: 'Vermont'
}, {
  value: 'VA',
  label: 'Virginia',
  disabled: true
}, {
  value: 'WV',
  label: 'West Virginia'
}];
const data3 = [{
  value: 'foo',
  label: 'foo'
}, {
  value: 'bar',
  label: 'bar'
}, {
  value: 'baz',
  label: 'baz'
}];
const data5 = [{
  value: 0,
  label: '0'
}, {
  value: 1,
  label: '1'
}, {
  value: 2,
  label: '2'
}, {
  value: 3,
  label: '3'
}, {
  value: 4,
  label: '4'
}, {
  value: 5,
  label: '5'
}, {
  value: 6,
  label: '6'
}];
const data6 = [{
  value: 'foo1',
  label: 'foo1'
}, {
  value: 'foo2',
  label: 'foo2'
}, {
  value: 'foo3',
  label: 'foo3'
}, {
  value: 'foo4',
  label: 'foo4'
}, {
  value: 'foo5',
  label: 'foo5'
}, {
  value: 'foo6',
  label: 'foo6'
}];
const data18 = [{
  label: 'Mainland region',
  options: [{
    value: 'FR-ARA',
    label: 'Auvergne-Rhône-Alpes'
  }, {
    value: 'FR-BFC',
    label: 'Bourgogne-Franche-Comté'
  }, {
    value: 'FR-BRE',
    label: 'Bretagne'
  }, {
    value: 'FR-CVL',
    label: 'Centre-Val de Loire'
  }, {
    value: 'FR-COR',
    label: 'Corse'
  }, {
    value: 'FR-GES',
    label: 'Grand Est'
  }, {
    value: 'FR-HDF',
    label: 'Hauts-de-France'
  }, {
    value: 'FR-IDF',
    label: 'Île-de-France'
  }, {
    value: 'FR-NOR',
    label: 'Normandie'
  }, {
    value: 'FR-NAQ',
    label: 'Nouvelle-Aquitaine'
  }, {
    value: 'FR-OCC',
    label: 'Occitanie'
  }, {
    value: 'FR-PDL',
    label: 'Pays de la Loire'
  }, {
    value: 'FR-PAC',
    label: "Provence-Alpes-Côte d'Azur"
  }]
}, {
  label: 'Overseas region',
  options: [{
    value: 'FR-GP',
    label: 'Guadeloupe'
  }, {
    value: 'FR-MQ',
    label: 'Martinique'
  }, {
    value: 'FR-GF',
    label: 'Guyane'
  }, {
    value: 'FR-RE',
    label: 'La Réunion'
  }, {
    value: 'FR-YT',
    label: 'Mayotte'
  }]
}];
const data19 = [{
  value: 'foo1',
  label: 'foo1'
}, {
  value: 'foo2',
  label: 'foo2'
}, {
  value: 'foo3',
  label: 'foo3'
}, {
  value: 'foo4',
  label: 'foo4'
}, {
  value: 'foo5',
  label: 'foo5'
}, {
  value: 'foo6',
  label: 'foo6'
}, {
  value: 'foo7',
  label: 'foo7'
}, {
  value: 'foo8',
  label: 'foo8'
}, {
  value: 'foo9',
  label: 'foo9',
  hide: true
}];
const data13 = [{
  value: true,
  label: 'true'
}, {
  value: false,
  label: 'false'
}];
const data17 = [{
  value: 'fr',
  label: `<div class="select2-multiple-labels">
                    <div>France</div>
                    <div>Europe</div>
                </div>`
}, {
  value: 'sp',
  label: `<div class="select2-multiple-labels">
                    <div>Spain</div>
                    <div>Europe</div>
                </div>`
}, {
  value: 'ch',
  label: `<div class="select2-multiple-labels">
                    <div>China</div>
                    <div>Asia</div>
                </div>`
}];
const data22 = [{
  value: 'heliotrope',
  label: 'Heliotrope',
  classes: 'white flower',
  id: 'option-heliotrope'
}, {
  value: 'hibiscus',
  label: 'Hibiscus',
  classes: 'red flower',
  id: 'option-hibiscus'
}, {
  value: 'lily',
  label: 'Lily',
  classes: 'white flower',
  id: 'option-lily'
}, {
  value: 'marigold',
  label: 'Marigold',
  classes: 'red flower',
  id: 'option-marigold'
}, {
  value: 'petunia',
  label: 'Petunia',
  classes: 'white flower',
  id: 'option-petunia'
}, {
  value: 'sunflower',
  label: 'Sunflower',
  classes: 'yellow flower',
  id: 'option-sunflower'
}];
const data23 = [{
  value: 'heliotrope',
  label: 'Heliotrope',
  data: {
    color: 'white',
    name: 'Heliotrope'
  },
  templateId: 'template1',
  id: 'option-heliotrope'
}, {
  value: 'hibiscus',
  label: 'Hibiscus',
  data: {
    color: 'red',
    name: 'Hibiscus'
  },
  templateId: 'template1',
  id: 'option-hibiscus'
}, {
  value: 'lily',
  label: 'Lily',
  data: {
    color: 'white',
    name: 'Lily'
  },
  templateId: 'template2',
  id: 'option-lily'
}, {
  value: 'marigold',
  label: 'Marigold',
  data: {
    color: 'red',
    name: 'Marigold'
  },
  templateId: 'template2',
  id: 'option-marigold'
}, {
  value: 'petunia',
  label: 'Petunia',
  data: {
    color: 'white',
    name: 'Petunia'
  },
  templateId: 'template3',
  id: 'option-petunia'
}, {
  value: 'sunflower',
  label: 'Sunflower',
  data: {
    color: 'yellow',
    name: 'Sunflower'
  },
  templateId: 'template3',
  id: 'option-sunflower'
}];
const data24 = [{
  label: 'Red',
  data: {
    name: '(Red)'
  },
  options: [{
    value: 'hibiscus',
    label: 'Hibiscus',
    data: {
      color: 'red',
      name: 'Hibiscus'
    },
    templateId: 'template1',
    id: 'option-hibiscus'
  }, {
    value: 'marigold',
    label: 'Marigold',
    data: {
      color: 'red',
      name: 'Marigold'
    },
    templateId: 'template2',
    id: 'option-marigold'
  }]
}, {
  label: 'Yellow',
  data: {
    name: '(Yellow)'
  },
  options: [{
    value: 'sunflower',
    label: 'Sunflower',
    data: {
      color: 'yellow',
      name: 'Sunflower'
    },
    templateId: 'template3',
    id: 'option-sunflower'
  }]
}, {
  label: 'White',
  data: {
    name: '(White)'
  },
  options: [{
    value: 'heliotrope',
    label: 'Heliotrope',
    data: {
      color: 'white',
      name: 'Heliotrope'
    },
    templateId: 'template1',
    id: 'option-heliotrope'
  }, {
    value: 'lily',
    label: 'Lily',
    data: {
      color: 'white',
      name: 'Lily'
    },
    templateId: 'template2',
    id: 'option-lily'
  }, {
    value: 'petunia',
    label: 'Petunia',
    data: {
      color: 'white',
      name: 'Petunia'
    },
    templateId: 'template3',
    id: 'option-petunia'
  }]
}];
let data26 = [];
for (let i = 1; i <= 50; i++) {
  data26.push({
    value: i,
    label: '>' + i
  });
}
let data28 = [];
for (let i = 1; i <= 200; i++) {
  data28.push({
    value: i,
    label: 'item n° ' + i
  });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var projects_ng_select2_component_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/ng-select2-component/src/public_api */ 7365);
/* harmony import */ var _app_examples_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-examples.component */ 3907);
/* harmony import */ var _app_gen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-gen.component */ 380);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);









/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
function hljsLanguages() {
  return [{
    name: 'typescript',
    func: __webpack_require__(/*! highlight.js/lib/languages/typescript */ 2016)
  }, {
    name: 'javascript',
    func: __webpack_require__(/*! highlight.js/lib/languages/javascript */ 5407)
  }, {
    name: 'scss',
    func: __webpack_require__(/*! highlight.js/lib/languages/scss */ 541)
  }, {
    name: 'xml',
    func: __webpack_require__(/*! highlight.js/lib/languages/xml */ 5275)
  }];
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_core_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/core */ 8622)),
      lineNumbersLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlightjs-line-numbers_js_src_highlightjs-line-numbers_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlightjs-line-numbers.js */ 5523, 23)),
      languages: {
        typescript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_typescript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 5281)),
        javascript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_javascript_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/javascript */ 9633)),
        css: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_css_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/css */ 9009)),
        xml: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_languages_xml_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 526))
      }
    }
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, projects_ng_select2_component_src_public_api__WEBPACK_IMPORTED_MODULE_0__.Select2Module, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.HighlightModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _app_examples_component__WEBPACK_IMPORTED_MODULE_1__.AppExamplesComponent, _app_gen_component__WEBPACK_IMPORTED_MODULE_2__.AppGenComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, projects_ng_select2_component_src_public_api__WEBPACK_IMPORTED_MODULE_0__.Select2Module, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.HighlightModule]
  });
})();

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_examples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-examples.component */ 3907);
/* harmony import */ var _app_gen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-gen.component */ 380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: 'examples',
  component: _app_examples_component__WEBPACK_IMPORTED_MODULE_0__.AppExamplesComponent
}, {
  path: 'generator',
  component: _app_gen_component__WEBPACK_IMPORTED_MODULE_1__.AppGenComponent
}, {
  path: '**',
  component: _app_examples_component__WEBPACK_IMPORTED_MODULE_0__.AppExamplesComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

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
  production: false
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map