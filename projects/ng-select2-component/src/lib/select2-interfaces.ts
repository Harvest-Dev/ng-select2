import { Select2 } from './select2.component';

export interface Select2Group {
    /** label of group */
    label: string;
    /** options list */
    options: Select2Option[];
    /** add classes  */
    classes?: string;
    /** template id  */
    templateId?: string;
    /** template data  */
    data?: any;
}

export interface Select2Option {
    /** value  */
    value: Select2Value;
    /** label of option */
    label: string;
    /** no selectable is disabled */
    disabled?: boolean;
    /** for identification */
    id?: string;
    /** add classes  */
    classes?: string;
    /** template id  */
    templateId?: string;
    /** template data  */
    data?: any;
    /** hide this option */
    hide?: boolean;
}

export type Select2Value = string | number | boolean;

export type Select2UpdateValue = Select2Value | Select2Value[];

export type Select2Data = (Select2Group | Select2Option)[];

export interface Select2UpdateEvent<U extends Select2UpdateValue = Select2Value> {
    component: Select2;
    value: U;
    options: Select2Option[];
}

export interface Select2SearchEvent<U extends Select2UpdateValue = Select2Value> {
    component: Select2;
    value: U;
    search: string;
}

export interface Select2RemoveEvent<U extends Select2UpdateValue = Select2Value> {
    component: Select2;
    value: U;
    removedOption: Select2Option;
}

export interface Select2ScrollEvent {
    component: Select2;
    way: 'up' | 'down';
    search: string;
}
