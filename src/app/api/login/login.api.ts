import {Injectable, Injector} from '@angular/core';
import {BaseApi} from '../base.api.';
import {of, throwError} from 'rxjs';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {v4 as uuidv4} from 'uuid';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginApi extends BaseApi {

  constructor(injector: Injector) {
    super(injector);
    this.setPathUrl('login');
  }

  login(username, password) {
    if (username === 'adminadmin' && password === 'abcd123$') {
      return of(new HttpResponse({
        status: 200,
        body: {
          data: {
            token: uuidv4()
          }
        }
      })).pipe(map((res: HttpResponse<any>) => res.body));
    }
    return throwError({
      status: 401,
      error: {
        message: 'Authen fail'
      }
    });
  }
}
