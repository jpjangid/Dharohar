import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardArray:any=[];
  header: any;
  constructor() { }

  ngOnInit(): void {
    this.cardArray=[
      {
        "image":"./../../assets/learning.jpeg",
        "heading":"Learning to learn",
        "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis vel tenetur nam mollitia voluptas blanditiis ipsum"
      },
      {
        "image":"./../../assets/vriksh.jpeg",
        "heading":"10 Lakh Vriksh",
        "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis vel tenetur nam mollitia voluptas blanditiis ipsum"
      },
      {
        "image":"./../../assets/sanskriti1.jpeg",
        "heading":"Sanskriti",
        "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis vel tenetur nam mollitia voluptas blanditiis ipsum"
      }
    ]
  }
  cardAnimation:boolean=false
  @HostListener("window:scroll", [])
  async OnScroll() {
    // console.log(window.scrollY)
    // this.header = document.getElementById('cards_area2')
    if(window.scrollY > 250 && window.scrollY <= 658) {
      this.cardAnimation =true;
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
