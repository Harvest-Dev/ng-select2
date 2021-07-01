import { TestBed, waitForAsync } from '@angular/core/testing';

import { Select2Module } from 'projects/ng-select2-component/src/public_api';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [Select2Module],
            declarations: [AppComponent]
        }).compileComponents();
    }));
    it('should create the app', waitForAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
