import { describe, expect, it } from 'vitest';

import { Select2Data, Select2Group, Select2Option } from './select2-interfaces';
import { Select2Utils } from './select2-utils';

const SIMPLE_DATA: Select2Data = [
    { value: 'a', label: 'Alpha' },
    { value: 'b', label: 'Beta' },
    { value: 'c', label: 'Charlie', disabled: true },
];

const GROUP_DATA: Select2Data = [
    {
        label: 'Group 1',
        options: [
            { value: 'g1a', label: 'G1 Alpha' },
            { value: 'g1b', label: 'G1 Beta', disabled: true },
        ],
    },
    {
        label: 'Group 2',
        options: [
            { value: 'g2a', label: 'G2 Alpha' },
            { value: 'g2b', label: 'G2 Beta' },
        ],
    },
];

const HIDDEN_DATA: Select2Data = [
    { value: 'v', label: 'Visible' },
    { value: 'h', label: 'Hidden', hide: true },
];

describe('Select2Utils', () => {
    // ── getOptionByValue ─────────────────────────────────────────────

    describe('getOptionByValue', () => {
        it('should find option by value in flat data', () => {
            const result = Select2Utils.getOptionByValue(SIMPLE_DATA, 'b');
            expect(result?.label).toBe('Beta');
        });

        it('should find option by value in grouped data', () => {
            const result = Select2Utils.getOptionByValue(GROUP_DATA, 'g2a');
            expect(result?.label).toBe('G2 Alpha');
        });

        it('should return null for non-existent value', () => {
            const result = Select2Utils.getOptionByValue(SIMPLE_DATA, 'zzz');
            expect(result).toBeNull();
        });

        it('should return null for null/undefined value', () => {
            expect(Select2Utils.getOptionByValue(SIMPLE_DATA, null)).toBeNull();
            expect(Select2Utils.getOptionByValue(SIMPLE_DATA, undefined)).toBeNull();
        });
    });

    // ── getOptionsByValue ────────────────────────────────────────────

    describe('getOptionsByValue', () => {
        it('should return single option for non-multiple', () => {
            const result = Select2Utils.getOptionsByValue(SIMPLE_DATA, 'a', false);
            expect(result).toBeTruthy();
            expect((result as Select2Option).label).toBe('Alpha');
        });

        it('should return array for multiple', () => {
            const result = Select2Utils.getOptionsByValue(SIMPLE_DATA, ['a', 'b'], true);
            expect(Array.isArray(result)).toBe(true);
            expect((result as Select2Option[]).length).toBe(2);
        });

        it('should return null for undefined value', () => {
            const result = Select2Utils.getOptionsByValue(SIMPLE_DATA, undefined, false);
            expect(result).toBeNull();
        });
    });

    // ── getFirstAvailableOption ──────────────────────────────────────

    describe('getFirstAvailableOption', () => {
        it('should return first non-disabled option', () => {
            const data: Select2Data = [
                { value: 'x', label: 'X', disabled: true },
                { value: 'y', label: 'Y' },
            ];
            const result = Select2Utils.getFirstAvailableOption(data);
            expect(result?.value).toBe('y');
        });

        it('should return first non-disabled option from group', () => {
            const result = Select2Utils.getFirstAvailableOption(GROUP_DATA);
            expect(result?.value).toBe('g1a');
        });

        it('should return null for empty data', () => {
            expect(Select2Utils.getFirstAvailableOption([])).toBeNull();
        });

        it('should return null when all disabled', () => {
            const data: Select2Data = [{ value: 'x', label: 'X', disabled: true }];
            expect(Select2Utils.getFirstAvailableOption(data)).toBeNull();
        });

        it('should skip disabled options in group and return first non-disabled', () => {
            const data: Select2Data = [
                {
                    label: 'G1',
                    options: [
                        { value: 'a', label: 'A', disabled: true },
                        { value: 'b', label: 'B' },
                    ],
                },
            ];
            expect(Select2Utils.getFirstAvailableOption(data)?.value).toBe('b');
        });

        it('should return null when all group options are disabled', () => {
            const data: Select2Data = [
                {
                    label: 'G1',
                    options: [
                        { value: 'a', label: 'A', disabled: true },
                        { value: 'b', label: 'B', disabled: true },
                    ],
                },
            ];
            expect(Select2Utils.getFirstAvailableOption(data)).toBeNull();
        });
    });

    // ── getPreviousOption / getNextOption ─────────────────────────────

    describe('getPreviousOption', () => {
        it('should return previous option', () => {
            const current = SIMPLE_DATA[1] as Select2Option;
            const result = Select2Utils.getPreviousOption(SIMPLE_DATA, current);
            expect(result?.value).toBe('a');
        });

        it('should skip disabled options', () => {
            const data: Select2Data = [
                { value: 'a', label: 'A' },
                { value: 'b', label: 'B', disabled: true },
                { value: 'c', label: 'C' },
            ];
            const current = data[2] as Select2Option;
            const result = Select2Utils.getPreviousOption(data, current);
            expect(result?.value).toBe('a');
        });

        it('should return null when at first option', () => {
            const current = SIMPLE_DATA[0] as Select2Option;
            const result = Select2Utils.getPreviousOption(SIMPLE_DATA, current);
            expect(result).toBeNull();
        });

        it('should handle null hovering option', () => {
            const result = Select2Utils.getPreviousOption(SIMPLE_DATA, null);
            expect(result).toBeTruthy();
        });
    });

    describe('getNextOption', () => {
        it('should return next option', () => {
            const current = SIMPLE_DATA[0] as Select2Option;
            const result = Select2Utils.getNextOption(SIMPLE_DATA, current);
            expect(result?.value).toBe('b');
        });

        it('should return null when next is disabled', () => {
            const current = SIMPLE_DATA[1] as Select2Option;
            const result = Select2Utils.getNextOption(SIMPLE_DATA, current);
            // c is disabled, so returns null (no next available non-disabled)
            expect(result).toBeNull();
        });

        it('should handle null data', () => {
            const result = Select2Utils.getNextOption(null, null);
            expect(result).toBeNull();
        });

        it('should handle null hovering option', () => {
            const result = Select2Utils.getNextOption(SIMPLE_DATA, null);
            expect(result).toBeTruthy();
        });
    });

    // ── getFirstOption / getLastOption ───────────────────────────────

    describe('getFirstOption', () => {
        it('should return first option from flat data', () => {
            const result = Select2Utils.getFirstOption(SIMPLE_DATA);
            expect(result?.value).toBe('a');
        });

        it('should return first option from grouped data', () => {
            const result = Select2Utils.getFirstOption(GROUP_DATA);
            expect(result?.value).toBe('g1a');
        });

        it('should handle empty data', () => {
            expect(() => Select2Utils.getFirstOption([])).toThrow();
        });
    });

    describe('getLastOption', () => {
        it('should return last option from flat data', () => {
            const result = Select2Utils.getLastOption(SIMPLE_DATA);
            expect(result?.value).toBe('c');
        });

        it('should return last option from grouped data', () => {
            const result = Select2Utils.getLastOption(GROUP_DATA);
            expect(result?.value).toBe('g2b');
        });

        it('should return null for empty data', () => {
            expect(Select2Utils.getLastOption([])).toBeNull();
        });
    });

    // ── isGroup / isOption ───────────────────────────────────────────

    describe('isGroup and isOption', () => {
        it('should identify group', () => {
            const group: Select2Group = { label: 'G', options: [] };
            expect(Select2Utils.isGroup(group)).toBe(true);
            expect(Select2Utils.isOption(group)).toBe(false);
        });

        it('should identify option', () => {
            const option: Select2Option = { value: 'v', label: 'L' };
            expect(Select2Utils.isOption(option)).toBe(true);
            expect(Select2Utils.isGroup(option)).toBe(false);
        });
    });

    // ── getReduceData ────────────────────────────────────────────────

    describe('getReduceData', () => {
        it('should reduce data when exceeding maxResults', () => {
            const data: Select2Data = Array.from({ length: 20 }, (_, i) => ({
                value: `v${i}`,
                label: `V${i}`,
            }));
            const result = Select2Utils.getReduceData(data, 5);
            expect(result.result.length).toBe(5);
            expect(result.reduce).toBe(true);
        });

        it('should not reduce when within limit', () => {
            const result = Select2Utils.getReduceData(SIMPLE_DATA, 10);
            expect(result.result.length).toBe(SIMPLE_DATA.length);
            expect(result.reduce).toBe(false);
        });

        it('should handle grouped data', () => {
            const result = Select2Utils.getReduceData(GROUP_DATA, 2);
            expect(result.reduce).toBe(true);
        });

        it('should return all when maxResults is 0', () => {
            const result = Select2Utils.getReduceData(SIMPLE_DATA, 0);
            expect(result.result.length).toBe(SIMPLE_DATA.length);
            expect(result.reduce).toBe(false);
        });
    });

    // ── getFilteredData ──────────────────────────────────────────────

    describe('getFilteredData', () => {
        it('should filter flat data by search text', () => {
            const result = Select2Utils.getFilteredData(SIMPLE_DATA, 'Alpha');
            expect(result.length).toBe(1);
            expect((result[0] as Select2Option).value).toBe('a');
        });

        it('should filter grouped data', () => {
            const result = Select2Utils.getFilteredData(GROUP_DATA, 'G2');
            expect(result.length).toBeGreaterThan(0);
        });

        it('should return empty for no match', () => {
            const result = Select2Utils.getFilteredData(SIMPLE_DATA, 'zzzzz');
            expect(result.length).toBe(0);
        });

        it('should be case insensitive', () => {
            const result = Select2Utils.getFilteredData(SIMPLE_DATA, 'alpha');
            expect(result.length).toBe(1);
        });

        it('should use editPattern when provided', () => {
            const editPattern = (str: string) => str.toUpperCase();
            const result = Select2Utils.getFilteredData(SIMPLE_DATA, 'ALPHA', editPattern);
            expect(result.length).toBe(1);
        });
    });

    // ── getFilteredSelectedData ──────────────────────────────────────

    describe('getFilteredSelectedData', () => {
        it('should filter out selected options', () => {
            const selected: Select2Option[] = [SIMPLE_DATA[0] as Select2Option];
            const result = Select2Utils.getFilteredSelectedData(SIMPLE_DATA, selected);
            expect(result.length).toBe(SIMPLE_DATA.length - 1);
        });

        it('should handle null selected', () => {
            const result = Select2Utils.getFilteredSelectedData(SIMPLE_DATA, null);
            expect(result.length).toBe(SIMPLE_DATA.length);
        });

        it('should filter selected from grouped data', () => {
            const group = GROUP_DATA[0] as Select2Group;
            const selected: Select2Option[] = [group.options[0]];
            const result = Select2Utils.getFilteredSelectedData(GROUP_DATA, selected);
            // Should have removed one option from group 1
            const resultGroup = result[0] as Select2Group;
            expect(resultGroup.options.length).toBe(1);
        });
    });

    // ── isSearchboxHidden ────────────────────────────────────────────

    describe('isSearchboxHidden', () => {
        it('should hide searchbox when options count is below minCountForSearch', () => {
            expect(Select2Utils.isSearchboxHidden(SIMPLE_DATA, 10)).toBe(true);
        });

        it('should show searchbox when options count exceeds minCountForSearch', () => {
            const manyOptions: Select2Data = Array.from({ length: 20 }, (_, i) => ({
                value: `v${i}`,
                label: `V${i}`,
            }));
            expect(Select2Utils.isSearchboxHidden(manyOptions, 5)).toBe(false);
        });

        it('should handle undefined minCountForSearch', () => {
            const result = Select2Utils.isSearchboxHidden(SIMPLE_DATA, undefined);
            expect(typeof result).toBe('boolean');
        });
    });

    // ── isSelected ───────────────────────────────────────────────────

    describe('isSelected', () => {
        it('should return "true" for selected single option', () => {
            const option = SIMPLE_DATA[0] as Select2Option;
            expect(Select2Utils.isSelected(option, option, false)).toBe('true');
        });

        it('should return "false" for non-selected single option', () => {
            const selected = SIMPLE_DATA[0] as Select2Option;
            const other = SIMPLE_DATA[1] as Select2Option;
            expect(Select2Utils.isSelected(selected, other, false)).toBe('false');
        });

        it('should handle multiple selection', () => {
            const selected = [SIMPLE_DATA[0] as Select2Option, SIMPLE_DATA[1] as Select2Option];
            expect(Select2Utils.isSelected(selected, SIMPLE_DATA[0] as Select2Option, true)).toBe('true');
            expect(Select2Utils.isSelected(selected, SIMPLE_DATA[2] as Select2Option, true)).toBe('false');
        });

        it('should handle null selection', () => {
            expect(Select2Utils.isSelected(null, SIMPLE_DATA[0] as Select2Option, false)).toBe('false');
        });
    });

    // ── removeSelection ──────────────────────────────────────────────

    describe('removeSelection', () => {
        it('should remove option from array', () => {
            const options: Select2Option[] = [
                { value: 'a', label: 'A' },
                { value: 'b', label: 'B' },
            ];
            Select2Utils.removeSelection(options, options[0]);
            expect(options.length).toBe(1);
            expect(options[0].value).toBe('b');
        });

        it('should throw on null options', () => {
            expect(() => Select2Utils.removeSelection(null, { value: 'a', label: 'A' })).toThrow();
        });
    });

    // ── optionIsNotInFilteredData ────────────────────────────────────

    describe('optionIsNotInFilteredData', () => {
        it('should return true when option is not in filtered data', () => {
            const option: Select2Option = { value: 'zzz', label: 'ZZZ' };
            expect(Select2Utils.optionIsNotInFilteredData(SIMPLE_DATA, option)).toBe(true);
        });

        it('should return false when option is in filtered data', () => {
            const option = SIMPLE_DATA[0] as Select2Option;
            expect(Select2Utils.optionIsNotInFilteredData(SIMPLE_DATA, option)).toBe(false);
        });

        it('should return true for null option', () => {
            expect(Select2Utils.optionIsNotInFilteredData(SIMPLE_DATA, null)).toBe(true);
        });

        it('should check in grouped data', () => {
            const group = GROUP_DATA[0] as Select2Group;
            const option = group.options[0];
            expect(Select2Utils.optionIsNotInFilteredData(GROUP_DATA, option)).toBe(false);
        });
    });
});

