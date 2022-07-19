import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
const exportdata: any = [
  HomeComponent
]

@NgModule({
  declarations: [
    ...exportdata
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    ...exportdata
  ]
})
export class HomeModule { }
