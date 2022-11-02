import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetServicesService {

  constructor(private http:HttpClient) { }
  baseURL = environment.api_baseurl;
  language = new BehaviorSubject<any>('en');

  // getHomePageData() {
  //   return this.http.get(this.baseURL+'/home');
  // }

  getPageData(endpoint:any):Promise<any> {
    return this.http.get(this.baseURL+ endpoint).toPromise();
  }

  postFormData(data : any, endpoint : any) {
    return this.http.post(this.baseURL+'/'+endpoint, data);
  }

}
