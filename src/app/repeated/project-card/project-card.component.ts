import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() projectCardData:any;
  constructor() { }

  ngOnInit(): void {
  }
  suitableClass(index?:any) {
    if(window.scrollY > 400 && window.scrollY <= 658) {
      console.log("testclass",index)
      return 'animated_card_box'
    }
    else if(window.scrollY > 700 && window.scrollY <= 1298) {
      return 'card_box'
    }
    else if(window.scrollY > 1298 && window.scrollY <= 1700) {
      return 'card_box'
    }
    return 'card_box'
  }
  
}
