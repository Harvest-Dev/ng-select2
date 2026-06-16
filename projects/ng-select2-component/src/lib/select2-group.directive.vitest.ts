import { ChangeDetectionStrategy, Component, ErrorHandler } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beforeEach, describe, expect, it } from 'vitest';

import { Select2GroupDirective } from './select2-group.directive';
import { Select2OptionDirective } from './select2-option.directive';

// ── Helpers ────────────────────────────────────────────────────────────

/** Suppress Angular 22 ExpressionChangedAfterItHasBeenCheckedError (NG0100) in tests. */
class SilentErrorHandler implements ErrorHandler {
    handleError(error: any) {
        if (error?.message?.includes('NG0100') || error?.message?.includes('ExpressionChanged')) {
            return;
        }
        console.error(error);
    }
}

/** Common providers for all TestBed configurations. */
function provideTestEnv() {
    return [{ provide: ErrorHandler, useClass: SilentErrorHandler }];
}

describe('Select2GroupDirective', () => {
    @Component({
        template: `
            <ng-group label="My Group" [classes]="classes" [dir]="dir" [data]="extraData">
                <ng-option value="g1">Item 1</ng-option>
                <ng-option value="g2">Item 2</ng-option>
            </ng-group>
        `,
        changeDetection: ChangeDetectionStrategy.Eager,
        imports: [Select2GroupDirective, Select2OptionDirective],
    })
    class GroupHost {
        classes: string | undefined = undefined;
        dir: 'ltr' | 'rtl' | undefined = undefined;
        extraData: any = undefined;
    }

    let fixture: ComponentFixture<GroupHost>;
    let host: GroupHost;
    let directive: Select2GroupDirective;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GroupHost],
            providers: provideTestEnv(),
        }).compileComponents();

        fixture = TestBed.createComponent(GroupHost);
        host = fixture.componentInstance;
        fixture.changeDetectorRef.detectChanges();
        directive = fixture.debugElement.children[0].injector.get(Select2GroupDirective);
    });

    it('should return correct label from toGroup()', () => {
        const grp = directive.toGroup();
        expect(grp.label).toBe('My Group');
    });

    it('should collect nested ng-option children', () => {
        const grp = directive.toGroup();
        expect(grp.options.length).toBe(2);
    });

    it('should map nested options with correct values', () => {
        const grp = directive.toGroup();
        expect(grp.options[0].value).toBe('g1');
        expect(grp.options[1].value).toBe('g2');
    });

    it('should pass classes input through toGroup()', () => {
        host.classes = 'grp-class';
        fixture.changeDetectorRef.detectChanges();
        const grp = directive.toGroup();
        expect(grp.classes).toBe('grp-class');
    });

    it('should pass dir input through toGroup()', () => {
        host.dir = 'ltr';
        fixture.changeDetectorRef.detectChanges();
        const grp = directive.toGroup();
        expect(grp.dir).toBe('ltr');
    });

    it('should pass data input through toGroup()', () => {
        host.extraData = { groupMeta: true };
        fixture.changeDetectorRef.detectChanges();
        const grp = directive.toGroup();
        expect(grp.data).toEqual({ groupMeta: true });
    });

    it('should fall back to innerHTML/textContent when label signal returns nullish', () => {
        // Force the label signal to return undefined to cover the ?? fallback branch
        const original = directive.label;
        Object.defineProperty(directive, 'label', { value: () => undefined, configurable: true });

        // First call: innerHTML is available, covers the ?? right side with innerHTML
        const grp1 = directive.toGroup();
        expect(grp1.label).toBeTruthy();

        // Second call: force innerHTML to be empty, covers fallback to textContent
        const el = fixture.debugElement.children[0].nativeElement as HTMLElement;
        Object.defineProperty(el, 'innerHTML', { value: '', configurable: true, writable: true });
        const grp2 = directive.toGroup();
        expect(typeof grp2.label).toBe('string');

        // Third call: force both innerHTML and textContent empty, covers the final || ''
        Object.defineProperty(el, 'textContent', { value: '', configurable: true, writable: true });
        const grp3 = directive.toGroup();
        expect(grp3.label).toBe('');

        Object.defineProperty(directive, 'label', { value: original, configurable: true });
    });

    describe('_refreshProjectedContent (interpolation reactivity trigger)', () => {
        it('should update _projectedContent and return true when the rendered content changes', () => {
            const el = fixture.debugElement.children[0].nativeElement as HTMLElement;
            Object.defineProperty(el, 'innerHTML', { value: 'First', configurable: true, writable: true });

            expect(directive._refreshProjectedContent()).toBe(true);
            expect(directive._projectedContent()).toBe('First');

            // Same content again: no change detected.
            expect(directive._refreshProjectedContent()).toBe(false);

            // Content changes: a new value is captured.
            Object.defineProperty(el, 'innerHTML', { value: 'Second', configurable: true, writable: true });
            expect(directive._refreshProjectedContent()).toBe(true);
            expect(directive._projectedContent()).toBe('Second');
        });

        it('should fall back to textContent then empty string when innerHTML is empty', () => {
            const el = fixture.debugElement.children[0].nativeElement as HTMLElement;

            // innerHTML empty → use textContent.
            Object.defineProperty(el, 'innerHTML', { value: '', configurable: true, writable: true });
            Object.defineProperty(el, 'textContent', { value: 'From text', configurable: true, writable: true });
            directive._refreshProjectedContent();
            expect(directive._projectedContent()).toBe('From text');

            // Both empty → empty string.
            Object.defineProperty(el, 'textContent', { value: '', configurable: true, writable: true });
            directive._refreshProjectedContent();
            expect(directive._projectedContent()).toBe('');
        });
    });
});
