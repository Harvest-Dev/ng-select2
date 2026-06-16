import { Directive, ElementRef, inject, input, signal } from '@angular/core';

/**
 * Shared base for the <ng-option> and <ng-group> directives.
 *
 * Holds the inputs common to both (classes, templateId, data, dir) and the projected-content
 * reactivity: plain text content (interpolation in the element body) is not a tracked signal, so
 * the host component dirty-checks it in ngDoCheck and pushes changes into {@link _projectedContent},
 * which the rebuild effect depends on through {@link _resolveLabel}.
 */
@Directive()
export abstract class Select2ContentDirective {
    protected readonly _elementRef = inject(ElementRef<HTMLElement>);

    /** Additional CSS classes */
    readonly classes = input<string | undefined>(undefined);

    /** Template id */
    readonly templateId = input<string | undefined>(undefined);

    /** Arbitrary data attached to the option/group */
    readonly data = input<any>(undefined);

    /** Force text direction */
    readonly dir = input<'ltr' | 'rtl' | undefined>(undefined);

    /**
     * Reactive trigger for the projected text content (interpolation in the element body).
     * The host component dirty-checks the DOM in its ngDoCheck and updates this signal when the
     * rendered text changes, so the component's rebuild effect re-runs even though plain text
     * content is not otherwise a tracked dependency.
     */
    readonly _projectedContent = signal<string | undefined>(undefined);

    /** Read the host element's rendered text content (innerHTML, then textContent, then ''). */
    private _readContent(): string {
        const el = this._elementRef.nativeElement as HTMLElement;
        return el.innerHTML?.trim() || el.textContent?.trim() || '';
    }

    /**
     * Re-read the host element's rendered content and update {@link _projectedContent} when it
     * changed. Returns true if a change was detected. Called from the host component's ngDoCheck.
     */
    _refreshProjectedContent(): boolean {
        const content = this._readContent();
        if (content !== this._projectedContent()) {
            this._projectedContent.set(content);
            return true;
        }
        return false;
    }

    /**
     * Resolve the label: prefer the explicit [label] input, then the cached projected content,
     * then a one-off DOM read. Reading _projectedContent() registers it as a dependency of the
     * rebuild effect so interpolation/content changes propagate; the cached value avoids a second
     * DOM read, and _readContent() only runs on the initial pass.
     */
    protected _resolveLabel(label: string | undefined): string {
        return label ?? this._projectedContent() ?? this._readContent();
    }
}
