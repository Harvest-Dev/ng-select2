import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { describe, expect, it } from 'vitest';

import { Select2Label } from './select2-label.component';

@Component({
    template: `<select2-label>Label text</select2-label>`,
    imports: [Select2Label],
})
class TestLabelHostComponent {}

describe('Select2Label', () => {
    let fixture: ComponentFixture<TestLabelHostComponent>;

    it('should create the directive', async () => {
        await TestBed.configureTestingModule({
            imports: [TestLabelHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestLabelHostComponent);
        fixture.changeDetectorRef.detectChanges();

        const labelEl = fixture.nativeElement.querySelector('select2-label');
        expect(labelEl).toBeTruthy();
        expect(labelEl.textContent).toContain('Label text');
    });

    it('should work with ng-select2-label selector', async () => {
        @Component({
            template: `<ng-select2-label>Alt label</ng-select2-label>`,
            imports: [Select2Label],
        })
        class AltHostComponent {}

        await TestBed.configureTestingModule({
            imports: [AltHostComponent],
        }).compileComponents();

        const altFixture = TestBed.createComponent(AltHostComponent);
        altFixture.changeDetectorRef.detectChanges();

        const labelEl = altFixture.nativeElement.querySelector('ng-select2-label');
        expect(labelEl).toBeTruthy();
    });
});
