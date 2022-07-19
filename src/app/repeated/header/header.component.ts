import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks:any=[];
  constructor() { }

  ngOnInit() {
    this.navLinks=[
      "Overview",
      "Sanskriti",
      "10 Lakh Vriksh",
      "Stories",
      "Learning Legacy",
      "Contact"
    ]
    console.log(this.navLinks)
  }

}
