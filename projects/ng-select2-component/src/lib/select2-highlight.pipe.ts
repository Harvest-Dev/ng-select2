import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Select2Utils } from './select2-utils';

@Pipe({
    name: 'highlightText',
    standalone: true,
})
export class Select2HighlightPipe implements PipeTransform {
    private readonly sanitizer = inject(DomSanitizer);

    transform(
        value: string | null | undefined,
        search: string | null | undefined,
        disabled: boolean = false,
    ): SafeHtml | string {
        if (!value || !search || disabled) {
            return value ?? '';
        }
        const escapedSearch = Select2Utils.patternUnicode(Select2Utils.protectPattern(search));
        const result = value.replace(
            new RegExp(`(${escapedSearch})`, 'gi'),
            '<span class="select2-highlight-text">$1</span>',
        );
        return this.sanitizer.bypassSecurityTrustHtml(result);
    }
}
