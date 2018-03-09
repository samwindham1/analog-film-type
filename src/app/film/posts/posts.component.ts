import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-film-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {
  @Input() posts: any[];
  @Output() add = new EventEmitter();

  private active_post = -1;

  constructor(private renderer: Renderer2) { }


  activatePost(id) {
    this.active_post = this.active_post !== id ? id : -1;
    if (this.active_post >= 0) {
      this.renderer.addClass(document.body, 'scroll-disabled');
    } else {
      this.renderer.removeClass(document.body, 'scroll-disabled');
    }
  }
}
