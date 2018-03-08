import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollEventModule } from 'ngx-scroll-event';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from '../api.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ScrollEventModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
