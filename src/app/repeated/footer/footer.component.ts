import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  img_baseURL = environment.asset_baseURL;
  slug: any;
  language:any;
  constructor(private route : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.route.events.subscribe(
      (event: any) => {
        // console.log(event)
        if (event instanceof NavigationEnd) {
          this.language = this.route.url.slice(1, 3)
        }
      });
  }

  bottomToTop() {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     })
  }

  footerNavigation() {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([this.language + '/contact']);
    // this.route.navigateByUrl(this.language+'/contact');
  }

}
