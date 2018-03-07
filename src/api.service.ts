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

  public get_film(film): Observable<any> {
    return Observable.create(observer => {
      this.http.get('api/db.json').subscribe((db: Array<any>) => {
        observer.next(db.filter(post => post.film_type === film));
      })
    });
  }

  public get_film_types(): Observable<any> {
    return this.http.get('api/film-types.json');
  }
}
