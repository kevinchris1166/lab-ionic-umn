import { Component, OnInit } from '@angular/core';
import { Songs } from '../song/song.model';
import { SongService } from '../song/song.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  favoriteSongs: Songs[];

  constructor(private songService:SongService) { }

  ngOnInit() {
    this.favoriteSongs = this.songService.getMyFavorite();
    console.log(this.favoriteSongs);
  }

}
