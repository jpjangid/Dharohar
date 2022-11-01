import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  img_baseURL = environment.asset_baseURL;
  constructor() { }

  ngOnInit(): void {
  }

  bottomToTop() {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     })
  }

}
