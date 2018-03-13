import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

import { ScrollEvent } from 'ngx-scroll-event';
import * as _ from 'lodash';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent implements OnInit {
  private initData;
  private data;
  private posts;
  private film_types;

  private init_count = 10;
  private loaded_count = 10;

  private dropdown_open = false;
  private min_height = 250;

  constructor(private api: ApiService) { }

  onFilmSelect(film) {
    console.log("film:", film);
    if (film === 'default') {
      this.data = this.initData;
    } else {
      this.data = this.filterFilm(film);
    }
    this.posts = this.buildRows(this.data.slice(0, this.init_count));
    // this.posts = this.data.slice(0, this.init_count);
    console.log(this.posts);
  }

  filterFilm(film) {
    let res = this.initData.filter(post => {
      // console.log(post.film_type);
      return post.film_type === film
    }
    );
    return res;
  }

  buildRows(data) {
    let out = [];
    data.map(post => {
      console.log(post);
    });

    return data;
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
      this.initData = res;
      this.onFilmSelect('default');
      console.log(this.data);
    });
    this.api.get_film_types().subscribe(f => {
      this.film_types = f;
      console.log('film-types:', this.film_types);
    });
  }
}
