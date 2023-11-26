import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickAndMortyComponent implements OnInit {
  episodes: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getEpisodesWithOddId().subscribe((data: any) => {
      this.episodes = data.results.filter((episode: any) => episode.id % 2 !== 0);
    });
  }
}
