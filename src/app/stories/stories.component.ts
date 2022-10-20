import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetServicesService } from '../services/get-services.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  bannerData = { image: "", breadCrumb: ['Home', 'Stories'] };
  // storyArray:any;
  slug: any;
  headContent: any;
  imageBaseurl = environment.image_baseurl;
  listContent: any;
  filterCategory: any;
  filterSubCategory: any;
  copyListContent: any;
  catergory: number = 0 ;
  subcategroy: number = 0;
  constructor(private route: Router, private getService: GetServicesService, private sanitizer: DomSanitizer, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.storyArray=[
    //   {
    //     "image":"./../../assets/home_page/TSM school visit.png",
    //     "heading":"Learning to learn",
    //     "content":"Learning – we’ve heard this word countless times when we were in school, right?"
    //   },
    //   {
    //     "image":"./../../assets/vriksh.jpeg",
    //     "heading":"10 lakh vriksh",
    //     "content":"10 lakh vriksh – the name might be bit of a mouthful but it carries a simple message"
    //   },
    //   {
    //     "image":"./../../assets/sanskriti1.jpeg",
    //     "heading":"Sanskriti",
    //     "content":"This is your Third space, where you can try something new or just be you."
    //   },
    //   {
    //     "image":"./../../assets/home_page/Plantation.png",
    //     "heading":"Learning to learn",
    //     "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    //   },
    //   {
    //     "image":"./../../assets/gallery3.jpeg",
    //     "heading":"10 lakh vriksh",
    //     "content":"This is your Third space, where you can try something new or just be you."
    //   },
    //   {
    //     "image":"./../../assets/gallery2.jpeg",
    //     "heading":"Sanskriti",
    //     "content":"From learning to think like a scientist to learning to learn and express themselves"
    //   },
    //   {
    //     "image":"./../../assets/gallery4.jpeg",
    //     "heading":"Learning to learn",
    //     "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    //   },
    //   {
    //     "image":"./../../assets/vriksh.jpeg",
    //     "heading":"10 lakh vriksh",
    //     "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    //   },
    //   {
    //     "image":"./../../assets/gallery5.jpeg",
    //     "heading":"Sanskriti",
    //     "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    //   }
    // ]
    this.slug = this.activeRoute.snapshot;
    console.log(typeof (this.slug._routerState.url))
    this.getService.getPageData(this.slug._routerState.url).subscribe((res: any) => {
      console.log(res);
      this.filterCategory = res.category;
      this.filterSubCategory = res.subcategory;
      res.data.forEach((response: any) => {
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
        // if(response[0]?.section_name == 'section_two_images') {
        //   this.listImages = response;
        // }
      });
      console.log(this.filterCategory, this.filterSubCategory)
    })
  }

  getFilterValue(event: any, string: any) {
    if(string == 'category') {
      this.catergory = event.target.value;
    }
    else if(string == 'subcategory') {
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

  routerToPage() {
    this.route.navigateByUrl('')
  }

}
