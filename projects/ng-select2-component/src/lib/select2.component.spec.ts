import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select2 } from './select2.component';

describe('Select2', () => {
  let component: Select2;
  let fixture: ComponentFixture<Select2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Select2]
    })
      .compileComponents();
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
