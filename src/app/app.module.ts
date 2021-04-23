import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HighlightModule } from 'ngx-highlightjs';

import { Select2Module } from 'projects/ng-select2-component/src/public_api';

import { AppExamplesComponent } from './app-examples.component';
import { AppGenComponent } from './app-gen.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

declare var require: any;

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
    return [
        { name: 'typescript', func: require('highlight.js/lib/languages/typescript') },
        { name: 'javascript', func: require('highlight.js/lib/languages/javascript') },
        { name: 'scss', func: require('highlight.js/lib/languages/scss') },
        { name: 'xml', func: require('highlight.js/lib/languages/xml') }
    ];
}

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
        Select2Module,
        HighlightModule.forRoot({
            languages: hljsLanguages
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