// ── Additional coverage tests ────────────────────────────────────────

describe('Select2Utils - additional coverage', () => {
    // ── getPreviousOption with grouped data (lines 85-91) ────────────

    describe('getPreviousOption with grouped data', () => {
        const groupedData: Select2Data = [
            {
                label: 'Group 1',
                options: [
                    { value: 'g1a', label: 'G1A' },
                    { value: 'g1b', label: 'G1B' },
                ],
            },
            {
                label: 'Group 2',
                options: [
                    { value: 'g2a', label: 'G2A' },
                    { value: 'g2b', label: 'G2B' },
                ],
            },
        ];

        it('should navigate backwards across groups', () => {
            const current = (groupedData[1] as Select2Group).options[0]; // g2a
            const result = Select2Utils.getPreviousOption(groupedData, current);
            expect(result?.value).toBe('g1b');
        });

        it('should skip disabled options in groups when going backwards', () => {
            const data: Select2Data = [
                {
                    label: 'G1',
                    options: [{ value: 'a', label: 'A' }],
                },
                {
                    label: 'G2',
                    options: [
                        { value: 'b', label: 'B', disabled: true },
                        { value: 'c', label: 'C' },
                    ],
                },
            ];
            const current = (data[1] as Select2Group).options[1]; // c
            const result = Select2Utils.getPreviousOption(data, current);
            // b is disabled, so should go to a
            expect(result?.value).toBe('a');
        });

        it('should skip hidden options in groups when going backwards', () => {
            const data: Select2Data = [
                {
                    label: 'G1',
                    options: [{ value: 'a', label: 'A' }],
                },
                {
                    label: 'G2',
                    options: [
                        { value: 'b', label: 'B', hide: true },
                        { value: 'c', label: 'C' },
                    ],
                },
            ];
            const current = (data[1] as Select2Group).options[1]; // c
            const result = Select2Utils.getPreviousOption(data, current);
            expect(result?.value).toBe('a');
        });

        it('should return last available from groups when hovering is null', () => {
            const result = Select2Utils.getPreviousOption(groupedData, null);
            expect(result?.value).toBe('g2b');
        });
    });

    // ── getNextOption with grouped data (lines 113-119) ──────────────

    describe('getNextOption with grouped data', () => {
        const groupedData: Select2Data = [
            {
                label: 'Group 1',
                options: [
                    { value: 'g1a', label: 'G1A' },
                    { value: 'g1b', label: 'G1B' },
                ],
            },
            {
                label: 'Group 2',
                options: [
                    { value: 'g2a', label: 'G2A' },
                    { value: 'g2b', label: 'G2B' },
                ],
            },
        ];

        it('should navigate forward across groups', () => {
            const current = (groupedData[0] as Select2Group).options[1]; // g1b
            const result = Select2Utils.getNextOption(groupedData, current);
            expect(result?.value).toBe('g2a');
        });

        it('should skip disabled options in groups when going forward', () => {
            const data: Select2Data = [
                {
                    label: 'G1',
                    options: [
                        { value: 'a', label: 'A' },
                        { value: 'b', label: 'B', disabled: true },
                    ],
                },
                {
                    label: 'G2',
                    options: [{ value: 'c', label: 'C' }],
                },
            ];
            const current = (data[0] as Select2Group).options[0]; // a
            const result = Select2Utils.getNextOption(data, current);
            // b is disabled, so should go to c
            expect(result?.value).toBe('c');
        });

        it('should skip hidden options in groups when going forward', () => {
            const data: Select2Data = [
                {
                    label: 'G1',
                    options: [
                        { value: 'a', label: 'A' },
                        { value: 'b', label: 'B', hide: true },
                    ],
                },
                {
                    label: 'G2',
                    options: [{ value: 'c', label: 'C' }],
                },
            ];
            const current = (data[0] as Select2Group).options[0]; // a
            const result = Select2Utils.getNextOption(data, current);
            expect(result?.value).toBe('c');
        });

        it('should return first available from groups when hovering is null', () => {
            const result = Select2Utils.getNextOption(groupedData, null);
            expect(result?.value).toBe('g1a');
        });
    });

    // ── getFilteredSelectedData edge case (line 226) ─────────────────

    describe('getFilteredSelectedData - group fully filtered', () => {
        it('should remove entire group when all options are selected', () => {
            const data: Select2Data = [
                {
                    label: 'G1',
                    options: [
                        { value: 'a', label: 'A' },
                        { value: 'b', label: 'B' },
                    ],
                },
                { value: 'c', label: 'C' },
            ];
            const group = data[0] as Select2Group;
            const selected: Select2Option[] = [group.options[0], group.options[1]];
            const result = Select2Utils.getFilteredSelectedData(data, selected);
            // Group should be removed entirely since all options are selected
            expect(result.length).toBe(1);
            expect((result[0] as Select2Option).value).toBe('c');
        });
    });
});

