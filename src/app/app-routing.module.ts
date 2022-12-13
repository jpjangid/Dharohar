import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { GetServicesService } from './services/get-services.service';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  { path: 'en/not-found', component: NotFoundPageComponent },
  { path: '', redirectTo: 'en/home', pathMatch: 'full' },
  { path: 'en/:slug', component: TemplatesComponent },
  { path: 'hi/:slug', component: TemplatesComponent },
  { path: 'en/home', component: TemplatesComponent },
  { path: 'en/contact', component: TemplatesComponent },
  { path: 'en/coming-soon', component: TemplatesComponent },
  { path: '**', redirectTo: 'en/not-found', pathMatch: 'full' }
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
