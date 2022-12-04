import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetServicesService } from '../services/get-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnChanges{
  @Input() homeData: any;
  cardArray: any = [];
  header: any;
  bannerImage: any = {};
  gallerySection: any = []
  absoluteSection: any = []
  cardsHeadSection: any = {};
  image_baseurl = environment.image_baseurl;
  asset_baseURL = environment.asset_baseURL;
  bannerText: boolean = false;
  constructor(private getService: GetServicesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.homeData);
    
  }

  ngOnInit(): void {
    this.homeData?.data?.forEach((response: any) => {
      if (response[0]?.slug == 'home') {
        this.bannerText = true;
      }
      if (response[0]?.section_name == 'banner') {
        this.bannerImage.bannerImage = response[0]?.image;
        this.bannerImage.image_alt = response[0].image_alt;
        this.bannerImage.image_title = response[0].image_title;
        console.log(this.bannerImage)
      }
      if (response[0]?.section_name == 'second_section') {
        this.cardsHeadSection = response[0];
        console.log(this.cardsHeadSection)
      }
      if (response[0]?.section_name == 'third_section') {
        this.cardArray = response;
        console.log(this.cardArray)
      }
      if (response[0]?.section_name == 'fourth_section') {
        this.gallerySection = response;
        console.log(this.gallerySection)
      }
      if (response[0]?.section_name == 'fifth_section') {
        this.absoluteSection = response;
        console.log(this.absoluteSection)
      }
    });
  }
  cardAnimation: boolean = false
  @HostListener("window:scroll", [])
  async OnScroll() {
    // console.log(window.scrollY)
    // this.header = document.getElementById('cards_area2')
    if (window.scrollY > 250 && window.scrollY <= 658) {
      this.cardAnimation = true;
      // window.scroll(350, 750);
      // $("html, body").animate(
      //   {
      //     scrollTop: offset().top
      //   },
      //   750
      // );
    }
    else if (window.scrollY > 658 && window.scrollY <= 1298) {
      this.cardAnimation = true;
    }
    else if (window.scrollY > 1298 && window.scrollY <= 2500) {
      this.cardAnimation = true;
    }
    else {
      this.cardAnimation = false
    }
  }
}

