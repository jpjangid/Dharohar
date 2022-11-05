import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BreadcrumbBannerComponent } from './breadcrumb-banner/breadcrumb-banner.component';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
// import {DropdownModule} from 'primeng/dropdown';
const exportdata: any = [
  HeaderComponent,
  FooterComponent,
  ProjectCardComponent,
  BreadcrumbBannerComponent
]


@NgModule({
  declarations: [
    ...exportdata,
    BreadcrumbBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule
  ],
  exports:[
    ...exportdata
  ]
})
export class RepeatedModule { }
