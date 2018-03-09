import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollEventModule } from 'ngx-scroll-event';

import { ApiService } from '../api.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmComponent } from './film/film.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollEventModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
