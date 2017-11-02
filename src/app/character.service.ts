import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CharacterDetails } from './shared/character';
import { environment } from "../environments/environment";
import { ErrorService } from "./error/error.service";


@Injectable()
export class CharacterService {

  $characterJSON: Observable<CharacterDetails[]>;

  constructor(private http: Http) {
    this.$characterJSON = this.getCharacters();
  }

  getCharacters() {
    return this.http.get(environment.baseUrl + '/assets/characters.json')
        .map(response => response.json().characters)
        .catch(error => {
          throw new Error(error)
        });
  }

  getCharacterDetails(url) {
    return this.http.get(url)
        .map(response => response.json())
        .catch(error => {

          //this.errorService.handleError(error);

          return Observable.throw(error);
        });
  }

  getFilm(url) {
    return this.http.get(url)
               .map(response => response.json())
               .catch(error => Observable.throw(error));
  }
}
