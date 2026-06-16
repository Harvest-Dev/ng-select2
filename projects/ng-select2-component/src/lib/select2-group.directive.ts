import { Directive, contentChildren, input } from '@angular/core';

import { Select2ContentDirective } from './select2-content.directive';
import { Select2Group } from './select2-interfaces';
import { Select2OptionDirective } from './select2-option.directive';

/**
 * Directive representing an option group inside a <ng-select2>.
 *
 * Usage:
 * ```html
 * <ng-select2>
 *   <ng-group label="Fruits">
 *     <ng-option value="apple">Apple</ng-option>
 *     <ng-option value="banana">Banana</ng-option>
 *   </ng-group>
 * </ng-select2>
 * ```
 */
@Directive({ selector: 'ng-group' })
export class Select2GroupDirective extends Select2ContentDirective {
    /** The group label (required) */
    readonly label = input.required<string>();

    /** Child <ng-option> directives nested inside this group */
    readonly _ngOptions = contentChildren(Select2OptionDirective);

    /** Build a plain Select2Group object from the current input values */
    toGroup(): Select2Group {
        return {
            label: this._resolveLabel(this.label()),
            options: this._ngOptions().map(o => o.toOption()),
            classes: this.classes(),
            templateId: this.templateId(),
            data: this.data(),
            dir: this.dir(),
        };
    }
}
