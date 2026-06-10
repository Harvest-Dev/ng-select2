import { TestBed, waitForAsync } from '@angular/core/testing';

import { Select2 } from 'ng-select2-component';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [Select2],
            declarations: [AppComponent],
        }).compileComponents();
    }));
    it('should create the app', waitForAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
