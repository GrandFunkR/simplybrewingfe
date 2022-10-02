import { HttpRequest , HttpErrorResponse, HttpHandler , HttpInterceptor , HttpEvent , HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import { NbTokenService , NbAuthJWTToken} from '@nebular/auth';
import {Injectable} from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class RedirectUnauthorizedInterceptor implements HttpInterceptor {
  constructor(private tokenService: NbTokenService,
  private router: Router) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
         return;
        }
        this.tokenService.clear();
        this.router.navigate(['/auth/logout']);
      }
    }));
  };
}
