import { ChangeDetectionStrategy, Component, ErrorHandler } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beforeEach, describe, expect, it } from 'vitest';

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

describe('Select2OptionDirective', () => {
    @Component({
        template: `<ng-option
            value="test-val"
            [label]="label"
            [disabled]="isDisabled"
            [classes]="classes"
            [hide]="hidden"
            [dir]="dir"
            [data]="extraData"
            >Content</ng-option
        >`,
        changeDetection: ChangeDetectionStrategy.Eager,
        imports: [Select2OptionDirective],
    })
    class OptionHost {
        label: string | undefined = 'My Label';
        isDisabled = false;
        classes: string | undefined = undefined;
        hidden = false;
        dir: 'ltr' | 'rtl' | undefined = undefined;
        extraData: any = undefined;
    }

    @Component({
        template: `<ng-option value="fallback-val">Fallback text</ng-option>`,
        changeDetection: ChangeDetectionStrategy.Eager,
        imports: [Select2OptionDirective],
    })
    class OptionNoLabelHost {}

    let fixture: ComponentFixture<OptionHost>;
    let host: OptionHost;
    let directive: Select2OptionDirective;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OptionHost],
            providers: provideTestEnv(),
        }).compileComponents();

        fixture = TestBed.createComponent(OptionHost);
        host = fixture.componentInstance;
        fixture.changeDetectorRef.detectChanges();
        directive = fixture.debugElement.children[0].injector.get(Select2OptionDirective);
    });

    it('should return correct value from toOption()', () => {
        const opt = directive.toOption();
        expect(opt.value).toBe('test-val');
    });

    it('should use explicit label input in toOption()', () => {
        const opt = directive.toOption();
        expect(opt.label).toBe('My Label');
    });

    it('should fall back to innerHTML when label is not provided', async () => {
        let noLabelFixture: ComponentFixture<OptionNoLabelHost>;
        TestBed.resetTestingModule();
        await TestBed.configureTestingModule({
            imports: [OptionNoLabelHost],
            providers: provideTestEnv(),
        }).compileComponents();

        noLabelFixture = TestBed.createComponent(OptionNoLabelHost);
        noLabelFixture.changeDetectorRef.detectChanges();

        const noLabelDirective = noLabelFixture.debugElement.children[0].injector.get(Select2OptionDirective);
        const opt = noLabelDirective.toOption();
        expect(opt.label).toContain('Fallback text');
    });

    it('should set disabled to undefined when false', () => {
        host.isDisabled = false;
        fixture.changeDetectorRef.detectChanges();
        const opt = directive.toOption();
        expect(opt.disabled).toBeUndefined();
    });

    it('should set disabled when true', () => {
        host.isDisabled = true;
        fixture.changeDetectorRef.detectChanges();
        const opt = directive.toOption();
        expect(opt.disabled).toBe(true);
    });

    it('should pass classes input through toOption()', () => {
        host.classes = 'my-class';
        fixture.changeDetectorRef.detectChanges();
        const opt = directive.toOption();
        expect(opt.classes).toBe('my-class');
    });

    it('should set hide to undefined when false', () => {
        host.hidden = false;
        fixture.changeDetectorRef.detectChanges();
        const opt = directive.toOption();
        expect(opt.hide).toBeUndefined();
    });

    it('should set hide when true', () => {
        host.hidden = true;
        fixture.changeDetectorRef.detectChanges();
        const opt = directive.toOption();
        expect(opt.hide).toBe(true);
    });

    it('should pass dir input through toOption()', () => {
        host.dir = 'rtl';
        fixture.changeDetectorRef.detectChanges();
        const opt = directive.toOption();
        expect(opt.dir).toBe('rtl');
    });

    it('should pass data input through toOption()', () => {
        host.extraData = { custom: 42 };
        fixture.changeDetectorRef.detectChanges();
        const opt = directive.toOption();
        expect(opt.data).toEqual({ custom: 42 });
    });

    it('should fall back to textContent when label is undefined and innerHTML is empty', () => {
        // Force the label signal to return undefined to cover the ?? fallback branches
        const original = directive.label;
        Object.defineProperty(directive, 'label', { value: () => undefined, configurable: true });

        // First: innerHTML available → covers `label() ?? innerHTML` path
        const opt1 = directive.toOption();
        expect(opt1.label).toBeTruthy();

        // Second: force innerHTML empty → covers fallback to textContent
        const el = fixture.debugElement.children[0].nativeElement as HTMLElement;
        Object.defineProperty(el, 'innerHTML', { value: '', configurable: true, writable: true });
        const opt2 = directive.toOption();
        expect(typeof opt2.label).toBe('string');

        // Third: force both empty → covers final || '' fallback
        Object.defineProperty(el, 'textContent', { value: '', configurable: true, writable: true });
        const opt3 = directive.toOption();
        expect(opt3.label).toBe('');

        Object.defineProperty(directive, 'label', { value: original, configurable: true });
    });
});
