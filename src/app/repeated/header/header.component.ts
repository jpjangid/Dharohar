import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
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
  subsubmenuCheck: boolean = false;
  img_baseURL = environment.asset_baseURL;
  openMenu: Boolean = false;
  displayModal: boolean = false;
  searchWord: any;
  searchResult: any = []
  searchWordUpdate = new Subject<string>();
  menuIndex: any;
  subMenuIndex: any;
  constructor(private route: Router, private getService: GetServicesService, private activatedRoute: ActivatedRoute, private _sanitizer: DomSanitizer) {
    this.searchWordUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        console.log("value", value);
        this.searchQuery(value);
      });
  }

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

  searchQuery(value: any) {
    let object = {
      name: value
    }
    this.getService.postFormData(object, this.language + '/' + 'globalSearch').subscribe(
      (res: any) => {
        this.searchResult = res.data;
        // this.searchResult?.forEach((res:any) => {
        //   res.text_content = this._sanitizer.bypassSecurityTrustHtml(res.text_content);
        // });
        // console.log((res.data[3].text_content));
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.searchResult = []
      })
  }

  openmenu() {
    this.openMenu = !this.openMenu;
    this.submenuCheck = false;
    this.subsubmenuCheck = false;
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
    this.displayModal = false;
    window.scroll(0, 0)
  }

  changeLanguage() {
    this.langCheck = !this.langCheck
  }

  openSubmenus(index:any, string:any) {
    if(string == 'submenu') {
      this.submenuCheck = !this.submenuCheck;
      console.log(this.menuIndex);
      this.menuIndex = index;
      console.log(this.menuIndex);
    }
    else {
      this.subsubmenuCheck = !this.subsubmenuCheck;
      this.subMenuIndex = index;
    }
  }

  getLanguage(event: any) {
    this.getSlug(event?.target.value);
  }

  getSlug(value: any) {
    let snapshot: any;
    console.log(this.route.url.slice(4, this.route.url.length));
    snapshot = this.route.url.slice(4, this.route.url.length);
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([this.language + '/' + (snapshot != null ? snapshot : 'home')]);
  }

  showModalDialog() {
    this.searchResult = [];
    this.searchWord = '';
    this.displayModal = true;
  }
}
