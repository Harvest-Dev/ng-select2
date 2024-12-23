import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { TranslocoModule } from '@jsverse/transloco';

import { ExamplesRoutingModule } from './examples.module';
import { ExamplesService } from './examples.service';

@Component({
    selector: 'app-root',
    templateUrl: './app-examples.component.html',
    styleUrls: ['./app-examples.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, TranslocoModule, ExamplesRoutingModule, RouterModule, RouterOutlet],
})
export class AppExamplesComponent {
    private examplesService = inject(ExamplesService);

    overlay = false;
    styleMode = 'default';

    changeOverlay(value: boolean) {
        this.examplesService.changeOverlay(value);
    }

    changeStyleMode(value: string) {
        this.examplesService.changeStyleMode(value);
    }
}
