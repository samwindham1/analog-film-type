import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'dotenv/config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  public get_all(): Observable<any> {
    return this.http.get('api/db.json');
  }
}
