import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../base/base.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiHttpService<T> {
  constructor(private httpClient: HttpClient) {}
  get(url: string, params?: any): Observable<ApiResponse<T>> {
    return this.httpClient
      .get<any>(url, { params: new HttpParams({ fromObject: params }) })
      .pipe();
  }

  getAll<T>(url: string, params?: any) {
    return this.httpClient
      .get<T>(url, { params: new HttpParams({ fromObject: params }) })
      .pipe();
  }

  post<T>(url: string, data: any, params?: any) {
    return this.httpClient
      .post<T>(url, data, { params: new HttpParams({ fromObject: params }) })
      .pipe();
  }

  delete(url: string, data: any, params?: any) {
    return this.httpClient
      .delete(url, { params: new HttpParams({ fromObject: params }) })
      .pipe();
  }

  put<T>(url: string, data: any, params?: any) {
    return this.httpClient
      .put<T>(url, data, { params: new HttpParams({ fromObject: params }) })
      .pipe();
  }

  patch<T>(url: string, data: any, params?: any) {
    return this.httpClient
      .put<T>(url, data, { params: new HttpParams({ fromObject: params }) })
      .pipe();
  }
}
