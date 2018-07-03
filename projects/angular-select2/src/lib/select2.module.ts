import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select2 } from './select2.component';
import { Select2Hint } from './select2-hint.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    Select2Hint,
    Select2
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    Select2Hint,
    Select2
  ]
})
export class Select2Module { }
