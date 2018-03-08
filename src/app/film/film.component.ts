import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

import { ScrollEvent } from 'ngx-scroll-event';
import * as _ from 'lodash';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
  private data;
  private posts;
  private film_types;

  private init_count = 10;
  private loaded_count = 10;

  constructor(private api: ApiService) { }

  onFilmSelect(film) {
    console.log(film);
    if (film === 'default') {
      this.api.get_all().subscribe(res => {
        this.data = res;
        this.posts = this.data.slice(0, this.init_count);
        console.log(this.posts);
      });
    } else {
      this.api.get_film(film).subscribe(res => {
        this.data = res;
        this.posts = this.data.slice(0, this.init_count);
        console.log(this.posts);
      })
    }
  }

  loadMore() {
    let next = this.data.slice(this.loaded_count, this.loaded_count + this.init_count);
    this.posts = this.posts.concat(next);
    this.loaded_count += this.init_count;
    console.log('loaded:', next);
    console.log(this.posts);
  }
  loadDebounced = _.debounce(this.loadMore, 1000, { 'trailing': false, 'leading': true });

  onBottomScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      this.loadDebounced();
    }
  }

  ngOnInit() {
    this.api.get_all().subscribe(res => {
      this.data = res;
      this.posts = this.data.slice(0, this.init_count);
      console.log(this.posts);
    });
    this.api.get_film_types().subscribe(f => {
      this.film_types = Object.keys(f.films).map(film => {
        let obj = f.films[film];
        obj['key'] = film;
        return obj;
      });
      console.log(this.film_types);
    })
  }
}
