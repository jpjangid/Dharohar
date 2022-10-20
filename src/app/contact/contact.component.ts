import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GetServicesService } from '../services/get-services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  bannerData = {image : "" , breadCrumb : ['Home','Contact us']};
  imageBaseurl = environment.image_baseurl;
  headContent:any;
  iFrame: any;
  address: any;
  slug: any;
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
        if(response[0]?.section_name == 'second_section') {
          this.headContent = this.sanitizer.bypassSecurityTrustHtml(response[0]?.text_content);
        }
        if(response[0]?.section_name == 'third_section') {
          this.iFrame = this.sanitizer.bypassSecurityTrustHtml(response[0]?.text_content);
          // this.iFrame = response[0]?.text_content;
          this.address = response[1].text_content;
          console.log(typeof(this.iFrame))
        }
      });
    })
  }

}
