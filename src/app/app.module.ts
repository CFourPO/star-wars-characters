import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterService } from './character.service';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { GetFilmPipe } from './get-film.pipe';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from "./error/error.service";
import { HeightPipe } from './height.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    GetFilmPipe,
    ErrorComponent,
    HeightPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
    provide: ErrorHandler,
    useClass: ErrorService
  }, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
