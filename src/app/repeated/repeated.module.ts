import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
const exportdata: any = [
  HeaderComponent,
  FooterComponent
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
