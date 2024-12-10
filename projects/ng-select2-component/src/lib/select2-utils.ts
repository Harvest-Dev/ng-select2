import { defaultMinCountForSearch, protectRegexp, unicodePatterns } from './select2-const';
import { Select2Data, Select2Group, Select2Option, Select2UpdateValue, Select2Value } from './select2-interfaces';

export class Select2Utils {
    static getOptionByValue(data: Select2Data, value: Select2Value | null | undefined) {
        if (Array.isArray(data)) {
            for (const groupOrOption of data) {
                const options = (groupOrOption as Select2Group).options;
                if (options) {
                    for (const option of options) {
                        if (option.value === value) {
                            return option;
                        }
                    }
                } else if ((groupOrOption as Select2Option).value === value) {
                    return groupOrOption as Select2Option;
                }
            }
        }
        return undefined;
    }

    static getOptionsByValue(
        data: Select2Data,
        value: Select2UpdateValue | null | undefined,
        multiple: boolean | null | undefined,
    ) {
        if (multiple) {
            const values: Select2Value[] = Array.isArray(value) ? value : [];
            const result: Select2Option[] = [];
            for (const v of values) {
                const option = Select2Utils.getOptionByValue(data, v);
                if (option) {
                    result.push(option);
                }
            }
            return result;
        }
        return Select2Utils.getOptionByValue(data, value as Select2Value | null | undefined);
    }

    static getFirstAvailableOption(data: Select2Data): Select2Option {
        if (Array.isArray(data)) {
            for (const groupOrOption of data) {
                const options = (groupOrOption as Select2Group).options;
                if (options) {
                    for (const option of options) {
                        if (!option.disabled) {
                            return option;
                        }
                    }
                } else {
                    const option = groupOrOption as Select2Option;
                    if (!option.disabled) {
                        return option;
                    }
                }
            }
        }
        return null;
    }

    static optionIsNotInFilteredData(filteredData: Select2Data, option: Select2Option | null | undefined) {
        if (Select2Utils.isNullOrUndefined(option)) {
            return true;
        }
        for (const groupOrOption of filteredData) {
            const options = (groupOrOption as Select2Group).options;
            if (options && options.includes(option)) {
                return false;
            } else if (groupOrOption === option) {
                return false;
            }
        }
        return true;
    }

    static getPreviousOption(filteredData: Select2Data, hoveringOption: Select2Option | null | undefined) {
        let findIt = Select2Utils.isNullOrUndefined(hoveringOption);
        for (let i = filteredData.length - 1; i >= 0; i--) {
            const groupOrOption = filteredData[i];
            const options = (groupOrOption as Select2Group).options;
            if (options) {
                for (let j = options.length - 1; j >= 0; j--) {
                    const option = options[j];
                    if (findIt && !option.disabled && !option.hide) {
                        return option;
                    }
                    if (!findIt) {
                        findIt = option === hoveringOption;
                    }
                }
            } else {
                const option = groupOrOption as Select2Option;
                if (findIt && !option.disabled && !option.hide) {
                    return option;
                }
                if (!findIt) {
                    findIt = option === hoveringOption;
                }
            }
        }
        return null;
    }

    static getNextOption(filteredData: Select2Data, hoveringOption: Select2Option | null | undefined) {
        let findIt = Select2Utils.isNullOrUndefined(hoveringOption);
        for (const groupOrOption of filteredData) {
            const options = (groupOrOption as Select2Group).options;
            if (options) {
                for (const option of options) {
                    if (findIt) {
                        if (!option.disabled && !option.hide) {
                            return option;
                        }
                    } else if (!findIt) {
                        findIt = option === hoveringOption;
                    }
                }
            } else {
                const option = groupOrOption as Select2Option;
                if (findIt) {
                    if (!option.disabled && !option.hide) {
                        return option;
                    }
                } else if (!findIt) {
                    findIt = option === hoveringOption;
                }
            }
        }
        return null;
    }

    static getFirstOption(filteredData: Select2Data) {
        const firstElement = filteredData[0];
        if (this.isOption(firstElement)) {
            return firstElement;
        } else {
            return firstElement.options[0];
        }
    }

    static getLastOption(filteredData: Select2Data) {
        const lastElement = filteredData.at(-1);
        if (this.isOption(lastElement)) {
            return lastElement;
        } else {
            return lastElement.options.at(-1);
        }
    }

    static isGroup(element: Select2Group | Select2Option): element is Select2Group {
        return !!(element as Select2Group).options;
    }

