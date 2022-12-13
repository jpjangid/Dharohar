import { Component, OnInit } from '@angular/core';
import { AppUtility } from '../utility';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(public _utility: AppUtility) { }

  ngOnInit(): void {
    this._utility.loader(false);
  }

}
