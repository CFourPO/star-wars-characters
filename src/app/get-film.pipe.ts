import { Pipe, PipeTransform } from '@angular/core';
import { CharacterService } from "./character.service";
import { Film } from "./shared/film";
import { Http } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs";

@Pipe({
  name: 'getFilm'
})
export class GetFilmPipe implements PipeTransform {

  constructor(private cs: CharacterService) {}

  //
  //transform(value: string[], args?: any): Film[] {
  //  let films = [];
  //  value.forEach(url => this.cs.getFilm(url).subscribe(data => films.push(data)));
  //
  //  console.log(films);
  //
  //  return films;
  //}

  getFilmPromise(values: string[]): Promise<Film[]> {
    return new Promise((resolve, reject) => {
      let filmArr = [];
      values.forEach(url => filmArr.push(this.cs.getFilm(url).toPromise()));
      Promise.all(filmArr).then(data => resolve(data));
    })
  }

  transform(value: string[], args?: any): Promise<Film[]> {
    let films = new BehaviorSubject<Film[]>(null);

    return new Promise((resolve, reject) => {
      this.getFilmPromise(value).then(data => resolve(data.sort((a: Film, b: Film) => a.episode_id - b.episode_id)));
    });

  }

}
