import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './overview/overview.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'detail-page', component: OverviewComponent },
  { path: 'programs', component: ProgrammerComponent },
  { path: 'list-page', component: StoriesComponent },
  { path: 'contact-us', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
