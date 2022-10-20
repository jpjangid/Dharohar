import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetServicesService } from '../services/get-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardArray:any=[];
  header: any;
  bannerImage:any;
  gallerySection:any = []
  absoluteSection:any = []
  cardsHeadSection:any = {};
  image_baseurl = environment.image_baseurl;
  constructor(private getService : GetServicesService) { }

  ngOnInit(): void {
    this.getService.getHomePageData().subscribe((res:any)=> {
      console.log(res);
      res.data.forEach((response:any) => {
        if(response[0]?.section_name=='banner') {
          this.bannerImage = response[0]?.image;
          console.log(this.bannerImage)
        }
        if(response[0]?.section_name== 'second_section') {
          this.cardsHeadSection = response[0];
          console.log(this.cardsHeadSection)
        }
        if(response[0]?.section_name== 'third_section') {
          this.cardArray = response;
          console.log(this.cardArray)
        }
        if(response[0]?.section_name== 'fourth_section') {
          this.gallerySection = response;
          console.log(this.gallerySection)
        }
        if(response[0]?.section_name== 'fifth_section') {
          this.absoluteSection = response;
          console.log(this.absoluteSection)
        }
      });
    })
    // this.cardArray=[
    //   {
    //     "image":"./../../assets/learning.jpeg",
    //     "heading":"Sanskriti",
    //     "content":"making India’s ancient scripts accessible to all by digitising and cataloguing over 2.5 million manuscripts."
    //   },
    //   {
    //     "image":"./../../assets/home_page/Plantation.png",
    //     "heading":"10 lakh vriksh",
    //     "content":"communities nurturing their lived environments by developing green spaces and planting a million trees."
    //   },
    //   {
    //     "image":"./../../assets/sanskriti1.jpeg",
    //     "heading":"Third spaces",
    //     "content":"learning to learn in spaces for curiosity, connection, and creation through structured workshops spanning art, science, and culture."
    //   }
    // ]
  }
  cardAnimation:boolean=false
  @HostListener("window:scroll", [])
  async OnScroll() {
    // console.log(window.scrollY)
    // this.header = document.getElementById('cards_area2')
    if(window.scrollY > 250 && window.scrollY <= 658) {
      this.cardAnimation =true;
      // window.scroll(350, 750);
      // $("html, body").animate(
      //   {
      //     scrollTop: offset().top
      //   },
      //   750
      // );
    }
    else if(window.scrollY > 658 && window.scrollY <= 1298) {
      this.cardAnimation =true;
    }
    else if(window.scrollY > 1298 && window.scrollY <= 2500) {
      this.cardAnimation =true;
    }
    else {
      this.cardAnimation=false
    }
  }
}
function offset() {
  throw new Error('Function not implemented.');
}

