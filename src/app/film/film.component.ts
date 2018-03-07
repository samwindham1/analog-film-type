import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
  private posts;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get_all().subscribe(d => {
      this.posts = d.slice(0, 25);
      console.log(this.posts);
    });
  }
}
