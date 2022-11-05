import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetServicesService } from './services/get-services.service';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  { path: '', redirectTo: 'en/home', pathMatch: 'full' },
  { path: 'en/:slug', component: TemplatesComponent },
  { path: 'hi/:slug', component: TemplatesComponent },
  { path: 'en/home', component: TemplatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
