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
  imageBaseurl = environment.image_baseurl;
  bannerData = {image : "" , breadCrumb : ['Home','Stories']};
  slug: any;
  detailContent:any;
  heading:any;
  detailImages: any;
  constructor(private getService : GetServicesService,private sanitizer: DomSanitizer, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.slug = this.activeRoute.snapshot;
    console.log(typeof(this.slug._routerState.url))
    this.getService.getPageData(this.slug._routerState.url).subscribe((res:any)=> {
      console.log(res);
      res.data.forEach((response:any) => {
        if(response[0]?.section_name == 'banner') {
          this.bannerData.image = this.imageBaseurl+"banner_image/"+response[0]?.image;
        }
        if(response[0]?.section_name == 'section_two_heading') {
          this.heading = response[0]?.heading;
        }
        if(response[0]?.section_name == 'section_two_content') {
          this.detailContent = response;
        }
        if(response[0]?.section_name == 'section_two_images') {
          this.detailImages = response;
        }
      });
    })
  }

}
