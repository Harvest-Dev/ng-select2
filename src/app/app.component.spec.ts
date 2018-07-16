import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Select2Module } from 'projects/ng-select2-component/src/public_api';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Select2Module],
      declarations: [AppComponent]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
