import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Select2Module } from 'projects/ng-select2-component/src/public_api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        Select2Module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
