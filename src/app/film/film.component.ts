import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
  private posts;
  private film_types;

  constructor(private api: ApiService) { }

  onFilmSelect(film) {
    console.log(film);
    if (film === 'default') {
      this.api.get_all().subscribe(res => {
        this.posts = res.slice(0, 10);
        console.log(this.posts);
      });
    } else {
      this.api.get_film(film).subscribe(res => {
        this.posts = res.slice(0, 10);
        console.log(this.posts);
      })
    }
  }

  ngOnInit() {
    this.api.get_all().subscribe(res => {
      this.posts = res.slice(0, 10);
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