describe('Select2Utils - remaining branch coverage', () => {
    describe('getFilteredData with null/empty searchText', () => {
        it('should return original data when searchText is null', () => {
            const result = Select2Utils.getFilteredData(SIMPLE_DATA, null);
            expect(result).toBe(SIMPLE_DATA);
        });

        it('should return original data when searchText is empty', () => {
            const result = Select2Utils.getFilteredData(SIMPLE_DATA, '');
            expect(result).toBe(SIMPLE_DATA);
        });
    });

    describe('getFirstOption - group first element', () => {
        it('should return first option from group when first element is a group', () => {
            const result = Select2Utils.getFirstOption(GROUP_DATA);
            expect(result?.value).toBe('g1a');
        });

        it('should return first element when it is an option', () => {
            const result = Select2Utils.getFirstOption(SIMPLE_DATA);
            expect(result?.value).toBe('a');
        });
    });

    describe('getLastOption - group last element', () => {
        it('should return last option from group when last element is a group', () => {
            const result = Select2Utils.getLastOption(GROUP_DATA);
            expect(result?.value).toBe('g2b');
        });

        it('should return last element when it is an option', () => {
            const result = Select2Utils.getLastOption(SIMPLE_DATA);
            expect(result?.value).toBe('c');
        });
    });
});

