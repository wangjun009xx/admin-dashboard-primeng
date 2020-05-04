import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class BaseApiService {

  baseUrl: string;
  baseHeader = {
    'Content-Type': 'application/json',
  };
  baseHeaderBlob = {
    'Content-Type': 'application/json',
  };

  protected httpClient: HttpClient = this.injector.get(HttpClient);

  constructor(protected injector: Injector) {
  }

  getHeader(headerBase, customHeaders = {}) {
    return new HttpHeaders(Object.assign({}, headerBase, customHeaders));
  }

  public setPathUrl(path) {
    this.baseUrl = (environment.serverUrl) + path;
  }

  public getBlob(url, customHeaders = {}) {
    const headers = this.getHeader(this.baseHeaderBlob, customHeaders);
    return this.httpClient.get(this.baseUrl + url, {
      headers,
      responseType: 'blob'
    });
  }

  public postBlob(url, data, customHeaders = {}) {
    const headers = this.getHeader(this.baseHeaderBlob, customHeaders);
    return this.httpClient.post(this.baseUrl + url, data, {
      headers,
      responseType: 'blob'
    }).pipe(catchError(this.parseErrorBlob));
  }

  public get(url, customHeaders = {}) {
    const headers = this.getHeader(this.baseHeader, customHeaders);
    return this.httpClient.get(this.baseUrl + url, {headers});
  }

  public post(url: string, data, customHeaders = {}) {
    const headers = this.getHeader(this.baseHeader, customHeaders);
    return this.httpClient.post(this.baseUrl + url, data, {headers});
  }


  public put(url: string, data, customHeaders = {}) {
    const headers = this.getHeader(this.baseHeader, customHeaders);
    return this.httpClient.put(this.baseUrl + url, data, {headers});
  }

  public delete(url: string, data, customHeaders = {}) {
    const headers = this.getHeader(this.baseHeader, customHeaders);
    return this.httpClient.delete(this.baseUrl + url, {headers});
  }

  parseErrorBlob(err: HttpErrorResponse): Observable<any> {
    const reader: FileReader = new FileReader();
    const obs = Observable.create((observer: any) => {
      reader.onloadend = (e) => {
        observer.error(JSON.parse(reader.result.toString() || '{}'));
        observer.complete();
      };
    });
    reader.readAsText(err.error);
    return obs;
  }
}
