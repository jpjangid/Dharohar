import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetServicesService } from 'src/app/services/get-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  navLinks: any = [];
  langCheck:boolean = true;
  language:any = 'en';
  submenuCheck:boolean = false;
  img_baseURL = environment.asset_baseURL;
  openMenu: Boolean = false;
  constructor(private route: Router, private getService: GetServicesService , private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.slug = this.activatedRoute.snapshot;
    this.language = this.slug?._routerState?.url?.slice(1,3);
    console.log(this.language,this.slug);
    this.getService.getPageData('/en'+'/menu').subscribe((res: any) => {
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
    this.getSlug();
  }

  changeLanguage() {
    this.langCheck = !this.langCheck
  }

  openSubmenus() {
    this.submenuCheck = !this.submenuCheck;
  }

  getLanguage(event:any) {
    console.log(event?.target.value);
    this.getSlug();
  }
  slug:any;
  getSlug() {
    this.slug = this.activatedRoute.snapshot;
    console.log();
  }
}
