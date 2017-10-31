import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { CharacterDetails } from './shared/character';


@Injectable()
export class CharacterService {

  $characterJSON: Observable<CharacterDetails[]>;

  constructor(private http: Http) {
    this.$characterJSON = this.getCharacters();
  }

  getCharacters() {
    return this.http.get('./assets/characters.json')
        .map(response => response.json().characters)
        .catch(error => Observable.throw(error));
  }

  getCharacterDetails(url) {
    return this.http.get(url)
        .map(response => response.json())
        .catch(error => Observable.throw(error));
  }

  getFilm(url) {
    return this.http.get(url)
               .map(response => response.json())
               .catch(error => Observable.throw(error));
  }
}
