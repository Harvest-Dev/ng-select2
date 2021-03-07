import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { Select2Module } from 'projects/ng-select2-component/src/public_api';
import { AppGenComponent } from './app-gen.component';
import { AppExamplesComponent } from './app-examples.component';

@NgModule({
    declarations: [
        AppComponent,
        AppExamplesComponent,
        AppGenComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        Select2Module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
