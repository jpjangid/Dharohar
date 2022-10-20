import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetServicesService {

  constructor(private http:HttpClient) { }
  baseURL = environment.api_baseurl;

  getHomePageData() {
    return this.http.get(this.baseURL+'/home');
  }

  getPageData(endpoint:any) {
    return this.http.get(this.baseURL+endpoint)
  }

  getNavLinks() {
    return this.http.get(this.baseURL+'/menu')
  }

}
