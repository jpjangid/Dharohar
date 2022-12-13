import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  @Input() pageData : any;
  bannerImage:any;
  imageBaseurl = environment.image_baseurl;
  constructor() { }

  ngOnInit(): void {
    this.pageData?.data?.forEach((response: any, index: any) => {
      if (response[0]?.section_name == 'comingsoon') {
        this.bannerImage = this.imageBaseurl + "image_not_found/" + response[0]?.image;
      }
      console.log(this.bannerImage)
    })
  }

}
