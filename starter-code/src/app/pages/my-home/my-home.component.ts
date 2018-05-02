import { Component, OnInit } from '@angular/core';

import { MoviesListService } from '../../services/movies-list.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
movies: any = [];
  constructor(private movieService: MoviesListService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
