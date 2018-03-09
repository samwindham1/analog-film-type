import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ApiService {
  constructor(private db: AngularFireDatabase) { }

  public get_all(): Observable<any[]> {
    // get all posts from firebase db
    return this.db.list('posts').valueChanges();
  }

  public get_film(film): Observable<any[]> {
    // get all posts of certain types from firebase db
    return Observable.create(observer => {
      this.db.list('posts').valueChanges().subscribe((db: any) => {
        observer.next(db.filter(post => post.film_type === film));
      })
    });
  }

  public get_film_types(): Observable<any[]> {
    // get the types of films to filter for
    return this.db.list('films').valueChanges();
  }
}