// ── Final branch coverage tests ──────────────────────────────────────

describe('Select2Utils - final branch coverage', () => {
    // ── Line 278: removeSelection - iterate past non-matching items ──

    describe('removeSelection - non-matching iteration', () => {
        it('should skip non-matching items before finding the target', () => {
            const options: Select2Option[] = [
                { value: 'a', label: 'A' },
                { value: 'b', label: 'B' },
                { value: 'c', label: 'C' },
            ];
            // Remove 'c' - must iterate past 'a' and 'b' first (line 278 false branch)
            Select2Utils.removeSelection(options, { value: 'c', label: 'C' });
            expect(options.length).toBe(2);
            expect(options.map(o => o.value)).toEqual(['a', 'b']);
        });
    });

    // ── Line 305: containSearchText with null searchText ─────────────

    describe('getFilteredData - containSearchText null path', () => {
        it('should include all items when searchText is effectively null via getFilteredData', () => {
            // containSearchText is private, but called by getFilteredData
            // When searchText is null, it returns true (line 305)
            const result = Select2Utils.getFilteredData(SIMPLE_DATA, null);
            expect(result).toBe(SIMPLE_DATA);
        });
    });

    // ── Lines 140, 142: getFirstOption ?? null fallbacks ─────────────

    describe('getFirstOption - defensive null coalescing', () => {
        it('should return first option from flat data', () => {
            const data: Select2Data = [{ value: 'x', label: 'X' }];
            expect(Select2Utils.getFirstOption(data)?.value).toBe('x');
        });

        it('should return first option from group with options', () => {
            const data: Select2Data = [{ label: 'G', options: [{ value: 'y', label: 'Y' }] }];
            expect(Select2Utils.getFirstOption(data)?.value).toBe('y');
        });

        it('should return null for group with empty options array', () => {
            const data: Select2Data = [{ label: 'G', options: [] }];
            // options[0] is undefined, so ?? null kicks in (line 142)
            expect(Select2Utils.getFirstOption(data)).toBeNull();
        });
    });

    // ── Line 154: getLastOption ?? null fallback ─────────────────────

    describe('getLastOption - defensive null coalescing', () => {
        it('should return null for group with empty options array', () => {
            const data: Select2Data = [{ label: 'G', options: [] }];
            // options.at(-1) is undefined, so ?? null kicks in (line 154)
            expect(Select2Utils.getLastOption(data)).toBeNull();
        });
    });
});
