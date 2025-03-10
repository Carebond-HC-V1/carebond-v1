import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CorporateComponent } from './corporate/corporate.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { DashboardComponent } from './dashbaord/dashboard.component';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [

  { path: 'home', component: HomeComponent }, // Default route
  { path: 'corporate', component: CorporateComponent }, // About page
  { path: 'corporate/details/:id', component: ServiceDetailsComponent }, // About page
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // About page
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
