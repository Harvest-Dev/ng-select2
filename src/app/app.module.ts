import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { AppExamplesComponent } from './app-examples.component';
import { AppGenComponent } from './app-gen.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { TranslocoRootModule } from './transloco-root.module';

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
        { name: 'xml', func: require('highlight.js/lib/languages/xml') },
    ];
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HighlightModule,
        TranslocoRootModule,
        AppExamplesComponent,
        AppGenComponent,
    ],
    providers: [
        provideHttpClient(),
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    javascript: () => import('highlight.js/lib/languages/javascript'),
                    css: () => import('highlight.js/lib/languages/css'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                },
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
