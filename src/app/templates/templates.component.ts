import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppInterceptor } from '../app.interceptor';
import { GetServicesService } from '../services/get-services.service';
import { AppUtility } from '../utility';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  slug: any;
  template_id: any;
  homeData: any;
  contactData: any;
  listData: any;
  detailData: any;
  programsData: any;
  constructor(private activatedRoute: ActivatedRoute, private getService: GetServicesService, private router: Router, public _utility: AppUtility) {
    this._utility.loader(true);
   }

  async ngOnInit() {
    this.slug = this.activatedRoute.snapshot;
    console.log(this.slug);
    // this.getService.language.subscribe((response: any) => {
      await this.getService.getPageData((this.slug._routerState.url)).then((res: any) => {
        console.log(res);
        res?.data?.forEach((response: any, index: any) => {
          if (index == 0) {
            this.template_id = response[0]?.template_id;
            console.log(this.template_id);            
            if (this.template_id == 1) {
              this.homeData = res;
            }
            if (this.template_id == 2) {
              this.contactData = res;
            }
            if (this.template_id == 5) {
              this.listData = res;
            }
            if (this.template_id == 4) {
              this.detailData = res;
            }
            if (this.template_id == 3) {
              this.programsData = res;
            }
          }
        });
      })
      this._utility.loader(false);
    // })
    console.log(this.template_id)
  }

}