    static isOption(element: Select2Group | Select2Option): element is Select2Option {
        return !this.isGroup(element);
    }

    static getReduceData(data: Select2Data, maxResults = 0): { result: Select2Data; reduce: boolean } {
        if (maxResults > 0) {
            let counter = 0;
            const result: Select2Data = [];
            // debugger;

            for (const groupOrOption of data) {
                const options = (groupOrOption as Select2Group).options;
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
                } else {
                    result.push(groupOrOption);
                    counter++;
                }
                if (counter === maxResults) {
                    return { result, reduce: true };
                }
            }
            return { result, reduce: false };
        } else {
            return { result: data, reduce: false };
        }
    }

    static getFilteredData(
        data: Select2Data,
        searchText: string | null,
        editPattern?: (str: string) => string,
    ): Select2Data {
        if (searchText) {
            const result: Select2Data = [];
            for (const groupOrOption of data) {
                const options = (groupOrOption as Select2Group).options;
                if (options) {
                    if (options.some(group => Select2Utils.containSearchText(group.label, searchText, editPattern))) {
                        const filteredOptions = options.filter(group =>
                            Select2Utils.containSearchText(group.label, searchText, editPattern),
                        );
                        result.push({
                            ...groupOrOption,
                            options: filteredOptions,
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

    static getFilteredSelectedData(
        data: Select2Data,
        selectedOptions: Select2Option | Select2Option[] | null,
    ): Select2Data {
        const result: Select2Data = [];
        for (const groupOrOption of data) {
            const options = (groupOrOption as Select2Group).options;
            if (options) {
                const filteredOptions = options.filter(
                    group => Select2Utils.isSelected(selectedOptions, group, true) === 'false',
                );
                if (filteredOptions.length) {
                    result.push({
                        ...groupOrOption,
                        options: filteredOptions,
                    });
                }
            } else if (Select2Utils.isSelected(selectedOptions, groupOrOption as Select2Option, true) === 'false') {
                result.push(groupOrOption);
            }
        }
        return result;
    }

    static isSearchboxHidden(data: Select2Data, minCountForSearch?: number | string): boolean {
        if (
            minCountForSearch === '' ||
            minCountForSearch === undefined ||
            minCountForSearch === null ||
            isNaN(+minCountForSearch)
        ) {
            minCountForSearch = defaultMinCountForSearch;
        }
        const optionCount = Select2Utils.getOptionsCount(data);
        return optionCount < +minCountForSearch;
    }

    static isSelected(
        options: Select2Option | Select2Option[] | null,
        option: Select2Option,
        multiple: boolean | null | undefined,
    ) {
        return multiple
            ? options && (options as Select2Option[]).some(op => op.value === option.value)
                ? 'true'
                : 'false'
            : options && option.value === (options as Select2Option).value
              ? 'true'
              : 'false';
    }

    static removeSelection(options: Select2Option | Select2Option[] | null, option: Select2Option) {
        for (let i = 0; i < (options as Select2Option[]).length; i++) {
            if ((options as Select2Option[])[i].value === option.value) {
                (options as Select2Option[]).splice(i, 1);
                return;
            }
        }
    }

    private static getOptionsCount(data: Select2Data) {
        let count = 0;
        if (Array.isArray(data)) {
            for (const groupOrOption of data) {
                const options = (groupOrOption as Select2Group).options;
                count += options ? options.length : 1;
            }
        }
        return count;
    }

    private static isNullOrUndefined(value: any) {
        return value === null || value === undefined;
    }

    private static containSearchText(
        label: string,
        searchText: string | null,
        editPattern: ((str: string) => string) | undefined,
    ): boolean {
        return searchText
            ? Select2Utils.formatSansUnicode(label).match(
                  new RegExp(Select2Utils.formatPattern(searchText, editPattern), 'i'),
              ) !== null
            : true;
    }

    private static protectPattern(str: string): string {
        return str.replace(protectRegexp, '\\$&');
    }

    private static formatSansUnicode(str: string): string {
        for (const unicodePattern of unicodePatterns) {
            str = str.replace(unicodePattern.s, unicodePattern.l);
        }
        return str;
    }

    private static formatPattern(str: string, editPattern: ((str: string) => string) | undefined): string {
        str = Select2Utils.formatSansUnicode(Select2Utils.protectPattern(str));

        if (editPattern && typeof editPattern === 'function') {
            str = editPattern(str);
        }
        return str;
    }
}
