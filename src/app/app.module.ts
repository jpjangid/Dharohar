import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RepeatedModule } from './repeated/repeated.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { ProgrammerComponent } from './programmer/programmer.component';
import {CarouselModule} from 'primeng/carousel';
import { ContactComponent } from './contact/contact.component';
import { StoriesComponent } from './stories/stories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AppInterceptor } from './app.interceptor';
import {ToastModule} from 'primeng/toast';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplatesComponent } from './templates/templates.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ProgrammerComponent,
    ContactComponent,
    StoriesComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RepeatedModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    RouterModule,
    CarouselModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
