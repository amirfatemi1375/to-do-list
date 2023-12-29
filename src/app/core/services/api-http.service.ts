import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../config/constant/base-url';
@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  constructor(private httpClient: HttpClient) {}
  get<T>(url: string, params?: any): Observable<T> {
    return this.httpClient.get<T>(baseUrl + url, {
      params: new HttpParams({ fromObject: params }),
    });
  }

  getAll<T>(url: string, params?: any): Observable<T> {
    return this.httpClient
      .get<T>(baseUrl + url, { params: new HttpParams({ fromObject: params }) })
      .pipe();
  }

  post<T>(url: string, data: any, params?: any): Observable<T> {
    return this.httpClient
      .post<T>(baseUrl + url, data, {
        params: new HttpParams({ fromObject: params }),
      })
      .pipe();
  }

  delete(url: string, params?: any) {
    return this.httpClient
      .delete(baseUrl + url, { params: new HttpParams({ fromObject: params }) })
      .pipe();
  }

  put<T>(url: string, data: any, params?: any): Observable<T> {
    return this.httpClient
      .put<T>(baseUrl + url, data, {
        params: new HttpParams({ fromObject: params }),
      })
      .pipe();
  }

  patch<T>(url: string, data: any, params?: any): Observable<T> {
    return this.httpClient
      .put<T>(baseUrl + url, data, {
        params: new HttpParams({ fromObject: params }),
      })
      .pipe();
  }
}
