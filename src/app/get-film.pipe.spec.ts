import { GetFilmPipe } from './get-film.pipe';

describe('GetFilmPipe', () => {
  it('create an instance', () => {
    const pipe = new GetFilmPipe();
    expect(pipe).toBeTruthy();
  });
});
