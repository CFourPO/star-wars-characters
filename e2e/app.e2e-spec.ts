import { StarWarsCharactersPage } from './app.po';

describe('star-wars-characters App', () => {
  let page: StarWarsCharactersPage;

  beforeEach(() => {
    page = new StarWarsCharactersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
