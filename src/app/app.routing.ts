import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'examples', loadComponent: () => import('./app-examples.component').then(m => m.AppExamplesComponent) },
    { path: 'generator', loadComponent: () => import('./app-gen.component').then(m => m.AppGenComponent) },
    { path: '**', loadComponent: () => import('./app-examples.component').then(m => m.AppExamplesComponent) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}