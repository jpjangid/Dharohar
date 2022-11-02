import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { AppUtility } from './utility';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private _utility: AppUtility) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // this._utility.valueLoader = true;
    // alert(this._utility.valueLoader);
    request = request.clone({
      setHeaders: { 'Access-Control-Allow-Origin' : '*'}
    });

    return next.handle(request);

    // return next.handle(request).pipe(
    //   finalize(() => this._utility.valueLoader = false),
    // );
  }
}
