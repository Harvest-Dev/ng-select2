import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Select2 } from './select2.component';

describe('Select2', () => {
    let component: Select2;
    let fixture: ComponentFixture<Select2>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [Select2],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Select2);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
