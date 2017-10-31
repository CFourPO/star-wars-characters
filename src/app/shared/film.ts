export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string; // comma seperated list of names
    release_date: string; // "2015-12-11"
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string; // "2015-04-17T06:51:30.504780Z",
    edited: string; // "2015-04-17T06:51:30.504780Z",
    url: string;
}
