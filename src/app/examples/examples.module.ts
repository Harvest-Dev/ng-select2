import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app-examples.component').then(m => m.AppExamplesComponent),
        children: [
            {
                path: 'basic',
                loadComponent: () => import('./examples-basic.component').then(m => m.ExemplesBasicComponent),
            },
            {
                path: 'basic',
                loadComponent: () => import('./examples-basic.component').then(m => m.ExemplesBasicComponent),
            },
            {
                path: 'multiple',
                loadComponent: () => import('./examples-multiple.component').then(m => m.ExemplesMultipleComponent),
            },
            {
                path: 'multiple-drag',
                loadComponent: () =>
                    import('./examples-multiple-drag.component').then(m => m.ExemplesMultipleDragComponent),
            },
            {
                path: 'limits',
                loadComponent: () => import('./examples-limits.component').then(m => m.ExamplesLimitsComponent),
            },
            {
                path: 'style',
                loadComponent: () => import('./examples-style.component').then(m => m.ExamplesStyleComponent),
            },
            {
                path: 'tags',
                loadComponent: () => import('./examples-tags.component').then(m => m.ExemplesTagsComponent),
            },
            {
                path: 'events',
                loadComponent: () => import('./examples-events.component').then(m => m.ExemplesEventsComponent),
            },
            {
                path: 'form-control',
                loadComponent: () =>
                    import('./examples-form-control.component').then(m => m.ExemplesFormControlComponent),
            },
            {
                path: 'resettable',
                loadComponent: () => import('./examples-resettable.component').then(m => m.ExemplesResettableComponent),
            },
            {
                path: 'auto-create',
                loadComponent: () =>
                    import('./examples-auto-create.component').then(m => m.ExemplesAutoCreateComponent),
            },
            {
                path: 'wai',
                loadComponent: () => import('./examples-wai.component').then(m => m.ExemplesWaiComponent),
            },
            {
                path: 'infinite-scroll',
                loadComponent: () =>
                    import('./examples-infinite-scroll.component').then(m => m.ExemplesInfiniteScrollComponent),
            },
            {
                path: 'position',
                loadComponent: () => import('./examples-position.component').then(m => m.ExemplesPositionComponent),
            },
            {
                path: 'template',
                loadComponent: () => import('./examples-template.component').then(m => m.ExemplesTemplateComponent),
            },
            {
                path: 'grid',
                loadComponent: () => import('./examples-grid.component').then(m => m.ExemplesGridComponent),
            },
            {
                path: 'selection-override',
                loadComponent: () =>
                    import('./examples-selection-override.component').then(m => m.ExemplesSelectionOverrideComponent),
            },
            {
                path: 'selection-nowrap',
                loadComponent: () =>
                    import('./examples-selection-nowrap.component').then(m => m.ExemplesSelectionNowrapComponent),
            },
            {
                path: 'select-all',
                loadComponent: () => import('./examples-select-all.component').then(m => m.ExemplesSelectAllComponent),
            },
            {
                path: 'others',
                loadComponent: () => import('./examples-others.component').then(m => m.ExemplesOthersComponent),
            },
            {
                path: '**',
                redirectTo: 'basic',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamplesRoutingModule {}

@NgModule({
    imports: [ExamplesRoutingModule],
})
export class ExamplesModule {}