import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { describe, expect, it } from 'vitest';

import { Select2Hint } from './select2-hint.component';

@Component({
    template: `<select2-hint>Hint text</select2-hint>`,
    standalone: true,
    imports: [Select2Hint],
})
class TestHintHostComponent {}

describe('Select2Hint', () => {
    let fixture: ComponentFixture<TestHintHostComponent>;

    it('should create the directive', async () => {
        await TestBed.configureTestingModule({
            imports: [TestHintHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHintHostComponent);
        fixture.detectChanges();

        const hintEl = fixture.nativeElement.querySelector('select2-hint');
        expect(hintEl).toBeTruthy();
        expect(hintEl.textContent).toContain('Hint text');
    });

    it('should work with ng-select2-hint selector', async () => {
        @Component({
            template: `<ng-select2-hint>Alt hint</ng-select2-hint>`,
            standalone: true,
            imports: [Select2Hint],
        })
        class AltHostComponent {}

        await TestBed.configureTestingModule({
            imports: [AltHostComponent],
        }).compileComponents();

        const altFixture = TestBed.createComponent(AltHostComponent);
        altFixture.detectChanges();

        const hintEl = altFixture.nativeElement.querySelector('ng-select2-hint');
        expect(hintEl).toBeTruthy();
    });
});
