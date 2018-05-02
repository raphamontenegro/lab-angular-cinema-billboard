import { Injectable } from '@angular/core';
import { movies } from '../../sample-movies';

@Injectable()
export class MoviesListService {

  movies: any = movies;

  // id: string;

  // title: string;

  // synopsis: string;

  // genres: Array < string > = [];

  // director: string;

  // actors: Array < string > = [];

  // hours: Array < string > = [];

  // room: number;


  getMovies() {
    return this.movies;
  }

  getMovie(idNumber) {
    for (let ix = 0; ix < this.movies.length; ix++) {
      if (this.movies[ix].id === idNumber) {
        return this.movies[ix];
      }
    }
  }

  constructor() {
  }

}
