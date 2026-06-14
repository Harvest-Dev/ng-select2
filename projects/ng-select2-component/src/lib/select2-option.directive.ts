import { Directive, ElementRef, booleanAttribute, inject, input } from '@angular/core';

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
@Directive({
    selector: 'ng-option',
    standalone: true,
})
export class Select2OptionDirective {
    private _elementRef = inject(ElementRef<HTMLElement>);

    /** The option value */
    readonly value = input.required<Select2Value>();

    /** Explicit label — falls back to the element's text content if omitted */
    readonly label = input<string | undefined>(undefined);

    /** Whether the option is disabled */
    readonly disabled = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Additional CSS classes */
    readonly classes = input<string | undefined>(undefined);

    /** Template id */
    readonly templateId = input<string | undefined>(undefined);

    /** Template selection id */
    readonly templateSelectionId = input<string | undefined>(undefined);

    /** Arbitrary data attached to the option */
    readonly data = input<any>(undefined);

    /** Hide this option */
    readonly hide = input<boolean, unknown>(false, { transform: booleanAttribute });

    /** Force text direction */
    readonly dir = input<'ltr' | 'rtl' | undefined>(undefined);

    /** Build a plain Select2Option object from the current input values */
    toOption(): Select2Option {
        // Prefer the explicit [label] input. If absent, use innerHTML so that
        // markup like <strong>example</strong> test is preserved (the component template
        // already renders label via [innerHTML], so HTML is safe here).
        // Fall back to textContent as a last resort (e.g. in SSR where innerHTML
        // may not be available).
        const el = this._elementRef.nativeElement as HTMLElement;
        const resolvedLabel = this.label() ?? (el.innerHTML?.trim() || el.textContent?.trim() || '');

        return {
            value: this.value(),
            label: resolvedLabel,
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
