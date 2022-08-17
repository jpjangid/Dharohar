import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
const exportdata: any = [
  HeaderComponent,
  FooterComponent,
  ProjectCardComponent
]


@NgModule({
  declarations: [
    ...exportdata
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...exportdata
  ]
})
export class RepeatedModule { }
