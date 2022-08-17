import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks:any=[];
  openMenu:Boolean=false;
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
  // Trigger for navbar on mobile screen
  openmenu() {
    this.openMenu=!this.openMenu
  }
  scrolled: boolean = false;
  header:any;
    @HostListener("window:scroll", [])
    onWindowScroll() {
      // console.log("hello");
        this.scrolled = window.scrollY > 400;
        // this.header = document.getElementById('header')
        // if(window.scrollY >= 400) {
        //   this.scrolled=true
        //   this.header.classList.add("header_section");
        // }
        // else {
        //   this.scrolled=false
        //   this.header.classList.remove("header_section");
        // }
    }
}
