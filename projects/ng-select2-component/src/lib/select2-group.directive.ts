import { Directive, ElementRef, contentChildren, inject, input } from '@angular/core';

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
@Directive({
    selector: 'ng-group',
    standalone: true,
})
export class Select2GroupDirective {
    private _elementRef = inject(ElementRef<HTMLElement>);

    /** The group label (required) */
    readonly label = input.required<string>();

    /** Additional CSS classes */
    readonly classes = input<string | undefined>(undefined);

    /** Template id */
    readonly templateId = input<string | undefined>(undefined);

    /** Arbitrary data attached to the group */
    readonly data = input<any>(undefined);

    /** Force text direction */
    readonly dir = input<'ltr' | 'rtl' | undefined>(undefined);

    /** Child <ng-option> directives nested inside this group */
    readonly _ngOptions = contentChildren(Select2OptionDirective);

    /** Build a plain Select2Group object from the current input values */
    toGroup(): Select2Group {
        // Prefer the explicit [label] input. If absent, use innerHTML so that
        // markup like <strong>example</strong> test is preserved (the component template
        // already renders label via [innerHTML], so HTML is safe here).
        // Fall back to textContent as a last resort (e.g. in SSR where innerHTML
        // may not be available).
        const el = this._elementRef.nativeElement as HTMLElement;
        const resolvedLabel = this.label() ?? (el.innerHTML?.trim() || el.textContent?.trim() || '');

        return {
            label: resolvedLabel,
            options: this._ngOptions().map(o => o.toOption()),
            classes: this.classes(),
            templateId: this.templateId(),
            data: this.data(),
            dir: this.dir(),
        };
    }
}
