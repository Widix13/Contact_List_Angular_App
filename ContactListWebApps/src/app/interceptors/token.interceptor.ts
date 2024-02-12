import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();
    if(token){
      request = request.clone({
        setHeaders: {Authorization:`Bearer ${token}`}//"bearer token"
      })
    }

    return next.handle(request)
    .pipe(
      catchError((err:any)=> {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.auth.LogOut();
          }else if(err.status === 500){
            alert('Invalid email or password')
          }else if(err.status === 400){
            alert(err.error.m);
          }
        }
        return throwError(()=> new Error("Some other error"));
      })
    )
  }
}
