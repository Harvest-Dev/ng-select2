import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadComponent: () => import('./app-home.component').then(m => m.AppHomeComponent) },
    {
        path: 'examples',
        loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule),
    },
    { path: 'generator', loadComponent: () => import('./app-gen.component').then(m => m.AppGenComponent) },
    { path: '**', loadComponent: () => import('./app-home.component').then(m => m.AppHomeComponent) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}