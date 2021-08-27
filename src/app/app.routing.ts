import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppExamplesComponent } from './app-examples.component';
import { AppGenComponent } from './app-gen.component';

const routes: Routes = [
    { path: 'examples', component: AppExamplesComponent },
    { path: 'generator', component: AppGenComponent },
    { path: '**', component: AppExamplesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
