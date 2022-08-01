import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {map, Observable } from 'rxjs';

import { AuthService } from 'src/app/service/auth.service';
import {TokenstorageService} from '../../service/tokenstorage.service';

const TOKEN_HEADER_KEY = 'Authorization';  

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private token: TokenstorageService,
    private authService:  AuthService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const currentUser = this.authService.loggedInUserValue;
    const currentUserapikey = this.authService.loggedInUserValue;
    // console.log(currentUserapikey.App_Id)
    // console.log(currentUserapikey.Data.Merchant_credentials.App_Id)
    // console.log(currentUserapikey.Data.Merchant_credentials.Secret_key)

    // console.log(currentUser.Data.access_token)
    if (currentUser && currentUser.Data.access_token != null) {
      // console.log(currentUser.Data.access_token)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.Data.access_token}`,
          appId:currentUserapikey.Data.Merchant_credentials.App_Id,
          secretKey:currentUserapikey.Data.Merchant_credentials.Secret_key
        },
      });
    }
   
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // console.log(event.type)
        // if(event.type === 0){
        //   window.localStorage.clear();
        //   window.location.href ='./auth/login'
        // }
        return event;
      })
    );
  }

}


export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]