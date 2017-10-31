import { Pipe, PipeTransform } from '@angular/core';
import { CharacterService } from './character.service';
import { Film } from './shared/film';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Pipe({
  name: 'getFilm'
})
export class GetFilmPipe implements PipeTransform {

  constructor(private cs: CharacterService) {}

  getFilmPromise(values: string[]): Promise<Film[]> {
    return new Promise((resolve, reject) => {
      const filmArr = [];
      values.forEach(url => filmArr.push(this.cs.getFilm(url).toPromise()));
      Promise.all(filmArr).then(data => resolve(data));
    });
  };

  transform(value: string[], args?: any): Promise<Film[]> {
    const films = new BehaviorSubject<Film[]>(null);

    return new Promise((resolve, reject) => {
      this.getFilmPromise(value).then(data => resolve(data.sort((a: Film, b: Film) => a.episode_id - b.episode_id)));
    });

  };

}
