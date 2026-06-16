import { Directive, booleanAttribute, input } from '@angular/core';

import { Select2ContentDirective } from './select2-content.directive';
import { Select2Option, Select2Value } from './select2-interfaces';

/**
 * Directive representing a single option inside a <ng-select2> or <ng-group>.
 *
 * Usage:
 * ```html
 * <ng-select2>
 *   <ng-option value="foo">Foo</ng-option>
 *   <ng-option value="bar" [disabled]="true">Bar</ng-option>
 * </ng-select2>
 * ```
 */
@Directive({ selector: 'ng-option' })
export class Select2OptionDirective extends Select2ContentDirective {
    /** The option value */
    readonly value = input.required<Select2Value>();

    /** Explicit label — falls back to the element's text content if omitted */
    readonly label = input<string | undefined>(undefined);

    /** Whether the option is disabled */
    readonly disabled = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Template selection id */
    readonly templateSelectionId = input<string | undefined>(undefined);

    /** Hide this option */
    readonly hide = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Build a plain Select2Option object from the current input values */
    toOption(): Select2Option {
        return {
            value: this.value(),
            label: this._resolveLabel(this.label()),
            disabled: this.disabled() || undefined,
            classes: this.classes(),
            templateId: this.templateId(),
            templateSelectionId: this.templateSelectionId(),
            data: this.data(),
            hide: this.hide() || undefined,
            dir: this.dir(),
        };
    }
}
