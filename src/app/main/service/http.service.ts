import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const HOST = 'http://localhost:8080';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  get(path: string) {
    return this.http.get(HOST + path);
  }

  post(path: string, body: any) {
    return this.http.post(HOST + path, body);
  }
}
