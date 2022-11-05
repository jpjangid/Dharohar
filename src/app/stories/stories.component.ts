import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GetServicesService } from '../services/get-services.service';
import { AppUtility } from '../utility';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  @Input() listData: any;
  bannerData = { image: "", breadCrumb: ['Home'] };
  // storyArray:any;
  slug: any;
  headContent: any;
  imageBaseurl = environment.image_baseurl;
  listContent: any;
  filterCategory: any;
  filterSubCategory: any;
  copyListContent: any;
  catergory: number = 0;
  subcategroy: number = 0;
  constructor(private utility: AppUtility, private route: Router, private getService: GetServicesService, private sanitizer: DomSanitizer, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.filterCategory = this.listData?.category;
    this.filterSubCategory = this.listData?.subcategory;
    this.listData?.data?.forEach((response: any, index: any) => {
      if (response[0]?.section_name == 'banner') {
        this.bannerData.image = this.imageBaseurl + "banner_image/" + response[0]?.image;
      }
      if (response[0]?.section_name == 'second_section') {
        this.headContent = response[0]?.text_content;
      }
      if (response[0]?.section_name == 'fifth_section') {
        this.listContent = response;
        this.copyListContent = Object.assign([], this.listContent);
      }
      if (index == 0) {
        this.bannerData.breadCrumb.push(response[0].page_name);
      }
      // if(response[0]?.section_name == 'section_two_images') {
      //   this.listImages = response;
      // }
    });
    console.log(this.filterCategory, this.filterSubCategory)
  }

  getFilterValue(event: any, string: any) {
    if (string == 'category') {
      this.catergory = event.target.value;
    }
    else if (string == 'subcategory') {
      this.subcategroy = event.target.value;
    }
    let filteredArray: any = [];
    this.copyListContent.forEach((res: any) => {
      if ((res.category_id == this.catergory || this.catergory == 0) && (res.sub_category_id == this.subcategroy || this.subcategroy == 0)) {
        filteredArray.push(res);
      }
    });
    this.listContent = [];
    this.listContent = Object.assign([], filteredArray);
    console.log(event.target.value)
  }

  routeToDetail(slug: any) {
    let prefix = this.activeRoute.snapshot;
    if (slug) {
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['/'+prefix?.url[0]?.path+'/' + ((slug != null) ? slug : '')]);
    }
  }
  
}
