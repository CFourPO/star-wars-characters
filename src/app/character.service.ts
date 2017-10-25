import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs";
import { CharacterDetails } from "./shared/character";

@Injectable()
export class CharacterService {

  characters: any;

  _selectedCharacter: BehaviorSubject<CharacterDetails> = new BehaviorSubject<CharacterDetails>(null);
  selectedCharacter: Observable<CharacterDetails> = this._selectedCharacter.asObservable();

  constructor(private http: Http) { }

  getJSON(): Observable<any> {
    return this.http.get('./assets/characters.json')
        .map(response => response.json())
        .catch((error: Error) => Observable.throw(error));
  }

  getCharacterDetails(url: string): Observable<CharacterDetails> {
    return this.http.get(url)
        .map(response => response.json())
        .catch((error: Error) => Observable.throw(error));
  }

  changeCharSelection(char: CharacterDetails): void {
    let films: string[] = [];
    char.films.forEach(film =>
        this.http.get(film).map(response => response.json())
            .subscribe(data => films.push(data)));
    char.films = films;
    this._selectedCharacter.next(char);
  }
}
