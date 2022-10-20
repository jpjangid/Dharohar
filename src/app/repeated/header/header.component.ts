import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetServicesService } from 'src/app/services/get-services.service';

// interface language {
//   name: string,
//   code: string
// }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  navLinks:any=[];
  // language: language[];
  // selectedCity: language | any;
  openMenu:Boolean=false;
  constructor( private route : Router, private getService : GetServicesService ) {
  //   this.language = [
  //     {name: 'English', code: 'eng'},
  //     {name: 'Hindi', code: 'hi'},
  //     {name: 'Sanskrit', code: 'san'}
  // ];
  }

  ngOnInit() {
    // this.navLinks=[
    //   {name:"Overview", path:'list-page'},
    //   {name:"Third space", path:'/'},
    //   {name:"10 lakh vriksh", path:'/'},
    //   {name:"Sanskriti", path:'programmes'},
    //   {name:"Stories", path:'detail-page'},
    //   {name:"Contact", path:'contact-us'}
    // ]
    console.log(this.navLinks)
    this.getService.getNavLinks().subscribe((res:any)=> {
      console.log(res)
      this.navLinks = res.menu.menus;
    })
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

    navigate(string:any) {
      this.route.navigateByUrl(string);
      if(this.openMenu==true) {
        this.openMenu=false
      }
      window.scroll(0,0)
    }
}
