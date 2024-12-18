import { Component, ViewEncapsulation, inject } from '@angular/core';

import { TranslocoService } from '@jsverse/transloco';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss'],
    standalone: false,
})
export class AppComponent {
    private readonly translate = inject(TranslocoService);

    language = 'en';

    changeLanguage(lang: string) {
        this.translate.load(lang).subscribe(() => {
            this.translate.setActiveLang(lang);
        });
        document.documentElement.setAttribute('lang', lang);
    }
}
