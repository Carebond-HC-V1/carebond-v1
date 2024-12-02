import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { CorporateComponent } from '../corporate/corporate.component';
import { ServiceDetailsComponent } from '../service-details/service-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'corporate', component: CorporateComponent }, // About page
    { path: 'corporate/details/:id', component: ServiceDetailsComponent } // About page
];
