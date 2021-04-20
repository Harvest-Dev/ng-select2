import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Select2Hint } from './select2-hint.component';
import { Select2Label } from './select2-label.component';
import { Select2 } from './select2.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule
    ],
    declarations: [
        Select2Hint,
        Select2Label,
        Select2
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        Select2Hint,
        Select2Label,
        Select2
    ]
})
export class Select2Module { }
