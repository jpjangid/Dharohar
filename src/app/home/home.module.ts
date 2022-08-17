import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RepeatedModule } from '../repeated/repeated.module';
const exportdata: any = [
  HomeComponent
]

@NgModule({
  declarations: [
    ...exportdata
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RepeatedModule
  ],
  exports: [
    ...exportdata
  ]
})
export class HomeModule { }
