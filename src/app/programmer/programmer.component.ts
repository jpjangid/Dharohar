import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GetServicesService } from '../services/get-services.service';

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.scss']
})
export class ProgrammerComponent implements OnInit {
  @Input() programsData: any
  imageBaseurl = environment.image_baseurl;
  bannerData = { image: "", breadCrumb: ['Home'] };
  // sliderImages: any = [];
  sliderImages: any = [{ image: '' }];
  storyImage: any = []
  responsiveOptions: any;
  programData: any = {};
  slug: any;

  constructor(private getService: GetServicesService, private activeRoute: ActivatedRoute) {
    this.responsiveOptions = [
      {
        breakpoint: '1299px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '892px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.programsData?.data?.forEach((response: any, index: any) => {
      if (response[0]?.section_name == 'banner') {
        this.bannerData.image = this.imageBaseurl + "banner_image/" + response[0]?.image;
      }
      if (response[0]?.section_name == 'second_section') {
        this.programData.image = this.imageBaseurl + "section_second_image/" + response[0].image;
        this.programData.heading = response[0].heading;
        this.programData.text_content = response[0].text_content;
      }
      if (response[0]?.section_name == 'third_section') {
        this.storyImage = response;
      }
      if (response[0]?.section_name == 'fourth_section') {
        this.sliderImages = response;
        console.log(this.sliderImages)
      }
      if (index == 0) {
        this.bannerData.breadCrumb.push(response[0].page_name)
      }
    });
  }


}
