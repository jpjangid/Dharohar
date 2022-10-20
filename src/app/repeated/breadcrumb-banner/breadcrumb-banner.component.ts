import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-banner',
  templateUrl: './breadcrumb-banner.component.html',
  styleUrls: ['./breadcrumb-banner.component.scss']
})
export class BreadcrumbBannerComponent implements OnInit {
  @Input() bannerData:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.bannerData)
  }

}
