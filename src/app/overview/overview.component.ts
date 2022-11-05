import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GetServicesService } from '../services/get-services.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() detailData: any;
  imageBaseurl = environment.image_baseurl;
  bannerData = { image: "", breadCrumb: ['Home'] };
  slug: any;
  detailContent: any;
  heading: any;
  detailImages: any;
  constructor(private getService: GetServicesService, private sanitizer: DomSanitizer, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailData?.data?.forEach((response: any, index: any) => {
      if (response[0]?.section_name == 'banner') {
        this.bannerData.image = this.imageBaseurl + "banner_image/" + response[0]?.image;
      }
      if (response[0]?.section_name == 'section_two_heading') {
        this.heading = response[0]?.heading;
      }
      if (response[0]?.section_name == 'section_two_content') {
        this.detailContent = response;
        console.log(this.detailContent)
      }
      if (response[0]?.section_name == 'section_two_images') {
        this.detailImages = response;
      }
      if (index == 0) {
        this.bannerData.breadCrumb.push(response[0].page_name);
        console.log(response[0].page_name)
      }
    });
  }

}
