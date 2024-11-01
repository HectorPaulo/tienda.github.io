import { Routes } from '@angular/router';
import { GridPagesComponent } from './pages/grid-pages/grid-pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
    path: '',
    component: GridPagesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'settings',
        component: SettingsComponent,
    },
    {
        path: 'product/:id',
        component: ProductComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
