import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { GetServicesService } from 'src/app/services/get-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  navLinks: any = [];
  langCheck: boolean = true;
  language: any;
  submenuCheck: boolean = false;
  img_baseURL = environment.asset_baseURL;
  openMenu: Boolean = false;
  constructor(private route: Router, private getService: GetServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.route.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.language = this.route.url.slice(1, 3)
        }
      });
    this.getService.getPageData('/en' + '/menu').then((res: any) => {
      console.log(res)
      this.navLinks = res?.menu?.menus;
    })
  }

  openmenu() {
    this.openMenu = !this.openMenu
  }

  navigate(slug?: any) {
    console.log(this.language)
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([this.language + '/' + (slug != null ? slug : 'home')]);
    if (this.openMenu == true || this.submenuCheck == true) {
      this.openMenu = false;
      this.submenuCheck = false;
    }
    window.scroll(0, 0)
  }

  changeLanguage() {
    this.langCheck = !this.langCheck
  }

  openSubmenus() {
    this.submenuCheck = !this.submenuCheck;
  }

  getLanguage(event: any) {
    this.getSlug(event?.target.value);
  }

  // slug: any;
  getSlug(value: any) {
    let snapshot: any;
    console.log(this.route.url.slice(4 , this.route.url.length));
    snapshot = this.route.url.slice(4 , this.route.url.length);
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([this.language + '/' + (snapshot != null ? snapshot : 'home')]);
  }
}
